<template>
  <div>
    <div class="nav">
      <NuxtLink to="/nasa/1"><div class="navi-item">Nasa</div></NuxtLink>
      <NuxtLink to="/"><div class="navi-item">HomePage</div></NuxtLink>

      <NuxtLink to="/"><div class="navi-item">Contact me</div></NuxtLink>
    </div>
    <Nuxt />
    <BasicModal v-if="modal.show">
      <img :src="modal.content" style="width: 100%; height: 100%" />
    </BasicModal>

   <div class="chat">
            <div class="chat-top" @click="toggleChat">Chat</div>

                <div v-if="chatVisible">
                <div class="chat-bottom"></div>
                <input class="chat-input" type="text"></input>
                </div>
              </div>
           
      
  </div>
</template>
<script>
import BasicModal from "../components/BasicModal.vue";
export default {
  name: "NuxtComponent",
  components: {
    BasicModal,
  },
  data() {
    return {
      chatVisible: false,
      modal: {
        show: false,
        content: null,
      },
    };
  },
  created() {
    this.$nuxt.$on("openModal", ($event) => this.setModal($event));
    this.$nuxt.$on("closeModal", ($event) => this.setModal($event));
  },
  methods: {
    toggleChat(){
      this.chatVisible = !this.chatVisible;
    },
    setModal(e) {
      this.modal.content = e.content;
      this.modal.show = e.state;
    },
  },
};
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




.chat {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1vw 2vw;
  margin: 2rem;
}

.chat {
  background-color: black;
  color: white;
  font-size: 1.5rem;
  border-radius: 10%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.chat-top {
}
.chat-bottom {
  background-color: white;
  padding: 2rem;
  height: 15vh;
  width: 100%;
  margin-left: -2rem;
}

.chat-visible {
  background-color: white;
  color: black;
  font-size: 1.5rem;
  border-radius: 10%;
  cursor: pointer;
}

.chat-input {
  width: 100%;
  padding: 1rem 2rem;
  margin-left: -2rem;
}

</style>
