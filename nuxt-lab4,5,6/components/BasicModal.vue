<template>
  <div class="modal">
    <div class="content-modal">
      <span class="close" @click="closeModal">Close</span>

      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicModal",
  methods: {
    closeModal() {
      const data = {
        state: false,
        content: null,
      };
      this.$nuxt.$emit("closeModal", data);
    },
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.content-modal {
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 75%;
  background-color: #eee;
  border-radius: 1rem;
  padding: 2rem;
}

.content {
  margin-left: auto;
  margin-right: auto;
  max-height: 90%;
}
.close {
  margin-left: auto;
  cursor: pointer;
  opacity: 0.9;
  color: #333;
  transition: all 0.3s ease;
}

.close:hover {
  color: black;
  opacity: 1;
}
</style>
