<!-- html component -->
<template>
  <Navbar />
  <router-view />
</template>

<!--component's logic -->
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
export default defineComponent({
  name: "App", //To name a component, use the "name" property.
  components: { Navbar }, // To use a component, use the "component" property
});
</script>
<!-- component's styles -->
<style>
html {
  box-sizing: border-box;
  font-family: sans-serif;
}
*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  background: #393838;
  color: #fff;
}
</style>
