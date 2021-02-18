<!-- npm install vue-form-wizard -->
<template>
	<div>
		
		<form-wizard @onComplete="addHouse" shape="square" color="#3498db">
			<tab-content title="Personal details" icon="ti-user" route='/first' :before-change="()=>validateStep('step1')">
				<step1 ref="step1" @on-validate="mergePartialModels"></step1>
			</tab-content>
			<tab-content title="Additional Info" icon="ti-settings" route='/second' :before-change="()=>validateStep('step2')">
				<step2 ref="step2" @on-validate="mergePartialModels"></step2>
			</tab-content>
			<tab-content title="Additional Info" icon="ti-settings" route='/third' :before-change="()=>validateStep('step2')">
				<step3 ref="step3" @on-validate="mergePartialModels"></step3>
			</tab-content>
			<tab-content title="Additional Info" icon="ti-settings" route='/fourth' :before-change="()=>validateStep('step2')">
				<step4 ref="step4" @on-validate="mergePartialModels"></step4>
			</tab-content>
			<tab-content title="Last step" icon="ti-check">
                Here is your final model:
                <pre>{{finalModel}}</pre>
			</tab-content>
			<transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
  		</form-wizard>
	</div>
</template>

<script>
import FirstStep from './steps/FirstStep'
import SecondStep from './steps/SecondStep'
import ThirdStep from './steps/ThirdStep'
import FourthStep from './steps/FourthStep'

export default{
	data(){
		return {
			finalModel: {}
		}
	},
	components:{
		step1: FirstStep,
		step2: SecondStep,
		step3: ThirdStep,
		step4: FourthStep
	},
	methods: {
		validateStep(name) {
			var refToValidate = this.$refs[name];
			return refToValidate.validate();
		},
		mergePartialModels(model, isValid){
			if(isValid){
				// merging each step model into the final model
				this.finalModel = Object.assign({},this.finalModel, model)
				// pass finalModel object to axios
			}
		}
	}
}
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