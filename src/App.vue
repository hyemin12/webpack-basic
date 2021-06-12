<template>
  <h1 @click="increase">
    {{ count }}
  </h1>
  <div v-if="count > 4">4보다 큽니다</div>
  <ul>
    <li 
    v-for="fruit in fruits"
    :key="fruit"
    :name="fruit">
      {{ fruit }}
    </li>
  </ul>
</template>

<script>
import Fruit from '~/components/Fruit'
export default {
  components: {
    Fruit: Fruit
  },
  data() {
    return {
      count: 0,
      fruits: ['Apple', 'Banana', 'Orange']
    }
  },
  methods: {
    increase() {
      this.count += 1
    }
  }
}
</script>


  