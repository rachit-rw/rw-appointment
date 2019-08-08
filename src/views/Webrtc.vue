<template>
  <div></div>
</template>

<script>
export default {
  created() {
    let api = new window.JitsiMeetExternalAPI('meet.jit.si', {
        roomName: 'exampleRwDemo',
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          MOBILE_APP_PROMO: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          APP_NAME: 'Appointments',
          NATIVE_APP_NAME: 'RW-Appointment',
          PROVIDER_NAME: 'RobustWealth-Appointment'
        },
        onload: () => {
          document.querySelector('iframe').style.height = '100vh';
          api.executeCommand('displayName', this.$route.params.type);
          api.executeCommand('subject', 'Appointment about Net Worth');
          setTimeout(() => {
            api.executeCommand('password', '123456');
          }, 700);
        }
    });
  }
}
</script>

<style>
.container {
  display: none;
}
</style>



