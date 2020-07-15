<template>
  <div id="latest-solution">
    <div class="content">
      <div class="project-image">
        <img src="~assets/media/projects/gruporeis.svg">
      </div>

      <div class="project-description">
        <p class="subtitle">
          LATEST SOLUTION
        </p>

        <h2 id="project-title">
          Pharmacy E-Commerce
        </h2>

        <h5 id="project-long__description">
          Whether you need a E-Commerce, a landing page or an app
          we are here for you to help decide what’s best. Whether
          you need a E-Commerce, a landing page or an app we are
          here. Whether you need a E-Commerce, a landing page or
          an app we are here.
        </h5>

        <nuxt-link id="read-more" to="" tag="h4">
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
#latest-solution {
  min-height: 22.5rem;
  width: 100%;
  background-color: #E8F8FF;
  padding: 2.125rem 0;
  margin: 12.5rem 0 5rem 0;

  .content {
    max-width: 77%;
    display: grid;
    grid-template-columns: minmax(0, 37.5rem) minmax(0, 1fr);
    grid-gap: 0 7.5rem;
    margin: 0 auto;

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
        max-width: max-content;
        display: block;
        color: $primary;
        cursor: pointer;
      }
    }
  }
}
</style>
