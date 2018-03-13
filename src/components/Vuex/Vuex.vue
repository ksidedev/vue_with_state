<template>
    <div class='Vuex'>
        <counter-component></counter-component>

        <increment-component></increment-component>
    </div>
</template>

<script>
import CounterComponent from './Counter';
import IncrementComponent from './Increment';

export default {
  components: {
    CounterComponent,
    IncrementComponent,
  },
};
</script>
