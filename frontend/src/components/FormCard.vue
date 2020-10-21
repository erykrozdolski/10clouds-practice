<template>
  <div class="card">
    <div class="layer">
      <span class="tint"></span>
      <img class="lines" src="../assets/lines.png" alt="">
    </div>
    <div class="form_box">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FormCard',
}
</script>

<style scoped lang="scss">

  .tint {
    background: rgba(#202020, .75);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .lines {
    height: 60%;
    z-index: 1;
  }

  .card {
    display: flex;
    justify-content: center;
    font-size: 13px;
    line-height: 24px;
    color: #202020;
  }

  .form_box {
    padding: 1rem 2rem 4rem;
    background: #FCFCFD;
    position: relative;
  }

  .layer {
    background: url('../assets/layer.png');
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    width: 15rem;
    background-size: cover;
    overflow: hidden;
    position: relative;
  }

</style>
