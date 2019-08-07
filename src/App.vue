<template>
  <div class="flex flex-col">
    <navigation />
    <router-view/>
  </div>
</template>

<script>

import '@/assets/styles.css'
import Navigation from '@/components/Navigation.vue'

export default {
  components: { Navigation }  
}
</script>


<style>
</style>
