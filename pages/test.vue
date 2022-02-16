<template>
  <div>
    <div class="font-bold text-gray-600 text-lg">
      <h1>hello world</h1>
      current time is : {{ time }}
    </div>
  </div>
</template>

<script setup>
   const time = await $fetch('/api/now')
</script>