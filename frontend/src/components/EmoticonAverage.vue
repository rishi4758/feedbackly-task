<template>
  <div class="emoticon-container center">
    <h2>Emoticon Average</h2>
    <div class="h-150">
      <h3 v-if="!emoticonAverage">No data yet</h3>
      <div v-if="emoticonAverage">
        <h2>{{ emoticonAverage.average }}</h2>
      </div>
    </div>
    <Button
      :onClick="getEmoticonAverage"
      title="Get Emoticon Average"
      v-bind:disable="disable"
      v-bind:loading="isLoading"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DashBoardService from "../services/DashboardService";
import Button from "./Button.vue";
export default defineComponent({
  name: "EmoticonAverage",
  components: {
    Button,
  },
  data() {
    return {
      emoticonAverage: "",
      isLoading: false,
      disable: false,
    };
  },
  methods: {
    getEmoticonAverage() {
      this.disable = true;
      this.isLoading = true;
      DashBoardService.getEmoticonAverage().then((response) => {
        this.isLoading = false;
        this.emoticonAverage = response.data;
      });
    },
  },
});
</script>

<style scoped lang="scss">
.emoticon-container {
  width: 33.3%;
  margin: 2%;
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
