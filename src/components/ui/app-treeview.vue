<script setup>
import { computed } from 'vue';
import AppCheckbox from "./app-checkbox.vue";

const props = defineProps({
  nodes: {
    type: Array,
    default: () => []
  },
  parent: {
    type: Object,
    default: null
  }
});
const emit = defineEmits(['change']);

const computedData = computed(() => {
  return props.nodes.map(item => {
    item.checked = false;

    if (item.children) {
      item.isOpen = false;
    }

    return item;
  });
})

function toggleExpanderItem (item) {
  item.isOpen = !item.isOpen
}

function changedItemStatus(item, parentEl) {
  const parent = props.parent ?? parentEl;

  if (item.checked) {
    setChildrenStatus(item, true);

    const isEveryChildChecked = parent?.children?.every(child => child.checked);

    if (isEveryChildChecked) parent.checked = true;
  }
  else {
    setChildrenStatus(item, false);

    if (parent) parent.checked = false;
  }

  function setChildrenStatus(item, status) {
    item.checked = status;
    item.children?.forEach(child => setChildrenStatus(child, status));
  }

  emit('change', item, props.parent)
}

function changeParent(item, parent) {
  changedItemStatus(item, parent);
}
</script>

<template>
  <div>
    <div
        v-for="(item, index) in computedData"
        :key="index"
        class="w-100 divide-x pl-6"
    >
      <div class="flex py-4 border-b-2">
        <app-checkbox
            v-model="item.checked"
            @change="changedItemStatus(item)"
        >
          <template #label>
            {{ item.label }}
          </template>
        </app-checkbox>

        <button
            v-if="Object.keys(item).includes('isOpen')"
            class="ml-auto"
            @click="toggleExpanderItem(item)"
        >
          <template v-if="item.isOpen">
            -
          </template>
          <template v-else>
            +
          </template>
        </button>
      </div>

      <div v-show="item.isOpen">
        <app-treeview
            :nodes="item.children"
            :parent="item"
            @change="changeParent"
        />
      </div>
    </div>
  </div>
</template>