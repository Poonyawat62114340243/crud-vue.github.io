<template>
  <div>
    <h2>Edit Item</h2>
    <form v-if="item" @submit.prevent="confirmUpdate">
      <input v-model="item.name" placeholder="Enter new name" />
      <button type="submit">Update</button>
    </form>

    <!-- Modal for Edit Confirmation -->
    <ConfirmModal
      v-if="showModal"
      :isOpen="showModal"
      title="Edit Confirmation"
      message="Are you sure you want to update this item?"
      @confirm="updateItem"
      @close="showModal = false"
    />
    
    <div v-else-if="!item">
      <p>Item not found. Please go back to the list.</p>
    </div>
  </div>
</template>

<script>
import ConfirmModal from './ConfirmModal.vue'; // Use the correct modal name

export default {
  components: { ConfirmModal },
  data() {
    return {
      item: null,
      index: null,
      showModal: false,
    };
  },
  created() {
    this.index = this.$route.params.index;
    const items = JSON.parse(localStorage.getItem("items"));
    if (items && items[this.index]) {
      this.item = { ...items[this.index] };
    } else {
      this.item = null;
    }
  },
  methods: {
    confirmUpdate() {
      this.showModal = true;
    },
    updateItem() {
      if (this.item) {
        const items = JSON.parse(localStorage.getItem("items"));
        items[this.index] = this.item;
        localStorage.setItem("items", JSON.stringify(items));
        this.$router.push({ name: "CrudComponent" });
        this.showModal = false;
      }
    },
  },
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
form {
  margin-top: 20px;
}
</style>
