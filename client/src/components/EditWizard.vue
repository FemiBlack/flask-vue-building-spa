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
        icon="ti-user"
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
        icon="ti-plus"
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
import FifthStep from "./steps/FifthStep.vue";
// import SixthStep from './steps/SixthStep.vue';
import SeventhStep from "./steps/SeventhStep.vue";
// import CheckBox from "./steps/CheckBox.vue";

export default {
  data() {
    return {
      finalModel: {is_completed:'third'},
      showError: false,
    };
  },
  components: {
    step1: FifthStep,
    // step2: SixthStep,
    step2: SeventhStep,
    // step3: CheckBox,
  },
  methods: {
    ...mapActions(["UpdateHouse"]),
    async updateHouse() {
      try {
        console.log(this.$route.params.id)
        await this.UpdateHouse({payload:this.finalModel, houseID:this.$route.params.id});
        // this.$router.push('/account');
        this.showError = false;
        this.$router.push("/account");
      } catch (error) {
        this.showError = true;
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
