<template>
    <div id="card_container" data-offset="2">
        <div class="pg">
            <img :src="'https://image.tmdb.org/t/p/w300/' + movie.poster_path" alt="">
        </div>
        <div id="card">
          <div class="shine"></div>
          <div class="text-block">
            <h1>{{ movie.title }}<small>
                <br>{{ movie.release_date }}</small></h1>
            <p>
              {{ movie.overview }}
            </p>
            <button>Watch Trailer</button>
          </div>
        </div>
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

@import url(https://fonts.googleapis.com/css?family=Lato:400,300,700);
@import url(https://fonts.googleapis.com/css?family=Rubik:400,900);

* {
  box-sizing:border-box;
}
body, html {
  height:100%;
  min-height:100%;
}
body {
  background:linear-gradient(#f6f7fc 0%, #d5e1e8 40%);
  transform-style:preserve-3d;
  transform:perspective(800px);
  font-family:'Lato', Sans-serif;
}

#card_container {
  width:700px;
  height:450px;
  position:absolute;
  top:50%;
  left:50%;
  margin:-175px 0 0 -350px;
}
#card {
  animation:backAn 50s infinite;
  color:#fff;
  padding:30px;
  width:100%;
  height:100%;
  position:absolute;
  z-index:1;
  background:url(https://riverbeats.life/neworleans/wp-content/uploads/2018/07/Atlantis.png) 100% bottom;
  /*background:url(http://riccardotartaglia.it/img/deadpool/back.jpg) 100% bottom;*/
  /*box-shadow:0px 45px 100px rgba(0, 0, 0, 0.4), inset 0 0 0 1000px rgba(156, 27, 27, 0.6);*/
  box-shadow:0px 45px 100px rgba(0, 0, 0, 0.4), inset 0 0 0 1000px rgba(0, 76, 86, 0.6);
  border-radius: 12px;
}
#card .text-block {
  position:relative;
  z-index:2;
  text-shadow:0 3 10 rgba(0, 0, 0, 0.7);
}
#card .text-block h1 {
  font-family:'Rubik', Sans-serif;
  font-size:2.8em;
  margin:0;
  text-transform:uppercase;
  width: 440px;
  font-weight:700;
}
#card .text-block h1 small {
  font-size:.4em;
  color:#ccc;
  position:relative;
  bottom:10px;
}
#card .text-block h3 {
  margin:0;
  font-weight:700;
}
#card .text-block p {
  font-weight:300;
  width:65%;
}
#card .text-block button {
  transition:all 0.35s cubic-bezier(0.37, 0.26, 0.35, 1);
  border:4px solid #fff;
  padding:10px;
  background:transparent;
  font-family:'Rubik', Sans-serif;
  text-transform:uppercase;
  font-weight:700;
  cursor:pointer;
  margin-top: 50px;
}
#card .text-block button:hover {
  background: #443C68;
}
#card_container .pg {
  position:absolute;
  height:450px;
  width:40%;
  right:-10px;
  bottom:0px;
  z-index:2;
}
#card_container .pg > img{
  height: 300px;
}
.shine {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: #18122B;
  border-radius: 4px;
  z-index:1;
}
button {
  color:#fff;
}
@keyframes backAn {
  0% {
    background-size:100%;
  }
  50% {
    background-size:250%;
  }
  100% {
    background-size:100%;
  }
}

</style>