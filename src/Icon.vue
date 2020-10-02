<template>
    <svg  v-if="name">
      <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script lang="js">
export default {
  name: 'Icon',
  props: ['name'],
};
</script>

<style lang="scss" scoped>

</style>