<template>
  <b-container>
    <div>
      <h1>Not Found</h1>
      <p>
        Oops, We coudn't find that page.Try going
        <router-link :to="{ name: 'Home' }">home</router-link>
      </p>
    </div>
  </b-container>
</template>

<script>
export default {
  title: 'SLDB - 404 Page Not Found',
}
</script>