<template>
  <div>
    <div class="gallery-main">
      <img v-bind:src="mainImgSource" />
    </div>
    <div class="gallery-box">
      <div class="gallery-small">
        <img
          @click="setToMainImage($event)"
          id="img-1"
          src="https://img.freepik.com/free-photo/red-roses-textured-background_53876-34020.jpg?w=1380&t=st=1680301384~exp=1680301984~hmac=3c7439b8c76a7193c4c67dc02d1a0b80fd776218872919975c08f79481f4510e"
        />
      </div>
      <div class="gallery-small">
        <img
          @click="setToMainImage($event)"
          id="img-2"
          src="https://img.freepik.com/free-photo/spring-composition-with-bouquet-flowers-vase-closeup_169016-29760.jpg?w=740&t=st=1680302105~exp=1680302705~hmac=f0ddf1b677110b9a91bf1be75530193c86a75044cc1ae8d1f5f93a89123c43e6"
        />
      </div>
      <div class="gallery-small">
        <img
          @click="setToMainImage($event)"
          id="img-3"
          src="https://img.freepik.com/free-photo/beautiful-background-roses-valentine-s-day_24972-166.jpg?w=1380&t=st=1680302203~exp=1680302803~hmac=1550d256cd6170d2b941d4eab84ab7f3756760c5bf63838cd7a1a8f4f079f967"
        />
      </div>

      <div class="gallery-small">
        <img
          @click="setToMainImage($event)"
          id="img-4"
          src="https://img.freepik.com/free-photo/selective-focus-shot-red-rose-surrounded-by-green-leaves-sunlight_181624-20990.jpg?w=1380&t=st=1680302303~exp=1680302903~hmac=88aa18535d8c10e0b533f70fc98609808419b343946ff5fd3300078d94036e03"
        />
      </div>
      <div class="gallery-small">
        <img
          @click="setToMainImage($event)"
          id="img-5"
          src="https://img.freepik.com/free-photo/beautiful-flower-vase-table-decoration-with-garden-view_74190-14105.jpg?w=1380&t=st=1680302336~exp=1680302936~hmac=d8557a9ea124e543486efb30aa8039d0f7119ec2521e60d65127626a4474d1d6"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // state
  data() {
    return {
      mainImgSource:
        "https://img.freepik.com/free-photo/red-roses-textured-background_53876-34020.jpg?w=1380&t=st=1680301384~exp=1680301984~hmac=3c7439b8c76a7193c4c67dc02d1a0b80fd776218872919975c08f79481f4510e",
    };
  },

  methods: {
    setToMainImage(event) {
      if (event !== null) this.mainImgSource = event.target.src;
    },
  },
};
</script>
<style>
.gallery-main {
  border: 1px solid black;
  height: 50vh;
  width: 50vw;
  display: flex;
  margin: 3rem;
  padding: 5rem;
}
.gallery-main > img {
  object-fit: cover;

  width: 100%;
  height: 100%;
  cursor: pointer;
}
.nuxt-logo {
  height: 180px;
}
.gallery-box {
  border: 1px solid black;
  height: 20vh;
  width: 50vw;
  display: flex;
  margin: 3rem;
}
.gallery-small {
  border: 1px solid black;
  width: 20%;
  margin: 1.5rem;
}
.gallery-small > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
