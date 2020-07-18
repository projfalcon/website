<template>
  <nav :class="{ active: Active }">
    <div class="nav-content">
      <nuxt-link to="/" tag="div" class="logo">
        <img src="~assets/logo/long.svg" alt="Project Falcon">
      </nuxt-link>

      <div class="links">
        <nuxt-link id="home-link" to="/" tag="a">
          Home
        </nuxt-link>

        <nuxt-link id="about-link" to="about" tag="a">
          About
        </nuxt-link>

        <nuxt-link id="team-link" to="team" tag="a">
          Team
        </nuxt-link>

        <nuxt-link id="work-link" to="work" tag="a">
          Work
        </nuxt-link>

        <nuxt-link to="#" tag="a" class="colored">
          Get in touch
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      Active: false
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.watchScroll)
  },
  methods: {
    watchScroll (event) {
      const scroll = window.scrollY

      if (scroll > 0) this.Active = true
      else this.Active = false
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  transition: ease all 0.3s;

  &.active {
    background-color: #fff;
    box-shadow: 0 0 0 0.125rem $primary;
  }

  .nav-content {
    display: flex;
    align-items: center;
    padding: 2.25rem 0;
    margin: 0 auto;

    .logo {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .links {
      display: flex;
      margin-left: auto;

      a {
        display: block;
        font-family: "Hind";
        text-decoration: none;
        font-size: 1rem;
        line-height: 1.5rem;
        color: $text-primary;
        transition: ease color 0.3s;

        &:not(:last-of-type) {
          margin-right: 3rem;
        }

        &:hover {
          color: $primary;
        }

        &.colored {
          position: relative;
          font-weight: 700;
          color: $primary;

          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 0.125rem;
            background-color: $primary;
            transition: 0.3s ease all;
          }

          &:hover::after {
            width: 100%;
          }
        }
      }
    }

    @media (min-width: 1440px) {
      max-width: 1100px;
    }

    @media (max-width: 1280px) {
      max-width: 90%;
    }
  }
}
</style>
