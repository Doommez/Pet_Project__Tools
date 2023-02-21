<template>
  <div>
    {{ name }}
  </div>
  <button @click="changeName('30')">
    change name
  </button>
  <router-link
    :to="{name: 'subscriptions'}"
  >
    subscriptions
  </router-link>
  <router-view />
</template>

<script lang="ts">
  import {defineComponent, ref} from 'vue';

  export default defineComponent({
    setup() {
      const name = ref('value');

      const changeName = (nameValue: string):void => {
        name.value = nameValue;
      };
      return {
        name,
        changeName,
      };
    },
  });
</script>

<style scoped>

</style>
