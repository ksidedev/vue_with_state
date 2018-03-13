<template>
  <div>
    <ComponentOne />
    <ComponentTwo />
    <Fetch />
    <Vuex />
  </div>
</template>

<script>
import ComponentOne from './components/ComponentOne/ComponentOne';
import ComponentTwo from './components/ComponentTwo/ComponentTwo';
import Fetch from './components/Fetch/Fetch';
import Vuex from './components/Vuex/Vuex';

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      keyword: '',
      onOff: true,
    };
  },
  components: {
    ComponentOne,
    ComponentTwo,
    Fetch,
    Vuex,
  },
};
</script>
