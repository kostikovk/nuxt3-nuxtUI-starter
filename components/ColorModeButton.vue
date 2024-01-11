<script setup lang="ts">
  const colorMode = useColorMode()

  const isDark = computed({
    get() {
      return colorMode.value === 'dark'
    },
    set() {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
  })

  const icon = computed(() => (isDark.value ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'))
</script>

<template>
  <ClientOnly>
    <UButton
      :icon="icon"
      aria-label="Theme button"
      @click="isDark = !isDark"
    />

    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>
