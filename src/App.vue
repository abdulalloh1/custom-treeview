<script
    setup
    lang="ts"
>
import AppTreeview from "./components/ui/app-treeview.vue";
import { useTreeData } from "./store/treeData";

const treeData = useTreeData();

</script>

<template>
  <app-treeview
      :nodes="treeData.nodes"
      class="ml-5 mt-5 w-2/3"
  />
</template>
