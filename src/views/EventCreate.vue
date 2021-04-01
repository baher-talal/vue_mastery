<template>
  <div>
    <h1>Create an Evebt, {{ user.name }}</h1>
    <p>this event was created by {{ user.id }}</p>
    <p>there are {{ getEventById(1) }}</p>

    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters (['getEventById']),
      ...mapState (['user', 'categories'])
  }
  }
</script>

<style lang="scss" scoped>
</style>