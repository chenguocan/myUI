<template>
    <svg class="icon" v-if="iconfont">
      <use :xlink:href="`#i-${iconfont}`"></use>
    </svg>
</template>

<script lang="ts">
export default {
  name: 'Icon',
  props: ['iconfont'],
};
</script>

<style lang="scss" scoped>

</style>