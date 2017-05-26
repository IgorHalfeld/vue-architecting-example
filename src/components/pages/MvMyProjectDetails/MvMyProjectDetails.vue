<template>
  <div class="myproject-details">
    <!-- Logo with links -->
    <MvNavbar />

    <ol class="breadcrumb">
      <li class="breadcrumb-item" v-for="path in paths">
        <router-link :to="path.link">{{ path.name | capitalize }}</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
import MvNavbar from '../../shared-components/MvNavbar/MvNavbar'

export default {
  name: 'MvMyProjectDetails',
  components: { MvNavbar },
  data () {
    return {
      paths: undefined
    }
  },
  mounted () {
    console.log(this.$breadcrumbs)
    // this._createBreadcrumbPaths()
  },
  methods: {
    _createBreadcrumbPaths () {
      const paths = this.$route.fullPath.split('/')
      const finalPaths = []
      const url = ['/']

      for (const path of paths) {
        /**
         * If current path is empty, means is home path
         */
        if (path === '') {
          finalPaths.push({
            link: '/',
            name: 'início'
          })
        } else {
          /**
           * Replace all dash that contains
           * on url path by space
           */
          const name = path.replace(/-/, ' ')
          const link = `/${path}`
          finalPaths.push({
            link,
            name
          })
          url.push(link)
        }
      }

      this.paths = finalPaths
    }
  }
}
</script>
