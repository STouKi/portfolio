<template>
  <label class="block mb-5">
    <span class="text-gray-700">{{ label }}</span>

    <input
    :type="type"
    :class="styleClass"
    @input="$emit('input', $event.target.value)"
    class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50">

    <p v-if="showRequiredError" class="text-red-500 text-xs">{{ nameInError }} est obligatoire</p>
    <p v-if="showEmailError" class="text-red-500 text-xs">{{ nameInError }} doit être au format xxxxx@xxx.xx</p>
  </label>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
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
    showEmailError: {
      type: Boolean
    },
    nameInError: {
      type: String
    }
  }
}
</script>
