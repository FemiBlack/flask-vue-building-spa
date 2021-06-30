<template>
  <fieldset>
    <h2>Design Level</h2>
    <table style="width: 100%;">
      <thead>
        <th>Field</th>
        <th>Response</th>
        <th>Remark</th>
      </thead>
      <tbody>
        <tr>
          <td>Dimension of Elements</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.design_lvl.dimension.response.$error }">
            <input
              type="text"
              class="form-control"
              v-model.trim="design_lvl.dimension.response"
              @input="$v.design_lvl.dimension.response.$touch()"
            />
            <span 
              v-if="$v.design_lvl.dimension.response.$error
              && !$v.design_lvl.dimension.response.required"
              >Response is required</span
            >
          </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.design_lvl.dimension.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="design_lvl.dimension.remark"
                @input="$v.design_lvl.dimension.remark.$touch()"
              />
              <span 
                v-if="$v.design_lvl.dimension.remark.$error
                && !$v.design_lvl.dimension.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Spanning/ Heights</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.design_lvl.spanning.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="design_lvl.spanning.response"
                @input="$v.design_lvl.spanning.response.$touch()"
              />
              <span
                
                v-if="$v.design_lvl.spanning.response.$error
                && !$v.design_lvl.spanning.response.required"
                >Response is required</span>
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.design_lvl.spanning.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="design_lvl.spanning.remark"
                @input="$v.design_lvl.spanning.remark.$touch()"
              />
              <span
                
                v-if="$v.design_lvl.spanning.remark.$error
                && !$v.design_lvl.spanning.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Arrangement(Structural)/ Configuration</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.design_lvl.configuration.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="design_lvl.configuration.response"
                @input="$v.design_lvl.configuration.response.$touch()"
              />
              <span
                
                v-if="$v.design_lvl.configuration.response.$error
                && !$v.design_lvl.configuration.response.required"
                >Response is required</span>
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.design_lvl.configuration.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="design_lvl.configuration.remark"
                @input="$v.design_lvl.configuration.remark.$touch()"
              />
              <span
                
                v-if="$v.design_lvl.configuration.remark.$error
                && !$v.design_lvl.configuration.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Redundant Element</td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.design_lvl.redundant_element.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="design_lvl.redundant_element.response"
                @input="$v.design_lvl.redundant_element.response.$touch()"
              />
              <span 
                v-if="$v.design_lvl.redundant_element.response.$error
                && !$v.design_lvl.redundant_element.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
              v-bind:class="{ 'has-error': $v.design_lvl.redundant_element.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="design_lvl.redundant_element.remark"
                @input="$v.design_lvl.redundant_element.remark.$touch()"
              />
              <span 
                v-if="$v.design_lvl.redundant_element.remark.$error
                && !$v.design_lvl.redundant_element.remark.required"
                >Remark is required</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Loading</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.design_lvl.loading.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="design_lvl.loading.response"
                @input="$v.design_lvl.loading.response.$touch()"
              />
              <span 
                v-if="$v.design_lvl.loading.response.$error
                && !$v.design_lvl.loading.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.design_lvl.loading.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="design_lvl.loading.remark"
                @input="$v.design_lvl.loading.remark.$touch()"
              />
              <span 
                v-if="$v.design_lvl.loading.remark.$error
                && !$v.design_lvl.loading.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Structural Defect</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.design_lvl.structural_defect.response.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="design_lvl.structural_defect.response"
                @input="$v.design_lvl.structural_defect.response.$touch()"
              />
              <span
                
                v-if="$v.design_lvl.structural_defect.response.$error
                && !$v.design_lvl.structural_defect.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{ 'has-error': $v.design_lvl.structural_defect.remark.$error }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="design_lvl.structural_defect.remark"
                @input="$v.design_lvl.structural_defect.remark.$touch()"
              />
              <span
                
                v-if="$v.design_lvl.structural_defect.remark.$error
                && !$v.design_lvl.structural_defect.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Deformation</td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.design_lvl.deformation.response.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="design_lvl.deformation.response"
                @input="$v.design_lvl.deformation.response.$touch()"
              />
              <span
                
                v-if="$v.design_lvl.deformation.response.$error
                && !$v.design_lvl.deformation.response.required"
                >Response is required</span
              >
            </div>
        </td>
          <td>
            <div class="form-group"
            v-bind:class="{ 'has-error': $v.design_lvl.deformation.remark.$error }">
              <input
                type="text"
                class="form-control"
                v-model.trim="design_lvl.deformation.remark"
                @input="$v.design_lvl.deformation.remark.$touch()"
              />
              <span
                
                v-if="$v.design_lvl.deformation.remark.$error
                && !$v.design_lvl.deformation.remark.required"
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!--
     -->
  </fieldset>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      design_lvl: {
        dimension: { response: '', remark: '' },
        spanning: { response: '', remark: '' },
        configuration: { response: '', remark: '' },
        redundant_element: { response: '', remark: '' },
        loading: { response: '', remark: '' },
        structural_defect: { response: '', remark: '' },
        deformation: { response: '', remark: '' },
      },
    };
  },
  validations: {
    design_lvl: {
      dimension: { response: { required }, remark: { required } },
      spanning: { response: { required }, remark: { required } },
      configuration: { response: { required }, remark: { required } },
      redundant_element: { response: { required }, remark: { required } },
      loading: { response: { required }, remark: { required } },
      structural_defect: { response: { required }, remark: { required } },
      deformation: { response: { required }, remark: { required } },
      form: [
        'design_lvl.dimension.response',
        'design_lvl.dimension.remark',
        'design_lvl.spanning.response',
        'design_lvl.spanning.remark',
        'design_lvl.configuration.response',
        'design_lvl.configuration.remark',
        'design_lvl.redundant_element.response',
        'design_lvl.redundant_element.remark',
        'design_lvl.loading.response',
        'design_lvl.loading.remark',
        'design_lvl.structural_defect.response',
        'design_lvl.structural_defect.remark',
        'design_lvl.deformation.response',
        'design_lvl.deformation.remark',
      ],
    },
  },
  methods: {
    validate() {
      this.$v.design_lvl.form.$touch();
      const isValid = !this.$v.design_lvl.form.$invalid;
      this.$emit('on-validate', this.$data, isValid);
      return isValid;
    },
  },
};
</script>

<style>
.has-error, .invalid-feedback {
  color: red;
}
</style>
