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
                <b-modal hide-backdrop content-class="shadow" ref="deleteHouseModal" id="delete-modal">
                  <template #modal-header>
                    <!-- Emulate built in modal header close button action -->
                    <h5>Warning</h5>
                  </template>

                  <template #default>
                    <b-icon icon="exclamation-triangle-fill" scale="2" variant="warning"></b-icon>
                    <p>Caution⚠, This action is irreversible</p>
                  </template>
                  <template #modal-footer="{cancel}">
                    <!-- Emulate built in modal footer ok and cancel button actions -->
                    <b-button size="sm" variant="danger" @click="deleteHome()">
                      I understand
                    </b-button>
                    <b-button size="sm" variant="dark" @click="cancel()">
                      Take me back!
                    </b-button>
                  </template>
                </b-modal>
              <tbody v-for="(house, index) in Houses" :key="index">
                <tr>
                  <td>{{house.building_no}}</td>
                  <td>
                    <div class="btn-group" role="group">
                      <b-button v-if="!house.is_completed" variant="warning" :to="`/editbuilding/${house._id.$oid}`" size="sm">Update</b-button>
                      <b-button v-else variant="primary" 
                        size="sm"
                        :to="`/viewhouse/${house._id.$oid}`"
                        >View House</b-button>
                      <b-button
                        variant="danger"
                        size="sm"
                        v-b-modal.delete-modal
                        @click="readyDelete(house)"
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
import { BIcon } from 'bootstrap-vue';
import { mapGetters, mapActions } from 'vuex';
import Alert from '../components/Alert.vue';

export default {
  name: 'Account',
  data() {
    return {
      message: '',
      showMessage: false,
      house: [],
      item: '',
    };
  },
  components: {
    alert: Alert,
    BIcon,
  },
  computed: {
    ...mapGetters({ Houses: 'StateUserHouses', User: 'StateUser' }),
  },
  methods: {
    ...mapActions(['GetUserHouses', 'DeleteHouse']),
    async readyDelete(item) {
      this.item = item;
    },
    async deleteHome() {
      try {
        // eslint-disable-next-line
        await this.DeleteHouse(this.item._id.$oid);
        this.message = 'Record removed!';
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
