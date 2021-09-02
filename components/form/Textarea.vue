<template>
  <label class="block mb-5">
    <span class="text-gray-700">{{ label }}</span>

    <textarea
    :class="styleClass"
    @input="$emit('input', $event.target.value)"
    class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50"
    rows="3" />

    <p v-if="showRequiredError" class="text-red-500 text-xs">Le message est obligatoire</p>
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    styleClass: {
      type: String
    },
    showRequiredError: {
      type: Boolean
    },
  }
}
</script>
