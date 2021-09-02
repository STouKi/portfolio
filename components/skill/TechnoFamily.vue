<template>
  <div>
    <h3 class="amatic text-3xl mb-5">{{ technoFamily.name }}</h3>

    <div v-for="(techno, index) in technoFamily.technos" :key="index">
      <div class="flex mb-2 items-center justify-between" >
        <div>
          <span class="rounded-full" :style="{ color: techno.color }">
            {{ techno.name }}
          </span>
        </div>
        <div>
          <span class="text-xs" :style="{ color: techno.color }">
            {{ techno.progression }}%
          </span>
        </div>
      </div>

      <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
        <div :style="{ backgroundColor: techno.color, width: techno.progression + '%' }" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    technoFamily: {
      type: Object,
      required: true
    }
  }
}
</script>
