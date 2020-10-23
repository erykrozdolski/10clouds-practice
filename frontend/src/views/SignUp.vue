<template>
  <div class="login_page">
    <span class="bg_shape">
      <img src="../assets/images/shape.svg" alt="">
    </span>
    <h1 class="title">Your account</h1>
    <FormCard>
      <router-view></router-view>
    </FormCard>
  </div>
</template>

<script>

import FormCard from '@/components/FormCard.vue'

export default {
  name: 'SignUp',
  components: {
    FormCard
  },
  methods: {
    next_box() {
      alert();
    }
  }
}

</script>

<style scoped lang="scss">

  .title {
    color: white;
    font-family: "Roboto_Light";
    font-weight: 300;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    position: relative;
  }

  .bg_shape {
    position: absolute;
    left: 0;
    top: 0;
  }

</style>
