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
                 <el-button type="primary"  @click="onSubmit()">立即创建</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
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
            this.$axios.post('http://localhost:3000/login',{
                username:this.$refs.input1.value,
                password:this.$refs.input2.value
            }).then(function (response){
                console.log("成功");
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        },
    }
}
</script>

<style>
.login{margin-top: 200px;}
.login-input{width: 300px;margin: auto;}
</style>
