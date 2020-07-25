<template>
  <nav>
    <div class="nav-content nav-content__desktop">
      <nuxt-link to="/" tag="div" class="logo logo-desktop">
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

    <div class="nav-content nav-content__mobile">
      <nuxt-link to="/" tag="div" class="logo logo-mobile">
        <img src="~assets/logo/square.svg" alt="Project Falcon">
      </nuxt-link>

      <div class="drawer-toggle" @click="toggleDrawer">
        <button>
          Menu
        </button>
      </div>

      <div :class="{ active: Active }" class="drawer">
        <div class="overlay" @click="toggleDrawer" />

        <div class="container">
          <div class="content">
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

              <nuxt-link to="#" tag="a" class="colored highlighted-underlined">
                Get in touch
              </nuxt-link>
            </div>
          </div>
        </div>
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
  methods: {
    toggleDrawer () {
      this.Active = !this.Active
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  transition: ease all 0.3s;

  .nav-content {
    max-width: 77%;
    display: flex;
    align-items: center;
    padding: 2.25rem 0;
    margin: 0 auto;

    &__desktop {
      display: flex;

      .links a:not(:last-of-type) {
        margin-right: 3rem;
      }
    }

    &__mobile {
      display: none;
    }

    .logo {
      display: flex;
      align-items: center;
      cursor: pointer;

      img {
        max-height: 2rem;
      }
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

        &:hover {
          color: $primary;
        }

        &.colored {
          position: relative;
          font-weight: 700;
          background-image: $primary;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;

          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 0.125rem;
            background: $primary;
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

    // MOBILE
    @media (max-width: 860px) {
      max-width: calc(100% - 4rem);
      padding: 2rem 0;

      &__mobile {
        display: flex;

        .drawer-toggle {
          display: flex;
          margin-left: auto;

          button {
            -webkit-appearance: none;
            position: relative;
            display: block;
            font-family: "Hind";
            text-decoration: none;
            font-size: 1rem;
            line-height: 1.5rem;
            background-color: #fff;
            color: $primary;
            padding: 0.125rem 0.25rem;
            border: none;
            transition: ease color 0.3s;

            &::after {
              content: '';
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 0.125rem;
              background-color: $primary;
              transition: 0.3s ease all;
            }
          }
        }

        .drawer {
          &.active {
            .container {
              transform: translateX(0%);
            }

            .overlay {
              display: block;
              opacity: 1;
            }
          }

          .overlay {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 99;
            display: none;
            opacity: 0;
            width: 100%;
            height: 100%;
            background-color: #00000030;
            transition: 0.3s ease all;
            cursor: pointer;
          }

          .container {
            position: fixed;
            top: 0;
            right: 0;
            z-index: 100;
            height: 100%;
            min-width: 50vw;
            background-color: #fff;
            box-shadow: 0 0 7.5px 5px rgba(0,0,0,.04);
            transform: translateX(100%);
            transition: 0.3s ease all;

            .content {
              display: flex;
              flex-direction: column;
              padding: 2rem;

              .links {
                display: flex;
                flex-direction: column;
                margin: 0;

                a {
                  text-align: center;

                  &:not(:last-of-type) {
                    margin-bottom: 1rem;
                  }
                }
              }
            }
          }
        }
      }

      &__desktop {
        display: none;
      }
    }
  }
}
</style>
