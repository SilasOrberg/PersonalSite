<template>
  <div id="app">
    <nav class="fixed w-full bg-white shadow py-4 px-6 flex justify-between items-center">
      <router-link class="text-red hover:text-gray-500 transition duration-200" to="/">Home</router-link>
      <router-link class="text-black hover:text-gray-500 transition duration-200" to="/blog">Blog</router-link>
      <router-link class="text-black hover:text-gray-500 transition duration-200" to="/portfolio">Portfolio</router-link>
    </nav>
    <div class="pt-16">
      <router-view/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

const name = 'App'
</script>

<style>
/* Your CSS here */
</style>