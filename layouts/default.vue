<template>
  <div class="pancake-stack">
    <StarsEffect />

    <header class="py-3">
      <UContainer>
        <ColorModeButton />

        <UButton
          icon="i-simple-icons-github"
          class="ml-3"
          to="https://github.com/KosKosovuch/nuxt3-template"
          target="_blank"
        />
      </UContainer>
    </header>

    <main>
      <UContainer>
        <slot name="default" />
      </UContainer>
    </main>

    <footer>
      <UContainer>Footer</UContainer>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
  .pancake-stack {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    min-height: 100svh;
  }
</style>
