<template>
<div class="classify">
    <div class="classify-box" v-for="(classifymsg, index) in classify" :key="index" >
        <h4 class="classify-title">{{classifymsg.subhead}}</h4>
        <ul class="ckassify-ul">
            <li>
                <div class="particular">
                    <a href="" v-for="(msg, index) in classifymsg.msg" :key="index">
                        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
                            <el-button>{{msg}}</el-button>
                        </el-tooltip>
                    </a>
                </div>       
            </li>
        </ul>
    </div>
</div>   
</template>

<script>
export default {
    data(){
        return{
            classify:[],
        }
    },
    beforeCreate(){

    },
    created(){
        this.getfavorite(); 
    },
    methods:{
        getfavorite:function(){
            this.$axios.get("static/json/favorite.json")
            .then(response=>{
                this.classify=response.data.list;
                
            })
        }
    }
}
</script>

<style>
.classify-box{padding:15px;}
.classify-title{font-size: 20px;line-height: 26px;height: 26px;position: relative;padding-left: 10px;margin: 20px 0;}
.classify-title::after{content: '';position:absolute;left:0;top:0;display:inline-block;width: 3px;height:26px;background: blue}
.particular{padding: 0 10px;}
.particular a{display: inline-block;padding: 0 10px;}
</style>
