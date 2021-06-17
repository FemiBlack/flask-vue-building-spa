<template>
  <b-container>
    <b-row>
      <b-col>
        <alert :message="message" v-if="showMessage"></alert>
        <div class="posts" v-if="Houses[0]">
          <p>You currently have ({{ Houses.length }}) house(s) registered</p>
          <article
            class="media content-section"
            v-for="(house, index) in Houses"
            :key="index"
          >
            <div class="media-body">
              <div class="article-metadata">
                <small
                  :class="{
                    complete: house.is_completed==='complete',
                    incomplete: house.is_completed!=='complete',
                  }"
                  >Status: {{ house.is_completed==='complete'?'Complete':'Incomplete' }}</small
                ><br />
                <small class="text-muted">Date Created: 25/01/2332</small><br/>
                <b-button-group>
                  <b-button
                    v-if="house.is_completed!=='complete'"
                    variant="warning"
                    :to="`/registerbuilding/${house.is_completed}/${house._id.$oid}`"
                    size="sm"
                    >Continue Upload</b-button
                  >
                  <b-button
                    variant="primary"
                    size="sm"
                    :to="`/viewhouse/${house._id.$oid}`"
                    >View House</b-button
                  >
                  <b-button
                    variant="danger"
                    size="sm"
                    v-b-modal.delete-modal
                    @click="readyDelete(house)"
                    >Delete</b-button
                  >
                </b-button-group>
              </div>
              <h4 class="article-title">{{ house.building_no }}</h4>
              <!-- <p class="article-content">content</p> -->
            </div>
          </article>
          <b-modal
            hide-backdrop
            content-class="shadow"
            ref="deleteHouseModal"
            id="delete-modal"
          >
            <template #modal-header>
              <!-- Emulate built in modal header close button action -->
              <h5>Warning</h5>
            </template>

            <template #default>
              <b-icon
                icon="exclamation-triangle-fill"
                scale="2"
                variant="warning"
              ></b-icon>
              <p>Caution⚠, This action is irreversible</p>
            </template>
            <template #modal-footer="{ cancel }">
              <!-- Emulate built in modal footer ok and cancel button actions -->
              <b-button size="sm" variant="danger" @click="deleteHome()">
                I understand
              </b-button>
              <b-button size="sm" variant="dark" @click="cancel()">
                Take me back!
              </b-button>
            </template>
          </b-modal>
        </div>
        <div v-else>No registered houses found...😢😕</div>
      </b-col>
      <b-col>
        <div v-if="User">
          <b-alert show>Hi, {{ User }}</b-alert>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BIcon } from "bootstrap-vue";
import { mapGetters, mapActions } from "vuex";
import Alert from "../components/Alert.vue";

export default {
  title: "SLDB - Account Page",
  name: "Account",
  data() {
    return {
      message: "",
      showMessage: false,
      house: [],
      item: "",
    };
  },
  components: {
    alert: Alert,
    BIcon,
  },
  computed: {
    ...mapGetters({ Houses: "StateUserHouses", User: "StateUser" }),
  },
  methods: {
    ...mapActions(["GetUserHouses", "DeleteHouse"]),
    async readyDelete(item) {
      this.item = item;
    },
    async deleteHome() {
      try {
        // eslint-disable-next-line
        await this.DeleteHouse(this.item._id.$oid);
        this.message = "Record removed!";
        this.showMessage = true;
      } catch (error) {
        // eslint-disable-next-line
        throw "Error deleting item";
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
.content-section {
  background: #ffffff;
  padding: 10px 20px;
  border: 1px solid #dddddd;
  border-radius: 3px;
  margin-bottom: 20px;
}

.article-title {
  color: #444444;
}

a.article-title:hover {
  color: #428bca;
  text-decoration: none;
}

.article-content {
  white-space: pre-line;
}

.article-img {
  height: 65px;
  width: 65px;
  margin-right: 16px;
}

.article-metadata {
  padding-bottom: 1px;
  margin-bottom: 4px;
  border-bottom: 1px solid #e3e3e3;
}

.article-metadata a:hover {
  color: #333;
  text-decoration: none;
}
.complete {
  color: green;
}
.incomplete {
  color: red;
}
.rounded-circle{border-radius:50%!important}
</style>
