<template>
  <el-card class="box-card">
    <form class="login-area-credencials">
      <img class="login-area-credencials-logo" :src="imageLogoPath" :alt="imageAltProperty">

        <!-- START user credencials -->
        <div class="login-area-credencials-group">
          <i class="fa fa-user-circle login-icon-user" aria-hidden="true"></i>
          <input class="login-area-credencials-group-user" type="text" placeholder="Usuário">
        </div>
        <!-- END user credencials -->

        <!-- START password credencials -->
        <div class="login-area-credencials-group">
          <i class="fa fa-lock login-icon-password" aria-hidden="true"></i>
          <input class="login-area-credencials-group-password" type="password" placeholder="Senha">
        </div>
        <!-- END password credencials -->

        <input class="login-area-credencials-button" type="submit" value="ENVIAR">
      <p class="login-area-credencials-forgotpassword">Esqueceu a senha? <a href="/redirect">Clique aqui.</a></p>
    </form>
  </el-card>
</template>

<script>
export default {
  name: 'MvCredencials',
  props: {
    imageLogoPath: {
      type: String,
      default: 'https://www.moveleiros.com.br/images_db/mp/images/logo.svg'
    },
    imageAltProperty: {
      type: String,
      default: 'Logo moveleiros'
    }
  },
  data () {
    return {}
  }
}
</script>
