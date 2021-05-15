<template>
    <b-container>
      <b-row>
        <b-col>
          <alert :message="message" v-if="showMessage"></alert>
          <div class="posts" v-if="Houses[0]">
            <table style="width:100%;">
              <thead>
                <th>House</th>
                <th></th>
              </thead>
              <tbody v-for="(house, index) in Houses" :key="index">
                <tr>
                  <td>{{house.building_no}}</td>
                  <td>
                    <div class="btn-group" role="group">
                      <b-button variant="warning" size="sm">Update</b-button>
                      <b-button
                        variant="danger"
                        size="sm"
                        v-b-modal.delete-modal
                        >Delete</b-button>
                    </div>
                </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else>
              No registered houses found...😢😕
          </div>
        </b-col>
        <b-modal ref="deleteHouseModal" id="delete-modal"
          title="Delete Building Record?" hide-footer>
          <p>Caution!This action is irreversible</p>
          <b-button type="submit"
            variant="danger"
            @click="deleteHome(house)"
            >Yes</b-button>
          <b-button type="reset" variant="primary">No</b-button>
        </b-modal>
        <b-col>
          <div v-if="User">
              <p>Hi, {{User}}</p>
          </div>
          <!-- <b-avatar>hi</b-avatar>
          <router-link to="/">Field One</router-link>->wizard
          <router-link to="/newbuilding">Field Two</router-link>->wizard
          <button>Field Three</button>->modal|dropdown
          <button>Field Four</button>->modal|dropdown
          <button>Field Five</button>->modal|dropdown
          <button>Field Six</button>->modal|dropdown -->
        </b-col>
      </b-row>
    </b-container>
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
      // eslint-disable-next-line
      console.log(house._id.$oid)
      try {
        // eslint-disable-next-line
        await this.DeleteHouse(house._id.$oid);
        this.message = 'Book removed!';
        this.showMessage = true;
      } catch (error) {
        // eslint-disable-next-line
        throw 'Error deleting item';
      }
      this.$refs.deleteHouseModal.hide();
      this.GetUserHouses();
    },
  },
  created() {
    this.GetUserHouses();
  },
};
</script>

<style>

</style>
