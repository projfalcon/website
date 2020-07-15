<template>
  <div class="container">
    <Header />
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 10.5rem);
  margin-top: 10.5rem;
}
</style>
