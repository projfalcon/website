<template>
  <div class="container">
    <Header />
    <LatestProject />
  </div>
</template>

<script>
import Header from '@/components/Header'

import LatestProject from '@/components/LatestProject'

export default {
  components: {
    Header,
    LatestProject
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 10.5rem);
  margin-top: 10.5rem;
}
</style>
