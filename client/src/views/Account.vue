<template>
    <b-container>
      <b-row>
        <b-col>
          <alert :message="message" v-if="showMessage"></alert>
          <div class="posts" v-if="Houses[0]">
            <p>You currently have ({{Houses.length}}) house(s) registered</p>
            <table style="width:100%;">
              <thead>
                <th>House</th>
                <th></th>
              </thead>
              <tbody v-for="(house, index) in Houses" :key="index">
                <b-modal hide-backdrop content-class="shadow" ref="deleteHouseModal" id="delete-modal">
                  <template #modal-header="{}">
                    <!-- Emulate built in modal header close button action -->
                    <h5>Warning</h5>
                  </template>

                  <template #default="{}">
                    <p>Caution⚠, This action is irreversible</p>
                  </template>
                  <template #modal-footer="{cancel}">
                    <!-- Emulate built in modal footer ok and cancel button actions -->
                    <b-button size="sm" variant="danger" @click="deleteHome(house)">
                      I understand
                    </b-button>
                    <b-button size="sm" variant="dark" @click="cancel()">
                      Take me back!
                    </b-button>
                  </template>
                </b-modal>
                <tr>
                  <td>{{house.building_no}}</td>
                  <td>
                    <div class="btn-group" role="group">
                      <b-button variant="warning" size="sm">Update</b-button>
                      <b-button
                        variant="danger"
                        size="sm"
                        @click="$bvModal.show('delete-modal')"
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
        <b-col>
          <div v-if="User">
              <b-alert show>Hi, {{User}}</b-alert>
          </div>
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
        this.message = 'Record removed!';
        this.showMessage = true;
      } catch (error) {
        // eslint-disable-next-line
        throw 'Error deleting item';
      }
      this.$refs.deleteHouseModal.hide();
      this.GetUserHouses();
    },
    initModal() {
      this.$refs.deleteHouseModal.hide();
    }
  },
  created() {
    this.GetUserHouses();
  },
};
</script>

<style>

</style>
