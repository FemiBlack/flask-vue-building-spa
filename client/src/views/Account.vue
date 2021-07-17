<template>
  <b-container>
    <b-row>
      <b-col>
        <div class="posts" v-if="Houses[0]">
          <p>You currently have ({{ Houses.length }}) house(s) registered</p>
          <article
            class="media content-section"
            v-for="(house, index) in unitHouses"
            :key="index"
          >
            <div class="media-body">
              <div class="article-metadata">
                <small
                  :class="{
                    complete: house.is_completed === 'completed',
                    incomplete: house.is_completed !== 'completed',
                  }"
                  >Status:
                  {{
                    house.is_completed === "completed"
                      ? "Complete"
                      : "Incomplete"
                  }}</small
                ><br />
                <small class="text-muted"
                  >Date Created:
                  {{ localDateString(house.date_created.$date) }}</small
                ><br />
                <b-button-group>
                  <b-button
                    v-if="house.is_completed !== 'completed'"
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
                    @click="readyDelete(house)"
                    >Delete</b-button
                  >
                </b-button-group>
              </div>
              <h4 class="article-title">{{ house.building_no }}</h4>
              <!-- <p class="article-content">content</p> -->
            </div>
          </article>
        </div>
        <div v-else>No registered houses found...😢😕</div>
      </b-col>
      <b-col>
        <div v-if="User && role>0">
          <b-alert show>Hi, {{ User }}</b-alert>
        </div>
        <div v-else>
          <b-alert show>Hi, {{ User }}(guest)</b-alert>
        </div>
        <section class="info-tiles" v-if="role>0">
          <div class="tile is-ancestor has-text-centered">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">{{ Houses.length }}</p>
                <p class="subtitle">Registered</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">{{ computeCompleted }}</p>
                <p class="subtitle">Successful</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">{{ Houses.length - computeCompleted }}</p>
                <p class="subtitle">Incomplete</p>
              </article>
            </div>
          </div>
        </section>
        <div class="columns">
          <div class="column">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">Inventory Search</p>
                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
              </header>
              <div class="card-content">
                <div class="content">
                  <div class="control has-icons-left has-icons-right">
                    <input
                      class="input is-large"
                      type="text"
                      v-model="search"
                      placeholder=""
                    />
                    <span class="icon is-medium is-left">
                      <i class="fa fa-search"></i>
                    </span>
                    <span class="icon is-medium is-right">
                      <i class="fa fa-check"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <b-row>
          <b-col>
            <jw-pagination
              :items="filteredList"
              @changePage="onChangePage"
              :pageSize="3"
            ></jw-pagination>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import JWPagination from "jw-vue-pagination";

export default {
  title: "SLDB - Account Page",
  name: "Account",
  data() {
    return {
      house: [],
      item: "",
      unitHouses: [],
      search: "",
    };
  },
  components: {
    "jw-pagination": JWPagination,
  },
  computed: {
    ...mapGetters({ Houses: "StateUserHouses", User: "StateUser" }),
    filteredList() {
        if (!this.Houses.message) {
            return this.Houses.filter((post) => {
              return post.building_no
                .toLowerCase()
                .includes(this.search.toLowerCase());
            });
        }
    },
    computeCompleted: function () {
      const completed = this.Houses.filter(
        (element) => element.is_completed === "completed"
      )
      return completed.length;
    },
  },
  methods: {
    async readyDelete(item) {
      this.item = item;
      this.$swal({
        title: "Are you sure?",
        text: "You can't revert your action",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Delete it!",
        cancelButtonText: "No, Keep it!",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          this.deleteHome();
          this.$swal(
            "Deleted",
            "You successfully deleted this file",
            "success"
          );
        } else {
          this.item = "";
          this.$swal("Cancelled", "Your file is still intact", "info");
        }
      });
    },
    onChangePage(unitHouses) {
      // update page of items
      this.unitHouses = unitHouses;
    },
    localDateString: function (value) {
      // convert unixtime seconds to milliseconds and create JS date
      var date = new Date(value).toLocaleDateString();
      return date;
    },
    ...mapActions(["GetUserHouses", "DeleteHouse"]),
    async deleteHome() {
      try {
        await this.DeleteHouse(this.item._id.$oid);
      } catch (error) {
        throw "Error deleting item";
      }
      this.GetUserHouses();
    },
  },
  created() {
    this.GetUserHouses();
  },
};
</script>

<style>
@import '../../node_modules/bulma/css/bulma.css';
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
.rounded-circle {
  border-radius: 50% !important;
}

.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  margin-bottom: 2rem;
}
.card-header-title {
  color: #8f99a3;
  font-weight: 400;
}
.card .content {
  font-size: 14px;
}
.card-footer-item {
  font-size: 14px;
  font-weight: 700;
  color: #8f99a3;
}
.card-table .table {
  margin-bottom: 0;
}
.events-card .card-table {
  max-height: 250px;
  overflow-y: scroll;
}
</style>
