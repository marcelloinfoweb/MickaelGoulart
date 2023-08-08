<template>
  <li class="mr-3">
    <a
      class="inline-block uppercase py-2 px-4 font-medium no-underline"
      :href="item.href"
      >{{ item.text }}</a
    >
  </li>
</template>

<script>
export default {
  props: ["item"],
};
</script>
