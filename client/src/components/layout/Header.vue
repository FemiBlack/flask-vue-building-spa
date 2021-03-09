<template>
  <header>
    <div class="jumbotron">
      <div class="container text-center">
        <h1>Building Store</h1>
        <p>Mission, Vission &amp; Values</p>
      </div>
    </div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <!--fixed-top-->
      <div class="container">
        <b-navbar-brand to="/" class="mr-4" exact-active-class="active">Flask Blog</b-navbar-brand>
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
            <b-button variant="info" size="sm">
              <router-link to="/registerbuilding" class="nav-link active"
                >Make Entry</router-link
              >
            </b-button>
          </b-navbar-nav>
          <b-navbar-nav v-else>
            <b-nav-item v-b-modal.login-modal>Login</b-nav-item>
            <b-nav-item to="/register">Register</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Header',
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
