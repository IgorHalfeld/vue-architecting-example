<template>
  <!-- START card list -->
  <section class="new-service-container">
    <article class="new-service-container-cards">
      <MvCard
        title="Meus projetos"
        description="Visualize seus projetos."
        icon-name="fa-object-ungroup"
        :link-route-config="cardMyProjectRouteConfig" />
      <MvCard
        title="Meus contratos"
        description="Visualize seus contratos."
        icon-name="fa-file-text-o" />
      <MvCard
        title="Favoritos"
        description="Visualize seus dados."
        icon-name="fa-heart" />
      <MvCard
        title="Meus dados"
        description="Visualize seus dados."
        icon-name="fa-address-card" />
    </article>
  </section>
  <!-- END card list -->
</template>

<script>
import MvNavbar from '../../shared-components/MvNavbar/MvNavbar'
import MvFooter from '../../shared-components/MvFooter/MvFooter'
import MvCard from '../../shared-components/MvCard/MvCard'

export default {
  name: 'MyMyProjectsListCards',
  components: { MvNavbar, MvFooter, MvCard },
  computed: {
    cardMyProjectRouteConfig () {
      return { name: 'MyProjects' }
    }
  }
}
</script>
