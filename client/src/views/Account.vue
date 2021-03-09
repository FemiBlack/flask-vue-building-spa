<template>
    <div>
        <div v-if="User">
            <p>Hi {{User}}</p>
        </div>
        <router-link to="/">Field One</router-link>->wizard
        <router-link to="/newbuilding">Field Two</router-link>->wizard
        <button>Field Three</button>->modal|dropdown
        <button>Field Four</button>->modal|dropdown
        <button>Field Five</button>->modal|dropdown
        <button>Field Six</button>->modal|dropdown
        <alert :message="message" v-if="showMessage"></alert>
        <div class="posts" v-if="Houses">
            <ul>
            <li v-for="house in Houses" :key="house.id">
                <div id="post-div">
                <p>{{house.building_no}}</p>
                <p>{{house.address}}</p>
                <p>Written By: {{house.building_no}}</p>
                <div class="btn btn-danger" @click="deleteHome(house)"></div>
                </div>
            </li>
            </ul>
        </div>
        <div v-else>
            Oh no!!! We have no posts
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Alert from '../components/Alert.vue';

export default {
  name: 'Account',
  data() {
    return {
      message: '',
      showMessage: false,
      house: [],
    };
  },
  components: {
    alert: Alert,
  },
  computed: {
    ...mapGetters({ Houses: 'StateHouses', User: 'StateUser' }),
  },
  methods: {
    ...mapActions(['GetUserHouses', 'DeleteHouse']),
    async submit() {
      try {
        await this.CreateHouse(this.form);
      } catch (error) {
        // eslint-disable-next-line
        throw "Sorry you can't make a post now!";
      }
    },
    async deleteHome(house) {
      try {
        await this.DeleteHouse(house.id);
        this.message = 'Book removed!';
        this.showMessage = true;
      } catch (error) {
        // eslint-disable-next-line
        throw 'Error deleting item';
      }
      this.GetHouses();
    },
  },
  created() {
    this.GetUserHouses();
  },
};
</script>

<style>

</style>
