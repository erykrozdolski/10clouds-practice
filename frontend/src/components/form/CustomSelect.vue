<template lang="html">
  <div class="custom_select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="value in values"
        :key="value"
        @click="
          selected = value;
          open = false;
          $emit('input', value);
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
    values: Array
  },
  data() {
    return {
      open: false,
      selected: '',
    }
  }
}
</script>

<style lang="scss">

  .custom_select {
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;
    height: 47px;
    line-height: 47px;
  }

  .custom_select .selected {
    cursor: pointer;
    user-select: none;
  }

  .custom_select .selected.open {
    border: 1px solid #ad8225;
  }

  .custom_select .selected:after {
    position: absolute;
    content: "";
    top: 22px;
    right: 1em;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: #fff transparent transparent transparent;
  }

  .custom-select .items {
    color: #fff;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border-right: 1px solid #ad8225;
    border-left: 1px solid #ad8225;
    border-bottom: 1px solid #ad8225;
    position: absolute;
    background-color: #0a0a0a;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .custom-select .items div {
    color: #fff;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
  }

  .custom-select .items div:hover {
    background-color: #ad8225;
  }

  .selectHide {
    display: none;
  }

</style>
