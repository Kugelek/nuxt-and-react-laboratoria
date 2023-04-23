<template>
  <div>
    <div class="nav">
      <NuxtLink to="/nasa/1"><div class="navi-item">Nasa</div></NuxtLink>
      <NuxtLink to="/"><div class="navi-item">HomePage</div></NuxtLink>

      <NuxtLink to="/"><div class="navi-item">Contact me</div></NuxtLink>
    </div>
    <Nuxt />
    <!-- <ModalsBasicModal v-if="modal.show">
      <img :src="modal.content" style="width: 100%; height: 100%">
    </ModalsBasicModal> -->
  </div>
</template>
<script>
// export default {
//   name: "NuxtComponent",
//   data() {
//     return {
//         modal: {
//           show: false,
//           content: null
//         }
//     }
//   },
//   created() {
//     this.$nuxt.$on('runModal', ($event) => this.setModal($event))
//     this.$nuxt.$on('closeModal', ($event) => this.setModal($event))
//   },
//   methods: {
//     setModal(e) {
//       this.modal.content = e.content
//       this.modal.show = e.state
//     }
//   }
// }
</script>
<style>
.nav {
  display: flex;
  height: 4vh;

  align-items: center;
  background-color: goldenrod;
  margin-bottom: 5rem;
}
.navi-item {
  margin: 3rem;
  padding: 1rem;
  opacity: 0.9;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}
.navi-item:hover {
  background-color: white;
  opacity: 1;
}

a {
  color: black;
  text-decoration: none;
}
</style>
