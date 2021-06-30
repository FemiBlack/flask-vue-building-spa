<template>
  <div id="app">
    <Header/>
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap');
/* * {
 font-family: "Roboto";
} */
footer {
  background-color: #f2f2f2;
  padding: 25px;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity .5s, transform .5s;
}
.slide-enter,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-30%)
}
</style>
