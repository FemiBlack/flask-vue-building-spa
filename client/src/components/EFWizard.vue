<!-- npm install vue-form-wizard -->
<template>
  <div>

    <form-wizard title="Update House"
      subtitle="Update buildings here..."
      @on-complete="updateHouse"
      shape="square"
      color="#3498db">
      <tab-content title="Building Particulars" icon="ti-user"
      :before-change="()=>validateStep('step1')">
        <step1 ref="step1" @on-validate="mergePartialModels"></step1>
      </tab-content>
      <tab-content title="External Environment" icon="ti-flag"
      :before-change="()=>validateStep('step2')">
        <step2 ref="step2" @on-validate="mergePartialModels"></step2>
      </tab-content>
      <tab-content title="Internal Condition" icon="ti-plus"
      :before-change="()=>validateStep('step3')">
        <step3 ref="step3" @on-validate="mergePartialModels"></step3>
      </tab-content>
      <tab-content title="Building State" icon="ti-heart"
      :before-change="()=>validateStep('step4')">
        <step4 ref="step4" @on-validate="mergePartialModels"></step4>
      </tab-content>
      </form-wizard>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import FirstStep from './steps/field_one/FirstStep.vue';
import SecondStep from './steps/field_one/SecondStep.vue';
import ThirdStep from './steps/field_one/ThirdStep.vue';
import FourthStep from './steps/field_one/FourthStep.vue';

export default {
  data() {
    return {
      finalModel: {is_completed: 'second'},
      showError: false,
    };
  },
  components: {
    step1: FirstStep,
    step2: SecondStep,
    step3: ThirdStep,
    step4: FourthStep,
  },
  methods: {
    ...mapActions(['UpdateHouse']),
    async updateHouse() {
      try {
        await this.UpdateHouse(this.finalModel);
        this.$swal('Success', 'Building updated successfully', 'success');
        this.$router.push('/account');
      } catch (error) {
        this.$swal('Error', 'There was an error, try again later', 'warning');
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
.fade-leave-active{
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}
</style>
