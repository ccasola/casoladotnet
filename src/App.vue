<template>
  <v-app :dark="isDarkMode">
    <app-bar-navigation>
      <v-btn slot="items" text icon @click="toggleDark"
        ><v-icon>{{ darkIcon }}</v-icon></v-btn
      >
      <transition-page>
        <router-view />
      </transition-page>
    </app-bar-navigation>
  </v-app>
</template>

<script>
import TransitionPage from "./TransitionPage";

export default {
  name: "App",
  components: {
    TransitionPage
  },
  data: () => ({
    isDarkMode: true
  }),
  computed: {
    darkIcon() {
      return this.isDarkMode ? "brightness_low" : "brightness_high";
    },
    isMobile() {
      return this.$vuetify.breakpoint.mdAndDown;
    }
  },
  async created() {},
  methods: {
    toggleDark() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
};
</script>
