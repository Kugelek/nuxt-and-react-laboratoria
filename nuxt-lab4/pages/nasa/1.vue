<template>
  <div style="display: flex; flex-direction: column">
    <h1>planety z nasa api</h1>

    <div style="display: flex; width: 600px">
      <img
        :src="value.links[0].href"
        v-for="(value, index) in imgs"
        :key="index"
        style="width: 100px"
      />
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import axios from "axios";
export default {
  name: "NasaPage",
  methods: {
    data: {
      imgs: [],
    },
    async fetchData() {
      fetch("https://images-api.nasa.gov/search?q=sun")
        .then((response) => response.json())
        .then((res) => {
          console.log(res.collection.items);
          this.imgs = res.collection.items.splice(0, 95);
        });
      // .then(data => (this.totalVuePackages = data.total));
      //   const res = await axios
      //     .get("https://images-api.nasa.gov/search?q=sun")
      //     .then((res) => console.log(res));
      // },
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
