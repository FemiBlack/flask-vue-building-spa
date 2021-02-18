<template>
	<fieldset>
		<h2>Building External Environment</h2>
		<div class="form-group" v-bind:class="{ 'has-error': $v.drvRain.$error }">        	
			<label for="build_code">Driving Rain</label>
			<input type="text" class="form-control" v-model.trim="drvRain" @input="$v.drvRain.$touch()">
			<span class="help-block" v-if="$v.drvRain.$error && !$v.drvRain.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.drainage.$error }">        	
			<label for="build_code">Drainage Issue</label>
			<input type="text" class="form-control" v-model.trim="drainage" @input="$v.drainage.$touch()">
			<span class="help-block" v-if="$v.drainage.$error && !$v.drainage.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.waterLogged.$error }">        	
			<label for="build_code">Water Logged</label>
			<input type="text" class="form-control" v-model.trim="waterLogged" @input="$v.waterLogged.$touch()">
			<span class="help-block" v-if="$v.waterLogged.$error && !$v.waterLogged.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.unkempt.$error }">        	
			<label for="build_code">Dirty/Unkept Surroundings</label>
			<input type="text" class="form-control" v-model.trim="unkempt" @input="$v.unkempt.$touch()">
			<span class="help-block" v-if="$v.unkempt.$error && !$v.unkempt.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.chemPol.$error }">        	
			<label for="build_code">Aggressive Chemicals/Pollution</label>
			<input type="text" class="form-control" v-model.trim="chemPol" @input="$v.chemPol.$touch()">
			<span class="help-block" v-if="$v.chemPol.$error && !$v.chemPol.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.topography.$error }">        	
			<label for="build_code">Topography</label>
			<input type="text" class="form-control" v-model.trim="topography" @input="$v.topography.$touch()">
			<span class="help-block" v-if="$v.topography.$error && !$v.topography.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.ultraVRad.$error }">        	
			<label for="build_code">Ultra-Violet Radiation</label>
			<input type="text" class="form-control" v-model.trim="ultraVRad" @input="$v.ultraVRad.$touch()">
			<span class="help-block" v-if="$v.ultraVRad.$error && !$v.ultraVRad.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.extremeTemp.$error }">        	
			<label for="build_code">Extreme Temperature</label>
			<input type="text" class="form-control" v-model.trim="extremeTemp" @input="$v.extremeTemp.$touch()">
			<span class="help-block" v-if="$v.extremeTemp.$error && !$v.extremeTemp.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.flood.$error }">        	
			<label for="build_code">Flood</label>
			<input type="text" class="form-control" v-model.trim="flood" @input="$v.flood.$touch()">
			<span class="help-block" v-if="$v.flood.$error && !$v.flood.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.fireHeat.$error }">        	
			<label for="build_code">Fire/ Heat Source</label>
			<input type="text" class="form-control" v-model.trim="fireHeat" @input="$v.fireHeat.$touch()">
			<span class="help-block" v-if="$v.fireHeat.$error && !$v.fireHeat.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.trafficIssue.$error }">        	
			<label for="build_code">Traffic Issues</label>
			<input type="text" class="form-control" v-model.trim="trafficIssue" @input="$v.trafficIssue.$touch()">
			<span class="help-block" v-if="$v.trafficIssue.$error && !$v.trafficIssue.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.buildingThreat.$error }">        	
			<label for="build_code">Threat from other buildings</label>
			<input type="text" class="form-control" v-model.trim="buildingThreat" @input="$v.buildingThreat.$touch()">
			<span class="help-block" v-if="$v.buildingThreat.$error && !$v.buildingThreat.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.wind.$error }">        	
			<label for="build_code">Wind</label>
			<input type="text" class="form-control" v-model.trim="wind" @input="$v.wind.$touch()">
			<span class="help-block" v-if="$v.wind.$error && !$v.wind.required">First name is required</span>
		</div>
		<div class="form-group" v-bind:class="{ 'has-error': $v.moisture.$error }">        	
			<label for="build_code">Moisture</label>
			<input type="text" class="form-control" v-model.trim="moisture" @input="$v.moisture.$touch()">
			<span class="help-block" v-if="$v.moisture.$error && !$v.moisture.required">First name is required</span>
		</div>
	</fieldset>
</template>

<script>
import { required, minLength, numeric } from "vuelidate/lib/validators"

export default {
	data() {
		return {
			drvRain: '',
			drainage: '',
			waterLogged: '',
			unkempt: '',
			chemPol: '',
			topography: '',
			ultraVRad: '',
			extremeTemp: '',
			flood: '',
			fireHeat: '',
			trafficIssue: '',
			buildingThreat: '',
			wind: '',
			moisture: ''
		}
	},
	validations: {
		drvRain: {required},
		drainage: {required},
		waterLogged: {required},
		unkempt: {required},
		chemPol: {required},
		topography: {required},
		ultraVRad: {required},
		extremeTemp: {required},
		flood: {required},
		fireHeat: {required},
		trafficIssue: {required},
		buildingThreat: {required},
		wind: {required},
		moisture: {required},
		form: [
			'drvRain','drainage',
			'waterLogged','unkempt',
			'chemPol','topography',
			'ultraVRad','extremeTemp',
			'flood','fireHeat',
			'trafficIssue','buildingThreat',
			'wind','moisture'
		]
	},
	methods: {
		validate() {
			this.$v.form.$touch();
			var isValid = !this.$v.form.$invalid
			this.$emit('on-validate', this.$data, isValid)
			return isValid
		}
	}
}
</script>

<style>

</style>