<template>
  <div>
    <h2>Create New Item</h2>

    <!-- Form to Create Item -->
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="formData.name" placeholder="Enter Name" />
      <button type="submit">Create</button>
    </form>

    <!-- List of Items -->
    <h3>Item List</h3>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.name }}
        <button @click="editItem(index)">Edit</button>
        <button @click="confirmDelete(index)">Delete</button>
      </li>
    </ul>

    <!-- Modal for Delete Confirmation -->
    <ConfirmModal
      v-if="showModal"
      :isOpen="showModal"
      title="Delete Confirmation"
      message="Are you sure you want to delete this item?"
      @confirm="deleteItem(selectedIndex)"
      @close="showModal = false"
    />
  </div>
</template>

<script>
import ConfirmModal from './ConfirmModal.vue'; // Import the multi-word component

export default {
  name: 'CrudComponent',
  components: { ConfirmModal },
  data() {
    return {
      items: JSON.parse(localStorage.getItem('items')) || [],
      formData: { name: '' },
      showModal: false,
      selectedIndex: null,
    };
  },
  methods: {
    handleSubmit() {
      if (this.formData.name !== '') {
        this.items.push({ name: this.formData.name });
        this.formData.name = '';
        this.updateLocalStorage();
      }
    },
    editItem(index) {
      this.$router.push({ name: 'ItemEdit', params: { index } });
    },
    confirmDelete(index) {
      this.selectedIndex = index;
      this.showModal = true;
    },
    deleteItem(index) {
      this.items.splice(index, 1);
      this.updateLocalStorage();
      this.showModal = false;
    },
    updateLocalStorage() {
      localStorage.setItem('items', JSON.stringify(this.items));
    },
  },
};
</script>

<style scoped>
h2, h3 {
  color: #42b983;
}
form {
  margin-bottom: 20px;
}
input {
  padding: 10px;
  margin-right: 10px;
}
button {
  margin-left: 5px;
}
</style>
