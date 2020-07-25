<template>
  <div id="contact-us">
    <img id="blob" src="~assets/media/misc/gradient-blob.svg">

    <div class="container">
      <h1 class="h1 title">
        Contact us!
      </h1>

      <div id="form">
        <textarea v-model="Message" rows="4" placeholder="Your message goes here..." maxlength="512" />
        <input v-model="Email" placeholder="Enter your email" type="text">

        <button class="btn btn-primary btn-rounded">
          Send message
        </button>

        <button class="btn btn-primary btn-rounded btn-mobile">
          Send
        </button>
      </div>

      <p class="h6 alternative-email">
        Or just contact us through <a href="mailto:talk@projectfalcon.studio" class="highlighted">talk@projectfalcon.studio</a>
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
    height: 24rem;
    transform: translateX(-50%);
  }

  #lines {
    position: absolute;
    top: 2.5rem;
    left: 75%;
    height: 15rem;
    z-index: -2;
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

      > * {
        z-index: 10;
      }

      textarea {
        grid-column: 1 / 13;
      }

      input {
        grid-column: 1 / 9;
      }

      button {
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
    }

    @media (max-width: $mobile-breakpoint) {
      max-width: calc(100% - 4rem);

      #form button {
        &:not(.btn-mobile) {
          display: none;
        }

        &.btn-mobile {
          display: block;
        }
      }
    }

    @media (max-width: $minimobile-breakpoint) {
      #form {
        grid-template-columns: minmax(0, 1fr);

        textarea,
        input,
        button {
          grid-column: 1 / 2;
        }
      }
    }
  }
}
</style>
