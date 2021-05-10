<template>
  <div class="counter">{{count}}</div>
</template>

<script>
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({

  name: 'Counter',

  setup() {
    const store = useStore();

    return {
      count: computed(() => store.state.counter.count),
    };
  },

});
</script>
