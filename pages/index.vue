<template>
  <div class="container">
    <Header />
    <LatestProject />
    <OurProcess />
  </div>
</template>

<script>
import Header from '@/components/Header'

import LatestProject from '@/components/LatestProject'
import OurProcess from '@/components/OurProcess'

export default {
  components: {
    Header,
    LatestProject,
    OurProcess
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 10.5rem);
  margin-top: 10.5rem;
}
</style>
