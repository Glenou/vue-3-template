<template>
  <Counter />
  <FlashMessage />
  <div class="home">
    <button class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none" @click="triggerFlashMessage()">Trigger the flash message</button>
    <img alt="Vue logo" src="@/assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from '@/store';
import generateId from '@/utils/ids';
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

    const triggerFlashMessage = () => {
      store.dispatch('flashMessage/createMessage', {
        title: 'Modules in Vuex Store are working!',
        text: `test ${generateId()}`,
        class: 'info',
      });
      store.commit('counter/increment');
    };

    onMounted(() => {
      setTimeout(() => {
        triggerFlashMessage();
      }, 2000);
    });

    return {
      triggerFlashMessage,
    };
  },

});
</script>
