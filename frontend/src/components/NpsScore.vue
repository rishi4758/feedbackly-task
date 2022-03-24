<template>
  <div class="npsscore-container center">
    <h2>NPS Score</h2>
    <div class="h-150">
      <h3 v-if="!npsScore">No data yet</h3>
      <div v-if="npsScore">
        <h2>{{ npsScore.score }}</h2>
      </div>
    </div>
    <Button
      :onClick="getNpsScore"
      title="Get NPS score"
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
  name: "NpsScore",
  components: {
    Button,
  },
  data() {
    return {
      npsScore: "",
      isLoading: false,
      disable: false,
    };
  },
  methods: {
    getNpsScore() {
      this.disable = true;
      this.isLoading = true;
      DashBoardService.getNpsScore().then((response) => {
        this.isLoading = false;
        this.npsScore = response.data;
      });
    },
  },
});
</script>

<style scoped lang="scss">
.npsscore-container {
  width: 33.3%;
  margin: 2%;
}

@media (max-width: 768px) {
  .npsscore-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
