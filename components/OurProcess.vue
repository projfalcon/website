<template>
  <div id="process">
    <img id="triangle-illustration" src="~assets/media/misc/triangle.svg">

    <div class="container">
      <div id="develop">
        <img src="~assets/media/illustrations/process/development.svg">

        <p class="subtitle">
          &#60;/&#62;
        </p>

        <h2 class="h2 title">
          Development
        </h2>

        <h5 class="h5 description">
          Golang, Javascript (Node.js, React, Angular, Nuxt) & more.
          We code depending on your needs.
        </h5>

        <nuxt-link to="/" tag="h4" class="h4 link">
          Read More  →
        </nuxt-link>
      </div>

      <div id="design">
        <img src="~assets/media/illustrations/process/design.svg">

        <p class="subtitle">
          • | .
        </p>

        <h2 class="h2 title">
          Design
        </h2>

        <h5 class="h5 description">
          Colaborate with us through Figma and test your solutions
          before commiting.
        </h5>

        <nuxt-link to="/" tag="h4" class="h4 link">
          Read More  →
        </nuxt-link>
      </div>

      <div id="thinking">
        <img src="~assets/media/illustrations/process/thinking.svg">

        <p class="subtitle">
          1 + 2 = 3
        </p>

        <h2 class="h2 title">
          Thinking
        </h2>

        <h5 class="h5 description">
          Whether you need a E-Commerce, a landing page or an app we are here
          for you to help decide what’s best.
        </h5>

        <nuxt-link to="/" tag="h4" class="h4 link">
          Read More  →
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Subtitles: {
        Development: '</>',
        Design: '• | .',
        Thinking: '1 + 2 = 3'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#process {
  position: relative;
  margin: 11.25rem auto 10rem auto;

  img#triangle-illustration {
    position: absolute;
    bottom: 0;
    margin-bottom: 2.5rem;
  }

  .container {
    max-width: 77%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0 7.5rem;
    margin: 0 auto;

    > div {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 12.5rem auto auto minmax(1rem, 1fr) auto;

      img {
        max-height: 12.5rem;
        display: block;
        margin: 0 auto;
      }

      p.subtitle {
        color: $primary;
        text-align: center;
        margin-top: 2rem;
      }

      h2.title {
        text-align: center;
        margin-bottom: 1.25rem;
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
        transition: 0.3s ease all;
        cursor: pointer;

        &:hover {
          color: $red;
        }
      }
    }
  }

  #design {
    img {
      transform: translateX(12%);
    }
  }
}
</style>
