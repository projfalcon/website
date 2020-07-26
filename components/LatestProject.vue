<template>
  <div id="latest-solution">
    <img id="background" src="~assets/media/misc/wave.svg">

    <div class="container">
      <div class="content">
        <div class="project-image">
          <img class="desktop" src="~assets/media/projects/drfarma/drfarma.svg">
          <img class="mobile" src="~assets/media/projects/drfarma/drfarma-mobile.svg">
        </div>

        <div class="project-description">
          <p class="subtitle text-primary">
            LATEST SOLUTION
          </p>

          <h2 id="project-title" class="h2">
            Pharmacy <br>E-Commerce
          </h2>

          <h5 id="project-long__description" class="h5">
            Whether you need a E-Commerce, a landing page or an app
            we are here for you to help decide what’s best. Whether
            you need a E-Commerce, a landing page or an app we are
            here. Whether you need a E-Commerce, a landing page or
            an app we are here.
          </h5>

          <nuxt-link id="read-more" to="" tag="h4" class="h4 link text-primary">
            Read More  →
          </nuxt-link>

          <img id="square" src="~assets/media/misc/square.svg">
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
#latest-solution {
  position: relative;
  width: 100%;
  min-height: 27.625rem;
  display: flex;
  margin: 3.06125rem 0 6rem 0;

  #background {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    max-height: 56.25rem;
    transform: translate(-50%, -38%);
  }

  .container {
    width: 100%;
    min-height: 22.5rem;
    padding: 4rem 0;
    margin: 13.75rem auto 0 auto;

    .content {
      position: relative;
      display: grid;
      grid-template-columns: minmax(0, 37.5rem) minmax(0, 1fr);
      grid-gap: 0 8.5rem;
      margin: 0 auto;

      * {
        z-index: 10;
      }

      .project-image {
        position: relative;

        img {
          position: absolute;
          top: -9.125rem;
          display: block;
          border-radius: 0.3125rem;
          box-shadow: 0 0 7.75rem 0 #00000010;

          &.desktop {
            height: 25rem;
          }

          &.mobile {
            right: -4rem;
            top: 4rem;
            max-width: 14rem;
          }
        }
      }

      .project-description {
        position: relative;

        h2#project-title {
          margin-bottom: 1.25rem;
        }

        h5#project-long__description {
          color: $grey;
          margin-bottom: 1.875rem;
        }

        h4#read-more {
          max-width: max-container;
          display: block;
          cursor: pointer;
        }

        img#square {
          position: absolute;
          top: 100%;
          right: -5rem;
          z-index: 1;
        }
      }
    }
  }

  @media (min-width: 1440px) {
    .content {
      max-width: 1100px;
      grid-template-columns: 60% 40%;

      .project-image img {
        width: 100%;
      }
    }
  }

  @media (max-width: 1440px) {
    min-height: 20rem;

    .container .content {
      max-width: 77%;
      grid-template-columns: minmax(0, 36.75rem) minmax(0, 1fr);

      .project-image img {
        height: 20rem;
      }
    }
  }

  @media (max-width: 1280px) {
    min-height: 18rem;

    .container .content {
      max-width: 90%;
      grid-template-columns: minmax(0, 30em) minmax(0, 1fr);
      grid-gap: 0 7.5rem;

      .project-image img {
        max-width: 30rem;
      }
    }
  }

  @media (max-width: 1080px) {
    .container .content {
      max-width: 90%;
      grid-template-columns: minmax(0, 30rem) minmax(0, 1fr);

      .project-image img {
        max-width: 30rem;
      }
    }
  }

  // MOBILE
  @media (max-width: $mobile-breakpoint) {
    margin: 0 0 7.5rem 0;

    #background {
      max-height: unset;
      height: 85rem;
    }

    .container {
      padding: 4.25rem 0 0 0;
      margin: 0 auto;

      .content {
        max-width: calc(100% - 4rem);
        grid-template-rows: 40rem auto;
        grid-template-columns: 1fr;
        grid-gap: 0;

        .project-image {
          display: flex;
          justify-content: center;

          img {
            display: block;
            max-width: 20rem;
            width: auto;
            height: auto;
            margin: 0 auto;
            object-fit: contain;

            &.desktop {
              top: unset;
              bottom: 6rem;
              left: 0;
              max-width: calc(100% - 1.5rem);
              height: unset;
              border-radius: 0.625rem;
              margin: 0;
            }

            &.mobile {
              top: unset;
              right: 0;
              bottom: 1rem;
              max-width: 10rem;
              height: unset;
              border-radius: 0.625rem;
            }
          }
        }

        .project-description {
          img#square {
            top: calc(100% + 3rem);
            right: -2rem;
            transform: translateX(50%);
          }
        }
      }
    }
  }

  @media (max-width: $minimobile-breakpoint) {
    #background {
      height: 75rem;
    }

    .container {
      .content {
        grid-template-rows: 24rem auto;

        .project-image {
          img.mobile {
            max-width: 6rem;
          }
        }

        .project-description {
          img#square {
            top: calc(100% + 1.5rem);
          }
        }
      }
    }
  }
}
</style>
