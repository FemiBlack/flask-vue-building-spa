<template>
  <header>
    <div class="jumbotron">
      <b-jumbotron
        header="Service Life Database"
      >
        <!-- <b-button variant="primary" href="#">More Info</b-button> -->
      </b-jumbotron>
    </div>
    <b-navbar toggleable="lg" type="dark" id="nav" variant="dark">
      <!--fixed-top-->
      <div class="container">
        <b-navbar-brand to="/" class="mr-4">S.L.D.B</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mr-auto">
              <!-- <b-nav-item to="/">Home</b-nav-item> -->
              <b-nav-item v-if="isLoggedIn" to="/account">Account</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-if="isLoggedIn">
            <b-nav-form v-show="role<2">
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button
                size="sm"
                class="my-2 my-sm-0"
                v-model="search"
                @input="handleBlur"
                type="submit"
                >Search</b-button
              >
            </b-nav-form>
            <b-nav-item
              ><b-button v-if="role>=1" size="sm" variant="success" to="/registerbuilding">
                Make Entry
              </b-button>
              <b-button v-else size="sm" variant="success" to="/registerbuilding" disabled>
                Make Entry(Disabled)
              </b-button>
              </b-nav-item
            >
            <b-nav-item to="/admin" v-show="role===2">Admin Dashboard</b-nav-item>
            <b-nav-item @click="logout">Logout</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-else>
            <b-nav-item @click="$bvModal.show('login-modal')">Login</b-nav-item>
            <b-nav-item to="/register">Register</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <!-- Login Component -->
    <Login />
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import Login from "@/views/Login.vue";

export default {
  name: "Header",
  data() {
    return {
      search: "",
    };
  },
  components: {
    Login,
  },
  computed: {
    ...mapGetters({ role: "StateUserRole" }),

    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    handleBlur() {
      console.log(this.search);
    },
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* .active {
  color: #42b983;
} */
.navbar {
  margin-bottom: 50px;
  border-radius: 0;
}
.jumbotron {
  margin-bottom: 0;
}
#nav a.router-link-exact-active {
  color: white;
}
</style>
