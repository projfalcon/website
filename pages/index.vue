<template>
  <div class="container">
    <Header />
    <LatestProject />
    <WhatWeDo />
    <Perks />
    <Contact />
  </div>
</template>

<script>
import Header from '@/components/Header'

import LatestProject from '@/components/LatestProject'
import WhatWeDo from '@/components/WhatWeDo'
import Perks from '@/components/Perks'
import Contact from '@/components/Contact'

export default {
  components: {
    Header,
    LatestProject,
    WhatWeDo,
    Perks,
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
