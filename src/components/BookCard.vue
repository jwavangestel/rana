<script setup>
import { ref } from 'vue'

defineProps({
  book: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RouterLink to="/event/3">
  <div class="book-card">
    <h2>{{ book.V_NAAM }}</h2>
    <span>{{ book.DATUM }} </span>
  </div>
  </RouterLink>
</template>

<style scoped>
.book-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.book-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>