<template>
  <v-app-bar id="app-bar" absolute app color="#E5E5E5" flat height="75">
    <v-btn  v-if="$vuetify.breakpoint.smAndDown" color="white" class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>

    <v-spacer />

    <div class="mx-3" />

    <v-btn depressed class="ml-2" min-width="0" text to="/" color="white" >
      <i class="ri-settings-2-line"></i>
    </v-btn>
    <v-btn depressed class="ml-2" min-width="0" text color="white">
      <i class="ri-notification-3-line"></i>
    </v-btn>
    <v-btn depressed class="ml-2" min-width="0" text color="white">
      <i class="ri-user-line"></i>
    </v-btn>
  </v-app-bar>
</template>

<script>
import 'remixicon/fonts/remixicon.css'
// Components
// Utilities
import { mapState, mapMutations } from "vuex";
export default {
  name: "DashboardCoreAppBar",
  components: {

  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    notifications: [
      "Mike John Responded to your email",
      "You have 5 new tasks",
      "You're now friends with Andrew",
      "Another Notification",
      "Another one"
    ]
  }),
  computed: {
    ...mapState(["drawer"])
  },
  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER"
    }),
  }
};
</script>
