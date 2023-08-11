<template>
  <li class="mr-3">
    <a :class="{ active: activeSection === item.anchor }" :href="item.href">{{ item.text }}</a>
  </li>
</template>

<script>
export default {
  data() {
    return {
      activeSection: ''
    }
  },
  props: ["item"],
  watch: {
    $route(to) {
      this.activeSection = to.hash.replace('#', '')
    }
  }
};
</script>

<style scoped>
.w-40 {
  filter: invert(1);
}

a.active {
  text-decoration: underline #aae750 !important;
}

.navbar-active ul li a {
  color: #170f4f;
}

li.mr-3 a {
  text-decoration-line: none;
  text-transform: uppercase;
  font-weight: 600;
  font-style: normal;
  color: white;
  padding-bottom: .5rem;
  padding-top: .5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: inline-block;
}
</style>