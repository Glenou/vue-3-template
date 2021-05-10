<template>
  <transition name="flash-message">
    <div v-if="message.active" :class="[
      'flash-message',
      message.class,
    ]">
      <div class="flash-message-title">
        <p>{{ message.title }}</p>
      </div>
      <div class="flash-message-text">
        <p>{{ message.text }}</p>
      </div>
    </div>
  </transition>
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
