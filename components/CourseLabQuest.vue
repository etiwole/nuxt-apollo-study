<script setup lang="ts">
const {image, title, subtitle, action} = defineProps<{
  image: string,
  title?: string,
  subtitle?: string,
  action?: string,
}>();

console.log(image)

</script>

<template>
  <div>
    <div>
      <img :src="image" alt="image">
    </div>
    <h3>{{title}}</h3>
    <p>{{subtitle}}</p>
  </div>
</template>