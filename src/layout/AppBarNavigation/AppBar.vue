<template>
  <v-layout column>
    <v-toolbar app color="primary" :tabs="isSmall" dark>
      <v-toolbar-title class="root">
        <router-link to="/" :class="logoClasses">
          <span class="font-weight-bold">CASOLA</span
          ><span class="font-weight-thin body-2 font-italic"> dot </span>
          <span class="font-weight-bold ">NET</span>
          <span v-show="showPage" class="font-weight-thin logo-divider px-1">
          </span>
          <span v-show="showPage" class="font-weight-light">
            {{ $route.name }}
          </span>
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <AppBarNavigationTabs
          v-show="!isSmall"
          :height="$vuetify.application.top"
          :disabled="disabled"
        />
        <slot name="items" />
      </v-toolbar-items>

      <template v-if="isSmall" v-slot:extension>
        <AppBarNavigationTabs :disabled="disabled" />
      </template>
    </v-toolbar>

    <v-content>
      <slot name="default" />
    </v-content>
  </v-layout>
</template>

<script>
import AppBarNavigationTabs from "./Tabs.vue";

export default {
  name: "AppBarNavigation",
  components: { AppBarNavigationTabs },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isSmall() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
    showPage() {
      if (this.$route.path.includes("post")) {
        return false;
      }
      return this.$route.path.match(/\/\S/gi).length > 1;
    },
    logoClasses() {
      return this.disabled ? "disabled" : "";
    }
  }
};
</script>

<style scoped>
.router-link-active {
  text-decoration: none;
  color: inherit;
}
.disabled {
  pointer-events: none;
  opacity: 0.7;
}
.root {
  padding: 2em;
}
.root:hover {
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}
.logo {
  text-shadow: 1px 2px 5px #3c3c3c;
  transform: scale(1.3, 1.1) rotate(-90deg);
}
.logo-divider {
  font-size: 28px;
}

@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 0px #fff, 0 0 6px #fff, 0 0 9px #b800e6, 0 0 12px #b800e6,
      0 0 15px #b800e6, 0 0 18px #b800e6, 0 0 21px #b800e6;
  }

  to {
    text-shadow: 0 0 0px #fff, 0 0 6px #b800e6, 0 0 9px #b800e6,
      0 0 12px #b800e6, 0 0 15px #b800e6, 0 0 18px #b800e6, 0 0 21px #b800e6;
  }
}
</style>
