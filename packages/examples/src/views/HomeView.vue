<script setup lang="ts">
import { aboutRoute, homeRoute, userProfileRoute, userRoute } from "../main";

const query = homeRoute.getQuery()

function getQueryData() {
  const query = homeRoute.getQuery()
}

function toUserProfile() {
  userProfileRoute.pushParamsAndQuery({ profileId: '123', profileName: 'bob' }, { name: 'alice' })
}

function toUser() {
  userRoute.pushDynamicParams({ name: 'alice' })
}

</script>

<template>
  <main>
    <h1>this is query data from type router navigation</h1>
    {{ query }}
    <button @click="aboutRoute.push({ id: 1, name: 'bob', friends: ['alice', 'tom'] })">go to about view</button>

    <button @click="toUserProfile"> to user profile</button>
    <button @click="toUser"> to user pushWithDynamicParams</button>
  </main>
</template>
