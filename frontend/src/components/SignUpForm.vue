<template lang="html">
  <div class="">
    <p class="form_info">
      Provide personal information so that we can <br>
      create a new account for you.
    </p>
    <div class="form-group">
      <label for="">Your name</label>
      <input type="text" name="" value="">
    </div>
    <div class="form-group">
      <label for="">Mobile</label>
      <div>
        <CustomSelect :values="phone_direction_values" v-model="phone_direction"/>
        <input v-model="phone_number" type="text" name="" value="">
      </div>
    </div>
    <div class="form-group">
      <label for="">Can you play chess?</label>
      <div class="row">
        <CustomRadio :values="chess_values"/>
      </div>
    </div>
    <div class="form-group">
      <label for="">Date of birth</label>
      <div class="row">
        <CustomSelect :values="month_values"/>
        <CustomSelect :values="year_value"/>
      </div>
    </div>
  </div>
</template>

<script>

import CustomSelect from '@/components/form/CustomSelect.vue'
import CustomRadio from '@/components/form/CustomRadio.vue'

export default {
  name: 'SignUpForm',
  components: {
    CustomSelect, CustomRadio
  },
  data() {
    return {
      phone_direction_values: ["+48 (PL)"],
      month_values: [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December",
      ],
      year_values: [],
      chess_values: ["Yes", "No"],
      form: {
        name: '',
        phone_direction: '',
        phone_number: '',
        can_play_chess: '',
        birth_date: '',
      },
    }
  },
  methods: {
    submit_form () {

    }
  }
}

</script>

<style lang="scss">

  label {
    color: #333333;
    font-size: .75rem;
    padding-left: .5rem;
  }

  .form_info {
    font-size: .8rem;
    line-height: 24px;
    text-align: left;
    margin-bottom: 3rem;
  }

  .form-group {
    display: grid;
    margin-bottom: 1rem;
  }

  input {
    background: transparent;
    border: unset;
    color: #202020;
    border-bottom: 2px solid #DADAED;
    transition: .25s all;
    padding-left: .5rem;
    font-size: 1rem;
    &:focus {
      outline: none;
      border: unset;
      border-bottom: 2px solid #652AE6;
    }
  }


</style>
