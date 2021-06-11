<template>
  <h1>{{ message }}</h1>
  <Helloworld />
</template>

<script>
import HelloWorld from '~/components/Helloworld'
export default {
  components: {
    Helloworld
  },
  data() {
    return {
      message: 'Hello Vue'
    }
  }
}
</script>
