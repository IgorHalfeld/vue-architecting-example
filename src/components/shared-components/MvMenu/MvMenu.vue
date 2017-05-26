<template>
  <ul class="menu">
    <li class="menu-item" v-if="userLogged">
      <router-link to="/Login">Olá, {{ userLogged }}</router-link>
    </li>

    <!-- START Dynamic route by props -->
    <li
      class="menu-item"
      v-if="!links"
      v-for="link in links">
      <router-link :to="link.routeName">{{ link.name }}</router-link>
    </li>
    <!-- END Dynamic route by props -->

    <li
      class="menu-item"
      v-if="userLogged"
      :class="{ 'bold': userLogged }">
      <router-link to="Logout">SAIR</router-link>
      <i class="fa fa-sign-out"></i>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MvMenu',
  props: {
    userLogged: {
      type: String
    },
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>
