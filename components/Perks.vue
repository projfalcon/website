<template>
  <div id="process">
    <img id="ellipse" src="~assets/media/misc/ellipse.svg">

    <div class="container">
      <div id="plan-for-success" class="right">
        <div class="description">
          <h2 class="h2">
            A Plan for Success
          </h2>

          <p class="h5">
            You want results. We have found that the best way to get them is
            with up front research – of your company, competitors, target
            market and customer psychographics. After we fully understand you
            and your customers, do we recommend a plan of attack.
          </p>
        </div>

        <div class="illustration">
          <img src="~assets/media/illustrations/perks/plan-for-success.svg">
        </div>
      </div>

      <div id="creativity" class="left">
        <div class="description">
          <h2 class="h2">
            Creativity
          </h2>

          <p class="h5">
            We bring our diverse background of design, branding, research and
            strategic planning to work for your company. Not only will your
            materials look great – they will get results.
          </p>
        </div>

        <div class="illustration">
          <img src="~assets/media/illustrations/perks/creativity.svg">
        </div>
      </div>

      <div id="pricing" class="right">
        <div class="description">
          <h2 class="h2">
            Pricing
          </h2>

          <p class="h5">
            Our prices are competitive and fair. There are no surprise bills.
            Any unexpected or additional expenses must be pre-approved by you.
            That’s how we would like to be treated, and that is how our
            clients are treated.
          </p>
        </div>

        <div class="illustration">
          <img src="~assets/media/illustrations/perks/pricing.svg">
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
  overflow-x: hidden;

  img#ellipse {
    position: absolute;
    top: 50%;
    right: -1.5rem;
    z-index: -1;
    transform: rotate(90deg);
  }

  .container {
    max-width: 77%;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-gap: 8.75rem;

    margin: 0 auto;

    > div {
      display: grid;
      grid-gap: 8.75rem;

      &.right {
        grid-template-columns: auto 26.875rem;

        .description {
          text-align: right;
        }
      }

      &.left {
        grid-template-columns: 26.875rem auto;

        .description {
          grid-row: 1;
          grid-column: 2 / 3;
          text-align: left;
        }

        .illustration {
          grid-row: 1;
          grid-column: 1 / 2;
        }
      }

      .description {
        padding-top: 4.5rem;

        .h2 {
          margin-bottom: 1.25rem;
        }

        .h5 {
          color: $grey;
        }
      }

      .illustration {
        img {
          display: block;
          max-width: 28.125rem;
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
    @media (max-width: $mobile-breakpoint) {
      max-width: calc(100% - 4rem);
      grid-template-columns: 1fr;
      grid-gap: 4.5rem 0;

      > div {
        grid-template-columns: auto auto minmax(1rem, 1fr) auto;

        img {
          display: none;
        }
      }
    }
  }
}
</style>
