<template>
  <div class="container mx-auto bg-white mt-4 rounded shadow">
    <div class="p-4 border-b border-gray-300 shadow">
        <h2 class="text-xl text-gray-800">Appointments</h2>
    </div>
    <div class="flex">
        <div class="w-2/3">
            <div class="mt-1">
              <entry v-for="(appointment, index) in appointments" :key="index" :appointment="appointment" />
            </div>
        </div>
        <div class="w-1/3 bg-blue-600">
            <booking />
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

import Booking from '@/components/Booking.vue'
import Entry from '@/components/Entry.vue'

export default {
  name: 'home',
  components: { Booking, Entry },
  computed: {
    ...mapState(['appointments'])
  }
}
</script>
