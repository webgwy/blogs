<template>
    <div class="admin">
        <div class="admin-msg">
              <el-button icon="el-icon-setting" ></el-button>
              <el-badge :value="100" :max="10" class="item">
                    <el-button icon="el-icon-bell"></el-button>
              </el-badge>
              <el-badge :value="200" :max="99" class="item">
                    <el-button icon="el-icon-message"></el-button>
              </el-badge>
              <el-button icon="el-icon-search" class="item">搜索</el-button>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">
                <el-form ref="form" :model="form" label-width="80px" class="addarticle">
                    <el-form-item label="文章标题" class="article-title">
                        <el-input v-model="form.name"></el-input>
                      </el-form-item>
                      <el-form-item label="是否原创">
                        <el-switch v-model="form.delivery"></el-switch>
                      </el-form-item>
                      <el-form-item label="特殊资源">
                        <el-radio-group v-model="form.resource">
                          <el-radio label="线上品牌商赞助"></el-radio>
                          <el-radio label="线下场地免费"></el-radio>
                        </el-radio-group>
                      </el-form-item>
                      <el-form-item class="editor">
                         <!-- 富文本编辑器 -->
                          <quill-editor v-model="newsContent"></quill-editor>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary" >立即创建</el-button>
                      </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import quillEditor from "./textedito";
export default {
  data() {
    return {
      adminicon: "./static/img/adminicon.svg",
      activeName: "first",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      newsContent:''
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  components: {
    quillEditor
  },
};
</script>

<style>
.item {
  margin-right: 20px;
}
.admin-msg {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: row-reverse;
}
.admin-msg .el-button {
  font-size: 18px;
}
.article-title {
  width: 680px;
}
.editor {width: 900px;}
.editor .el-form-item__content{line-height: normal;}
</style>
