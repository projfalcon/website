<template>
  <footer>
    <div class="container container-desktop">
      <nuxt-link to="/" tag="div" class="logo">
        <img src="~assets/logo/icon-square.svg">
      </nuxt-link>

      <div class="legal-links">
        <h6 class="h6 creative-commons">
          {{ Year }} © Falcon Project. All rights reserved
        </h6>

        <nuxt-link to="#" tag="h6" class="h6 text-primary-on-hover link">
          Terms & Conditions
        </nuxt-link>

        <nuxt-link to="#" tag="h6" class="h6 text-primary-on-hover link">
          Privacy Policy
        </nuxt-link>
      </div>

      <div class="social">
        <nuxt-link :to="`//${Links.Instagram}`" tag="a" target="noreferrer noopener _blank">
          <svg id="instagram" width="23" height="23" viewBox="0 0 23 23">
            <path d="M6.76304 0C3.05064 0 0 3.04645 0 6.76304V16.237C0 19.9494 3.04645 23 6.76304 23H16.237C19.9494 23 23 19.9535 23 16.237V6.76409C23 3.05064 19.9535 0 16.237 0H6.76304ZM6.76304 2.09091H16.237C16.8507 2.09008 17.4587 2.21037 18.0259 2.44487C18.5931 2.67938 19.1085 3.02349 19.5425 3.4575C19.9765 3.89152 20.3206 4.4069 20.5551 4.97412C20.7896 5.54134 20.9099 6.14926 20.9091 6.76304V16.237C20.9099 16.8507 20.7896 17.4587 20.5551 18.0259C20.3206 18.5931 19.9765 19.1085 19.5425 19.5425C19.1085 19.9765 18.5931 20.3206 18.0259 20.5551C17.4587 20.7896 16.8507 20.9099 16.237 20.9091H6.76409C6.15022 20.9101 5.54219 20.7899 4.97484 20.5554C4.4075 20.321 3.892 19.9769 3.45787 19.5429C3.02375 19.1088 2.67954 18.5934 2.44497 18.0261C2.2104 17.4588 2.09008 16.8508 2.09091 16.237V6.76409C2.08995 6.15022 2.21013 5.54219 2.44457 4.97484C2.67901 4.4075 3.02311 3.892 3.45713 3.45787C3.89116 3.02375 4.40659 2.67954 4.97388 2.44497C5.54117 2.2104 6.14917 2.09008 6.76304 2.09091ZM17.6745 4.37836C17.5499 4.37781 17.4265 4.40193 17.3113 4.44934C17.1962 4.49674 17.0915 4.56649 17.0035 4.65455C16.9154 4.74262 16.8456 4.84725 16.7982 4.96242C16.7508 5.07759 16.7267 5.201 16.7273 5.32555C16.7273 5.85245 17.1475 6.27273 17.6745 6.27273C17.7991 6.27342 17.9226 6.2494 18.0379 6.20206C18.1532 6.15471 18.2579 6.08499 18.3461 5.99691C18.4343 5.90883 18.5041 5.80415 18.5516 5.68891C18.5991 5.57368 18.6232 5.45017 18.6227 5.32555C18.6232 5.20092 18.5991 5.07741 18.5516 4.96218C18.5041 4.84694 18.4343 4.74226 18.3461 4.65418C18.2579 4.5661 18.1532 4.49638 18.0379 4.44903C17.9226 4.40169 17.7991 4.37767 17.6745 4.37836ZM11.5 5.22727C8.05 5.22727 5.22727 8.05 5.22727 11.5C5.22727 14.95 8.05 17.7727 11.5 17.7727C14.95 17.7727 17.7727 14.95 17.7727 11.5C17.7727 8.05 14.95 5.22727 11.5 5.22727ZM11.5 7.31818C13.824 7.31818 15.6818 9.17595 15.6818 11.5C15.6818 13.824 13.824 15.6818 11.5 15.6818C9.17595 15.6818 7.31818 13.824 7.31818 11.5C7.31818 9.17595 9.17595 7.31818 11.5 7.31818Z" fill="currentColor" />
          </svg>
        </nuxt-link>

        <nuxt-link :to="`//${Links.Facebook}`" tag="a" target="noreferrer noopener _blank">
          <svg id="facebook" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 0C5.384 0 0 5.384 0 12C0 18.616 5.384 24 12 24C18.616 24 24 18.616 24 12C24 5.384 18.616 0 12 0ZM12 2C17.535 2 22 6.465 22 12C22.0024 14.394 21.144 16.709 19.5813 18.5226C18.0187 20.3362 15.856 21.5275 13.488 21.879V14.916H16.336L16.783 12.023H13.488V10.443C13.488 9.243 13.883 8.176 15.006 8.176H16.811V5.652C16.494 5.609 15.823 5.516 14.555 5.516C11.907 5.516 10.355 6.914 10.355 10.1V12.023H7.633V14.916H10.355V21.854C8.01975 21.4696 5.89724 20.2675 4.36669 18.4623C2.83615 16.6572 1.99729 14.3667 2 12C2 6.465 6.465 2 12 2Z" fill="currentColor" />
          </svg>
        </nuxt-link>
      </div>
    </div>

    <div class="container container-mobile">
      <div class="social">
        <nuxt-link :to="`//${Links.Instagram}`" tag="a" target="noreferrer noopener _blank">
          <svg id="instagram" width="23" height="23" viewBox="0 0 23 23">
            <path d="M6.76304 0C3.05064 0 0 3.04645 0 6.76304V16.237C0 19.9494 3.04645 23 6.76304 23H16.237C19.9494 23 23 19.9535 23 16.237V6.76409C23 3.05064 19.9535 0 16.237 0H6.76304ZM6.76304 2.09091H16.237C16.8507 2.09008 17.4587 2.21037 18.0259 2.44487C18.5931 2.67938 19.1085 3.02349 19.5425 3.4575C19.9765 3.89152 20.3206 4.4069 20.5551 4.97412C20.7896 5.54134 20.9099 6.14926 20.9091 6.76304V16.237C20.9099 16.8507 20.7896 17.4587 20.5551 18.0259C20.3206 18.5931 19.9765 19.1085 19.5425 19.5425C19.1085 19.9765 18.5931 20.3206 18.0259 20.5551C17.4587 20.7896 16.8507 20.9099 16.237 20.9091H6.76409C6.15022 20.9101 5.54219 20.7899 4.97484 20.5554C4.4075 20.321 3.892 19.9769 3.45787 19.5429C3.02375 19.1088 2.67954 18.5934 2.44497 18.0261C2.2104 17.4588 2.09008 16.8508 2.09091 16.237V6.76409C2.08995 6.15022 2.21013 5.54219 2.44457 4.97484C2.67901 4.4075 3.02311 3.892 3.45713 3.45787C3.89116 3.02375 4.40659 2.67954 4.97388 2.44497C5.54117 2.2104 6.14917 2.09008 6.76304 2.09091ZM17.6745 4.37836C17.5499 4.37781 17.4265 4.40193 17.3113 4.44934C17.1962 4.49674 17.0915 4.56649 17.0035 4.65455C16.9154 4.74262 16.8456 4.84725 16.7982 4.96242C16.7508 5.07759 16.7267 5.201 16.7273 5.32555C16.7273 5.85245 17.1475 6.27273 17.6745 6.27273C17.7991 6.27342 17.9226 6.2494 18.0379 6.20206C18.1532 6.15471 18.2579 6.08499 18.3461 5.99691C18.4343 5.90883 18.5041 5.80415 18.5516 5.68891C18.5991 5.57368 18.6232 5.45017 18.6227 5.32555C18.6232 5.20092 18.5991 5.07741 18.5516 4.96218C18.5041 4.84694 18.4343 4.74226 18.3461 4.65418C18.2579 4.5661 18.1532 4.49638 18.0379 4.44903C17.9226 4.40169 17.7991 4.37767 17.6745 4.37836ZM11.5 5.22727C8.05 5.22727 5.22727 8.05 5.22727 11.5C5.22727 14.95 8.05 17.7727 11.5 17.7727C14.95 17.7727 17.7727 14.95 17.7727 11.5C17.7727 8.05 14.95 5.22727 11.5 5.22727ZM11.5 7.31818C13.824 7.31818 15.6818 9.17595 15.6818 11.5C15.6818 13.824 13.824 15.6818 11.5 15.6818C9.17595 15.6818 7.31818 13.824 7.31818 11.5C7.31818 9.17595 9.17595 7.31818 11.5 7.31818Z" fill="currentColor" />
          </svg>
        </nuxt-link>

        <nuxt-link :to="`//${Links.Facebook}`" tag="a" target="noreferrer noopener _blank">
          <svg id="facebook" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 0C5.384 0 0 5.384 0 12C0 18.616 5.384 24 12 24C18.616 24 24 18.616 24 12C24 5.384 18.616 0 12 0ZM12 2C17.535 2 22 6.465 22 12C22.0024 14.394 21.144 16.709 19.5813 18.5226C18.0187 20.3362 15.856 21.5275 13.488 21.879V14.916H16.336L16.783 12.023H13.488V10.443C13.488 9.243 13.883 8.176 15.006 8.176H16.811V5.652C16.494 5.609 15.823 5.516 14.555 5.516C11.907 5.516 10.355 6.914 10.355 10.1V12.023H7.633V14.916H10.355V21.854C8.01975 21.4696 5.89724 20.2675 4.36669 18.4623C2.83615 16.6572 1.99729 14.3667 2 12C2 6.465 6.465 2 12 2Z" fill="currentColor" />
          </svg>
        </nuxt-link>
      </div>

      <div class="legal-links">
        <nuxt-link to="#" tag="h6" class="h6 text-primary-on-hover link">
          Terms & Conditions
        </nuxt-link>

        <nuxt-link to="#" tag="h6" class="h6 text-primary-on-hover link">
          Privacy Policy
        </nuxt-link>
      </div>

      <div class="brand">
        <nuxt-link to="/" tag="div" class="logo">
          <img src="~assets/logo/icon-square.svg">
        </nuxt-link>

        <h6 class="h6 creative-commons">
          {{ Year }} © Falcon Project. All rights reserved
        </h6>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      Year: new Date().getUTCFullYear(),
      Links: {
        Instagram: process.env.socialInstagramURL,
        Facebook: process.env.socialFacebookURL
      }
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  padding: 2rem 0;

  .container {
    display: grid;
    grid-template-columns: 0.5fr 2fr 0.5fr;
    grid-template-areas: "logo legal-links social";
    margin: 0 auto;

    &.container-mobile {
      display: none;
    }

    .logo {
      grid-area: logo;
    }

    .legal-links {
      grid-area: legal-links;
      display: flex;
      justify-content: center;
      align-items: center;

      h6 {
        color: $grey;

        &:not(:last-of-type) {
          margin-right: 4rem;
        }
      }
    }

    .social {
      grid-area: social;
      display: flex;
      align-items: center;

      > a {
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;

        &:not(:last-of-type) {
          margin-right: 2rem;
        }

        &:hover {
          svg {
            color: $pink-blue;
          }
        }

        svg {
          width: 1.5rem;
          height: 1.5rem;
          color: $grey;
          transition: 0.3s ease all;
        }
      }
    }

    @media (max-width: 3440px) {
      max-width: 60%;
    }

    @media (max-width: 2580px) {
      max-width: 65%;
    }

    @media (max-width: 1920px) {
      max-width: 77%;
    }

    @media (min-width: 1440px) {
      max-width: 1100px;
    }

    @media (max-width: 1280px) {
      max-width: 90%;
      grid-template-columns: 3rem 1fr minmax(4rem, auto);
    }

    // MOBILE
    @media (max-width: $large-mobile-breakpoint) {
      grid-gap: 1.25rem 0;

      &.container-desktop {
        display: none;
      }

      &.container-mobile {
        display: grid;
      }

      .social {
        grid-row: 1;
        grid-column: 1 / 13;
        justify-content: center;
      }

      .legal-links {
        grid-row: 2;
        grid-column: 1 / 13;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem 0;

        h6,
        h6:not(:last-of-type) {
          text-align: center;
          margin-right: auto;
          margin-left: auto;
        }
      }

      .brand {
        grid-column: 1 / 13;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 0 1.25rem;
        padding-top: 1.5rem;

        .logo {
          grid-area: unset;
          grid-column: 1 / 2;
        }

        h6 {
          grid-area: unset;
          grid-column: 2 / 13;
          display: flex;
          align-items: center;
          color: $grey;
        }
      }
    }
  }
}
</style>
