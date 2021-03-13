<template>
  <div id="process">
    <img id="triangle-illustration" src="~assets/media/misc/triangle.svg">

    <div class="container">
      <div class="title title-with-top-badge">
        <h1 class="h1">
          What we do

          <span />
        </h1>

        <h3 class="h3">
          If your business is not on-line yet... we’ll help you.
        </h3>
      </div>

      <div class="items">
        <div id="develop" class="item">
          <img src="~assets/media/illustrations/what-we-do/development.svg">

          <h2 class="h2 title">
            Development
          </h2>

          <h5 class="h5 description">
            Golang, Javascript (Node.js, React, Angular, Nuxt) & more.
            We code depending on your needs.
          </h5>
        </div>

        <div id="design" class="item">
          <img src="~assets/media/illustrations/what-we-do/design.svg">

          <h2 class="h2 title">
            Design
          </h2>

          <h5 class="h5 description">
            Colaborate with us through Figma and test your solutions
            before commiting.
          </h5>
        </div>

        <div id="thinking" class="item">
          <img src="~assets/media/illustrations/what-we-do/thinking.svg">

          <h2 class="h2 title">
            Think & Plan
          </h2>

          <h5 class="h5 description">
            Whether you need an E-Commerce, a landing page or an app we are here
            for you to help decide what’s best.
          </h5>
        </div>
      </div>

      <div class="call-to-action">
        <div class="btn-full-width-line-container">
          <button class="btn btn-primary btn-bold btn-rounded">
            Learn More
          </button>

          <span class="line" />
        </div>
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
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 0 7.5rem;
    margin: 0 auto;

    .title {
      grid-column: 1 / 4;
      margin-bottom: 8.125rem;
    }

    .items {
      max-width: var(--max-width);
      grid-column: 1 / 4;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-gap: 0 7.5rem;
      margin: 0 auto;

      .item {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: minmax(0, 7.5rem) auto minmax(1rem, 1fr) auto;

        * {
          z-index: 10;
          grid-column: 1 / 2;
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
      }
    }

    .call-to-action {
      grid-column: 1 / 4;
      margin-top: 5rem;

      button {
        display: block;
        margin: 0 auto;
      }
    }

    @media (min-width: 1440px) {
      --max-width: 1100px;
    }

    @media (max-width: 1280px) {
      --max-width: 90%;
    }

    // MOBILE
    @media (max-width: $mobile-breakpoint) {
      --max-width: calc(100% - 4rem);
      grid-template-columns: 1fr;
      grid-gap: 0;

      .title {
        margin: 0 auto 7.5rem auto;
      }

      .items {
        grid-gap: 5rem 0;

        .item {
          grid-column: 1 / 4;
          grid-template-rows: auto auto minmax(1rem, 1fr) auto;

          img {
            max-height: 3.75rem;
          }

          h2.title {
            margin-top: 2.5rem;
          }
        }
      }

      .call-to-action {
        margin-top: 5rem;
      }
    }
  }

  @media (max-width: $mobile-breakpoint) {
    margin-bottom: 5.4375rem;
  }
}
</style>
