<template>
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
        <div class="line"></div>
        <div class="nav_title">
          02<br>
        </div>
      </span>
      <span class="nav_section">
        <div class="line active"></div>
        <div class="nav_title">
          03<br>
          Next section
        </div>
      </span>
    </span>
    <div class="form_container">
      <p class="form_info">
        In normal enviroment I would use probably <strong>Vue-Material</strong> or Vuetify for
        ready components and <strong>Vuelidate</strong> or Vue-Validate for validation.
        <br><br>
        I assumed (wishfull-thinkly) that the most important is main scope of task.
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NextSection',
}
</script>

<style scoped lang="scss">

  .side_nav {
    right: -6rem;
  }

  .form_info {
    width: 20rem;
  }

</style>
