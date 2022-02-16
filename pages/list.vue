<template>
  <div class="card-wrap">
    <div class="max-w-sm rounded overflow-hidden shadow-lg" v-for="tvshow in db" :key="tvshow.id">
        <img class="w-full" :src="tvshow.large_cover_image" alt="image" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            {{tvshow.title}}
          </div>
          <p class="text-gray-700 text-base">{{tvshow.description_full}}</p>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue"

const db = ref([]) as any;

async function searchForStuff() {
  const data = await fetch(`/api/tvshow`);
  const json = await data.json();
  console.log('json', json.data.movies);
  db.value = json.data.movies;
}

searchForStuff()

</script>
<style>
.card-wrap {
  width: 100%;
  display: flex;
  gap: 20px 10px;
  flex-wrap: wrap;
}
</style>