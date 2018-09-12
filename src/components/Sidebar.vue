<template>
	<b-form @submit.prevent="onSubmit">
    <b-form-group
      description="Enter your name">
      <b-form-input
        type="text"
        v-model="user"
        @change="changeUser"
        required
        placeholder="Enter text">
      </b-form-input>
    </b-form-group>
    <b-form-group
      description="Enter text to create a new purchase">
      <b-form-input
        type="text"
        v-model="message"
        @change="changeMessage"
        required
        placeholder="Enter text">
      </b-form-input>
    </b-form-group>
    <b-button
      type="submit"
      variant="primary"
    >
      Submit
    </b-button>
  </b-form>
</template>

<script>
import BButton from './Button';

export default {
  name: 'Sidebar',
  data() {
    return {
      user: '',
      message: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit');
      this.message = '';
    },
    changeUser: function () {
      this.$emit('user', this.user);
    },
    changeMessage: function () {
      this.$emit('message', this.message);
    },
  },
  components: {
    BButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
