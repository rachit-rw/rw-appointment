<template>
  <div class="flex justify-between items-center p-4 border-b border-gray-300">
    <div>
      <h3 class="text-gray-800">{{ appointment.title }}</h3>
      <span class="text-xs text-gray-600">{{ this.subLine }}</span>
    </div>
    <div class="flex">
      <span
        class="text-gray-700 uppercase tracking-wider text-xs font-bold px-4 py-1 rounded"
        :class="statusClass"
        v-if="!appointment.live && showStatus"
      >{{ appointment.status }}</span>
      <template v-if="!showStatus">
        <button
          @click="onAccept"
          class="border border-green-600 text-gray-700 uppercase tracking-wider text-xs font-bold px-4 py-1 rounded hover:bg-green-600 hover:text-white"
        >Accept</button>
        <button
          @click="onReject"
          class="border border-red-600 text-gray-700 uppercase tracking-wider text-xs font-bold px-4 py-1 rounded hover:bg-red-600 hover:text-white ml-2"
        >Reject</button>
      </template>
      <a
        :href="`/webrtc/${advisor ? 'advisor' : 'client'}`"
        target="_blank"
        class="bg-green-300 text-gray-700 uppercase tracking-wider text-xs font-bold px-4 py-1 rounded"
        v-if="appointment.live"
      >
        Launch
        <i class="ml-2 fa fa-external-link-alt"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "entry",
  props: ["appointment", "advisor"],
  data() {
    return {
      bgMap: {
        Pending: "bg-gray-300",
        Scheduled: "bg-purple-300",
        Rejected: "bg-red-300",
        Expired: "bg-yellow-300"
      }
    };
  },
  computed: {
    showStatus() {
      return this.advisor ? this.appointment.status != "Pending" : true;
    },
    statusClass() {
      return this.appointment.live ? "" : this.bgMap[this.appointment.status];
    },
    subWord() {
      return this.appointment.status == "Pending"
        ? "Requested for"
        : `${this.appointment.status} at`;
    },
    subLine() {
      if (this.appointment.live) {
        return "Live now";
      }

      return `${this.subWord} ${this.appointment.time.format(
        "MM/DD/YYYY hh:mm a"
      )}`;
    }
  },
  methods: {
    onAccept(e) {
      this.$emit('action', {
        type: 'Accept',
        e
      });
    },
    onReject(e) {
      this.$emit('action', {
        type: 'Reject',
        e
      });
    }
  }
};
</script>
