<template>
  <header class="c-Header">
    <div ref="container" class="c-Header__container">
      <img ref="blob" class="c-Header__container-blob" src="~assets/media/misc/gradient-rounded-triangle.svg">

      <div class="c-Header__container-info">
        <h1 class="h1">
          High-<span class="highlighted">quality,</span> blazing-<span class="highlighted">fast.</span>
        </h1>

        <h3 class="h3">
          Our team is ready to tackle the hardest of solutions for your company.
        </h3>

        <div class="c-Header__container-info__actions">
          <button class="btn btn-primary btn-bold btn-rounded" @click="scrollToContacts">
            Get in touch
          </button>

          <nuxt-link to="/about" tag="button" class="btn btn-primary__fill btn-rounded">
            <span>
              What we do
            </span>
          </nuxt-link>
        </div>

        <img class="c-Header__container-info__ellipse" src="~assets/media/misc/ellipse.svg">
      </div>

      <div class="c-Header__container-animation">
        <img src="~assets/media/illustrations/header-people.svg">
      </div>
    </div>
  </header>
</template>

<script>
import { getTranslateY } from '@/utils/css'

export default {
  mounted () {
    this.positionBlob(false)

    // position blob on window resize
    window.addEventListener('resize', this.positionBlob)
  },
  methods: {
    positionBlob (diffMatters) {
      if (window.innerWidth > 860) {
        const blob = this.$refs.blob

        if (blob) {
          const container = this.$refs.container

          const previousDistance = getTranslateY(blob.style.transform)
          const newDistance = (container.offsetTop / blob.height) * 100
          const minDistance = newDistance > 33

          // calculate previous and new distance difference
          const diff = Math.abs((Math.abs(newDistance) - Math.abs(previousDistance)) / previousDistance) * 100

          const resize = (diffMatters && minDistance && previousDistance !== 0 && diff >= 2.5) ||
            (diffMatters && previousDistance === 0) ||
            !diffMatters

          // if difference between distances is bigger than 5%, update it
          if (resize) blob.style.transform = `translateX(-74%) translateY(-${newDistance}%)`
        }
      }
    },
    scrollToContacts (e) {
      const containerPosY = document.querySelector('#contact-us').offsetTop
      const form = document.querySelector('#contact-us .container')

      window.scrollTo(0, containerPosY + form.offsetTop)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-Header {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__container {
    position: relative;
    z-index: 2;
    max-width: 77%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0 2rem;
    margin: 0 auto;

    &-blob {
      position: absolute;
      z-index: -100;
      top: 0;
      left: 0;
      max-height: 62.5rem;
      display: block;
      object-fit: cover;
      transform: translateX(-74%);
    }

    &-info {
      position: relative;
      grid-column: 1 / 6;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      h1 {
        margin-right: auto;
        margin-bottom: 1.875rem;

        span.highlighted {
          &:first-of-type {
            color: $rose-blue;
          }

          &:last-of-type {
            color: $light-violet;
          }
        }
      }

      h3 {
        max-width: 20rem;
        color: $grey;
        margin-bottom: 2.5rem;
      }

      &__actions {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, max-content));
        grid-gap: 0 1rem;
      }

      &__ellipse {
        position: absolute;
        left: -4rem;
        top: calc(100% - 1.5rem);
        z-index: -1;
      }
    }

    &-animation {
      grid-column: 6 / 13;

      img {
        display: block;
        width: 100%;
        max-width: 60rem;
        max-height: 26.375rem;
        object-fit: cover;
        margin: 0 auto;
      }
    }
  }

  @media (min-width: 1440px) {
    &__container {
      max-width: 1100px;
    }
  }

  @media (max-width: 1280px) {
    &__container {
      max-width: 90%;
    }
  }

  @media (max-width: 1080px) {
    &__container {
      &-blob {
        transform: translateX(-82.5%);
      }
    }
  }

  // MOBILE
  @media (max-width: $mobile-breakpoint) {
    height: 100vh;
    padding-top: 0;
    // transform: translateY(-6.625rem);

    &__container {
      max-width: calc(100% - 4rem);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      &-blob {
        // transform: translateX(-74%);
        // transform: translateX(-56%);
      }

      &-info {
        h1,
        h3 {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        h1 {
          font-size: 2.5rem;
          line-height: calc(3rem + 1px);
        }

        h3 {
          line-height: calc(1.625rem + 1px);
          margin: 0 auto 2.5rem auto;
        }

        &__actions {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          grid-gap: 0 1rem;
        }
      }

      &-animation {
        display: none;
      }
    }
  }

  @media (max-width: $minimobile-breakpoint) {
    &__container {
      &-info {
        &__actions {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          grid-gap: 1rem;
        }
      }
    }
  }

  // iPhone 5/SE specific case
  @media (max-width: 330px) and (max-height: 568px) {
    &__container {
      margin-top: 3.3125rem;

      button {
        padding: 0.875rem;
      }
    }
  }
}
</style>
