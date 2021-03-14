<template>
  <div id="contact-us">
    <img id="blob" src="~assets/media/misc/gradient-blob.svg">

    <div
      class="container"
      data-aos="fade-up"
    >
      <h1 class="h1 title">
        Talk to us
      </h1>

      <div id="form">
        <div id="message" class="input-container">
          <textarea v-model="Message" rows="4" placeholder="Your message goes here..." maxlength="512" />
        </div>
        <div id="email" class="input-container">
          <input v-model="Email" placeholder="Enter your email" type="text">
        </div>

        <button id="submit" class="btn btn-primary btn-rounded">
          Send message
        </button>

        <button id="submit" class="btn btn-primary btn-rounded btn-mobile">
          Send
        </button>
      </div>

      <p class="h6 alternative-email">
        Contact us through <a href="mailto:talk@projectfalcon.studio" class="highlighted-underlined">talk@projectfalcon.studio</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Message: '',
      Email: ''
    }
  }
}
</script>

<style lang="scss" scoped>
#contact-us {
  position: relative;
  padding-top: 16.25rem;
  margin-bottom: 10.625rem;
  overflow: hidden;

  #blob {
    position: absolute;
    top: 4rem;
    left: 0;
    z-index: -1;
    max-height: 38.1875rem;
    background-blend-mode: hard light;
    transform: translateX(-50%);

    @media (max-width: $large-mobile-breakpoint) {
      top: -2.5rem;
      max-width: 18.5rem;
      transform: translateX(-55%);
    }
  }

  .container {
    max-width: 33rem;
    margin: 0 auto;

    .title {
      text-align: center;
      margin-bottom: 1.25rem;
    }

    #form {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 1rem;

      #message {
        grid-column: 1 / 13;
      }

      #email {
        grid-column: 1 / 9;
      }

      #submit {
        grid-column: 9 / 13;
        font-weight: 700;

        &.btn-mobile {
          display: none;
        }
      }
    }

    .alternative-email {
      text-align: center;
      margin-top: 1.875rem;

      a:after {
        height: 0.06125rem;
      }
    }

    @media (max-width: $large-mobile-breakpoint) {
      max-width: calc(100% - 4rem);

      #form #submit {
        &:not(.btn-mobile) {
          display: none;
        }

        &.btn-mobile {
          display: block;
        }
      }
    }

    @media (max-width: $mini-mobile-breakpoint) {
      #form {
        grid-template-columns: minmax(0, 1fr);

        #message,
        #email,
        #submit {
          grid-column: 1 / 2;
        }
      }
    }
  }
}
</style>
