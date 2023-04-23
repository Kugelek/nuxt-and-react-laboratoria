<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div name="footer">
            <img
              @click="$emit('close')"
              src="https://cdn-icons-png.flaticon.com/128/3031/3031157.png"
              alt="close"
              class="close"
            />
          </div>
          <Gallery :showMagnifyGlass="false" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    showMagnifyGlass: String,
  },
  // state
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
@import "./GalleryModal.css";
</style>
