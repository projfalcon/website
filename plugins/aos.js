import AOS from 'aos'

// Styles
import 'aos/dist/aos.css'

export default ({ app }) => {
  app.AOS = new AOS.init({
    offset: 75,
    delay: 0,
    duration: 500,
    once: true,
    anchorPlacement: 'top-center'
  })
}
