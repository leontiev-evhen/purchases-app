<template>
  <b-button 
    @click="$emit('onClick')"
    :type="type"
    :variant="variant"
    :size="size"
    >
     <slot>Button</slot>
  </b-button>
</template>

<script>

export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    variant: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'sm'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
