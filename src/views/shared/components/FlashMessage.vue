<template>
  <div v-if="message.text" :class="'flash-popup pop-'+message.pop+' '+message.class">
    <span>{{ message.text }}</span>
  </div>
</template>

<script>
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({

  name: 'FlashMessage',

  setup() {
    const store = useStore();

    return {
      message: computed(() => store.state.flashMessage),
    };
  },

});
</script>
