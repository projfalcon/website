<template>
  <header class="c-Header">
    <img class="c-Header__lines" src="~assets/media/misc/lines.svg">
    <img class="c-Header__ellipse" src="~assets/media/misc/ellipse.svg">

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
    // bottom: 25%;
    // width: 30rem;
    height: 15rem;
  }

  &__ellipse {
    position: absolute;
    // bottom: -12.5%;
    // left: 7.5%;
    z-index: 0;
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
      grid-column: 1 / 6;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      h1 {
        text-align: left;
        margin-right: auto;
        margin-bottom: 1.875rem;
      }

      h3 {
        max-width: 20rem;
        color: $grey;
        margin-bottom: 2.5rem;
      }

      &__actions {
        button:not(:last-of-type) {
          margin-right: 1rem;
        }
      }
    }

    &-animation {
      grid-column: 6 / 13;

      img {
        display: block;
        width: 100%;
        max-width: 60rem;
        object-fit: cover;
        margin: 0 auto;
      }
    }
  }

  @media (max-width: 3440px) {
    &__lines {
      width: 60rem;
      bottom: 17.5%;
    }

    &__ellipse {
      bottom: -12.5%;
      left: 9%;
    }
  }

  @media (max-width: 2580px) {
    &__lines {
      bottom: 30%;
    }

    &__ellipse {
      left: 8%;
    }
  }

  @media (max-width: 2160px) {
    &__lines {
      bottom: 30%;
    }
  }

  @media (max-width: 1920px) {
    &__lines {
      bottom: 35%;
    }
  }

  @media (max-width: 1690px) {
    &__lines {
      width: 45rem;
      bottom: 40%;
    }

    &__ellipse {
      bottom: -15%;
      left: 7.5%;
    }
  }

  @media (max-width: 1440px) {
    &__lines {
      bottom: 45%;
    }

    &__ellipse {
      bottom: -18%;
      left: 6%;
    }
  }

  @media (max-width: 1280px) {
    &__lines {
      width: 35rem;
      bottom: 50%;
    }

    &__ellipse {
      bottom: -20%;
      left: 5.5%;
    }
  }

  @media (max-width: 1080px) {
    &__lines {
      width: 20rem;
      bottom: 50%;
    }

    &__ellipse {
      bottom: -18%;
      left: 6%;
    }
  }
}
</style>
