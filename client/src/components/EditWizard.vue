<!-- npm install vue-form-wizard -->
<template>
  <div>
    <form-wizard
      title="Register House"
      subtitle="Add buildings here..."
      @on-complete="updateHouse"
      shape="square"
      color="#3498db"
    >
      <tab-content
        title="Quality of Condition"
        icon="ti-eye"
        :before-change="() => validateStep('step1')"
      >
        <step1 ref="step1" @on-validate="mergePartialModels"></step1>
      </tab-content>
      <tab-content
        title="Design Level"
        icon="ti-brush"
        :before-change="() => validateStep('step2')"
      >
        <step2 ref="step2" @on-validate="mergePartialModels"></step2>
      </tab-content>
      <tab-content
        title="Work Experience Level"
        icon="ti-star"
        :before-change="() => validateStep('step3')"
      >
        <step3 ref="step3" @on-validate="mergePartialModels"></step3>
      </tab-content>
      <tab-content
        title="Indoor Environment"
        icon="ti-shift-left"
        :before-change="() => validateStep('step4')"
      >
        <step4 ref="step4" @on-validate="mergePartialModels"></step4>
      </tab-content>
      <tab-content
        title="Outdoor Environment"
        icon="ti-shift-right"
        :before-change="() => validateStep('step5')"
      >
        <step5 ref="step5" @on-validate="mergePartialModels"></step5>
      </tab-content>
      <tab-content
        title="In-Use Conditions"
        icon="ti-info"
        :before-change="() => validateStep('step6')"
      >
        <step6 ref="step6" @on-validate="mergePartialModels"></step6>
      </tab-content>
      <tab-content
        title="Maintenance"
        icon="ti-shield"
        :before-change="() => validateStep('step7')"
      >
        <step7 ref="step7" @on-validate="mergePartialModels"></step7>
      </tab-content>
      <!-- <tab-content title="Last step" icon="ti-check">
      You have reached the final step, Hit the [finish] button to save your progress...
      On the [Account] page, hit the [update] button to continue progress
                Here is your final model:
                <pre>{{finalModel}}</pre>
      </tab-content>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition> -->
    </form-wizard>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import VfOne from "./steps/field_two/VfOne.vue";
import VfTwo from "./steps/field_two/VfTwo.vue";
import VfThree from "./steps/field_two/VfThree.vue";
import VfFour from "./steps/field_two/VfFour.vue";
import VfFive from "./steps/field_two/VfFive.vue";
import VfSix from "./steps/field_two/VfSix.vue";
import VfSeven from "./steps/field_two/VfSeven.vue";

export default {
  data() {
    return {
      finalModel: { is_completed: "third" },
      showError: false,
    };
  },
  components: {
    step1: VfOne,
    step2: VfTwo,
    step3: VfThree,
    step4: VfFour,
    step5: VfFive,
    step6: VfSix,
    step7: VfSeven,
  },
  methods: {
    alertDisplay() {
      // $swal function calls SweetAlert into the application with the specified configuration.
    },
    ...mapActions(["UpdateHouse"]),
    async updateHouse() {
      try {
        console.log(this.$route.params.id);
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
