<script setup lang="ts">
import { booleanLiteral } from '@babel/types';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const msg: string = 'Hi!';
const truth = ref(true);
</script>

<template>
  <b-container>
    <b-row>
      <b-col class="bg-success rounded-3">
        {{ msg }}
      </b-col>
    </b-row>
    <b-row>
      <b-col class="bg-primary rounded-3">1</b-col>
      <b-col class="bg-danger rounded-3">2</b-col>
      <b-col class="bg-warning rounded-3">3</b-col>
    </b-row>
    <b-row>
      <b-col class="bg-info rounded-3 col-4">eins</b-col>
      <b-col class="bg-danger rounded-3 col-4">zwei</b-col>
      <b-col class="bg-warning rounded-3 col-4">drei</b-col>
    </b-row>
    <b-row>
      <b-button @click="truth = !truth">Toggle</b-button>

      <b-col v-if="truth">true</b-col>
      <b-col v-else>untrue</b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>
