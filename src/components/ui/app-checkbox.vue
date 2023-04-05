<script setup lang="ts">
import { computed } from "vue";

interface IProps {
  modelValue: boolean
}

const props = defineProps<IProps>()

const emit = defineEmits(['update:modelValue', 'change']);

const randomID: string = String(Math.random());

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