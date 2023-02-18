<template>
    <div class="container">
    <figure class="movie">
        <div class="movie__hero">
            <img :src="'https://image.tmdb.org/t/p/w300/' + movie.poster_path" alt="">
        </div>
        <div class="movie__content">
          <div class="movie__title">
            <h1 class="heading__primary">{{ movie.title }}<i class="fas fa-fire"></i></h1>
            <div class="movie__tag movie__tag--1">{{ movie.release_date }}</div>
            <div class="movie__tag movie__tag--2">#thriller</div>
          </div>
          <p class="movie__description">
            {{ movie.overview }}
         </p>
          <div class="movie__details">
            <p class="movie__detail"><span class="icons icons-red"><i class="fas fa-camera-retro"></i></span>{{ movie.vote_average }}</p>
            <p class="movie__detail"><span class="icons icons-grey"><i class="fas fa-clock"></i> </span>{{ movie.runtime }}</p>
            <p class="movie__detail"><span class="icons icons-yellow"><i class="fas fa-file-invoice-dollar"></i>
              </span></p>
          </div>
        </div>
        <div class="movie__price"></div>
      </figure>
    </div>
</template>
<script>
export default {
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            movie: null,
        };
    },
    created() {
        this.fetchMovie();
    },
    methods: {
        async fetchMovie() {
            const url = `https://api.themoviedb.org/3/movie/${this.id}?api_key=00e1a246b4bfc291602bd541dc83b0c4&language=en-US`;
            const response = await fetch(url);
            const json = await response.json();
            this.movie = json;
        },
    },
};


</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

* {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
}
.movie {
    max-width: 800px;
    border-radius: 5px;
    display: flex;
    box-shadow: 0 5px 20px 10px rgba(0, 0, 0, .2);
    overflow: hidden;
}
.movie__hero {
  flex: 0 0 45%;
  background-color: #18122B;
}

.movie__img {
    width: 100%;
    display: block;
}

.movie__content {
    background-color: #18122B;
    flex: 1;
    padding: 35px 30px;
    display: flex;
    flex-direction: column;
}
.movie__price {
    background:linear-gradient(to bottom, #A9C9FF 0%, #2d2672 100%);
    flex: 0 0 50px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
    color: rgb(255, 255, 255);
    writing-mode: vertical-lr;
    display: flex;
    align-items: center;
    justify-content: center;
}
.movie__title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 34px;
}
.heading__primary {
    font-size: 38px;
    width: 150px;
    font-weight: bold;
    display: inline-block;
    color: #ffffff;
}
.fa-fire {
    color: salmon;
}
.movie__tag {
    font-size: 10px;
    color: #fff;
    padding: 2px 7px;
    border-radius: 100px;
    margin-right: 8px;
   display: block;
   text-transform: uppercase;
}
.movie__tag--1 {
  background-color: #A9C9FF;
}

.movie__tag--2 {
    background-color:#FFBBEC;
}

.movie__description {
    font-size: 22px;
    font-weight: 500;
    padding-top: 50px;
    color: #A9C9FF;
}

.movie__details {
    display: flex;
    margin: auto;
    color: #A9C9FF;
}

.movie__detail {
   font-size: 13px;
   margin-right: 20px;
   display: flex;
   align-items: center;
   color: #A9C9FF;
}
</style>