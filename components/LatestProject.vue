<template>
  <div id="latest-solution">
    <div class="container">
      <div class="content">
        <div class="project-image">
          <img src="~assets/media/projects/gruporeis.svg">
        </div>

        <div class="project-description">
          <p class="subtitle">
            LATEST SOLUTION
          </p>

          <h2 id="project-title" class="h2">
            Pharmacy E-Commerce
          </h2>

          <h5 id="project-long__description" class="h5">
            Whether you need a E-Commerce, a landing page or an app
            we are here for you to help decide what’s best. Whether
            you need a E-Commerce, a landing page or an app we are
            here. Whether you need a E-Commerce, a landing page or
            an app we are here.
          </h5>

          <nuxt-link id="read-more" to="" tag="h4" class="h4 link">
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
  margin: 9.375rem 0 6rem 0;

  .container {
    width: 100%;
    min-height: 22.5rem;
    background-color: #E8F8FF;
    padding: 2.125rem 0;
    margin: 5.125rem auto 0 auto;

    .content {
      position: relative;
      display: grid;
      grid-template-columns: minmax(0, 37.5rem) minmax(0, 1fr);
      grid-gap: 0 7.5rem;
      margin: 0 auto;

      * {
        z-index: 10;
      }

      .project-image {
        position: relative;

        img {
          position: absolute;
          top: -5.125rem;
          height: 22.5rem;
          display: block;
          object-fit: cover;
          border-radius: 0.25rem;
        }
      }

      .project-description {
        position: relative;

        p.subtitle {
          color: $primary;
        }

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
          color: $primary;
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
      grid-template-columns: minmax(0, 37.5em) minmax(0, 1fr);
      grid-gap: 0 3rem;

      .project-image img {
        max-width: 37.5rem;
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
    .container {
      .content {
        max-width: calc(100% - 4rem);
        grid-template-rows: 10.5rem auto;
        grid-template-columns: 1fr;
        grid-gap: 3rem 0;

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
          }
        }

        .project-description {
          img#square {
            top: calc(100% - 0.5rem);
            right: 1.25rem;
            width: 6rem;
          }
        }
      }
    }
  }
}
</style>
