<template>
  <div class="hello">
    <h1>hello</h1>
    <button @click="fetchData">Get Movies</button>

      
    <div class="card">
      <a href="#">
        <div class="img1"></div>
        <div class="img2"></div>
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: null,
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: '00e1a246b4bfc291602bd541dc83b0c4'
          }
        });
        this.data = JSON.stringify(response.data, null, 2);
      } catch (error) {
        console.error(error);
      }
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
