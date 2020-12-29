<template>
    <v-navigation-drawer
      v-if="!$vuetify.breakpoint.smAndDown"
      absolute
      permanent
      width="60"
      mobile-breakpoint="400"
      fixed
    >
      <v-list>
        <v-list-item link>
          <v-list-item-title class="title" >
            <span style="color: #0F6AC2; font-weight: 800;">C.</span>
          </v-list-item-title>
        </v-list-item>
      <v-list-item link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z" fill="rgba(40,62,84,1)"/></svg>
      </v-list-item>
      <v-list-item link>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 7h5v2h-5V7zm-2 5h7v2h-7v-2zm3 5h4v2h-4v-2zM2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" fill="rgba(40,62,84,1)"/></svg>
      </v-list-item>
        <v-list-item link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.5-6H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z" fill="rgba(40,62,84,1)"/></svg>
        </v-list-item>
        <v-list-item link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 1 0 0-5V4a1 1 0 0 1 1-1h18zm-1 2H4v2.968l.156.081a4.5 4.5 0 0 1 2.34 3.74L6.5 12a4.499 4.499 0 0 1-2.344 3.95L4 16.032V19h16v-2.969l-.156-.08a4.5 4.5 0 0 1-2.34-3.74L17.5 12c0-1.704.947-3.187 2.344-3.95L20 7.967V5zm-4 4v6H8V9h8z" fill="rgba(40,62,84,1)"/></svg>
        </v-list-item>
        <v-list-item link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3zm-1-5v2a1 1 0 0 0 2 0v-2h-2zm-2 3V4H4v15a1 1 0 0 0 1 1h11zM6 7h8v2H6V7zm0 4h8v2H6v-2zm0 4h5v2H6v-2z" fill="rgba(40,62,84,1)"/></svg>
        </v-list-item>
        <v-list-item link to="/boards">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H20a1 1 0 0 1 1 1v3h-2V7h-7.414l-2-2H4v11.998L5.5 11h17l-2.31 9.243a1 1 0 0 1-.97.757H3zm16.938-8H7.062l-1.5 6h12.876l1.5-6z" fill="rgba(40,62,84,1)"/></svg>
        </v-list-item>
        <v-list-item link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm5.793 8.914l3.535-3.535 1.415 1.414-4.95 4.95-3.536-3.536 1.415-1.414 2.12 2.121z" fill="rgba(40,62,84,1)"/></svg>
        </v-list-item>
        <v-list-item link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M5 3v16h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z" fill="rgba(40,62,84,1)"/></svg>
        </v-list-item>
        <v-list-item link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zm9 8.508a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM7.527 17a4.5 4.5 0 0 1 8.946 0H7.527z" fill="rgba(40,62,84,1)"/></svg>
        </v-list-item>
        <v-list-item link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12c0-4.478 2.943-8.268 7-9.542v2.124A8.003 8.003 0 0 0 12 20a8.003 8.003 0 0 0 7.418-5h2.124c-1.274 4.057-5.064 7-9.542 7zm9.95-9H11V2.05c.329-.033.663-.05 1-.05 5.523 0 10 4.477 10 10 0 .337-.017.671-.05 1zM13 4.062V11h6.938A8.004 8.004 0 0 0 13 4.062z" fill="rgba(40,62,84,1)"/></svg>
        </v-list-item>
        <v-list-item link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 7h2v10h-2V7zm4 4h2v6h-2v-6zm-8 2h2v4H7v-4zm8-9H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z" fill="rgba(40,62,84,1)"/></svg>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

</template>
<script>
export default {
  data: () => ({
    items: [
      ['mdi-email', 'Inbox'],
      ['mdi-account-supervisor-circle', 'Supervisors'],
      ['mdi-clock-start', 'Clock-in'],
    ],
  }),
  computed: {
    drawer: {
      get() {
        return this.$store.getters.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
  }
}
</script>
<style scoped>
.topnav {
  display: none;
}
.topnav.active {
  display: block;
  margin-top: 75px;
}
</style>
