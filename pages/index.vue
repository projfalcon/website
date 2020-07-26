<template>
  <div class="container">
    <Header />
    <LatestProject />
    <WhatWeDo />

    <span id="what-we-do-perks-separator" class="hr" />

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
  margin-top: 6.625rem;

  @media (min-width: $mobile-breakpoint) {
    span.hr#what-we-do-perks-separator {
      display: none;
    }
  }

  @media (max-width: $mobile-breakpoint) {
    margin-top: 0;
  }
}
</style>
