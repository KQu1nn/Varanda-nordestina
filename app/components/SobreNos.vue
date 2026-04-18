<template>
  <section class="bg-nordeste-creme relative overflow-hidden font-sans py-20 md:py-28">

    <!-- ── SVG decorativo nordestino ──────────────────────────────────────
         Elementos: cactos orgânicos, bandeirinhas de cordel, sol, lua,
         estrelas, xique-xique, losangos duplos e traços de cordel.
         Intensidade: mude opacity no <g> principal (0.05 sutil / 0.08 presente)
    ─────────────────────────────────────────────────────────────────────── -->
    <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g opacity="0.065">

        <!-- Bandeirinhas topo — linha irregular com curva no barbante -->
        <g fill="#934123" opacity="0.8">
          <polygon points="0,0 18,0 9,22"/>    <polygon points="26,0 42,0 34,17"/>
          <polygon points="52,0 72,0 62,24"/>   <polygon points="82,0 96,0 89,16"/>
          <polygon points="108,0 128,0 118,26"/> <polygon points="140,0 155,0 147,18"/>
          <polygon points="520,0 538,0 529,22"/> <polygon points="550,0 564,0 557,16"/>
          <polygon points="576,0 596,0 586,24"/> <polygon points="610,0 624,0 617,17"/>
          <polygon points="636,0 656,0 646,25"/> <polygon points="668,0 682,0 675,16"/>
          <polyline points="0,3 155,3 280,9 400,5 520,3 682,3" stroke="#934123" stroke-width="1" fill="none" opacity="0.3"/>
        </g>

        <!-- Bandeirinhas base -->
        <g fill="#5A8433" opacity="0.6">
          <polygon points="100,898 118,898 109,878"/> <polygon points="130,898 145,898 137.5,882"/>
          <polygon points="158,898 178,898 168,876"/> <polygon points="192,898 206,898 199,884"/>
          <polygon points="850,898 868,898 859,878"/> <polygon points="882,898 896,898 889,882"/>
          <polygon points="910,898 928,898 919,876"/> <polygon points="942,898 956,898 949,884"/>
          <polyline points="100,896 206,896 520,888 850,896 956,896" stroke="#5A8433" stroke-width="0.8" fill="none" opacity="0.28"/>
        </g>

        <!-- Cactos esquerda -->
        <g fill="#5A8433">
          <g transform="translate(22, 80) rotate(3,22,110)">
            <rect x="16" y="32" width="13" height="165" rx="6.5"/>
            <ellipse cx="22" cy="33" rx="6.5" ry="8.5"/>
            <rect x="1" y="92" width="10" height="72" rx="5" transform="rotate(-10,6,92)"/>
            <rect x="1" y="82" width="20" height="10" rx="5"/>
            <ellipse cx="6" cy="92" rx="5" ry="6" transform="rotate(-10,6,92)"/>
            <rect x="31" y="72" width="8" height="44" rx="4" transform="rotate(13,35,72)"/>
            <rect x="22" y="64" width="18" height="8" rx="4"/>
            <line x1="14" y1="55" x2="8" y2="49" stroke="#5A8433" stroke-width="1.3" stroke-linecap="round"/>
            <line x1="32" y1="50" x2="38" y2="44" stroke="#5A8433" stroke-width="1.3" stroke-linecap="round"/>
            <line x1="13" y1="80" x2="7" y2="76" stroke="#5A8433" stroke-width="1.3" stroke-linecap="round"/>
          </g>
          <g transform="translate(90, 210) rotate(-6,9,68)">
            <rect x="5" y="16" width="8" height="88" rx="4"/>
            <ellipse cx="9" cy="17" rx="4" ry="5.5"/>
            <rect x="13" y="56" width="7" height="38" rx="3.5" transform="rotate(8,16,56)"/>
            <rect x="7" y="49" width="13" height="7" rx="3.5"/>
            <ellipse cx="9" cy="12" rx="6.5" ry="4" fill="#934123" opacity="0.35"/>
            <ellipse cx="9" cy="12" rx="3.5" ry="2.2" fill="#f4b70b" opacity="0.5"/>
          </g>
          <g transform="translate(140, 165) rotate(2,10,80)">
            <rect x="6" y="24" width="9" height="100" rx="4.5"/>
            <ellipse cx="10" cy="25" rx="4.5" ry="6"/>
            <rect x="-3" y="66" width="7" height="44" rx="3.5" transform="rotate(-9,0,66)"/>
            <rect x="-3" y="58" width="14" height="8" rx="3.5"/>
            <line x1="5" y1="45" x2="0" y2="40" stroke="#5A8433" stroke-width="1.2" stroke-linecap="round"/>
          </g>
          <g transform="translate(186, 320) rotate(-4,5,42)">
            <rect x="2" y="10" width="6" height="54" rx="3"/>
            <ellipse cx="5" cy="11" rx="3" ry="4"/>
          </g>
          <g opacity="0.38" transform="translate(62, 420) rotate(2,9,70)">
            <rect x="5" y="20" width="8" height="90" rx="4"/>
            <ellipse cx="9" cy="21" rx="4" ry="5.5"/>
            <rect x="13" y="56" width="6" height="38" rx="3" transform="rotate(6,16,56)"/>
            <rect x="7" y="49" width="13" height="6" rx="3"/>
          </g>
        </g>

        <!-- Cactos direita -->
        <g fill="#5A8433">
          <g transform="translate(1348, 50) rotate(-3,24,120)">
            <rect x="18" y="28" width="14" height="180" rx="7"/>
            <ellipse cx="25" cy="29" rx="7" ry="9"/>
            <rect x="1" y="85" width="10" height="75" rx="5" transform="rotate(-12,6,85)"/>
            <rect x="1" y="75" width="22" height="10" rx="5"/>
            <rect x="34" y="125" width="9" height="40" rx="4.5" transform="rotate(9,38,125)"/>
            <rect x="23" y="117" width="20" height="9" rx="4.5"/>
            <line x1="16" y1="55" x2="9" y2="49" stroke="#5A8433" stroke-width="1.3" stroke-linecap="round"/>
            <line x1="36" y1="62" x2="43" y2="56" stroke="#5A8433" stroke-width="1.3" stroke-linecap="round"/>
          </g>
          <g transform="translate(1288, 185) rotate(7,10,90)">
            <rect x="6" y="26" width="9" height="115" rx="4.5"/>
            <ellipse cx="10" cy="27" rx="4.5" ry="6"/>
            <rect x="-3" y="72" width="7" height="50" rx="3.5" transform="rotate(-11,0,72)"/>
            <rect x="-3" y="63" width="15" height="9" rx="3.5"/>
            <ellipse cx="10" cy="22" rx="7" ry="4" fill="#934123" opacity="0.3"/>
            <ellipse cx="10" cy="22" rx="4" ry="2.3" fill="#f4b70b" opacity="0.42"/>
          </g>
          <g transform="translate(1258, 340) rotate(-9,6,48)">
            <rect x="3" y="14" width="7" height="65" rx="3.5"/>
            <ellipse cx="6" cy="15" rx="3.5" ry="4.5"/>
            <line x1="1" y1="38" x2="-4" y2="33" stroke="#5A8433" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="11" y1="50" x2="16" y2="45" stroke="#5A8433" stroke-width="1.2" stroke-linecap="round"/>
          </g>
          <g transform="translate(1395, 280) rotate(4,5,40)">
            <rect x="2" y="10" width="6" height="52" rx="3"/>
            <ellipse cx="5" cy="11" rx="3" ry="4"/>
          </g>
          <g opacity="0.38" transform="translate(1318, 460) rotate(-2,9,72)">
            <rect x="5" y="22" width="8" height="92" rx="4"/>
            <ellipse cx="9" cy="23" rx="4" ry="5.5"/>
            <rect x="-2" y="58" width="6" height="40" rx="3" transform="rotate(-6,1,58)"/>
            <rect x="-2" y="51" width="13" height="7" rx="3"/>
          </g>
        </g>

        <!-- Sol canto superior direito -->
        <g transform="translate(1370, 65)" fill="#934123" opacity="0.32">
          <circle cx="0" cy="0" r="22"/>
          <rect x="-2" y="-36" width="4" height="12" rx="2"/>
          <rect x="-2" y="24" width="4" height="12" rx="2"/>
          <rect x="24" y="-2" width="12" height="4" rx="2"/>
          <rect x="-36" y="-2" width="12" height="4" rx="2"/>
          <rect x="16" y="-27" width="4" height="12" rx="2" transform="rotate(45,18,-21)"/>
          <rect x="-20" y="15" width="4" height="12" rx="2" transform="rotate(45,-18,21)"/>
          <rect x="15" y="15" width="4" height="12" rx="2" transform="rotate(-45,17,21)"/>
          <rect x="-20" y="-27" width="4" height="12" rx="2" transform="rotate(-45,-18,-21)"/>
        </g>

        <!-- Lua meia — elemento novo, canto esquerdo -->
        <g transform="translate(30, 500)" fill="#934123" opacity="0.18">
          <path d="M0,-30 A30,30 0 0,1 0,30 A20,20 0 0,0 0,-30 Z"/>
        </g>

        <!-- Estrelas -->
        <g fill="#934123">
          <polygon points="10,10 12.5,17.5 20,17.5 14,22 16.5,30 10,25.5 3.5,30 6,22 0,17.5 7.5,17.5" transform="translate(1310,38) scale(1.1)" opacity="0.55"/>
          <polygon points="10,10 12.5,17.5 20,17.5 14,22 16.5,30 10,25.5 3.5,30 6,22 0,17.5 7.5,17.5" transform="translate(45,640) scale(0.75)" opacity="0.42"/>
          <polygon points="10,10 12.5,17.5 20,17.5 14,22 16.5,30 10,25.5 3.5,30 6,22 0,17.5 7.5,17.5" transform="translate(680,820) scale(0.6)" opacity="0.35"/>
          <polygon points="10,10 12.5,17.5 20,17.5 14,22 16.5,30 10,25.5 3.5,30 6,22 0,17.5 7.5,17.5" transform="translate(1390,450) scale(0.7)" opacity="0.4"/>
          <polygon points="10,10 12.5,17.5 20,17.5 14,22 16.5,30 10,25.5 3.5,30 6,22 0,17.5 7.5,17.5" transform="translate(380,50) scale(0.5)" opacity="0.32"/>
        </g>

        <!-- Xique-xique / palma -->
        <g fill="#5A8433" opacity="0.45">
          <ellipse cx="0" cy="0" rx="4.5" ry="50" transform="translate(35,830) rotate(-26,0,0)"/>
          <ellipse cx="0" cy="0" rx="4" ry="42" transform="translate(35,830) rotate(16,0,0)"/>
          <ellipse cx="0" cy="0" rx="3.5" ry="34" transform="translate(35,830) rotate(52,0,0)"/>
          <ellipse cx="0" cy="0" rx="3" ry="28" transform="translate(35,830) rotate(75,0,0)"/>
          <ellipse cx="0" cy="0" rx="4.5" ry="50" transform="translate(1405,800) rotate(28,0,0)"/>
          <ellipse cx="0" cy="0" rx="4" ry="42" transform="translate(1405,800) rotate(-16,0,0)"/>
          <ellipse cx="0" cy="0" rx="3.5" ry="34" transform="translate(1405,800) rotate(-54,0,0)"/>
          <ellipse cx="0" cy="0" rx="3" ry="26" transform="translate(1405,800) rotate(-76,0,0)"/>
        </g>

        <!-- Losangos duplos -->
        <g fill="none" stroke="#934123" stroke-width="1.3" opacity="0.3">
          <rect x="0" y="0" width="24" height="24" transform="translate(700,855) rotate(45,12,12)"/>
          <rect x="0" y="0" width="14" height="14" transform="translate(705,860) rotate(45,7,7)" opacity="0.5"/>
          <rect x="0" y="0" width="16" height="16" transform="translate(760,868) rotate(45,8,8)"/>
          <rect x="0" y="0" width="30" height="30" transform="translate(40,430) rotate(45,15,15)"/>
          <rect x="0" y="0" width="16" height="16" transform="translate(1390,540) rotate(45,8,8)"/>
          <rect x="0" y="0" width="20" height="20" transform="translate(480,28) rotate(45,10,10)"/>
          <rect x="0" y="0" width="12" height="12" transform="translate(900,20) rotate(45,6,6)"/>
        </g>

        <!-- Traços estilo cordel -->
        <g fill="#934123" opacity="0.14">
          <path d="M200,760 Q240,740 280,760 Q240,780 200,760 Z"/>
          <path d="M1100,720 Q1140,700 1180,720 Q1140,740 1100,720 Z"/>
          <path d="M650,30 Q690,10 730,30 Q690,50 650,30 Z"/>
        </g>

      </g>
    </svg>

    <!-- Conteúdo -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

        <!-- Imagem -->
        <div class="relative group pb-8 pr-8">
          <div class="absolute -top-5 -left-5 w-full h-full border-2 border-nordeste-terracota/25 rounded-sm transition-transform duration-500 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 pointer-events-none" />
          <div class="relative rounded-sm overflow-hidden aspect-[4/5] shadow-2xl">
            <!-- ⚠️ Trocar pela foto real do ambiente ou equipe -->
            <NuxtImg
              src="/assets/images/demo-restaurante.jpg"
              alt="Ambiente Varanda Nordestina"
              class="w-full h-full object-cover brightness-[0.88] transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <!-- ⚠️ Trocar pela frase real da cliente -->
          <div class="absolute bottom-0 right-0 bg-nordeste-terracota text-nordeste-creme p-6 rounded-sm shadow-2xl max-w-[220px]">
            <Icon name="lucide:quote" class="text-nordeste-creme/25 absolute top-3 left-3" size="22" />
            <p class="font-serif text-[13px] italic leading-relaxed pt-2">
              "Aqui o tempero tem sotaque e o carinho é o prato principal."
            </p>
            <span class="block mt-3 text-[9px] font-bold tracking-[2.5px] uppercase opacity-60">
              Cabrobó • Pernambuco
            </span>
          </div>
        </div>

        <!-- Texto -->
        <div class="flex flex-col">

          <div class="flex items-center gap-4 mb-6">
            <div class="w-10 h-px bg-nordeste-terracota" />
            <span class="text-nordeste-terracota text-[10px] font-bold tracking-[5px] uppercase">
              Raízes do Sertão
            </span>
          </div>

          <h2 class="font-serif font-bold text-stone-900 text-5xl md:text-6xl leading-[1.08] mb-8">
            Cozinha de origem,<br>
            <em class="text-nordeste-terracota italic">alma cabroboense.</em>
          </h2>

          <!-- ⚠️ Substituir pela história real -->
          <p class="text-stone-600 text-base font-light leading-[1.95] mb-10">
            A Varanda Nordestina é o ponto onde a tradição se encontra com o fogo. Nascemos com o propósito
            de honrar os ingredientes da nossa terra, transformando o que o sertão nos dá em banquetes de
            memória afetiva.<br><br>
            Cada detalhe, do coentro colhido cedo à carne de sol curada no tempo certo, reflete nosso respeito
            pela culinária de Pernambuco. Não servimos apenas comida; entregamos um pedaço da nossa história
            em cada garfada.
          </p>

          <div class="grid grid-cols-2 gap-6 mb-10">
            <div class="flex items-start gap-4">
              <div class="p-3 bg-nordeste-terracota/10 rounded-xl shrink-0">
                <Icon name="lucide:leaf" class="text-nordeste-terracota" size="22" />
              </div>
              <div>
                <h4 class="font-bold text-stone-800 text-sm mb-1">Ingredientes Locais</h4>
                <p class="text-stone-500 text-xs leading-relaxed">Valorizamos o produtor de Cabrobó e região.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="p-3 bg-nordeste-terracota/10 rounded-xl shrink-0">
                <Icon name="lucide:heart" class="text-nordeste-terracota" size="22" />
              </div>
              <div>
                <h4 class="font-bold text-stone-800 text-sm mb-1">Receitas de Família</h4>
                <p class="text-stone-500 text-xs leading-relaxed">O segredo guardado por gerações em nossa mesa.</p>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-10 border-t border-stone-200 pt-9">
            <div>
              <span class="font-serif text-5xl font-bold text-stone-900 leading-none">
                30<span class="text-nordeste-terracota">+</span>
              </span>
              <p class="text-[10px] uppercase tracking-widest text-stone-400 mt-2 font-semibold">Opções Típicas</p>
            </div>
            <div class="w-px h-14 bg-stone-200" />
            <div>
              <span class="font-serif text-5xl font-bold text-stone-900 leading-none">
                100<span class="text-nordeste-terracota">%</span>
              </span>
              <p class="text-[10px] uppercase tracking-widest text-stone-400 mt-2 font-semibold">Sabor Autêntico</p>
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
// Sem lógica — conteúdo mockado, substituir antes do lançamento
</script>