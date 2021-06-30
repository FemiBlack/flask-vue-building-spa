<template>
  <fieldset>
    <h2>Building Internal Condition</h2>
    <table style="width: 100%;">
      <thead>
        <th>Field</th>
        <th>Response</th>
        <th>Remark</th>
      </thead>
      <tbody>
        <tr>
          <td>Moisture/ Humid Air</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.internal_cond.moisture.response.$error }">
              <input type="text" class="form-control" v-model.trim="internal_cond.moisture.response"
              @input="$v.internal_cond.moisture.response.$touch()">
              <span class="help-block"
              v-if="$v.internal_cond.moisture.response.$error
              && !$v.internal_cond.moisture.response.required">
              Response is required</span>
            </div>
          </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.internal_cond.moisture.remark.$error }">
              <input type="text" class="form-control" v-model.trim="internal_cond.moisture.remark"
              @input="$v.internal_cond.moisture.remark.$touch()">
              <span class="help-block"
              v-if="$v.internal_cond.moisture.remark.$error
              && !$v.internal_cond.moisture.remark.required">
              Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Excessive Heat</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.internal_cond.excess_heat.response.$error }">
              <input type="text" class="form-control"
              v-model.trim="internal_cond.excess_heat.response"
              @input="$v.internal_cond.excess_heat.response.$touch()">
              <span class="help-block"
              v-if="$v.internal_cond.excess_heat.response.$error
              && !$v.internal_cond.excess_heat.response.required">
              Response is required</span>
            </div>
          </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.internal_cond.excess_heat.remark.$error }">
              <input type="text" class="form-control"
              v-model.trim="internal_cond.excess_heat.remark"
              @input="$v.internal_cond.excess_heat.remark.$touch()">
              <span class="help-block"
              v-if="$v.internal_cond.excess_heat.remark.$error
              && !$v.internal_cond.excess_heat.remark.required">
              Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Ventilation</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.internal_cond.ventilation.response.$error }">
              <input type="text" class="form-control"
              v-model.trim="internal_cond.ventilation.response"
              @input="$v.internal_cond.ventilation.response.$touch()">
              <span class="help-block"
              v-if="$v.internal_cond.ventilation.response.$error
              && !$v.internal_cond.ventilation.response.required">
              Response is required</span>
            </div>
          </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.internal_cond.ventilation.remark.$error }">
              <input type="text" class="form-control"
              v-model.trim="internal_cond.ventilation.remark"
              @input="$v.internal_cond.ventilation.remark.$touch()">
              <span class="help-block"
              v-if="$v.internal_cond.ventilation.remark.$error
              && !$v.internal_cond.ventilation.remark.required">
              Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Dry Air</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.internal_cond.dry_air.response.$error }">
              <input type="text" class="form-control"
              v-model.trim="internal_cond.dry_air.response"
              @input="$v.internal_cond.dry_air.response.$touch()">
              <span class="help-block"
              v-if="$v.internal_cond.dry_air.response.$error
              && !$v.internal_cond.dry_air.response.required">
              Response is required</span>
            </div>
          </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.internal_cond.dry_air.remark.$error }">
              <input type="text" class="form-control"
              v-model.trim="internal_cond.dry_air.remark"
              @input="$v.internal_cond.dry_air.remark.$touch()">
              <span class="help-block"
              v-if="$v.internal_cond.dry_air.remark.$error
              && !$v.internal_cond.dry_air.remark.required">
              Remark is required</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </fieldset>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      internal_cond: {
        moisture: { response: '', remark: '' },
        excess_heat: { response: '', remark: '' },
        ventilation: { response: '', remark: '' },
        dry_air: { response: '', remark: '' },
      },
    };
  },
  validations: {
    internal_cond: {
      moisture: { response: { required }, remark: { required } },
      excess_heat: { response: { required }, remark: { required } },
      ventilation: { response: { required }, remark: { required } },
      dry_air: { response: { required }, remark: { required } },
      form: [
        'internal_cond.moisture.response',
        'internal_cond.moisture.remark',
        'internal_cond.excess_heat.response',
        'internal_cond.excess_heat.remark',
        'internal_cond.ventilation.response',
        'internal_cond.ventilation.remark',
        'internal_cond.dry_air.response',
        'internal_cond.dry_air.remark',
      ],
    },
  },
  methods: {
    validate() {
      this.$v.internal_cond.form.$touch();
      const isValid = !this.$v.internal_cond.form.$invalid;
      this.$emit('on-validate', this.$data, isValid);
      return isValid;
    },
  },
};
</script>

<style>
.has-error {
  color: red;
}
</style>
