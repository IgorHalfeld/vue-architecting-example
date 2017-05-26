<template>
  <header class="new-service-navbar">
    <article class="new-service-navbar-content">
      <img
        class="new-service-navbar-content-image"
        :src="imageLogoPath"
        :alt="imageAltProperty" />

      <MvMenu user-logged="Igor" />
    </article>
  </header>
</template>

<script>
import MvMenu from '../MvMenu/MvMenu'

export default {
  name: 'MvNavbar',
  components: { MvMenu },
  props: {
    imageLogoPath: {
      type: String,
      default: 'https://www.moveleiros.com.br/images_db/mp/images/logo-white.svg'
    },
    imageAltProperty: {
      type: String,
      default: 'Logo moveleiros'
    }
  },
  data () {
    return {
      userLogged: 'Austin',
      links: [
        {
          name: 'Produto',
          routeName: 'product'
        },
        {
          name: 'Categorias',
          routeName: 'categories'
        }
      ]
    }
  }
}
</script>
