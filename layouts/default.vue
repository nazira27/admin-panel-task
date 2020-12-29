<template>
  <v-app >
    <AppBar/>
      <Drawer style="position: fixed"/>
      <DrawerMobile />
      <div :class="!$vuetify.breakpoint.smAndDown ? 'wrapper' : ''" style="margin-top: 75px">
      <Nuxt/>
    </div>
  </v-app>
</template>
<script>
  import Drawer from "~/components/Drawer";
  import AppBar from "~/components/AppBar";
  import DrawerMobile from "~/components/DrawerMobile";
  export default {
    components: {
      DrawerMobile,
      Drawer, AppBar
    },
  };
</script>
<style scoped>

.wrapper {
  margin-left: 60px;
  margin-top: 75px;
}

</style>
