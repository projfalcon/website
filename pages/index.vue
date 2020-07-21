<template>
  <div class="container">
    <Header />
    <LatestProject />
    <OurProcess />
    <Contact />
  </div>
</template>

<script>
import Header from '@/components/Header'

import LatestProject from '@/components/LatestProject'
import OurProcess from '@/components/OurProcess'
import Contact from '@/components/Contact'

export default {
  components: {
    Header,
    LatestProject,
    OurProcess,
    Contact
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 10.5rem);
  margin-top: 6.125rem;
}
</style>
