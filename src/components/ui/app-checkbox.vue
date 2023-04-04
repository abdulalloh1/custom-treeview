<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue', 'change']);

const randomID = String(Math.random());

const computedModelValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
})
</script>

<template>
  <div class="flex items-center">
    <input
        v-model="computedModelValue"
        :id="randomID"
        type="checkbox"
        @change="emit('change')"
    />
    
    <label
        :for="randomID"
        class="ml-2 cursor-pointer"
    >
      <slot name="label" />
    </label>
  </div>
</template>