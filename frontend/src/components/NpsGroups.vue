<template>
  <div class="npsgroups-container center">
    <h2>NPS Groups</h2>
    <div class="h-150">
      <h3 v-if="!npsGroups">No data yet</h3>
      <div v-if="npsGroups">
        <h3>
          Promoters: <span class="color-green">{{ npsGroups.promoters }}</span>
        </h3>
        <h3>
          Passives: <span class="color-yellow">{{ npsGroups.passives }}</span>
        </h3>
        <h3>
          Detractors: <span class="color-red">{{ npsGroups.detractors }}</span>
        </h3>
      </div>
    </div>
    <Button
      :onClick="getNpsGroups"
      title="Get NPS groups"
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
  name: "NpsGroups",
  components: {
    Button,
  },
  data() {
    return {
      npsGroups: "",
      isLoading: false,
      disable: false,
    };
  },
  methods: {
    getNpsGroups() {
      this.disable = true;
      this.isLoading = true;
      DashBoardService.getNpsGroups().then((response) => {
        this.isLoading = false;
        this.npsGroups = response.data;
      });
    },
  },
});
</script>

<style scoped lang="scss">
.npsgroups-container {
  width: 33.3%;
  margin: 2%;
}

@media (max-width: 768px) {
  .npsgroups-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
