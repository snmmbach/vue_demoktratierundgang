<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const showNavIcon = computed(() => route.name !== "home");
console.log(showNavIcon.value);
</script>

<template>
  <header>
    <b-container fluid>
      <b-row class="p-4 bg-secondary text-white">
        <b-col>
          <router-link to="/">Go to Home</router-link>
          <router-link to="/about">Go to About</router-link>
        </b-col>

        <b-col>Home Icon</b-col>
        <b-col v-if="showNavIcon">Nav Icon</b-col>
        {{ showNavIcon }}
      </b-row>
    </b-container>
  </header>
</template>
