<template>
  <div class="min-h-screen flex flex-col bg-nordeste-creme overflow-x-hidden">
    <AppHeader />

    <main class="flex-1 flex flex-col">
      <slot />
    </main>

    <AppFooter />
    
    <a href="https://wa.me/SEUNUMERO" target="_blank" class="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50">
      <Icon name="mdi:whatsapp" size="32" />
    </a>
  </div>
</template>

