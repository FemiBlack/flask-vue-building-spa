<!-- npm install vue-form-wizard -->
<template>
  <div>
    <form-wizard
      title="Update House Record"
      subtitle="Update buildings here..."
      @on-complete="updateHouse"
      shape="square"
      color="#3498db"
    >
      <tab-content
        title="Non-Destructive Test Result"
        icon="ti-pulse"
        :before-change="() => validateStep('step1')"
      >
        <step1 ref="step1" @on-validate="mergePartialModels"></step1>
      </tab-content>
      <!-- <tab-content title="NDTR" icon="ti-flag"
      :before-change="()=>validateStep('step2')">
        <step2 ref="step2" @on-validate="mergePartialModels"></step2>
      </tab-content> -->
      <tab-content
        title="Site Description"
        icon="ti-home"
        :before-change="() => validateStep('step2')"
      >
        <step2 ref="step2" @on-validate="mergePartialModels"></step2>
      </tab-content>
      <!-- <tab-content
        title="Completed?"
        icon="ti-check"
        :before-change="() => validateStep('step3')"
      >
        <step3 ref="step3" @on-validate="mergePartialModels"></step3>
      </tab-content> -->
      <!-- <tab-content title="Last step" icon="ti-check">
                Here is your final model:
                <pre>{{finalModel}}</pre>
      </tab-content> -->
      <!-- <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition> -->
    </form-wizard>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FifthStep from "./steps/field_three/FifthStep.vue";
import SeventhStep from "./steps/field_three/SeventhStep.vue";

export default {
  data() {
    return {
      finalModel: { is_completed: "completed" },
    };
  },
  components: {
    step1: FifthStep,
    step2: SeventhStep,
  },
  methods: {
    ...mapActions(["UpdateHouse"]),
    async updateHouse() {
      try {
        await this.UpdateHouse({
          payload: this.finalModel,
          houseID: this.$route.params.id,
        });
        this.$swal("Success", "Building updated successfully", "success");
        this.$router.push("/account");
      } catch (error) {
        this.$swal("Error", "There was an error, try again later", "warning");
      }
    },
    validateStep(name) {
      const refToValidate = this.$refs[name];
      return refToValidate.validate();
    },
    mergePartialModels(model, isValid) {
      if (isValid) {
        // merging each step model into the final model
        this.finalModel = { ...this.finalModel, ...model };
        // pass finalModel object to axios
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
