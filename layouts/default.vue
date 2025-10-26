<template>
  <div class="default-layout">
    <Header/>
    <nuxt />
    <Footer/>
  </div>
</template>
<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import '@/assets/css/global.scss'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

