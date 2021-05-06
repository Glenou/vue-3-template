<template>
  <transition name="fade">
    <div v-if="true" :class="[
      'flash-message',
      message.class,
    ]">
      <div>
        <p>{{ message.title }}</p>
      </div>
      <div>
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
