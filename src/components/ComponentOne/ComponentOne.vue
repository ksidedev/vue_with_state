<template>
  <div id="ComponentOne">
    <img src="./../../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links.</h2>
  </div>
</template>

<script>
import './componentOne.scss';

export default {
  name: 'ComponentOne',
  data() {
    return {
      msg: 'Welcome to Your Vue.js',
      keyword: '',
      onOff: true,
    };
  },
  methods: {
    toggleOnOff() {
      this.onOff = !this.onOff;
    },
  },
};
</script>
