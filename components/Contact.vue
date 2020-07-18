<template>
  <div id="contact-us">
    <img id="ellipse" src="~assets/media/misc/ellipse.svg">
    <img id="lines" src="~assets/media/misc/lines-inverted.svg">

    <div class="container">
      <h2 class="title">
        Contact us free of charge!
      </h2>

      <div id="form">
        <textarea v-model="Message" rows="4" placeholder="Your message goes here..." maxlength="512" />
        <input v-model="Email" placeholder="Enter your email" type="text">

        <button class="btn btn-primary btn-rounded">
          Send message
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
  margin-bottom: 10.625rem;

  #ellipse {
    position: absolute;
    top: -2rem;
    right: 19rem;
    z-index: -1;
  }

  #lines {
    position: absolute;
    top: -11.25rem;
    right: 0;
    z-index: -2;
    width: 24rem;
  }

  .container {
    max-width: 33rem;
    margin: 0 auto;

    .title {
      text-align: center;
      margin-bottom: 1.5rem;
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
      }
    }

    .alternative-email {
      text-align: center;
      margin-top: 1.875rem;
    }
  }
}
</style>
