<template>
  <div id="list">
    <v-text-field label="New task" v-model="task" @keyup.native.enter="addTask"></v-text-field>
    <list :items="items"></list>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import List from './List';

export default {
  data() {
    return {
      task: ''
    };
  },
  computed: mapState([
    'items'
  ]),
  methods: {
    ...mapMutations([
      'addItem',
    ]),
    addTask() {
      if(this.task === '') {
        return;
      }
      this.addItem(this.task);
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
