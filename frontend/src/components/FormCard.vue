<template>
  <div class="card">
    <div class="layer">
      <span class="tint"></span>
      <img class="lines" src="../assets/images/lines.png" alt="">
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
    width: 90%;
    z-index: 1;
  }

  .card {
    display: flex;
    justify-content: center;
    font-size: 13px;
    line-height: 24px;
    color: #202020;
    margin-bottom: 2rem;
  }

  .position-relative {
    position: relative;
  }

  .form_box {
    position: relative;
    background:
      linear-gradient(5.9deg,
        rgba(165, 165, 180, 0.15) 3.87%,
        rgba(228, 235, 239, 0.15) 96.13%,
        rgba(231, 232, 238, 0.15) 96.13%,
        rgba(231, 232, 238, 0.15) 96.13%
      ),
      linear-gradient(0deg, #FCFCFD, #FCFCFD);
  }


  .layer {
    background: url('../assets/images/layer.png');
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
