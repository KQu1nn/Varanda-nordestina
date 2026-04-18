<template>
  <!--
    Divisor ornamental entre seções de mesmo fundo (creme).
    Use entre SobreNos.vue e CardapioPreview.vue no seu layout.
  -->
  <div class="relative z-10 flex items-center justify-center gap-0 overflow-hidden h-12 bg-nordeste-creme">
    <div class="flex-1 h-px bg-nordeste-terracota/18" />
    <div class="flex items-center gap-2.5 px-6">
      <div class="w-1.5 h-1.5 rounded-full bg-nordeste-terracota/35" />
      <div class="w-2.5 h-2.5 bg-nordeste-terracota/22 rotate-45" />
      <div class="w-8 h-px bg-nordeste-terracota/18" />
      <!-- ícone de talher estilizado -->
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#934123" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="opacity-30">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
        <line x1="7" y1="2" x2="7" y2="22"/>
        <line x1="21" y1="15" x2="21" y2="22"/>
        <path d="M21 2a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3"/>
      </svg>
      <div class="w-8 h-px bg-nordeste-terracota/18" />
      <div class="w-2.5 h-2.5 bg-nordeste-terracota/22 rotate-45" />
      <div class="w-1.5 h-1.5 rounded-full bg-nordeste-terracota/35" />
    </div>
    <div class="flex-1 h-px bg-nordeste-terracota/18" />
  </div>
</template>