<template>
  <div class="my-button-group">
    <slot></slot>
  </div>
</template>

<script lang="js">
export default {
  name: 'ButtonGroup',
  mounted(){
    for(let node of this.$el.children){
      const name=node.tagName.toLowerCase();
      if(name!=='button'){
        console.warn('my-button-group中如果添加my-button外的元素会导致样式失效');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.my-button-group {
  display: inline-flex;
  vertical-align: middle;
  >.my-button{
    border-radius: 0;
    &:not(:first-child){
      margin-left: -1px;
    }
    &:hover{
      position: relative;
      z-index: 1;
    }
    &:first-child{
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius:var(--border-radius);
    }
    &:last-child{
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
  }
}
</style>