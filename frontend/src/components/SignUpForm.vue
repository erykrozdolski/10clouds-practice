<template lang="html">
  <div class="position-relative">
    <span class="indicator"></span>
    <span class="side_nav">
      <span class="nav_section">
        <div class="line"></div>
        <div class="nav_title">
          01<br>
        </div>
      </span>
      <span class="nav_section">
        <div class="line active"></div>
        <div class="nav_title">
          02<br>
          Personal
        </div>
      </span>
      <span class="nav_section">
        <div class="line"></div>
        <div class="nav_title">
          03<br>
        </div>
      </span>
    </span>
    <div class="form_container">
      <p class="form_info">
        Provide personal information so that we can <br>
        create a new account for you.
      </p>
      <div class="form-group">
        <label :class="{ empty : is_empty(name)}">Your name</label>
        <input
          :class="{ error : !is_empty(name_error)}"
          type="text"
          @input="name_error = ''"
          v-model="name"
        >
        <div class="error_msg">{{name_error}}</div>
      </div>
      <div class="form-group">
        <label>Mobile</label>
        <div class="inline-group flex-end">
          <CustomSelect
            class="borderless"
            :class="{ error : !is_empty(prefix_error)}"
            :values="phone_prefix_values"
            v-model="phone_prefix"
            @input="prefix_error = ''"
          />
          <input
            :class="{error : !is_empty(phone_error)}"
            maxlength="9"
            v-model="phone_number"
            type="number"
            @input="phone_error = ''"
          >
        </div>
        <div class="error_msg">{{prefix_error}}</div>
        <div class="error_msg">{{phone_error}}</div>
      </div>
      <div class="form-group" :class="{ error : !is_empty(chess_error) }">
        <label>Can you play chess?</label>
        <div class="row">
          <CustomRadio
            @input="chess_error = ''"
            :values="chess_values"
            v-model="can_play_chess"
          />
        </div>
        <div class="error_msg">{{chess_error}}</div>
      </div>
      <div class="form-group" :class="{ error : !is_empty(age_error) }">
        <label for="">Date of birth</label>
        <div class="inline-group">
          <CustomSelect
            :initial="birth_date_day"
            v-model="birth_date_day"
            @input="age_error = ''"
            :values="days_values"
          />
          <span class="divider">-</span>
          <CustomSelect
            class="medium_size"
            v-model="birth_date_month"
            :initial="birth_date_month"
            :values="month_values"
          />
          <span class="divider">-</span>
          <CustomSelect
            class="medium_size"
            v-model="birth_date_year"
            :initial="birth_date_year"
            :values="year_values"
          />
        </div>
        <div class="error_msg">{{age_error}}</div>
      </div>
    </div>

    <button type="button" name="button" class="btn_submit out_of_box_btn" @click="submit_form">
      <div class="btn_label">
        continue
      </div>
      <div class="btn_icon">
        <span class="material-icons">east</span>
      </div>
    </button>
  </div>
</template>

<script>

import { DateTime } from "luxon";

import CustomSelect from '@/components/form/CustomSelect.vue'
import CustomRadio from '@/components/form/CustomRadio.vue'

export default {
  name: 'SignUpForm',
  components: {
    CustomSelect, CustomRadio
  },
  data() {
    return {
      phone_prefix_values: [ "+93 (AFG)", "+48 (PL)", "+33 (FR)"],
      month_values: [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December",
      ],
      year_values: Array.from({length: 101}, (_, i) => i + 1920),
      chess_values: ["Yes", "No"],

      chess_error: '',
      name_error: '',
      phone_error: '',
      prefix_error: '',
      age_error: '',

      name: '',
      phone_number: '',
      phone_prefix: '',
      can_play_chess: '',

      birth_date_day: DateTime.local().day.toString(),
      birth_date_month: DateTime.local().monthLong.toString(),
      birth_date_year: DateTime.local().year.toString(),
    }
  },
  computed: {
    days_values: function () {
      let month_days = this.birth_date.daysInMonth;
      return Array.from({length: month_days}, (_, i) => i + 1)
    },
    birth_date: function () {
      let birth_date = DateTime.fromObject({
        year: this.birth_date_year,
        month: this.month_values.indexOf(this.birth_date_month) + 1,
        day: this.birth_date_day
      });
      return birth_date
    }
  },
  methods: {
    is_age_valid () {
      let birth_date = DateTime.fromObject({
        year: this.birth_date_year,
        month: this.month_values.indexOf(this.birth_date_month) + 1,
        day: this.birth_date_day
      });
      return (birth_date.diffNow('years').years < -18);
    },
    is_empty (s) {
      return s == ''
    },
    min_length (s, length) {
      return s.length >= length
    },
    exact_length (s, length) {
      return s.length == length
    },
    submit_form () {
      this.name_error = this.min_length(this.name, 3) ? '' : "Name should have a minimum 3 characters."
      this.prefix_error = this.is_empty(this.phone_prefix) ? "Phone prefix is required." : ''
      this.phone_error = this.exact_length(this.phone_number, 9) ? '' : "Mobile number should have 9 digits."
      this.chess_error = this.is_empty(this.can_play_chess) ? "This field is required." : ''
      this.age_error = this.is_age_valid() ? '' : "You must be above 18 years old."
      if ([this.name_error, this.prefix_error, this.phone_error, this.chess_error, this.age_error].every(v => v == '')) {
        this.$router.push("/next_section")
      }
    },
  }
}

</script>

<style lang="scss">

  @import "../../public/scss/_brand_variables.scss";

  .indicator {
    width: 6rem;
    height: .25rem;
    background: $brand_cyan;
    z-index: 2;
    position: absolute;
    top: -.25rem;
    left: 2rem;
  }

  label {
    color: #333333;
    font-size: .7rem;
    padding-left: .5rem;
    pointer-events: none;
    transition: .25s all;
    max-width: 20rem;
  }

  .divider {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 1rem;
    font-size: 2rem;
    margin: 0 .5rem;
    color: #A2A2AF;
  }

  .side_nav {
    position: absolute;
    right: -4rem;
    color: white;
    display: grid;
    grid-row-gap: 4rem;
    top: 20%;
    .line {
      width: 2rem;
      height: .125rem;
      background: rgba(#F9F9FB, .25);
      &.active {
        background: $brand_cyan;
      }
    }
    .nav_title {
      line-height: 1rem;
      margin-top: .5rem;
      padding-left: .5rem;
    }
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

  .inline-group {
    display: inline-flex;
  }

  .form_container {
    padding: 1rem 2rem 4rem 2rem;
    position: relative;
  }

  .out_of_box_btn {
    position: absolute;
    right: -3rem;
    bottom: -1rem;
  }

  .flex-end {
    align-items: flex-end;
  }

  .btn_submit {
    background: #7841F4;
    background: linear-gradient(90deg, #8658EB -0.42%, #652AE6 100.42%);
    box-shadow: 0px 20px 25px rgba(32, 31, 54, 0.15);
    cursor: pointer;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: unset;
    outline: none;
    text-transform: uppercase;
    font-weight: 200;
    padding: 0;
    .btn_icon {
      background: #7841F4;
      box-shadow: 0px 23px 24px rgba(13, 13, 31, 0.08);
      padding: .75rem
    }
    .btn_label {
      padding: 1rem 3rem;
    }
  }

  input {
    background: transparent;
    border: unset;
    color: #202020;
    border-bottom: 2px solid #DADAED;
    transition: .25s all;
    padding-left: .5rem;
    font-size: 1rem;
    padding-bottom: .5rem;
    &:focus {
      outline: none;
      border: unset;
      border-bottom: 2px solid #652AE6;
    }
    .error &, &.error {
      border-bottom: 2px solid $error_color;
      color: $error_color;
    }
  }

  .error_msg {
    color: #EB5757;
    transition: opacity 2s ease-in;
  }

</style>
