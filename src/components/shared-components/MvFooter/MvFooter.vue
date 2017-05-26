<template>
  <footer class="login-footer">
    <h3 class="login-footer-copyright">© 2017 Moveleiros | Todos os direitos reservados.</h3>
    <img class="login-footer-logo" :src="imageLogoPath" alt="logo">
  </footer>
</template>

<script>
export default {
  name: 'MvFooter',
  props: {
    imageLogoPath: {
      type: String,
      default: 'https://www.moveleiros.com.br/images_db/mp/images/logo-white.svg'
    },
    imageAltProperty: {
      type: String,
      default: 'Logo moveleiros'
    }
  }
}
</script>
