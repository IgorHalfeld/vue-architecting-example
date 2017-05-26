<template>
  <div class="new-service">

    <!-- Logo with links -->
    <MvNavbar />

    <!-- Card list -->
    <router-view></router-view>

    <!-- Footer -->
    <MvFooter />
  </div>
</template>

<script>
import MvNewServiceListCards from './MvNewServiceListCards'

export default {
  name: 'MvNewServicePage',
  components: { MvNewServiceListCards }
}
</script>
