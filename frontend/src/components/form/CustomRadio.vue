<template lang="html">
  <div class="custom_radio">
    <div v-for="value in values" :key="value" class="">
      <button class="radio_btn" type="button" name="button" @click="select_option(value)">
        {{value}}
        <span class="rect">
          <span class="dot"></span>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomRadio",
  props: {
    values: Array
  },
  data() {
    return {
      selected: this.values[0]
    }
  },
  methods: {
    select_option (v) {
      this.selected = v
    }
  }
}
</script>

<style lang="scss">


  .custom_radio {
    display: flex;
  }

  .radio_btn {
    background: transparent;
    border: 2px solid #DADAED;
    color: #202020;
    text-align: center;
    padding: .75rem;
    margin-right: 1rem;
    outline:none;
    position: relative;
    .rect {
      position: absolute;
      width: .5rem;
      height: .5rem;
      top: 0;
      bottom: 0;
      right: -.35rem;
      margin: auto;
      background: #FCFCFD;
      border: 2px solid #DADAED;
    }
    &.selected {
      border: 1px solid #1BFEC0;
      .rect {
        border: 1px solid #1BFEC0;
      }
    }
  }


</style>
