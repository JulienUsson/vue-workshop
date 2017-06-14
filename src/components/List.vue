<template>
  <div>
    <item class="item" v-for="(item, index) in items" :text="item" :index="index" />
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
