<template>
  <section 
    class="relative overflow-hidden font-sans py-20 md:py-24 bg-cover bg-center bg-no-repeat"
    style="background-image: url('/assets/images/bg-container-01.png');"
  >
    
    <div class="absolute inset-0 bg-nordeste-creme/90"></div>

    <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g opacity="0.08"> <g fill="#5A8433" opacity="0.7">
          <polygon points="300,0 318,0 309,22"/> <polygon points="330,0 345,0 337.5,17"/>
          <polygon points="358,0 378,0 368,24"/> <polygon points="392,0 406,0 399,16"/>
          <polygon points="418,0 436,0 427,24"/>
          <polygon points="900,0 918,0 909,22"/> <polygon points="932,0 945,0 938.5,16"/>
          <polygon points="960,0 978,0 969,24"/> <polygon points="998,0 1012,0 1005,17"/>
          <polyline points="300,3 436,3 660,9 900,3 1012,3" stroke="#5A8433" stroke-width="0.9" fill="none" opacity="0.28"/>
        </g>

        <g fill="#934123" opacity="0.65">
          <polygon points="200,898 218,898 209,876"/> <polygon points="232,898 248,898 240,882"/>
          <polygon points="262,898 280,898 271,876"/>
          <polygon points="1080,898 1098,898 1089,876"/> <polygon points="1112,898 1128,898 1120,882"/>
          <polygon points="1142,898 1160,898 1151,876"/>
          <polyline points="200,895 280,895 720,885 1080,895 1160,895" stroke="#934123" stroke-width="0.9" fill="none" opacity="0.25"/>
        </g>

        <g fill="#5A8433">
          <g transform="translate(55, 200) rotate(-4,18,95)">
            <rect x="12" y="30" width="12" height="140" rx="6"/>
            <ellipse cx="18" cy="31" rx="6" ry="8"/>
            <rect x="-2" y="88" width="9" height="60" rx="4.5" transform="rotate(-8,3,88)"/>
            <rect x="-2" y="79" width="18" height="9" rx="4.5"/>
            <rect x="26" y="68" width="8" height="42" rx="4" transform="rotate(10,30,68)"/>
            <rect x="18" y="60" width="16" height="8" rx="4"/>
            <line x1="10" y1="52" x2="4" y2="46" stroke="#5A8433" stroke-width="1.2" stroke-linecap="round"/>
          </g>
          <g transform="translate(118, 385) rotate(5,8,60)">
            <rect x="4" y="18" width="8" height="78" rx="4"/>
            <ellipse cx="8" cy="19" rx="4" ry="5"/>
            <ellipse cx="8" cy="14" rx="6" ry="3.8" fill="#934123" opacity="0.32"/>
            <ellipse cx="8" cy="14" rx="3.5" ry="2.2" fill="#f4b70b" opacity="0.45"/>
          </g>
          <g transform="translate(158, 300) rotate(-2,8,70)">
            <rect x="5" y="20" width="8" height="92" rx="4"/>
            <ellipse cx="9" cy="21" rx="4" ry="5.5"/>
            <rect x="13" y="58" width="6" height="38" rx="3" transform="rotate(7,16,58)"/>
            <rect x="7" y="51" width="13" height="7" rx="3"/>
          </g>
        </g>

        <g fill="#5A8433">
          <g transform="translate(1310, 160) rotate(4,20,100)">
            <rect x="14" y="28" width="12" height="150" rx="6"/>
            <ellipse cx="20" cy="29" rx="6" ry="8"/>
            <rect x="-1" y="78" width="9" height="65" rx="4.5" transform="rotate(-9,4,78)"/>
            <rect x="-1" y="69" width="18" height="9" rx="4.5"/>
          </g>
        </g>

        <g transform="translate(58, 78)" fill="#934123" opacity="0.28">
          <circle cx="0" cy="0" r="18"/>
          <rect x="-1.5" y="-30" width="3" height="10" rx="1.5"/>
          <rect x="-1.5" y="20" width="3" height="10" rx="1.5"/>
          <rect x="20" y="-1.5" width="10" height="3" rx="1.5"/>
          <rect x="-30" y="-1.5" width="10" height="3" rx="1.5"/>
        </g>

        <g fill="#934123">
          <polygon points="10,10 12.5,17.5 20,17.5 14,22 16.5,30 10,25.5 3.5,30 6,22 0,17.5 7.5,17.5" transform="translate(1380,55) scale(0.85)" opacity="0.48"/>
          <polygon points="10,10 12.5,17.5 20,17.5 14,22 16.5,30 10,25.5 3.5,30 6,22 0,17.5 7.5,17.5" transform="translate(720,840) scale(0.5)" opacity="0.3"/>
        </g>

      </g>
    </svg>

    <div class="relative z-10 max-w-5xl mx-auto px-8 md:px-12">

      <div class="text-center mb-14">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-7 h-px bg-nordeste-terracota" />
          <span class="text-nordeste-terracota text-[10px] font-medium tracking-[4px] uppercase">Peça agora</span>
          <div class="w-7 h-px bg-nordeste-terracota" />
        </div>
        <h2 class="font-serif font-bold text-[#1d1d1b] text-[42px] leading-[1.08] mb-3">
          Nosso <em class="text-nordeste-terracota italic">Cardápio</em>
        </h2>
        <p class="text-[14px] font-light text-[#7a6e65] leading-relaxed max-w-md mx-auto">
          Pratos preparados com ingredientes frescos da região. Escolha o seu favorito e receba quentinho.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

        <div class="md:col-span-3 bg-white rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-sm">
          <div class="relative overflow-hidden h-64 md:h-auto">
            <NuxtImg
              src="/assets/images/baiao.jpg"
              alt="Baião de Dois"
              class="w-full h-full object-cover object-center"
            />
          </div>
          <div class="p-9 md:p-10 flex flex-col justify-center">
            <div class="inline-flex items-center gap-1.5 bg-nordeste-terracota text-nordeste-creme text-[10px] font-semibold tracking-[0.5px] uppercase px-3 py-1.5 rounded-full self-start mb-4">
              <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
              </svg>
              Mais pedido
            </div>
            <p class="text-[10px] font-medium tracking-[3px] uppercase text-nordeste-terracota mb-2">Prato principal</p>
            <h3 class="font-serif font-bold text-[#1d1d1b] text-[26px] leading-tight mb-3">Baião de Dois Completo</h3>
            <p class="text-[13px] font-light text-[#9a8a80] leading-relaxed mb-7">
              Feijão verde com queijo coalho, manteiga de garrafa, charque desfiado e coentro fresco. Serve 2 pessoas.
            </p>
            <div class="flex items-center justify-between">
              <span class="font-serif font-bold text-[#1d1d1b] text-[32px] leading-none">
                <span class="text-[14px] font-sans font-normal text-[#9a8a80]">R$</span> 59,90
              </span>
              <button class="flex items-center gap-2 bg-nordeste-terracota text-nordeste-creme font-sans font-semibold text-[11px] tracking-[0.5px] uppercase px-5 py-3 rounded-full transition-all hover:brightness-90 active:scale-95">
                Pedir agora
              </button>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl overflow-hidden shadow-sm group">
          <div class="relative h-48 overflow-hidden">
            <NuxtImg src="/assets/images/carne-de-sol.jpg" alt="Carne de Sol"
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"/>
            <span class="absolute top-3.5 left-3.5 bg-nordeste-terracota text-nordeste-creme text-[10px] font-semibold tracking-[0.5px] uppercase px-2.5 py-1 rounded-full">Destaque</span>
          </div>
          <div class="p-5">
            <p class="text-[10px] font-medium tracking-[3px] uppercase text-nordeste-terracota mb-1.5">Prato principal</p>
            <h3 class="font-serif font-bold text-[#1d1d1b] text-lg leading-tight mb-2">Carne de Sol na Manteiga</h3>
            <div class="flex items-center justify-between">
              <span class="font-serif font-bold text-[#1d1d1b] text-[22px] leading-none">R$ 49,90</span>
              <button class="bg-nordeste-terracota text-nordeste-creme text-[11px] px-4 py-2.5 rounded-full uppercase font-semibold">Pedir</button>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl overflow-hidden shadow-sm group">
          <div class="relative h-48 overflow-hidden">
            <NuxtImg src="/assets/images/galinha-caipira.jpg" alt="Galinha Caipira"
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"/>
            <span class="absolute top-3.5 left-3.5 bg-nordeste-verde text-white text-[10px] font-semibold tracking-[0.5px] uppercase px-2.5 py-1 rounded-full">Novidade</span>
          </div>
          <div class="p-5">
            <p class="text-[10px] font-medium tracking-[3px] uppercase text-nordeste-terracota mb-1.5">Prato principal</p>
            <h3 class="font-serif font-bold text-[#1d1d1b] text-lg leading-tight mb-2">Galinha Caipira ao Molho</h3>
            <div class="flex items-center justify-between">
              <span class="font-serif font-bold text-[#1d1d1b] text-[22px] leading-none">R$ 52,90</span>
              <button class="bg-nordeste-terracota text-nordeste-creme text-[11px] px-4 py-2.5 rounded-full uppercase font-semibold">Pedir</button>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl overflow-hidden shadow-sm group">
          <div class="relative h-48 overflow-hidden">
            <NuxtImg src="/assets/images/buchada.webp" alt="Feijão Verde"
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"/>
          </div>
          <div class="p-5">
            <p class="text-[10px] font-medium tracking-[3px] uppercase text-nordeste-terracota mb-1.5">Acompanhamento</p>
            <h3 class="font-serif font-bold text-[#1d1d1b] text-lg leading-tight mb-2">Feijão Verde Nordestino</h3>
            <div class="flex items-center justify-between">
              <span class="font-serif font-bold text-[#1d1d1b] text-[22px] leading-none">R$ 28,90</span>
              <button class="bg-nordeste-terracota text-nordeste-creme text-[11px] px-4 py-2.5 rounded-full uppercase font-semibold">Pedir</button>
            </div>
          </div>
        </div>

      </div>

      <div class="text-center">
        <a href="#cardapio"
          class="inline-flex items-center gap-3 border-2 border-nordeste-verde text-nordeste-verde font-sans font-semibold text-[13px] tracking-[1px] uppercase px-10 py-4 rounded-full transition-all hover:bg-nordeste-verde hover:text-nordeste-creme group">
          Ver cardápio completo
        </a>
      </div>

    </div>
  </section>
</template>