<template>
  <b-card
    :title="name"
    :img-src="require(`@/assets/house-avatar.jpg`)"
    img-top
    img-alt="building silhouette"
    style="width: 18rem"
    class="mb-2"
  >
    <b-card-text>{{ address }}</b-card-text>
    <b-button variant="primary" :to="`/viewhouse/${id}`">View More</b-button>
    <!-- <b-button variant="danger" @click="readyDelete(house)"
      >Delete</b-button
    > -->
  </b-card>
</template>

<script>
export default {
  props: {
    name: String,
    address: String,
    id: String,
  },
};
</script>
