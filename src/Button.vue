<template>
  <button class="my-button">点击</button>
</template>

<script lang="js">
export default {
name: "Button"
}
</script>

<style lang="scss" scoped>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
.my-button{
  font-size: var(--font-size);
  height: var(--button-height);
  padding:0 1em;
  border-radius: var(--border-radius);
  border:1px solid var(--border-color);
  background: var(--button-bg);
  &:hover{
    border-color:var(--border-color-hover);
  }
  &:active{
    background-color:var(--button-active-bg);
  }
}
</style>