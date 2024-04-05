<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <main>
    <h1>Categorie</h1>
    <ul>
      <li v-for="category in categories" :key="category.id">
        {{ category.name }}
      </li>
    </ul>
  </main>
</template>

<style lang="scss" scoped></style>
