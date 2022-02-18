<template lang="html">
  <header class="header">
    <nav class="nav">
      <router-link to="/"> Home </router-link>
      <router-link to="/tasks/new"> Create Task </router-link>
    </nav>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>
<style lang="css">
.header {
  width: 100%;
  height: 70px;
  position: sticky;
  top: 0;
  box-shadow: 0 0 4px #000;
  background-color: #55a3f1;
}
.nav {
  padding: 1rem;
  width: 100%;
  display: flex;
  place-content: center flex-end;
  gap: 1rem;
}
</style>
