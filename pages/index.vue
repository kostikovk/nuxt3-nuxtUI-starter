<template>
  <h1 class="text-3xl sm:text-5xl font-bold mt-20">
    <span class="text-primary">Nuxt3</span> + <span class="text-primary">NuxtUI</span> Starter
  </h1>
  <p class="my-3">Starter kit for developing projects using Nuxt 3 + NuxtUi</p>
  <ol class="list-decimal list-inside font-mono">
    <li
      v-for="tool in ['ESLint', 'Stylelint', 'Tailwindcss', 'Prettier', 'Husky', 'Lint-staged', 'Pinia']"
      :key="tool"
    >
      {{ tool }}
    </li>
  </ol>
</template>
