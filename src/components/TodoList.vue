<template>
  <div id="list">
    <v-text-field label="New task" v-model="task" @keyup.native.enter="addTask"></v-text-field>
    <list :items="items"></list>
  </div>
</template>

<script>
import List from './List';

export default {
  data() {
    return {
      task: '',
      items: [],
    };
  },
  methods: {
    addTask() {
      this.items = [...this.items, this.task];
      this.task = '';
    },
  },
  components: {
    List,
  },
};
</script>

<style scoped>
#list {
  width: 90%;
  margin: auto;
}
</style>
