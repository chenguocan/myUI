<template>
  <button class="my-button" :class="{['i-'+iconPosition]:true}">
  <Icon class="icon" :iconfont="iconfont"></Icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script lang="js">
export default {
  name: "Button",
  props: {
    iconfont:'',
    iconPosition:{
      type:String,
      default:'left',
      validator(val){
        return !(val !== 'left' && val !== 'right');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.my-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  >.icon{
    order: 1;
  }
  >.content{
    order:2;
  }
  &.i-right{
    >.icon {
      order: 2;
    }
    >.content{
      order: 1;
    }
  }
  .icon {
    height: 1em;
    width: 1em;
  }
  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus{
    outline: none;
  }
}
</style>