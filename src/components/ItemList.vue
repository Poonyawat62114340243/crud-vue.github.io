<template>
  <div>
    <h2>Item List</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.name }}
        <button @click="editItem(index)">Edit</button>
        <button @click="deleteItem(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: JSON.parse(localStorage.getItem('items')) || [
        { name: 'Item 1' },
        { name: 'Item 2' },
        { name: 'Item 3' },
      ],
    };
  },
  methods: {
    editItem(index) {
      this.$router.push({ name: 'ItemEdit', params: { index } });
    },
    deleteItem(index) {
      this.items.splice(index, 1);
      localStorage.setItem('items', JSON.stringify(this.items));
    },
  },
  watch: {
    items: {
      handler(newItems) {
        localStorage.setItem('items', JSON.stringify(newItems));
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
button {
  margin-left: 10px;
}
</style>
