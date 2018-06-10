<template>
    <div class="login">
        <div class="login-input">
            <el-form ref="form" :model="ruleForm" :rules="rules">
                <el-form-item label="用户名" prop="username">
                    <el-input placeholder="请输入内容"  clearable  v-model="ruleForm.username" ref="input1"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input placeholder="请输入内容"  type='password' v-model="ruleForm.password" ref="input2"></el-input>
                </el-form-item>
                 <el-button type="primary"  @click="onSubmit()" :loading='load'>立即创建</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            load:false,
            ruleForm: {
                username: '',
                password: '',
                input1: "",
                input2: ""
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 5, max: 8, message: '长度在 5 到 8 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
            }
        }
    },
    methods:{
        onSubmit(){
            this.load=true;
            var params = new URLSearchParams();
            params.append('username', this.$refs.input1.value);
            params.append('password', this.$refs.input2.value);
            this.$axios.post('http://localhost:3000/login', params).then((response)=>{
                var json = eval("("+response.data+")");
                if(json.type==1){
                    this.$message.success('登录成功');
                }else if(json.type==2){
                    this.$message.error('用户名密码错误');
                }
                // 测试的，正式要删除定时器。
                setTimeout(() => {  
                    this.load=false;
                    console.log('执行了')
                }, 2000);  
            })
            .catch((error)=>{
                this.$message.error('网络错误，请联系管理员');
                this.load=false;
            });
        },
    }
}
</script>

<style>
.login{margin-top: 200px;}
.login-input{width: 300px;margin: auto;}
</style>
