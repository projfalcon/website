<template>
  <div>
    <Navbar />

    <Nuxt />

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Navigation/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
html,
body {
  font-family: "Montserrat";
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
</style>
