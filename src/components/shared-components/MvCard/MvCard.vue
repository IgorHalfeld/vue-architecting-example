<template>
  <div class="card">

    <!-- START card content -->
    <el-card class="box-card">
      <div class="new-service-container-cards-card">
        <div class="card-icon-box">
          <i
            :class="iconName"
            class="fa card-icon"></i>
        </div>
        <h2 class="card-title">{{ title }}</h2>
        <p class="card-description">{{ description }}</p>
      </div>
    </el-card>
    <!-- END card content -->

    <!-- START arrow icon -->
    <div class="new-service-icon-box">
      <router-link :to="linkRouteConfig">
        <i class="fa fa-arrow-right new-service-icon"></i>
      </router-link>
    </div>
    <!-- END arrow icon -->
  </div>
</template>

<script>
export default {
  name: 'MvCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    iconName: {
      type: String,
      required: true
    },
    linkRouteConfig: {
      type: Object,
      default () {
        return { name: 'Login' }
      }
    }
  }
}
</script>
