<template>
  <div class="container">
    <h1>planety z nasa api</h1>
    <input class="input" v-model="search" />
    <div class="imgcontainer">
      <img
        :src="value"
        v-for="(value, index) in imgs1"
        :key="test + index"
        height="40px"
        width="80px"
        class="smallimage"
      />
    </div>
    <button class="btn" @click="fetchData">search</button>
  </div>
</template>

<script>
// import axios from "axios";
// import axios from "axios";
export default {
  name: "NasaPage",
  data() {
    return {
      imgs1: [],
      search: "",
      renderComponent: true,
    };
  },
  methods: {
    async fetchData() {
      this.imgs1 = [];
      this.renderComponent = false;
      console.log(this.search);
      fetch(`https://images-api.nasa.gov/search?q=${this.search}`)
        .then((response) => response.json())
        .then((res) => {
          console.log(res.collection.items);
          this.imgs1 = res.collection.items
            .filter(
              (el) =>
                el.links != null &&
                el.links != undefined &&
                el.links[0] != undefined &&
                el.links[0] != null
            )
            .splice(0, 50)
            .map((el) => el.links[0].href);
          console.log(this.imgs1);
        });

      this.renderComponent = true;
    },
  },
  mounted() {
    console.log("imgs1");

    this.fetchData();
    console.log(this.imgs1);
  },
};
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  width: 50vw;
  margin-left: 10vw;
}
.smallimage {
  margin: 5px;
}
.imgcontainer {
  display: flex;
  flex-wrap: wrap;
  background-color: #eee;
  width: 600px;
}
.btn {
  width: 20%;
  margin: 2rem;
}
.input {
  width: 50%;
  margin: 1rem;
  padding: 1rem;
}
</style>
