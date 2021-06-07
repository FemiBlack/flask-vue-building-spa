<template>
  <header>
    <div class="jumbotron">
      <b-jumbotron header="Building Store" lead="A platform for adding survey records">
        <p>For more information visit website</p>
        <!-- <b-button variant="primary" href="#">More Info</b-button> -->
      </b-jumbotron>
    </div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <!--fixed-top-->
      <div class="container">
        <b-navbar-brand to="/" class="mr-4">Store</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse">
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav v-if="isLoggedIn" class="mr-auto">
            <b-nav-item to="/account">Account</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-else class="mr-auto">
            <b-nav-item to="/">Home</b-nav-item>
          </b-navbar-nav>
          <!-- Navbar Right Side-->
          <b-navbar-nav v-if="isLoggedIn">
            <b-nav-item @click="logout">Logout</b-nav-item>
            <b-button variant="success" to="/registerbuilding">
              Make Entry
            </b-button>
          </b-navbar-nav>
          <b-navbar-nav v-else>
            <b-nav-item v-b-modal.login-modal>Login</b-nav-item>
            <b-nav-item to="/register">Register</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <!-- Login Component -->
    <Login/>
  </header>
</template>

<script>
import Login from '@/views/Login.vue';

export default {
  name: 'Header',
  components: {
    Login,
  },
  computed: {
    isLoggedIn() { return this.$store.getters.isAuthenticated; },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('LogOut');
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.active {
  color: #42b983;
}
.jumbotron{
  margin-bottom: 0;
}
</style>
