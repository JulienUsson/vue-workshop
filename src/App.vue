<template>
  <v-app>
    <v-toolbar light>
      <v-toolbar-title>Todo List</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <todo-list/>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </main>
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import TodoList from "./components/TodoList";

export default {
  components: {
    TodoList
  },
  methods: {
    ...mapActions(["fetchItem"])
  },
  created: function() {
    this.fetchItem();
  }
};
</script>

<style lang="stylus">
@import './stylus/main';
</style>
