<template>
  <Counter />
  <FlashMessage />
  <div class="home">
    <img alt="Vue logo" src="@/assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import HelloWorld from '@/views/home/components/HelloWorld.vue'; // @ is an alias to /src
import FlashMessage from '../shared/components/FlashMessage.vue';
import Counter from '../shared/components/Counter.vue';

export default defineComponent({

  name: 'Home',

  components: {
    HelloWorld,
    FlashMessage,
    Counter,
  },

  setup() {
    const store = useStore();

    setTimeout(() => {
      store.commit('flashMessage/setMessage', {
        text: 'Modules in Vuex Store are working!',
        class: 'info',
        pop: true,
      });
      store.commit('counter/increment');
    }, 2000);
  },

});
</script>
