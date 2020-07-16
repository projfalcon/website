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
    top: 5rem;
    height: 15rem;
  }

  &__ellipse {
    position: absolute;
    bottom: -5rem;
    left: 3.5rem;
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
}
</style>
