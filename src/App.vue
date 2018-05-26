<template>
  <div id="app">
    <el-container>
        <el-aside>
          <div class="author ac">
            <img :src="authorUrl">
             <h3 v-text="author"></h3>
             <p v-text="authorTag"></p>
          </div>
          <el-menu class="el-menu-vertical-demo" text-color="#fff"  background-color="#545c64" active-text-color="#ffd04b">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">博客</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-document"></i>
              <span slot="title">前端</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">关于我</span>
            </el-menu-item>
          </el-menu> 
        </el-aside>
        <el-main>
         <articlelist></articlelist>
        </el-main>
    </el-container>
     
  </div>
</template>

<script>
import articlelist from './components/articlelist'
export default {
  data(){
    return{
      authorUrl:'static/img/logo.jpg',
      author:'唯一',
      authorTag:'前端菜鸡'
    }
  },
  created(){
       console.log("A")
       this.ifs();
  },
  mounted(){
    
  },
  methods: {
     ifs:function(){
      console.log("b")
    }
  },
  components:{articlelist},
};
</script>

<style>
/*样式重置*/
html{font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;}
body,ul,li,p,h1,h2,h3,h4,h5,h6,img,br,hr,table,tr,td,dl,dt,dd,form {margin: 0;padding: 0;}
ul,li {list-style: none;}
img {border: none;}
i,em{font-style:normal}
a {text-decoration: none;color: #555;}
a:hover{color: #3366ff;}
.block{display: block;}
.al { text-align: left; }
.ar { text-align: right; }
.ac { text-align: center; }
.fl{float: left;}
.fr{float: right;}
.rel { position: relative; }
.abs { position: absolute; }
.fid { position: fixed; }
.text-ju{text-align: justify;}
.text-in{text-indent: 2em;}
.text-ov{overflow: hidden;white-space:nowrap; text-overflow:ellipsis; }
.clearfix:after{content: ' ';display: block;clear: both;height: 0;font-size: 0;}
/*左侧导航*/
.author{color: #fff;}
.author h3{line-height: 50px;}
.author p{font-size: 14px;}
.author img{width: 160px;height: 160px;border-radius: 50%;}
.el-aside{background: #545c64;padding-top: 100px;}
.el-menu-item{background: #545c64;}
</style>
