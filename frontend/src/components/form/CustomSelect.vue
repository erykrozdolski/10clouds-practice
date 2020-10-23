<template lang="html">
  <div class="custom_select" tabindex="0" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
      <span :class="{ hidden : this.initial == '' }" class="material-icons">arrow_drop_down</span>
    </div>
    <div class="items" :class="{ hidden: !open }">
      <div
        class="item"
        v-for="value in values"
        :key="value"
        @click="
          selected = value;
          open = false;
          $emit('input', value.toString());
        "
      >
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    values: Array,
    initial: String,
  },
  data() {
    return {
      open: false,
      selected: this.initial,
    }
  }
}
</script>

<style lang="scss">

  $error_color: #EB5757;

  .custom_select {
    position: relative;
    width: 100%;
    outline: none;
    .selected {
      cursor: pointer;
      user-select: none;
      background: transparent;
      border: 2px solid #DADAED;
      color: #202020;
      text-align: center;
      padding: .5rem;
      outline:none;
      position: relative;
      display: flex;
      justify-content: space-between;
      height: 1.5rem;
      font-size: 1rem;
      &.open {
        border: 2px solid #7841F4;
      }
      span {
        color: #2F3030;
        opacity: .25;
        font-size: 1rem;
        line-height: inherit;
      }
    }
    &.borderless {
      margin-right: 1rem;
      .selected {
        border-color: transparent;
        border-bottom: 2px solid #DADAED;
        width: 6rem;
        justify-content: space-between;
      }
      .error &, &.error {
        color: $error_color;
        border-bottom: 2px solid $error_color;
      }
    }
    &.medium_size {
      .selected {
        max-width: 10rem ;
      }
    }
  }

  .items {
    max-height: 10rem;
    position: absolute;
    background: white;
    border: 1px solid #DADAED;
    overflow: auto;
    width: 100%;
    z-index: 2;
    margin-bottom: 1rem;
    .item {
      padding: .125rem .25rem;
      cursor: pointer;
      padding-left: 1em;
      user-select: none;
      &:hover {
        background-color: #DADAED;
      }
    }
  }

</style>
