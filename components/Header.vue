<template>
  <header class="c-Header">
    <img class="c-Header__lines" src="~assets/media/misc/lines.svg">

    <div class="c-Header__container">
      <div class="c-Header__container-info">
        <h1 class="h1">
          High-quality, blazing-fast.
        </h1>

        <h3 class="h3">
          Our team is ready to tackle the hardest of solutions for your company.
        </h3>

        <div class="c-Header__container-info__actions">
          <nuxt-link to="/work" tag="button" class="btn btn-primary btn-bold btn-rounded">
            Get in touch
          </nuxt-link>

          <nuxt-link to="/about" tag="button" class="btn btn-primary__fill btn-rounded">
            What we do
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
export default {

}
</script>

<style lang="scss" scoped>
.c-Header {
  position: relative;

  &__lines {
    position: absolute;
    right: 61%;
    height: 15rem;
  }

  &__container {
    position: relative;
    z-index: 2;
    max-width: 77%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0 2rem;
    margin: 0 auto;

    &-info {
      position: relative;
      grid-column: 1 / 6;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      h1 {
        margin-right: auto;
        margin-bottom: 1.875rem;
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

  @media (max-width: 2560px) {
    &__lines {
      right: 65%;
    }
  }

  @media (max-width: 1920px) {
    &__lines {
      right: 70%;
    }
  }

  @media (max-width: 1690px) {
    &__lines {
      right: 75%;
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
  }

  // MOBILE
  @media (max-width: $mobile-breakpoint) {
    &__container {
      max-width: calc(100% - 4rem);
      grid-template-columns: minmax(0, 1fr);

      &-info {
        grid-column: 1 / 2;

        h1,
        h3 {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        h1 {
          font-size: 2.5rem;
        }

        h3 {
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
          grid-template-columns: minmax(0, 1fr);
          grid-gap: 1rem 0;
        }
      }
    }
  }
}
</style>
