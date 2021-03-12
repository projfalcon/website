<template>
  <div id="process">
    <img id="triangle-illustration" src="~assets/media/misc/triangle.svg">

    <div class="container">
      <h1 class="h1 title">
        What <span>we do.</span>
      </h1>

      <div id="develop">
        <img src="~assets/media/illustrations/what-we-do/development.svg">

        <h2 class="h2 title">
          Development
        </h2>

        <h5 class="h5 description">
          Golang, Javascript (Node.js, React, Angular, Nuxt) & more.
          We code depending on your needs.
        </h5>

        <nuxt-link to="/" tag="h4" class="h4 text-primary link link-slide-right">
          Read More  →
        </nuxt-link>
      </div>

      <div id="design">
        <img src="~assets/media/illustrations/what-we-do/design.svg">

        <h2 class="h2 title">
          Design
        </h2>

        <h5 class="h5 description">
          Colaborate with us through Figma and test your solutions
          before commiting.
        </h5>

        <nuxt-link to="/" tag="h4" class="h4 text-primary link link-slide-right">
          Read More  →
        </nuxt-link>
      </div>

      <div id="thinking">
        <img src="~assets/media/illustrations/what-we-do/thinking.svg">

        <h2 class="h2 title">
          Thinking
        </h2>

        <h5 class="h5 description">
          Whether you need an E-Commerce, a landing page or an app we are here
          for you to help decide what’s best.
        </h5>

        <nuxt-link to="/" tag="h4" class="h4 text-primary link link-slide-right">
          Read More  →
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#process {
  position: relative;
  margin: 13.4375rem auto 0 auto;

  img#triangle-illustration {
    position: absolute;
    bottom: 0;
    margin-bottom: 2.5rem;
    z-index: -1;

    // MOBILE
    @media (max-width: $mobile-breakpoint) {
      bottom: 12.5rem;
      height: 6rem;
      transform: translateX(-60%);
    }
  }

  .container {
    max-width: 77%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 0 7.5rem;
    margin: 0 auto;

    h1.title {
      position: relative;
      grid-column: 1 / 4;
      text-align: center;
      margin: 0 auto 5.625rem auto;

      span {
        position: relative;
        white-space: nowrap;

        &::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 0.25rem;
          background-color: $text-primary;
        }
      }
    }

    > div {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: minmax(0, 7.5rem) auto minmax(1rem, 1fr) auto;

      > * {
        z-index: 10;
      }

      img {
        max-height: 7.5rem;
        display: block;
        margin: 0 auto;
      }

      h2.title {
        text-align: center;
        margin: 3.75rem auto 1.25rem auto;
      }

      h5.description {
        color: $grey;
        text-align: center;
        margin-bottom: 0.75rem;
      }

      h4.link {
        max-width: max-content;
        display: block;
        text-align: center;
        color: $primary;
        margin: 0 auto;
        cursor: pointer;
      }
    }

    @media (min-width: 1440px) {
      max-width: 1100px;
    }

    @media (max-width: 1280px) {
      max-width: 90%;
    }

    // MOBILE
    @media (max-width: $mobile-breakpoint) {
      max-width: calc(100% - 4rem);
      grid-template-columns: 1fr;
      grid-gap: 5.625rem 0;

      h1.title {
        margin: 0 auto 0.5rem auto;
      }

      > div {
        grid-column: 1 / 13;
        grid-template-rows: auto auto minmax(1rem, 1fr) auto;

        img {
          max-height: 3.75rem;
        }

        h2.title {
          margin-top: 2.5rem;
        }
      }
    }
  }

  @media (max-width: $mobile-breakpoint) {
    margin-bottom: 5.4375rem;
  }
}
</style>
