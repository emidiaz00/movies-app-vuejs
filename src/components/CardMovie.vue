<template>
  <div class="container">
    <h1 class="title">Movies App</h1>
    <div class="movie-card" v-for="movie in movies" :key="movie.id">
      <div class="movie-header manOfSteel" >
        <h3 class="movie-title">{{ movie.title }}</h3>
        <img class="movie-poster" :src="'https://image.tmdb.org/t/p/w300/' + movie.poster_path" alt="">
      </div><!--movie-header-->
      <div class="movie-content">
        <router-link :to="{ name: 'CardMovieDetail', params: { id: movie.id } }" @click="verMas(movie.id)"><button class="btn-readmore">Read More</button></router-link>
        <div class="movie-content-header">
          <a href="#">
            </a>
        </div>
      </div><!--movie-content-->
    </div><!--movie-card-->
    
    
</div><!--container-->
<div class="container-pages">
  <button @click="changePage(2)">2</button>
  <button @click="changePage(3)">3</button>
  <button @click="changePage(4)">4</button>
  <button @click="changePage(5)">5</button>
  <button @click="changePage(6)">6</button>
  <button @click="nextPage()">&gt;</button>

</div>
  
</template>

<script>


export default {
  
  data() {
    return {
      movies: [],
      currentPage: 1,
      peliculaSelectedId: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=00e1a246b4bfc291602bd541dc83b0c4&language=en-US&page=${this.currentPage}`;
      const response = await fetch(url);
      const json = await response.json();
      this.movies = json.results;
    },
    changePage(page) {
      this.currentPage = page;
      this.fetchData();
    },
    nextPage() {
      this.currentPage++
      this.fetchData();
    },
    verMas(id) {
      const url = 'https://api.themoviedb.org/3';
      const endpoint = `movie/${id}`;
      const apiKey = '00e1a246b4bfc291602bd541dc83b0c4'; 
      
      fetch(`${url}/${endpoint}?api_key=${apiKey}`)
        .then(response => response.json())
        .then(idMovie => {
          this.peliculaSelectedId = idMovie.id;
          console.log(this.peliculaSelectedId);
        })
        .catch(error => console.error(error));
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.movie-card {
  background: #18122B;
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
  width: 250px;
  border-radius: 6px;
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
  cursor: pointer;
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
  color: #5B8FB9;
}

.movie-title {
  font-size: 20px;
  padding: 20px;
  margin: 0 auto;
  font-weight: bold;
  color: #ffffff;
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
    width: 80%;
    max-width: 95%;
    display: block;
  }
  .movie-poster {
    width: 250px;
  }
  
  .container {
    padding: 0;
    margin: 0;
  }
}

.container-pages {
  display: flex;
  margin: 0 auto;
  justify-content: center;
}
.container-pages ul {
  display: flex;
  justify-content: center;
}
.container-pages ul li {
  padding: 10px;
}
.container-pages button {
  border:none;
  cursor: pointer;
  font-weight: bold;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  height: 4vh;
}

#btn {
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
  transition: 0.3s all ease;
  position: relative;
}

#btn:hover {
  color: #fff;
}

#btn::before {
  position: absolute;
  content: '';
  left: 0;
  z-index: -1;
  background-color: #301E67;
  width: 30px;
  padding: 8px;
  height: 30px;
  border-radius: 80px;
  transition: 0.3s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

#btn:hover::before {
  width: 100%;
  color: #e9e9e9;
}

#btn svg {
  width: 30px;
  height: 30px;
  padding: 8px;
}

#btn svg path {
  fill: #5B8FB9;
}
.btn-readmore {
  border-radius: 4px;
  border: none;
  background-color: #635985;
  color: #ffffff;
  padding: 10px;
  margin-top: 8px;
}
.btn-readmore:hover {
  cursor: pointer;
  background-color: #5254dd;
}

</style>




