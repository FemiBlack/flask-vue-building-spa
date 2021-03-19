<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Header/>
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
* {
  font-family: "Roboto";
}
.navbar {
  margin-bottom: 50px;
  border-radius: 0;
}
.jumbotron {
  margin-bottom: 0;
}
footer {
  background-color: #f2f2f2;
  padding: 25px;
}
.invalid-feedback {
  color:red;
}
</style>
