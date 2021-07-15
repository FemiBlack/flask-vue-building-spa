<template>
  <fieldset>
    <h2>Work Experience Level</h2>
    <table style="width: 100%">
      <thead>
        <th>Field</th>
        <th>Response</th>
        <th>Remark</th>
      </thead>
      <tbody>
        <tr>
          <td>Dimension</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.work_xp_lvl.dimension.response.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="work_xp_lvl.dimension.response"
                @input="$v.work_xp_lvl.dimension.response.$touch()"
              />
              <span
                v-if="
                  $v.work_xp_lvl.dimension.response.$error &&
                  !$v.work_xp_lvl.dimension.response.required
                "
                >Response is required</span
              >
            </div>
          </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.work_xp_lvl.dimension.remark.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="work_xp_lvl.dimension.remark"
                @input="$v.work_xp_lvl.dimension.remark.$touch()"
              />
              <span
                v-if="
                  $v.work_xp_lvl.dimension.remark.$error &&
                  !$v.work_xp_lvl.dimension.remark.required
                "
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Misalignment/ Eccentricity</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.work_xp_lvl.misalignment.response.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="work_xp_lvl.misalignment.response"
                @input="$v.work_xp_lvl.misalignment.response.$touch()"
              />
              <span
                v-if="
                  $v.work_xp_lvl.misalignment.response.$error &&
                  !$v.work_xp_lvl.misalignment.response.required
                "
                >Response is required</span
              >
            </div>
          </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.work_xp_lvl.misalignment.remark.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="work_xp_lvl.misalignment.remark"
                @input="$v.work_xp_lvl.misalignment.remark.$touch()"
              />
              <span
                v-if="
                  $v.work_xp_lvl.misalignment.remark.$error &&
                  !$v.work_xp_lvl.misalignment.remark.required
                "
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Deflection/Cracking</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.work_xp_lvl.deflection.response.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="work_xp_lvl.deflection.response"
                @input="$v.work_xp_lvl.deflection.response.$touch()"
              />
              <span
                v-if="
                  $v.work_xp_lvl.deflection.response.$error &&
                  !$v.work_xp_lvl.deflection.response.required
                "
                >Response is required</span
              >
            </div>
          </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.work_xp_lvl.deflection.remark.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="work_xp_lvl.deflection.remark"
                @input="$v.work_xp_lvl.deflection.remark.$touch()"
              />
              <span
                v-if="
                  $v.work_xp_lvl.deflection.remark.$error &&
                  !$v.work_xp_lvl.deflection.remark.required
                "
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Excessive Waviness</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.work_xp_lvl.excess_waviness.response.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="work_xp_lvl.excess_waviness.response"
                @input="$v.work_xp_lvl.excess_waviness.response.$touch()"
              />
              <span
                v-if="
                  $v.work_xp_lvl.excess_waviness.response.$error &&
                  !$v.work_xp_lvl.excess_waviness.response.required
                "
                >Response is required</span
              >
            </div>
          </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.work_xp_lvl.excess_waviness.remark.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="work_xp_lvl.excess_waviness.remark"
                @input="$v.work_xp_lvl.excess_waviness.remark.$touch()"
              />
              <span
                v-if="
                  $v.work_xp_lvl.excess_waviness.remark.$error &&
                  !$v.work_xp_lvl.excess_waviness.remark.required
                "
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Corossion</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.work_xp_lvl.corossion.response.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="work_xp_lvl.corossion.response"
                @input="$v.work_xp_lvl.corossion.response.$touch()"
              />
              <span
                v-if="
                  $v.work_xp_lvl.corossion.response.$error &&
                  !$v.work_xp_lvl.corossion.response.required
                "
                >Response is required</span
              >
            </div>
          </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.work_xp_lvl.corossion.remark.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="work_xp_lvl.corossion.remark"
                @input="$v.work_xp_lvl.corossion.remark.$touch()"
              />
              <span
                v-if="
                  $v.work_xp_lvl.corossion.remark.$error &&
                  !$v.work_xp_lvl.corossion.remark.required
                "
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Insufficient bar spacing</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.work_xp_lvl.bar_spacing.response.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="work_xp_lvl.bar_spacing.response"
                @input="$v.work_xp_lvl.bar_spacing.response.$touch()"
              />
              <span
                v-if="
                  $v.work_xp_lvl.bar_spacing.response.$error &&
                  !$v.work_xp_lvl.bar_spacing.response.required
                "
                >Response is required</span
              >
            </div>
          </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.work_xp_lvl.bar_spacing.remark.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="work_xp_lvl.bar_spacing.remark"
                @input="$v.work_xp_lvl.bar_spacing.remark.$touch()"
              />
              <span
                v-if="
                  $v.work_xp_lvl.bar_spacing.remark.$error &&
                  !$v.work_xp_lvl.bar_spacing.remark.required
                "
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Deficient/ excessive cover</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.work_xp_lvl.deficient_cover.response.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="work_xp_lvl.deficient_cover.response"
                @input="$v.work_xp_lvl.deficient_cover.response.$touch()"
              />
              <span
                v-if="
                  $v.work_xp_lvl.deficient_cover.response.$error &&
                  !$v.work_xp_lvl.deficient_cover.response.required
                "
                >Response is required</span
              >
            </div>
          </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.work_xp_lvl.deficient_cover.remark.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="work_xp_lvl.deficient_cover.remark"
                @input="$v.work_xp_lvl.deficient_cover.remark.$touch()"
              />
              <span
                v-if="
                  $v.work_xp_lvl.deficient_cover.remark.$error &&
                  !$v.work_xp_lvl.deficient_cover.remark.required
                "
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Reinforcement out of specification</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.work_xp_lvl.reinforcement_spec.response.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="work_xp_lvl.reinforcement_spec.response"
                @input="$v.work_xp_lvl.reinforcement_spec.response.$touch()"
              />
              <span
                v-if="
                  $v.work_xp_lvl.reinforcement_spec.response.$error &&
                  !$v.work_xp_lvl.reinforcement_spec.response.required
                "
                >Response is required</span
              >
            </div>
          </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.work_xp_lvl.reinforcement_spec.remark.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="work_xp_lvl.reinforcement_spec.remark"
                @input="$v.work_xp_lvl.reinforcement_spec.remark.$touch()"
              />
              <span
                v-if="
                  $v.work_xp_lvl.reinforcement_spec.remark.$error &&
                  !$v.work_xp_lvl.reinforcement_spec.remark.required
                "
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Sequential construction</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.work_xp_lvl.seq_construction.response.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="work_xp_lvl.seq_construction.response"
                @input="$v.work_xp_lvl.seq_construction.response.$touch()"
              />
              <span
                v-if="
                  $v.work_xp_lvl.seq_construction.response.$error &&
                  !$v.work_xp_lvl.seq_construction.response.required
                "
                >Response is required</span
              >
            </div>
          </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.work_xp_lvl.seq_construction.remark.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="work_xp_lvl.seq_construction.remark"
                @input="$v.work_xp_lvl.seq_construction.remark.$touch()"
              />
              <span
                v-if="
                  $v.work_xp_lvl.seq_construction.remark.$error &&
                  !$v.work_xp_lvl.seq_construction.remark.required
                "
                >Remark is required</span
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>Internal Arrangement of Structural Element</td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.internal.seq_construction.response.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="internal.seq_construction.response"
                @input="$v.internal.seq_construction.response.$touch()"
              />
              <span
                v-if="
                  $v.internal.seq_construction.response.$error &&
                  !$v.internal.seq_construction.response.required
                "
                >Response is required</span
              >
            </div>
          </td>
          <td>
            <div
              class="form-group"
              v-bind:class="{
                'has-error': $v.internal.seq_construction.remark.$error,
              }"
            >
              <input
                type="text"
                class="form-control"
                v-model.trim="internal.seq_construction.remark"
                @input="$v.internal.seq_construction.remark.$touch()"
              />
              <span
                v-if="
                  $v.internal.seq_construction.remark.$error &&
                  !$v.internal.seq_construction.remark.required
                "
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
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      work_xp_lvl: {
        dimension: { response: "", remark: "" },
        misalignment: { response: "", remark: "" },
        deflection: { response: "", remark: "" },
        excess_waviness: { response: "", remark: "" },
        corossion: { response: "", remark: "" },
        bar_spacing: { response: "", remark: "" },
        deficient_cover: { response: "", remark: "" },
        reinforcement_spec: { response: "", remark: "" },
        seq_construction: { response: "", remark: "" },
        internal: { response: "", remark: "" },
      },
    };
  },
  validations: {
    work_xp_lvl: {
      dimension: { response: { required }, remark: { required } },
      misalignment: { response: { required }, remark: { required } },
      deflection: { response: { required }, remark: { required } },
      excess_waviness: { response: { required }, remark: { required } },
      corossion: { response: { required }, remark: { required } },
      bar_spacing: { response: { required }, remark: { required } },
      deficient_cover: { response: { required }, remark: { required } },
      reinforcement_spec: { response: { required }, remark: { required } },
      seq_construction: { response: { required }, remark: { required } },
      internal: { response: { required }, remark: { required } },
      form: [
        "work_xp_lvl.dimension.response",
        "work_xp_lvl.dimension.remark",
        "work_xp_lvl.misalignment.response",
        "work_xp_lvl.misalignment.remark",
        "work_xp_lvl.deflection.response",
        "work_xp_lvl.deflection.remark",
        "work_xp_lvl.excess_waviness.response",
        "work_xp_lvl.excess_waviness.remark",
        "work_xp_lvl.corossion.response",
        "work_xp_lvl.corossion.remark",
        "work_xp_lvl.bar_spacing.response",
        "work_xp_lvl.bar_spacing.remark",
        "work_xp_lvl.deficient_cover.response",
        "work_xp_lvl.deficient_cover.remark",
        "work_xp_lvl.reinforcement_spec.response",
        "work_xp_lvl.reinforcement_spec.remark",
        "work_xp_lvl.seq_construction.response",
        "work_xp_lvl.seq_construction.remark",
        "work_xp_lvl.internal.response",
        "work_xp_lvl.internal.remark",
      ],
    },
  },
  methods: {
    validate() {
      this.$v.work_xp_lvl.form.$touch();
      const isValid = !this.$v.work_xp_lvl.form.$invalid;
      this.$emit("on-validate", this.$data, isValid);
      return isValid;
    },
  },
};
</script>

<style>
.has-error,
.invalid-feedback {
  color: red;
}
</style>
