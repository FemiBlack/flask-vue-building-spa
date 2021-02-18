<template>
    <header>
        <div class="jumbotron">
            <div class="container text-center">
                <h1>Building Store</h1>
                <p>Mission, Vission &amp; Values</p>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> <!--fixed-top-->
            <div class="container">
                <router-link to="/" class="navbar-brand mr-4" href="#">Flask Blog</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarToggle">
                    <div class="navbar-nav mr-auto">
                        <router-link to="/about" class="nav-item nav-link" href="/about">About</router-link>
                    </div>
                <!-- Navbar Right Side-->
                    <div class="navbar-nav" v-if="isLoggedIn">
                        <a class="nav-item nav-link" @click="logout" v-b-modal.login-modal>Logout</a>
                        <button class="btn btn-info btn-sm nav-item">
                            <router-link to="/houses" class="nav-link active">Make Entry</router-link>
                        </button>
                    </div>
                    <div class="navbar-nav" v-else>
                        <router-link to="/login" class="nav-item nav-link" v-b-modal.login-modal>Login</router-link>
                        <router-link to="/register" class="nav-item nav-link" v-b-modal.signup-modal>Register</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    computed: {
        isLoggedIn: () => { return this.$store.getters.isAuthenticated }
    },
    methods: {
        async logout (){
            await this.$store.dispatch('LogOut')
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
nav a.router-link-exact-active {
  color: #42b983;
}
</style>