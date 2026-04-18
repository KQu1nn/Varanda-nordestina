<template>
  <nav class="flex flex-col">

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

    <header class="relative flex justify-center items-center flex-col bg-nordeste-creme overflow-hidden">

      <!-- ── Cactos decorativos ────────────────────────────────────────────
           Intensidade: mude o opacity no <g> principal
             0.05 = quase invisível | 0.08 = padrão | 0.13 = mais presente
      ─────────────────────────────────────────────────────────────────── -->
      <svg
        class="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 960 210"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g fill="#5A8433" opacity="0.08">

          <!-- ── LADO ESQUERDO ───────────────────────────── -->

          <!-- Cacto 1 — alto, levemente inclinado, braços assimétricos -->
          <g transform="translate(32, 0) rotate(2, 25, 100)">
            <rect x="19" y="28" width="11" height="145" rx="5.5"/>
            <ellipse cx="24" cy="29" rx="5.5" ry="7"/>
            <rect x="4" y="95" width="9" height="58" rx="4.5" transform="rotate(-8, 8, 95)"/>
            <rect x="4" y="86" width="18" height="9" rx="4.5"/>
            <ellipse cx="8" cy="95" rx="4" ry="5" transform="rotate(-8, 8, 95)"/>
            <rect x="30" y="72" width="7" height="38" rx="3.5" transform="rotate(12, 33, 72)"/>
            <rect x="22" y="65" width="16" height="7" rx="3.5"/>
            <ellipse cx="33" cy="72" rx="3.5" ry="4.5" transform="rotate(12, 33, 72)"/>
            <line x1="15" y1="55" x2="10" y2="51" stroke="#5A8433" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="16" y1="78" x2="11" y2="75" stroke="#5A8433" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="31" y1="60" x2="36" y2="56" stroke="#5A8433" stroke-width="1.2" stroke-linecap="round"/>
          </g>

          <!-- Cacto 2 — pequeno, inclinado esquerda, flor no topo -->
          <g transform="translate(108, 88) rotate(-4, 8, 60)">
            <rect x="5" y="12" width="7" height="78" rx="3.5"/>
            <ellipse cx="8" cy="13" rx="3.5" ry="4.5"/>
            <ellipse cx="8" cy="9" rx="5" ry="3.5" fill="#934123" opacity="0.4"/>
            <ellipse cx="8" cy="9" rx="3" ry="2" fill="#f4b70b" opacity="0.5"/>
          </g>

          <!-- Cacto 3 — médio, braço só de um lado -->
          <g transform="translate(140, 55) rotate(1, 12, 80)">
            <rect x="8" y="30" width="9" height="105" rx="4.5"/>
            <ellipse cx="12" cy="31" rx="4.5" ry="6"/>
            <rect x="17" y="68" width="7" height="42" rx="3.5" transform="rotate(7, 20, 68)"/>
            <rect x="10" y="61" width="14" height="7" rx="3.5"/>
            <ellipse cx="20" cy="68" rx="3.5" ry="4" transform="rotate(7, 20, 68)"/>
            <line x1="6" y1="50" x2="2" y2="45" stroke="#5A8433" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="19" y1="45" x2="23" y2="41" stroke="#5A8433" stroke-width="1.2" stroke-linecap="round"/>
          </g>

          <!-- Cacto 4 — minúsculo torto -->
          <g transform="translate(185, 128) rotate(-6, 5, 40)">
            <rect x="3" y="8" width="5" height="48" rx="2.5"/>
            <ellipse cx="5" cy="9" rx="2.5" ry="3"/>
          </g>

          <!-- Cacto 5 — fantasma atrás, opacity menor -->
          <g transform="translate(78, 40) rotate(3, 10, 70)" opacity="0.5">
            <rect x="6" y="25" width="8" height="90" rx="4"/>
            <ellipse cx="10" cy="26" rx="4" ry="5"/>
            <rect x="-2" y="60" width="7" height="35" rx="3.5" transform="rotate(-6, 1, 60)"/>
            <rect x="-2" y="53" width="14" height="7" rx="3.5"/>
          </g>

          <!-- ── LADO DIREITO ────────────────────────────── -->

          <!-- Cacto 6 — alto, braços bem diferentes entre si -->
          <g transform="translate(855, 2) rotate(-3, 22, 110)">
            <rect x="16" y="22" width="12" height="155" rx="6"/>
            <ellipse cx="22" cy="23" rx="6" ry="8"/>
            <rect x="2" y="55" width="8" height="65" rx="4" transform="rotate(-10, 6, 55)"/>
            <rect x="2" y="47" width="16" height="8" rx="4"/>
            <ellipse cx="6" cy="55" rx="4" ry="5" transform="rotate(-10, 6, 55)"/>
            <rect x="28" y="105" width="7" height="30" rx="3.5" transform="rotate(8, 31, 105)"/>
            <rect x="20" y="98" width="15" height="7" rx="3.5"/>
            <ellipse cx="31" cy="105" rx="3.5" ry="4" transform="rotate(8, 31, 105)"/>
            <line x1="14" y1="40" x2="9" y2="36" stroke="#5A8433" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="30" y1="35" x2="35" y2="31" stroke="#5A8433" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="14" y1="70" x2="9" y2="67" stroke="#5A8433" stroke-width="1.2" stroke-linecap="round"/>
          </g>

          <!-- Cacto 7 — médio, inclinado direita, flor no topo -->
          <g transform="translate(808, 52) rotate(5, 11, 85)">
            <rect x="7" y="28" width="9" height="110" rx="4.5"/>
            <ellipse cx="11" cy="29" rx="4.5" ry="6"/>
            <rect x="-2" y="70" width="7" height="44" rx="3.5" transform="rotate(-9, 1, 70)"/>
            <rect x="-2" y="62" width="14" height="8" rx="3.5"/>
            <ellipse cx="1" cy="70" rx="3.5" ry="4.5" transform="rotate(-9, 1, 70)"/>
            <ellipse cx="11" cy="24" rx="6" ry="4" fill="#934123" opacity="0.4"/>
            <ellipse cx="11" cy="24" rx="3.5" ry="2.5" fill="#f4b70b" opacity="0.5"/>
          </g>

          <!-- Cacto 8 — pequeno, torto para a esquerda -->
          <g transform="translate(768, 95) rotate(-7, 7, 55)">
            <rect x="4" y="15" width="6" height="72" rx="3"/>
            <ellipse cx="7" cy="16" rx="3" ry="4"/>
            <line x1="2" y1="38" x2="-2" y2="34" stroke="#5A8433" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="11" y1="52" x2="15" y2="48" stroke="#5A8433" stroke-width="1.2" stroke-linecap="round"/>
          </g>

          <!-- Cacto 9 — minúsculo na borda -->
          <g transform="translate(920, 118) rotate(2, 4, 35)">
            <rect x="2" y="6" width="5" height="55" rx="2.5"/>
            <ellipse cx="4" cy="7" rx="2.5" ry="3.5"/>
          </g>

          <!-- Cacto 10 — fantasma atrás do 6 -->
          <g transform="translate(878, 38) rotate(-1, 9, 65)" opacity="0.45">
            <rect x="5" y="22" width="8" height="88" rx="4"/>
            <ellipse cx="9" cy="23" rx="4" ry="5.5"/>
            <rect x="13" y="55" width="6" height="38" rx="3" transform="rotate(6, 16, 55)"/>
            <rect x="7" y="49" width="13" height="6" rx="3"/>
          </g>

        </g>
      </svg>

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