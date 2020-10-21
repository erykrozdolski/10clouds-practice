<template>
  <div class="login_page">
    <span class="bg_shape">
      <img src="../assets/shape.svg" alt="">
    </span>
    <h1 class="title">Your account</h1>
    <FormCard>
      <SignUpForm/>
    </FormCard>
  </div>
</template>

<script>

import SignUpForm from '@/components/SignUpForm.vue'
import FormCard from '@/components/FormCard.vue'

export default {
  name: 'SignUp',
  components: {
    FormCard, SignUpForm
  }
}
</script>

<style scoped lang="scss">

  .title {
    color: white;
    font-family: Roboto;
    font-weight: normal;
    text-align: center;
  }

  .login_page {
    background: #242424;
    position: absolute;
    padding-top: 2rem;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }

  .bg_shape {
    position: absolute;
    left:0;
    top: 0px;
  }

</style>
