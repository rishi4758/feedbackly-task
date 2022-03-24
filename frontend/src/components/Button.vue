<template>
  <button
    @click="onClick"
    :class="{ isDisable: disable }"
    :disabled="disable"
    class="btn center"
  >
    {{ disable ? (loading ? "Loading...." : "Data loaded!") : title }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    title: String,
    onClick: { type: Function },
    disable: Boolean,
    loading: Boolean,
  },
});
</script>

<style scoped lang="scss">
.btn {
  font-weight: 800;
  color: $color-white;
  font-size: 16px;
  font-weight: 500;
  height: 45px;
  width: 150px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: $color-purple;
}
.isDisable {
  background-color: $color-grey;
}

@media (max-width: 768px) {
  .emoticon-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
