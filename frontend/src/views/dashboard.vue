<template>
  <div class="dashboard-container">
    <h1 class="dashboard-heading">Analytics dashboard</h1>
    <div class="items-container">
      <NpsGroups />
      <NpsScore />
      <EmoticonAverage />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import NpsGroups from "../components/NpsGroups.vue";
import NpsScore from "../components/NpsScore.vue";
import EmoticonAverage from "../components/EmoticonAverage.vue";

export default defineComponent({
  name: "Dashboard",
  components: {
    NpsGroups,
    NpsScore,
    EmoticonAverage,
  },
});
</script>

<style scoped lang="scss">
.dashboard-container {
  max-width: 100%;
  height: 80vh;
  margin: 2%;
  border: solid $border-color 6px;
  padding: 2%;
}
.items-container {
  display: flex;
  flex-direction: row;
}

@media (max-width: 768px) {
  .dashboard-container {
    height: 100%;
  }
  .items-container {
    flex-direction: column;
    align-content: center;
  }
}
</style>
