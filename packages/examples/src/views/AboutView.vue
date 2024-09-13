<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <button type="button" @click="toHome"> go to home with type safe router navigation</button>
    </div>
    <h1>query data from home route</h1>
    {{ aboutRoute.getQuery() }}
  </div>
</template>
<script setup lang="ts">
import {aboutRoute, homeRoute} from "../main.ts";
function toHome() {
  homeRoute.push({
    id: 123,
    name: "jack"
  })
}

</script>


