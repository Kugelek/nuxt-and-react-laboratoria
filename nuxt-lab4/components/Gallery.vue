<template>
  <div :class="[showMagnifyGlass ? normalClass : modalClass]">
    <div class="gallery-main">
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/6705/6705397.png"
          class="arrow"
          @click="previousMainImage()"
          alt="previous"
        />
      </div>
      <!-- <Transition name="movein" appear> -->
      <img
        :class="[shouldExecuteAnimation ? animationClass : stagnateClass]"
        :key="mainImgKey"
        v-bind:src="mainImgSource"
      />
      <!-- </Transition> -->
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/6705/6705398.png"
          class="arrow"
          @click="nextMainImage()"
          alt="next"
        />
      </div>
    </div>
    <div
      :class="[showMagnifyGlass ? normalGalleryBoxClass : modalGalleryBoxClass]"
    >
      <div v-for="(item, index) in this.allImgs" :key="index">
        <div class="gallery-small">
          <img
            class="option"
            :src="item"
            @click="setToMainImage($event)"
            id="index"
          />
        </div>
      </div>

      <img
        @click="switchModal()"
        src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png"
        class="magnify-icon"
        v-if="showMagnifyGlass"
      />

      <GalleryModal @close="switchModal" v-if="modalVisible"></GalleryModal>
    </div>
    <a href="https://www.flaticon.com/free-icons/search" title="search icons">
      icons created by Royyan Wijaya - Flaticon</a
    >
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    showMagnifyGlass: String,
  },
  // state
  data() {
    return {
      normalClass: "layout-normal",
      modalClass: "layout-modal",
      normalGalleryBoxClass: "gallery-box",
      modalGalleryBoxClass: "gallery-box-modal",
      shouldExecuteAnimation: false,
      animationClass: "main-move-in",
      mainImgKey: 1,
      stagnateClass: "",
      mainImgSource:
        "https://img.freepik.com/free-photo/red-roses-textured-background_53876-34020.jpg?w=1380&t=st=1680301384~exp=1680301984~hmac=3c7439b8c76a7193c4c67dc02d1a0b80fd776218872919975c08f79481f4510e",
      modalVisible: false,
      allImgs: [
        "https://img.freepik.com/free-photo/red-roses-textured-background_53876-34020.jpg?w=1380&t=st=1680301384~exp=1680301984~hmac=3c7439b8c76a7193c4c67dc02d1a0b80fd776218872919975c08f79481f4510e",
        "https://img.freepik.com/free-photo/spring-composition-with-bouquet-flowers-vase-closeup_169016-29760.jpg?w=740&t=st=1680302105~exp=1680302705~hmac=f0ddf1b677110b9a91bf1be75530193c86a75044cc1ae8d1f5f93a89123c43e6",
        "https://img.freepik.com/free-photo/beautiful-background-roses-valentine-s-day_24972-166.jpg?w=1380&t=st=1680302203~exp=1680302803~hmac=1550d256cd6170d2b941d4eab84ab7f3756760c5bf63838cd7a1a8f4f079f967",
        "https://img.freepik.com/free-photo/selective-focus-shot-red-rose-surrounded-by-green-leaves-sunlight_181624-20990.jpg?w=1380&t=st=1680302303~exp=1680302903~hmac=88aa18535d8c10e0b533f70fc98609808419b343946ff5fd3300078d94036e03",
        "https://img.freepik.com/free-photo/beautiful-flower-vase-table-decoration-with-garden-view_74190-14105.jpg?w=1380&t=st=1680302336~exp=1680302936~hmac=d8557a9ea124e543486efb30aa8039d0f7119ec2521e60d65127626a4474d1d6",
      ],
    };
  },

  methods: {
    forceRerender() {
      this.mainImgKey += 1;
    },
    setToMainImage(event) {
      this.shouldExecuteAnimation = false;
      if (event !== null) this.mainImgSource = event.target.src;
      this.shouldExecuteAnimation = true;
      this.forceRerender();
    },
    nextMainImage() {
      const oldInd = this.allImgs.findIndex((x) => x === this.mainImgSource);
      const newInd = oldInd + 1;
      console.log(this.allImgs.length);
      console.log(newInd);
      if (newInd < this.allImgs.length)
        this.mainImgSource = this.allImgs[newInd];
      this.shouldExecuteAnimation = true;
      this.forceRerender();
    },
    previousMainImage(event) {
      const oldInd = this.allImgs.findIndex((x) => x === this.mainImgSource);
      const newInd = oldInd - 1;
      if (newInd >= 0) this.mainImgSource = this.allImgs[newInd];
      this.shouldExecuteAnimation = true;
      this.forceRerender();
    },
    switchModal() {
      this.modalVisible = !this.modalVisible;
    },
  },
};
</script>
<style>
@import "./GalleryAnimations.css";
.movein-enter-active,
.movein-leave-active {
  transition: all 0.5s ease;
  opacity: 1;
  transform: rotate(0deg) translate(60px);
}

.movein-enter-from,
.movein-leave-to {
  opacity: 0.2;
  transform: translate(-60px);
}
.layout-normal {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.layout-modal {
  display: flex;
  flex-direction: row-reverse;
}

.gallery-main {
  border: 1px solid black;
  max-height: 50vh;
  width: 60vw;
  display: flex;
  margin: 3rem;
  padding: 5rem;
  justify-content: space-between;
  align-items: center;
}
.gallery-main > img {
  object-fit: cover;
  width: 80%;
  max-height: 40vh;
  cursor: pointer;
}
.nuxt-logo {
  height: 180px;
}
.gallery-box {
  border: 1px solid #eee;
  max-height: 30vh;
  width: 50vw;
  display: flex;
  margin: 3rem;
}
.gallery-box-modal {
  flex-direction: column;
}

.gallery-small {
  border: 1px solid #eee;
  padding: 0.3rem;
  cursor: pointer;
  width: 90%;
  margin: 1.5rem;
}

.gallery-small > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.gallery-box-modal > * {
  max-height: 10vh;
  max-width: 10vw;
}
.magnify-icon {
  width: 2rem;
  height: 2rem;
  margin: 2.5rem;
  cursor: pointer;
}
.magnify-icon:hover {
  scale: 1.1;
  transition: all 300 ease-in-out;
}
.arrow {
  width: 2rem !important;
  height: 2rem !important;
  margin: -2.5rem;
  cursor: pointer;
}
.arrow:hover {
  scale: 1.1;
  transition: all 300 ease-in-out;
}
</style>
