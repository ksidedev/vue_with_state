<template>
  <div id="ComponentTwo">
    <h5 className="heading">Component Two</h5>
    <input placeholder="type colour" type="text" v-model="keyword" />
    <div class="box" v-bind:style="{backgroundColor: keyword}"></div>
    <div class='counter__value'><b>{{ counter }}</b></div>
  </div>
</template>

<script>
import './componentTwo.scss';
import Store from '../../store/store';
import { getCount } from '../../store/getters';

export default {
  name: 'ComponentTwo',
  store: Store,
  data() {
    return {
      keyword: '',
      onOff: true,
    };
  },
  methods: {
    toggleOnOff() {
      this.onOff = !this.onOff;
    },
  },
  vuex: {
    getters: {
      counter: getCount,
    },
  },
};
</script>
