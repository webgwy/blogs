<template>
<div class="classify">
    <h4 class="classify-title">手册</h4>
    <ul class="ckassify-ul">
        <li></li>
    </ul>
</div>   
</template>

<script>
export default {

}
</script>

<style>
.classify-title{font-size: 20px;line-height: 26px;height: 26px;position: relative;padding-left: 10px;}
.classify-title::after{content: '';position:absolute;left:0;top:0;display:inline-block;width: 3px;height:26px;background: blue}
</style>
