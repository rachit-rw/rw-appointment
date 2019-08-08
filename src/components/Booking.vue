<template>
  <div class="p-4 flex flex-col">
    <h2 class="text-xl text-white text-center mt-2 uppercase tracking-wider">Book Now</h2>
    <div>
      <input
        type="text"
        name="title"
        placeholder="Appointment is about"
        v-model="title"
        class="w-full rounded p-2 my-4 bg-gray-200 focus:bg-white border-transparent focus:border-blue-400"
      />
      <v-select
        class="booking-time mb-4"
        :options="clients"
        placeholder="Client"
        v-model="client"
        v-if="advisor"
      />

      <v-select
        class="booking-time"
        :options="timings"
        placeholder="Booking time"
        v-model="timing"
      />

      <button
        class="bg-gray-200 focus:bg-white text-gray-700 uppercase tracking-wider text-sm font-bold px-4 py-2 rounded shadow mt-4 w-full"
        @click="bookNow"
      >Book Appointment</button>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  name: "booking",
  props: ["advisor"],
  components: { vSelect },
  data() {
    return {
      title: "",
      timing: "",
      client: ""
    };
  },
  computed: {
    timings() {
      let options = [];
      for (let i = 10; i <= 20; i++) {
        options.push(`${i}:00`);
      }

      return options;
    },
    clients() {
      return ["Kazi Ahmed", "Rachit Jain", "Mohit Laad"];
    }
  },
  methods: {
    bookNow() {
      if (this.title.length < 1 || this.timing.length < 1) {
        return;
      }

      this.$store.dispatch("bookAppointment", {
        title: this.title,
        timing: this.timing
      });

      this.title = "";
      this.timing = "";
    }
  }
};
</script>

<style>
.booking-time .vs__dropdown-toggle {
  @apply border-transparent bg-gray-200 py-1;
}

.booking-time .vs__dropdown-toggle:focus {
  @apply bg-white border-blue-400;
}

.booking-time .vs__actions {
  padding: 0;
  @apply pr-2;
}

.booking-time .vs__selected {
  margin: 0;
}
</style>

