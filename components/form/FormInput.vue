<template>
  <label>
    <span>{{ label }}</span>

    <input
    :type="type"
    :class="styleClass"
    @input="$emit('input', $event.target.value)">

    <p v-if="showRequiredError" class="input-message">{{ nameInError }} est obligatoire</p>
    <p v-if="showEmailError" class="input-message">{{ nameInError }} doit être au format xxxxx@xxx.xx</p>
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
