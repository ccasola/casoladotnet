<template>
  <v-tabs color="transparent" fixed-tabs v-bind="$attrs">
    <v-tab
      v-for="(tab, index) in items"
      :key="index"
      class="tab"
      :to="tab.path"
      ripple
      :disabled="disabled"
    >
      {{ tab.title }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "AppBarNavigationTabs",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    items() {
      return this.$router.options.routes.filter(route =>
        route.hasOwnProperty("title")
      );
    }
  }
};
</script>
