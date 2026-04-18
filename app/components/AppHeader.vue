<template>
  <nav class="flex flex-col">

    <!-- Barra superior -->
    <section class="w-full h-10 bg-nordeste-terracota flex justify-around items-center text-white text-xs md:text-sm">
      <div class="flex items-center gap-2">
        <Icon name="lucide:map-pin" />
        <p>Av. Nossa Sra. de Fátima, 1230 - Fátima, Cabrobó-PE.</p>
      </div>
      <div class="flex items-center flex-row gap-9">
        <p class="hidden md:block">atendimento@varandanordestina.com</p>
        <div class="flex flex-row gap-3">
          <Icon name="mdi:whatsapp" class="cursor-pointer" />
          <Icon name="lucide:instagram" class="cursor-pointer" />
          <Icon name="lucide:mail" class="cursor-pointer" />
        </div>
      </div>
    </section>

    <!-- Header principal — position relative para o SVG ser absolute dentro -->
    <header class="relative flex justify-center items-center flex-col bg-nordeste-creme overflow-hidden">

      <!-- ── Cactos decorativos ─────────────────────────────────────────────
           SVG absolute, cobre todo o header. opacity 0.07 = quase invisível.
           Mude o valor de opacity no <g> para calibrar a intensidade:
             0.05 = muito sutil | 0.07 = sutil (padrão) | 0.12 = mais visível
      ──────────────────────────────────────────────────────────────────── -->
      <svg
        class="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 900 200"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g opacity="0.07" fill="#5A8433">

          <!-- Cacto esquerdo alto -->
          <g transform="translate(60, 10)">
            <rect x="18" y="40" width="10" height="120" rx="5"/>
            <rect x="3" y="80" width="8" height="50" rx="4" transform="rotate(-5, 7, 80)"/>
            <rect x="3" y="70" width="17" height="8" rx="4"/>
            <rect x="27" y="90" width="8" height="40" rx="4" transform="rotate(5, 31, 90)"/>
            <rect x="23" y="82" width="17" height="8" rx="4"/>
            <ellipse cx="23" cy="42" rx="5" ry="6"/>
          </g>

          <!-- Cacto esquerdo médio -->
          <g transform="translate(110, 80)">
            <rect x="10" y="20" width="7" height="70" rx="3.5"/>
            <rect x="2" y="45" width="7" height="30" rx="3.5" transform="rotate(-5, 5, 45)"/>
            <rect x="2" y="38" width="14" height="6" rx="3"/>
            <ellipse cx="13" cy="22" rx="3.5" ry="4"/>
          </g>

          <!-- Cacto esquerdo pequeno -->
          <g transform="translate(148, 110)">
            <rect x="7" y="15" width="5" height="45" rx="2.5"/>
            <ellipse cx="9" cy="16" rx="2.5" ry="3"/>
          </g>

          <!-- Cacto direito alto -->
          <g transform="translate(790, 5)">
            <rect x="18" y="35" width="10" height="130" rx="5"/>
            <rect x="3" y="75" width="8" height="55" rx="4" transform="rotate(5, 7, 75)"/>
            <rect x="3" y="67" width="17" height="8" rx="4"/>
            <rect x="27" y="85" width="8" height="45" rx="4" transform="rotate(-5, 31, 85)"/>
            <rect x="23" y="77" width="17" height="8" rx="4"/>
            <ellipse cx="23" cy="37" rx="5" ry="6"/>
          </g>

          <!-- Cacto direito médio -->
          <g transform="translate(745, 70)">
            <rect x="10" y="20" width="7" height="80" rx="3.5"/>
            <rect x="17" y="50" width="7" height="35" rx="3.5" transform="rotate(5, 20, 50)"/>
            <rect x="10" y="44" width="14" height="6" rx="3"/>
            <ellipse cx="13" cy="22" rx="3.5" ry="4"/>
          </g>

          <!-- Cacto direito pequeno -->
          <g transform="translate(715, 115)">
            <rect x="7" y="10" width="5" height="50" rx="2.5"/>
            <ellipse cx="9" cy="11" rx="2.5" ry="3"/>
          </g>

        </g>
      </svg>

      <!-- Conteúdo do header (position relative para ficar acima do SVG) -->
      <NuxtImg src="/logo.png" width="200" class="relative py-3" />
      <ul class="relative flex flex-row gap-5 items-center pb-10 pt-2 font-medium">
        <li class="cursor-pointer hover:text-nordeste-terracota transition">Início</li>
        <li class="cursor-pointer hover:text-nordeste-terracota transition">Sobre nós</li>
        <li class="cursor-pointer hover:text-nordeste-terracota transition">Galeria</li>
        <li class="cursor-pointer hover:text-nordeste-terracota transition">Contato</li>
        <button class="font-bold text-nordeste-terracota px-2">Cardápio</button>
        <button class="text-white font-bold bg-green-600 py-2 px-5 flex items-center gap-2 rounded-full shadow-md transition-all active:scale-95">
          <Icon name="lucide:utensils-crossed" />
          Fazer pedido
        </button>
      </ul>
    </header>

  </nav>
</template>