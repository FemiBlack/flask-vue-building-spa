<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>