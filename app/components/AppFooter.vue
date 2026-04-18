<template>
  <footer class="relative bg-stone-800 text-white font-sans pt-20 pb-10 overflow-hidden">
    
    <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.1" fill="#ffffff">
        <g transform="translate(1300, 150) scale(1.5)">
          <rect x="16" y="22" width="12" height="155" rx="6"/>
          <ellipse cx="22" cy="23" rx="6" ry="8"/>
          <rect x="2" y="55" width="8" height="65" rx="4" transform="rotate(-10, 6, 55)"/>
        </g>
        <polygon points="10,10 12.5,17.5 20,17.5 14,22 16.5,30 10,25.5 3.5,30 6,22 0,17.5 7.5,17.5" transform="translate(100, 50) scale(0.8)" />
        <polygon points="10,10 12.5,17.5 20,17.5 14,22 16.5,30 10,25.5 3.5,30 6,22 0,17.5 7.5,17.5" transform="translate(1200, 80) scale(0.5)" />
      </g>
    </svg>

    <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        <div class="flex flex-col gap-6">
          <NuxtImg src="/logo.png" width="160" class="brightness-0 invert" />
          <p class="text-stone-400 text-sm leading-relaxed">
            Levando o sabor autêntico do Sertão de Pernambuco para sua mesa. Tradição, tempero e hospitalidade em cada detalhe.
          </p>
          <div class="flex gap-4">
            <a href="#" class="p-2 bg-white/5 hover:bg-nordeste-terracota transition rounded-full">
              <Icon name="lucide:instagram" size="20" />
            </a>
            <a href="#" class="p-2 bg-white/5 hover:bg-nordeste-terracota transition rounded-full">
              <Icon name="mdi:whatsapp" size="20" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="font-serif text-xl font-bold mb-6 text-nordeste-areia">Navegação</h4>
          <ul class="flex flex-col gap-4 text-stone-400 text-sm">
            <li class="hover:text-nordeste-terracota cursor-pointer transition">Início</li>
            <li class="hover:text-nordeste-terracota cursor-pointer transition">Nossa História</li>
            <li class="hover:text-nordeste-terracota cursor-pointer transition">Cardápio Completo</li>
            <li class="hover:text-nordeste-terracota cursor-pointer transition">Galeria de Fotos</li>
          </ul>
        </div>

        <div>
          <h4 class="font-serif text-xl font-bold mb-6 text-nordeste-areia">Onde Estamos</h4>
          <ul class="flex flex-col gap-4 text-stone-400 text-sm">
            <li class="flex items-start gap-3">
              <Icon name="lucide:map-pin" class="text-nordeste-terracota mt-1" />
              <span>Av. Nossa Sra. de Fátima, 1230<br>Fátima, Cabrobó - PE</span>
            </li>
            <li class="flex items-center gap-3">
              <Icon name="lucide:phone" class="text-nordeste-terracota" />
              <span>(87) 99999-9999</span>
            </li>
            <li class="flex items-center gap-3">
              <Icon name="lucide:mail" class="text-nordeste-terracota" />
              <span>contato@varandanordestina.com</span>
            </li>
          </ul>
        </div>

        <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h4 class="font-serif text-lg font-bold mb-4 text-white">Horário de Funcionamento</h4>
          <ul class="flex flex-col gap-2 text-xs uppercase tracking-widest text-stone-400">
            <li class="flex justify-between border-b border-white/5 pb-2">
              <span>Ter - Qui</span>
              <span class="text-white">11h - 22h</span>
            </li>
            <li class="flex justify-between border-b border-white/5 pb-2">
              <span>Sex - Sáb</span>
              <span class="text-white">11h - 23h</span>
            </li>
            <li class="flex justify-between">
              <span>Domingo</span>
              <span class="text-white">11h - 17h</span>
            </li>
          </ul>
          <button class="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-full text-xs transition-all flex items-center justify-center gap-2">
            <Icon name="lucide:utensils-crossed" />
            PEÇA AGORA
          </button>
        </div>

      </div>

      <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-[10px] uppercase tracking-[2px]">
        <p>© 2026 Varanda Nordestina - Todos os direitos reservados.</p>
        <p>Desenvolvido por Ramon Kelvin</p>
      </div>
    </div>

  </footer>
</template>

<style scoped>
/* Adicione aqui as cores personalizadas se não estiverem no Tailwind config */
.text-nordeste-areia { color: #E8DCC4; }
.bg-nordeste-terracota { background-color: #934123; }
.text-nordeste-terracota { color: #934123; }
</style>