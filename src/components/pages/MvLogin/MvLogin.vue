<template>
  <div class="login">
    <section class="login-area">
      <MvCredencials />
    </section>
    <MvFooter />
  </div>
</template>

<script>
import MvCredencials from '../../shared-components/MvCredencials/MvCredencials'
import MvFooter from '../../shared-components/MvFooter/MvFooter'

export default {
  name: 'MvLoginPage',
  components: { MvCredencials, MvFooter },
  data () {
    return {}
  },
  mounted () {
    console.log(this.$breadcrumbs)
    // this._createBreadcrumbPaths()
  }
}
</script>
