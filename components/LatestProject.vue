<template>
  <div id="latest-solution" ref="container">
    <div class="container">
      <div class="content">
        <div
          class="project-image"
          data-aos="fade-right"
        >
          <img
            src="~assets/media/projects/drfarma/drfarma.svg"
            class="desktop"
          >
          <img
            src="~assets/media/projects/drfarma/drfarma-mobile.svg"
            class="mobile"
            data-aos="fade-right"
            data-aos-delay="200"
          >
        </div>

        <div
          class="project-description"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <p class="subtitle text-primary">
            LATEST SOLUTION
          </p>

          <h2 class="h2 project-title">
            Pharmacy <br>E-Commerce
          </h2>

          <h5 class="h5 project-long__description">
            Whether you need a E-Commerce, a landing page or an app
            we are here for you to help decide what’s best. Whether
            you need a E-Commerce, a landing page or an app we are
            here. Whether you need a E-Commerce, a landing page or
            an app we are here.
          </h5>

          <nuxt-link to="" tag="h4" class="h4 text-primary link link-slide-right read-more">
            Read More  →
          </nuxt-link>
        </div>
      </div>

      <img id="square" src="~assets/media/misc/square.svg">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#latest-solution {
  position: relative;
  width: 100%;
  min-height: 27.625rem;
  display: flex;
  margin: 0rem 0 6rem 0;

  .container {
    width: 100%;
    background: $lightgrey;
    padding: 6.375rem 0;
    margin: -6.5rem auto 0 auto;

    .content {
      position: relative;
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 21.875rem);
      grid-gap: 0 7.75rem;
      margin: 0 auto;

      * {
        z-index: 10;
      }

      .project-image {
        position: relative;

        img {
          position: absolute;
          display: block;
          border-radius: 0.3125rem;
          box-shadow: 0 0 7.75rem 0 #00000010;

          &.desktop {
            top: -8.25rem;
            max-width: 39.6875rem;
          }

          &.mobile {
            right: -3.75rem;
            top: 3rem;
            height: unset;
            max-width: 14.375rem;
          }
        }
      }

      .project-description {
        position: relative;

        h2.project-title {
          margin-bottom: 1.25rem;
        }

        h5.project-long__description {
          color: $grey;
          margin-bottom: 1.875rem;
        }

        h4.read-more {
          max-width: max-content;
          display: block;
          cursor: pointer;
        }
      }
    }

    img#square {
      position: absolute;
      top: calc(100% - 3rem);
      right: 6.5rem;
      z-index: 1;
    }
  }

  @media (min-width: 1440px) {
    .content {
      max-width: 1100px;
    }
  }

  @media (max-width: 1440px) {
    min-height: 20rem;

    .container .content {
      max-width: 77%;

      .project-image {
        img {
          &.desktop {
            max-width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 1280px) {
    min-height: 18rem;

    .container .content {
      max-width: 90%;

      .project-image img {
        &.mobile {
          max-width: 12rem;
        }
      }
    }
  }

  @media (max-width: 1080px) {
    .container .content {
      max-width: 90%;

      .project-image img {
        &.mobile {
          max-width: 10rem;
        }
      }
    }
  }

  @media (max-height: 860px) {
    margin-top: 7.5rem;
  }

  // MOBILE
  @media (max-width: $large-mobile-breakpoint) {
    margin: 7.5rem 0 7.5rem 0;

    .container {
      padding: 3rem 0;
      margin: 0 auto;

      .content {
        max-width: calc(100% - 4rem);
        grid-template-rows: 15.625rem auto;
        grid-template-columns: 1fr;
        grid-gap: 0;

        .project-image {
          display: flex;
          justify-content: center;

          img {
            display: block;
            width: auto;
            height: auto;
            margin: 0 auto;
            object-fit: contain;

            &.desktop {
              top: unset;
              bottom: 6rem;
              left: 0;
              height: unset;
              max-width: calc(100% - 1.5rem);
              border-radius: 0.625rem;
              margin: 0;
            }

            &.mobile {
              top: unset;
              right: 0;
              bottom: 1rem;
              height: unset;
              max-width: 10rem;
              border-radius: 0.625rem;
            }
          }
        }
      }

      img#square {
        top: calc(100% - 3rem);
        right: -4.5rem;
      }
    }
  }

  @media (max-width: $mini-mobile-breakpoint) {
    .container {
      .content {
        grid-template-rows: 18rem auto;

        .project-image {
          img {
            &.desktop {
              max-width: 14rem;
            }

            &.mobile {
              max-width: 6rem;
            }
          }
        }
      }
    }
  }
}
</style>
