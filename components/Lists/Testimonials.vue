<template>
  <div id="testimonials">
    <div class="container">
      <div
        class="title title-with-top-badge"
        data-aos="fade-up"
      >
        <h1 class="h1">
          Testimonials

          <span />
        </h1>

        <h3 class="h3">
          See what our clients are saying.
        </h3>
      </div>

      <div class="items">
        <div class="go-to-previous">
          <span class="line" />
          <span :class="{ disabled: CurrentIndex === 0 }" class="arrow-container" @click="goToPrevious">
            <i class="material-icons-round">
              keyboard_arrow_left
            </i>
          </span>
        </div>

        <div
          class="current"
          data-aos="fade-left"
        >
          <!-- Circle blob -->
          <img class="circle-blob" src="~assets/media/misc/circle.svg" alt="Circle blob">

          <TestimonialItem
            :info="List[CurrentIndex]"
            :browse-to-previous="BrowseToPrevious"
            :browse-to-next="BrowseToNext"
            @browsed="resetBrowsingStatus"
          />
        </div>

        <div class="go-to-next">
          <span :class="{ disabled: CurrentIndex === List.length - 1 }" class="arrow-container" @click="goToNext">
            <i class="material-icons-round">
              keyboard_arrow_right
            </i>
          </span>
          <span class="line" />
        </div>
      </div>

      <div class="navigation-dots">
        <span
          v-for="(dot, index) in List.length"
          :key="index"
          :class="{ active: index === CurrentIndex && CurrentIndexDisplayed }"
          class="item"
          @click="goToItem(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TestimonialItem from '@/components/Lists/TestimonialsItem'

export default {
  components: {
    TestimonialItem
  },
  data () {
    return {
      List: [
        {
          ImageURL: 'media/testimonials/example.png',
          Review: 'Whether you need a E-Commerce, a landing page or an app we are here for you to help decide what’s best. Whether you need a E-Commerce, a landing page or an app we are here. Whether you need a E-Commerce, a landing page or an app.Whether you need a E-Commerce, a landing page or an app we are here.',
          Name: 'João Carlos',
          Role: 'CEO @ Farmácia Cruz'
        },
        {
          ImageURL: 'media/testimonials/example.png',
          Review: 'Whether you need a E-Commerce, a landing page or an app we are here for you to help decide what’s best. Whether you need a E-Commerce, a landing page or an app we are here. Whether you need a E-Commerce, a landing page or an app.Whether you need a E-Commerce, a landing page or an app we are here.',
          Name: 'José Fonte',
          Role: 'CEO @ Silver Cosmetics'
        }
      ],
      CurrentIndex: 0,
      CurrentIndexDisplayed: true,
      BrowseToPrevious: false,
      BrowseToNext: false
    }
  },
  methods: {
    goToPrevious () {
      if (this.CurrentIndex === 0) return
      if (this.BrowseToPrevious) return

      this.BrowseToPrevious = true
      this.CurrentIndexDisplayed = false
      setTimeout(() => {
        this.setIndex(this.CurrentIndex - 1)
      }, 500)
    },
    goToItem (item) {
      if (item === this.CurrentIndex) return
      if (this.BrowseToPrevious || this.BrowseToNext) return

      if (item < this.CurrentIndex)
        this.BrowseToPrevious = true
      else
        this.BrowseToNext = true

      this.CurrentIndexDisplayed = false

      setTimeout(() => {
        this.setIndex(item)
      }, 500)
    },
    goToNext () {
      if (this.CurrentIndex === this.List.length - 1) return
      if (this.BrowseToNext) return

      this.BrowseToNext = true
      this.CurrentIndexDisplayed = false
      setTimeout(() => {
        this.setIndex(this.CurrentIndex + 1)
      }, 500)
    },

    setIndex (index) {
      this.CurrentIndex = index
      this.CurrentIndexDisplayed = true
    },
    resetBrowsingStatus () {
      this.BrowseToPrevious = false
      this.BrowseToNext = false
    }
  }
}
</script>

<style lang="scss" scoped>
#testimonials {
  position: relative;
  margin: 11.25rem auto 0 auto;

  .items {
    width: 100%;
    display: grid;
    grid-template-columns: max-content auto max-content;
    margin-top: 5.75rem;

    .go-to-previous,
    .go-to-next {
      position: relative;
      z-index: 10;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .line {
        position: relative;
        display: block;
        width: 10rem;
        height: 0.125rem;
        background: $lightgrey;
      }

      .arrow-container {
        position: relative;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        border-radius: 50%;
        border: 1px solid $grey;
        user-select: none;
        transition: 0.3s ease all;

        &:not(.disabled):hover {
          background: $primary;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        &.disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }
      }
    }

    .go-to-previous {
      padding-right: 12.5rem;
    }

    .go-to-next {
      padding-left: 6.25rem;
    }

    .current {
      position: relative;

      .circle-blob {
        position: absolute;
        top: -2.5rem;
        left: -4rem;
        z-index: -1;
      }
    }
  }

  .navigation-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4.5rem;

    .item {
      display: block;
      width: 0.625rem;
      height: 0.625rem;
      background: lighten($grey, 40);
      border-radius: 0.3125rem;
      transition: 0.3s ease all;

      &:not(:last-of-type) {
        margin-right: 1.625rem;
      }

      &:not(.active):hover {
        background: lighten($grey, 0);
        cursor: pointer;
      }

      &.active {
        width: 1.125rem;
        background: $primary;
      }
    }
  }

  @media (max-width: $large-laptop-breakpoint) {
    .items {
      .go-to-previous {
        padding-right: 6.25rem;
      }

      .go-to-next {
        padding-left: 3.125rem;
      }
    }
  }

  @media (max-width: $middle-laptop-breakpoint) {
    .items {
      .go-to-previous {
        .line {
          width: 5rem;
        }
      }

      .go-to-next {
        .line {
          width: 5rem;
        }
      }
    }
  }

  @media (max-width: $small-laptop-breakpoint) {
    .items {
      .go-to-previous {
        padding-right: 3rem;
      }
    }
  }
}
</style>
