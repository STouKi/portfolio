<template>
  <label>
    <span>{{ label }}</span>

    <textarea
    :class="styleClass"
    @input="$emit('input', $event.target.value)"
    rows="3" />

    <p v-if="showRequiredError" class="input-message">Le message est obligatoire</p>
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
