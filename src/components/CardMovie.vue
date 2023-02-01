<template>
  <div class="container">
    <h1 class="title">Movies App</h1>
    
    <div class="movie-card" v-for="movie in movies" :key="movie.id">
      <div class="movie-header manOfSteel" >
        <h3 class="movie-title">{{ movie.title }}</h3>
        <img class="movie-poster" :src="'https://image.tmdb.org/t/p/w300/' + movie.poster_path" alt="">
        
      </div><!--movie-header-->
      <div class="movie-content" >
        <div class="movie-content-header">
          <a href="#">
            
          </a>
          
        </div>
       
      </div><!--movie-content-->
    </div><!--movie-card-->
    
    
  </div><!--container-->
  
</template>

<script>
export default {
  data() {
    return {
      movies: []
    }
  },
  created() {
    this.fetchMovies()
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=00e1a246b4bfc291602bd541dc83b0c4&language=en-US&page=1"
        );
        const data = await response.json();
        this.movies = data.results;
      } catch (error) {
        console.error(error);
      }
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  height: 100%;
  width: 100%;
  background: #e9e9e9;
  font-family: 'Arimo', Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #010b26;
}

* {
  -webkit-transition: 300ms;
  transition: 300ms;
}

.intro {
  text-align: center;
}

ul {
  list-style-type: none;
}

h1, h2, h3, h4, h5, p {
  font-weight: 400;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: #6ABCEA;
}

.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 10vh;
  margin-left: auto;
  padding: 10px;
  margin-right: auto;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.movie-card {
  background: #ffffff;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 315px;
  margin: 1em;
  border-radius: 10px;
  display: inline-block;
}

.movie-header {
  padding: 0;
  margin: 0;
  height: 367px;
  width: 100%;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.movie-poster {
  height: 300px;
  border-radius: 4px;
}

.header-icon-container {
  position: relative;
}

.header-icon {
  width: 100%;
  height: 367px;
  line-height: 367px;
  text-align: center;
  vertical-align: middle;
  margin: 0 auto;
  color: #ffffff;
  font-size: 54px;
  text-shadow: 0px 0px 20px #6abcea, 0px 5px 20px #6ABCEA;
  opacity: .85;
}

.header-icon:hover {
  background: rgba(0, 0, 0, 0.15);
  font-size: 74px;
  text-shadow: 0px 0px 20px #6abcea, 0px 5px 30px #6ABCEA;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  opacity: 1;
}

.movie-card:hover {
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
}

.movie-content {
  padding: 18px 18px 24px 18px;
  margin: 0;
}

.movie-content-header, .movie-info {
  display: table;
  width: 100%;
}
.title {
  width: 100%;
  font-weight: bold;
}

.movie-title {
  font-size: 20px;
  padding: 20px;
  margin: 0 auto;
  font-weight: bold;
}

.movie-info {
  margin-top: 1em;
}

.info-section {
  display: table-cell;
  text-transform: uppercase;
  text-align: center;
}

.info-section:first-of-type {
  text-align: left;
}

.info-section:last-of-type {
  text-align: right;
}

.info-section label {
  display: block;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: .5em;
  font-size: 9px;
}

.info-section span {
  font-weight: 700;
  font-size: 11px;
}

@media screen and (max-width: 500px) {
  .movie-card {
    width: 95%;
    max-width: 95%;
    margin: 1em;
    display: block;
  }
  
  .container {
    padding: 0;
    margin: 0;
  }
}

</style>




