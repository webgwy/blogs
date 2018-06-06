<template>
  <!-- <div class="main"> -->
    <ul class="articlelist">
      <a href="###" v-on:click="getjson">123</a>
      <li v-for="(item, index) in article" :key="index">
        <h2 class="article-title ac">{{item.headline}}</h2>
        <div class="article-property">
          <span class="articledate"><i class="el-icon-date"></i><em>{{item.date}}</em></span>
          <span>作者：<a href="">{{item.author}}</a></span>
        </div>
        <p class="text-in text-ju">{{item.articletake}}</p>
        <div class="articlelist-bot">
            <div class="bot-left">
              <span>
                <img :src="item.types.pic">
                <a href="" class="tag">{{item.types.text}}</a>
              </span>
              <span>
                <img :src="tagsPic">
                <a href="" v-for="(tags,index) in item.tagsTitle" :key="index" class="tag">{{tags}}</a>
              </span>
            </div>
            <div class="bot-right">
                <a href="#">阅读全文</a>
            </div>
        </div>
      </li>
    </ul>
  <!-- </div> -->
</template>
<script>
export default {
  data() {
    return {
      article:[],
      tagsPic:"static/img/tags.svg",
      tags:[]
    };
  },
  created(){
    this.getarticle(); 
  },
  mounted(){
    
  },
  methods:{
    getarticle:function(){
     this.$axios.get("static/json/articlelist.json")
        .then(response=> {
          this.article=response.data.list;
        })
        .catch(error=> {
          console.log(error)
        })
    },
    getjson:function(){
      this.$axios.get(
      'http://localhost:3000/first',
      // {headers:{"Content-Type":""}}
    ).then(function(res){
      console.log(res.data)
    })
    }
  }
};
</script>
<style>
.article-property {display: -webkit-flex;display: flex;flex-wrap: nowrap;justify-content: center;}
.article-property span {padding: 0 10px;line-height: 30px;font-size: 16px;}
.articlelist-bot {display: -webkit-flex;display: flex;flex-direction: row;flex-wrap: nowrap;justify-content: space-between;}
.bot-left img{vertical-align: middle;}
.bot-left .tag{padding: 0 5px;font-size: 14px;}
</style>
