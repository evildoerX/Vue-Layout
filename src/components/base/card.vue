<template>
  <div class="components-card">
    <slot></slot>
  </div>
</template>

<script>
  export default {

  }
</script>
<style lang="less" scoped>
.components-card {
  background: #fff;
  border-radius: 4px;
  transition: all .2s ease-in-out;
  border: 1px solid #dddee1;
  border-color: #e9eaec;
  cursor:pointer;
  padding: 5px;
  margin: 5px
}
.components-card:hover {
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    border-color: #eee;
}
</style>
