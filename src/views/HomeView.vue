<script setup lang="ts">
import { useRoute } from "vue-router";

import AppBird from "@/components/AppBird.vue";
import AppContent from "@/components/AppContent.vue";

const route = useRoute();
console.log(route.name);
</script>

<template>
  <AppContent />
  <AppBird />
</template>
