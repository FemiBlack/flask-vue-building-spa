<template>
  <fieldset>
    <h2>General Well Being of Building</h2>
    <table>
      <thead>
        <th>Field</th>
        <th>Response</th>
        <th>Remark</th>
      </thead>
      <tbody>
        <tr>
          <td>Foundation Settlement</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.general_being.foundation_sett.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="general_being.foundation_sett.response"
                @input="$v.general_being.foundation_sett.response.$touch()"
              />
              <span
                class="help-block"
                v-if="$v.general_being.foundation_sett.response.$error
                && !$v.general_being.foundation_sett.response.required"
                >Response is required</span
              >
            </div>
          </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.general_being.foundation_sett.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="general_being.foundation_sett.remark"
                @input="$v.general_being.foundation_sett.remark.$touch()"
              />
              <span
                class="help-block"
                v-if="$v.general_being.foundation_sett.remark.$error
                && !$v.general_being.foundation_sett.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Deformation</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.general_being.deformation.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="general_being.deformation.response"
                @input="$v.general_being.deformation.response.$touch()"
              />
              <span
                class="help-block"
                v-if="$v.general_being.deformation.response.$error
                && !$v.general_being.deformation.response.required"
                >Response is required</span
              >
            </div>
          </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.general_being.deformation.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="general_being.deformation.remark"
                @input="$v.general_being.deformation.remark.$touch()"
              />
              <span
                class="help-block"
                v-if="$v.general_being.deformation.remark.$error
                && !$v.general_being.deformation.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Defects</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.general_being.defects.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="general_being.defects.response"
                @input="$v.general_being.defects.response.$touch()"
              />
              <span class="help-block"
                v-if="$v.general_being.defects.response.$error
                && !$v.general_being.defects.response.required"
                >Response is required</span
              >
            </div>
          </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.general_being.defects.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="general_being.defects.remark"
                @input="$v.general_being.defects.remark.$touch()"
              />
              <span class="help-block"
                v-if="$v.general_being.defects.remark.$error
                && !$v.general_being.defects.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Cracks</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.general_being.cracks.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="general_being.cracks.response"
                @input="$v.general_being.cracks.response.$touch()"
              />
              <span class="help-block"
                v-if="$v.general_being.cracks.response.$error
                && !$v.general_being.cracks.response.required"
                >Response is required</span
              >
            </div>
          </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.general_being.cracks.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="general_being.cracks.remark"
                @input="$v.general_being.cracks.remark.$touch()"
              />
              <span class="help-block"
                v-if="$v.general_being.cracks.remark.$error
                && !$v.general_being.cracks.remark.required"
                >Remark is required</span
              >
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
      general_being: {
        foundation_sett: { response: '', remark: '' },
        deformation: { response: '', remark: '' },
        defects: { response: '', remark: '' },
        cracks: { response: '', remark: '' },
      },
    };
  },
  validations: {
    general_being: {
      foundation_sett: { response: { required }, remark: { required } },
      deformation: { response: { required }, remark: { required } },
      defects: { response: { required }, remark: { required } },
      cracks: { response: { required }, remark: { required } },
      form: [
        'general_being.foundation_sett.response',
        'general_being.foundation_sett.remark',
        'general_being.deformation.response',
        'general_being.deformation.remark',
        'general_being.defects.response',
        'general_being.defects.remark',
        'general_being.cracks.response',
        'general_being.cracks.remark',
      ],
    },
  },
  methods: {
    validate() {
      this.$v.general_being.form.$touch();
      const isValid = !this.$v.general_being.form.$invalid;
      this.$emit('on-validate', this.$data, isValid);
      return isValid;
    },
  },
};
</script>
