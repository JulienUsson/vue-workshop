<template>
  <v-card>
    <v-card-text>
      <div>{{ text }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: [
    'text',
  ],
};
</script>

<style scoped>
</style>
