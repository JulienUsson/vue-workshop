# Vue Workshop

> A workshop to learn Vue and Vuex.

## Start project 

```
vue init vuetifyjs/webpack-advanced todo
  Install vue-router? (Y/n) No
  Use ESLint to lint your code? No
  Setup e2e tests with Nightwatch? No
cd todo
npm install
npm run dev
```

## Step 1

A basic todo list with only adding.

### App.vue

```
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
import TodoList from './components/TodoList';

export default {
  components: {
    TodoList,
  },
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
```

### Item.vue

```
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
```

### List.vue

```
<template>
  <div id="list">
    <item class="item" v-for="item in items" :text="item" />
  </div>
</template>

<script>
import Item from './Item';

export default {
  props: [
    'items',
  ],
  components: {
    Item,
  },
};
</script>

<style scoped>
.item {
  margin-bottom: 10px;
}
</style>
```

### Todo.vue

```
<template>
  <div id="list">
    <h2>TODO</h2>
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
```