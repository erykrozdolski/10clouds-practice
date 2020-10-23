<template lang="html">
  <div class="custom_radio">
    <div v-for="v in values" :key="v" class="">
      <button
        class="radio_btn"
        :class="{ selected : is_selected(v) }"
        type="button"
        name="button"
        @click="select_option(v); $emit('input', v)"
      >
        {{v}}
        <span class="rect">
          <span v-if="is_selected(v)" class="dot"></span>
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
      selected: ''
    }
  },
  methods: {
    select_option (v) {
      this.selected = v;
    },
    is_selected(v) {
      return this.selected == v
    }
  }
}
</script>

<style lang="scss">

  .dot {
    height: 4px;
    width: 4px;
    background: #1BFEC0;
  }

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
    outline: none;
    position: relative;
    font-size: 1rem;
    transition: .25s all;
    cursor: pointer;
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
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.selected {
      border: 2px solid #1BFEC0;
      .rect {
        border: 2px solid #1BFEC0;
      }
    }
  }


</style>
