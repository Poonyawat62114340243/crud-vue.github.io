<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <div class="modal-buttons">
        <button @click="confirmAction">Yes</button>
        <button @click="closeModal">No</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmModal',  
  props: {
    isOpen: Boolean,
    title: String,
    message: String,
  },
  methods: {
    confirmAction() {
      this.$emit('confirm');
      this.closeModal();
    },
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
/* Animation for fade-in effect */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* Animation for modal scale effect */
@keyframes scaleUp {
  0% { transform: scale(0.85); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Darker background for modern feel */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: fadeIn 0.3s ease-out forwards; /* Smooth fade-in animation */
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 12px; /* Softer, more modern border radius */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2); /* Modern box-shadow for depth */
  max-width: 500px; /* A bit wider */
  width: 100%;
  opacity: 0;
  transform: scale(0.85); /* Start with a smaller scale */
  animation: scaleUp 0.3s ease-out forwards; /* Smooth scale-up animation */
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

button {
  padding: 12px 20px; /* Larger buttons for modern feel */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px; /* Larger text for buttons */
  transition: background-color 0.3s ease; /* Smooth hover transitions */
}

button:first-child {
  background-color: #42b983;
  color: white;
}

button:first-child:hover {
  background-color: #369f72; /* Slightly darker on hover */
}

button:last-child {
  background-color: #ff6666;
  color: white;
}

button:last-child:hover {
  background-color: #e05555; /* Slightly darker on hover */
}
</style>

