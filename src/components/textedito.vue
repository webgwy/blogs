<template>
       <quill-editor    :options="editorOption" 
                        :content="content"
                        ref="QuillEditor"
                        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                        @change="onEditorChange($event)"
                        @ready="onEditorReady($event)">
        </quill-editor>
</template>
<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
        data(){
            return{
                content:'',//文本框初始化内容
                editorOption: {
                    modules:{
                        toolbar:[
                          ['bold','italic','underline','strike','background','underline','align',{ 'direction': 'rtl' },'formula','image','video','clean'],   
                          ['blockquote', 'code-block'],
                          [{ 'list': 'ordered'}, { 'list': 'bullet' },{ 'script': 'sub'}, { 'script': 'super' },{ 'color': [] }, { 'background': [] },{ 'font': [] },{ 'align': [] }],
                        ]
                    }
                }
            }
        },
        computed: {
            editor() {
                return this.$refs.QuillEditor.quill;
            }
        },
        methods: {
                getUEContent() {
                    return this.editor.getContent();
                },
                onEditorChange({ editor, html, text }) {
                        this.content = html;
                        console.log(html);
                },
                onEditorFocus() {},
                onEditorReady() {},
                onEditorBlur() {}
        },
        components: {
                quillEditor
        }
}
</script>

<style>
.ql-container {height: 200px;}
</style>
