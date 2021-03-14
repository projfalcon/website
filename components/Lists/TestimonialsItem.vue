<template>
  <div
    :class="{
      'slide-left-enter-right': browseToNext,
      'slide-right-enter-left': browseToPrevious
    }"
    class="testimonial-item"
  >
    <div class="photo">
      <img :src="require(`~/assets/${info.ImageURL}`)" :alt="info.Name">
      <span />
    </div>

    <div class="description">
      <h5 class="h5 review">
        <span class="quote-start text-lightgrey">
          “
        </span>
        {{ info.Review }}
        <span class="quote-end text-lightgrey">
          ”
        </span>
      </h5>

      <h1 class="text-primary name">
        {{ info.Name }}
      </h1>

      <p class="role">
        {{ info.Role }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    },
    browseToPrevious: {
      type: Boolean,
      required: false
    },
    browseToNext: {
      type: Boolean,
      required: false
    }
  },
  watch: {
    browseToPrevious (val) {
      if (val) this.emitBrowsed()
    },
    browseToNext (val) {
      if (val) this.emitBrowsed()
    }
  },
  methods: {
    emitBrowsed () {
      setTimeout(() => {
        this.$emit('browsed')
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.testimonial-item {
  max-width: 50rem;
  display: grid;
  grid-template-columns: 12.5rem auto;

  .photo {
    max-width: 12.5rem;
    max-height: 12.5rem;
    position: relative;
    background-image: $primary;
    background-clip: content-box;
    border-radius: 50%;

    img {
      width: 100%;
      max-width: 12.5rem;
      max-height: 12.5rem;
      display: block;
      mix-blend-mode: hard-light;
    }
  }

  .description {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "review"
                        "name"
                        "role";
    margin-left: 2.5rem;

    .review {
      grid-area: review;
      position: relative;
      color: $grey;
      margin-bottom: 1.875rem;

      .quote-start,
      .quote-end {
        font-family: "Hind";
        font-weight: 800;
        font-size: 4.625rem;
        color: #EAEAEA;
      }

      .quote-start {
        position: absolute;
        top: 0;
        left: -3rem;
      }

      .quote-end {
        position: absolute;
        top: calc(100% + 0.5rem);
        right: -1.5rem;
      }
    }

    .name {
      grid-area: name;
      max-width: max-content;
      font-family: "Montserrat";
      font-weight: 700;
      font-size: 1.625rem;
    }

    .role {
      grid-area: role;
      color: $grey;
      font-size: 0.75rem;
      margin-top: 0.25rem;
    }
  }

  @media (max-width: $large-mobile-breakpoint) {
    grid-template-columns: minmax(0, 1fr);

    .photo {
      margin: 0 auto 3rem auto;
    }

    .description {
      grid-template-areas: "name"
                          "role"
                          "review";
      justify-content: center;
      margin: 0;

      .name {
        margin: 0 auto;
      }

      .role {
        margin: 0 auto;
      }

      .review {
        margin: 3rem 0 0 0;
      }
    }
  }
}
</style>
