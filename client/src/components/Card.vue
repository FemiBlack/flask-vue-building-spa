<template>
    <b-card
    :title="name"
    :img-src="require(`../assets/Cover.jpg`)"
    img-top
    img-alt="building silhouette"
    style="width: 18rem;"
    class="mb-2">
      <b-card-text>{{ address }}</b-card-text>
      <b-button href="#" variant="primary">Go Somewhere</b-button>
    </b-card>
</template>

<script>
export default {
  props: {
    name: String,
    address: String,
  },
};
</script>
