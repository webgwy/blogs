<template>
  <div id="app">
    <el-container>
        <el-aside>
          <div class="author ac">
            <img :src="authorUrl">
             <h3 v-text="author"></h3>
             <p v-text="authorTag"></p>
          </div>
          <el-menu 
          default-active="/articlelist" 
          class="el-menu-vertical-demo" 
          router 
          background-color="#545c64" 
          text-color="#fff" 
          active-text-color="#ffd04b">
                <el-menu-item index="/articlelist">
                  <i class="el-icon-menu"></i>
                  <span slot="title">博客</span>
                </el-menu-item>
                <el-menu-item index="/favorite">
                  <i class="el-icon-document"></i>
                  <span slot="title">前端</span>
                </el-menu-item>
                <el-menu-item index="/login">
                  <i class="el-icon-document"></i>
                  <span slot="title">管理</span>
                </el-menu-item>
                <el-menu-item index="aboutme">
                  <i class="el-icon-setting"></i>
                  <span slot="title">关于我</span>
                </el-menu-item>
          </el-menu> 
        </el-aside>
        <el-main>
         <router-view></router-view>
        </el-main>
    </el-container>
     
  </div>
</template>

<script>
import articlelist from './components/articlelist'
import favorite from './components/favorite'
import login from './components/login'
export default {
  data(){
    return{
      authorUrl:'static/img/logo.jpg',
      author:'唯一',
      authorTag:'前端菜鸡'
    }
  },
  created(){
      
  },
  mounted(){
    
  },
  methods: {
     
  },
  components:{articlelist,favorite,login},
};
</script>

<style>
/*左侧导航*/
html,body{height: 100%;}
.el-container{height: 100%;position: relative;}
.author{color: #fff;}
.author h3{line-height: 50px;}
.author p{font-size: 14px;padding: 10px 0;}
.author img{width: 160px;height: 160px;border-radius: 50%;}
.el-aside{position: fixed;background: #545c64;padding-top: 100px;height: 100%;z-index: 999;}
.el-main{position: absolute;right:0;top:0;padding-left: 320px;width: 100%;z-index: 1;}
.el-menu-item{background: #545c64;}
</style>
