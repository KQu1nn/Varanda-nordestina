<template>
  <section class="relative w-full h-[75vh] min-h-[560px] overflow-hidden flex flex-col justify-center font-sans">

    <!-- ─── SLIDES DE FUNDO ─────────────────────────────────────────────────
         Cada slide é empilhado no mesmo lugar (absolute inset-0).
         A transição de opacidade cria o efeito de fade entre imagens.
    ─────────────────────────────────────────────────────────────────────── -->
    <div
      v-for="(slide, index) in slides"
      :key="slide.id"
      class="absolute inset-0 transition-opacity duration-1000"
      :class="index === activeIndex ? 'opacity-100' : 'opacity-0'"
    >
      <NuxtImg
        :src="slide.image"
        :alt="slide.alt"
        class="w-full h-full object-cover object-center"
      />
    </div>

    <!-- Overlays fixos (aplicados sobre qualquer imagem) -->
    <div class="absolute inset-0 bg-stone-950/55 z-10" />
    <div class="absolute inset-0 bg-gradient-to-b from-stone-950/10 via-stone-950/40 to-stone-950/75 z-10" />

    <!-- ─── CONTEÚDO DO SLIDE ATIVO ─────────────────────────────────────────
         Também usa opacity para fazer fade do texto junto com a imagem.
    ─────────────────────────────────────────────────────────────────────── -->
    <div class="relative z-20 w-full flex flex-col items-center text-center px-8 gap-6">

      <template v-for="(slide, index) in slides" :key="`content-${slide.id}`">
        <div
          class="absolute inset-0 flex flex-col items-center justify-center gap-6 px-8 transition-opacity duration-1000"
          :class="index === activeIndex ? 'opacity-100' : 'opacity-0'"
        >
          <!-- Eyebrow -->
          <div class="flex items-center gap-4">
            <div class="w-10 h-px bg-nordeste-areia/50" />
            <span class="text-nordeste-areia/80 text-xs font-medium tracking-[5px] uppercase">
              {{ slide.eyebrow }}
            </span>
            <div class="w-10 h-px bg-nordeste-areia/50" />
          </div>

          <!-- Título -->
          <h1 class="font-serif font-light text-white leading-[1.05] text-6xl md:text-7xl lg:text-8xl max-w-4xl drop-shadow-lg">
            {{ slide.title }}
            <strong class="block font-bold italic mt-1">
              {{ slide.titleBold }}
              <span
                class="text-nordeste-terracota"
                style="text-shadow: 0 2px 20px rgba(0,0,0,0.9);"
              >{{ slide.titleAccent }}</span>
            </strong>
          </h1>

          <!-- Descrição -->
          <p class="font-light text-nordeste-areia/85 text-lg md:text-xl leading-relaxed max-w-xl drop-shadow-md">
            {{ slide.description }}
          </p>

          <!-- Botões -->
          <div class="flex items-center gap-5 flex-wrap justify-center pt-2">
            <a
              :href="slide.ctaPrimary.href"
              class="font-bold text-white bg-nordeste-terracota py-3.5 px-10 rounded-full shadow-lg transition-all active:scale-95 hover:brightness-90 text-base"
            >
              {{ slide.ctaPrimary.label }}
            </a>
            <a
              :href="slide.ctaSecondary.href"
              class="font-bold text-white bg-green-600 py-3.5 px-10 flex items-center gap-2 rounded-full shadow-lg transition-all active:scale-95 hover:brightness-90 text-base"
            >
              <Icon name="lucide:utensils-crossed" />
              {{ slide.ctaSecondary.label }}
            </a>
          </div>
        </div>
      </template>

    </div>

    <!-- ─── INDICADORES DE SLIDE ─────────────────────────────────────────────
         Clicando num ponto troca o slide e reseta o timer automático.
    ─────────────────────────────────────────────────────────────────────── -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
      <div class="flex items-center gap-2">
        <button
          v-for="(slide, index) in slides"
          :key="`dot-${slide.id}`"
          class="h-0.5 rounded-full transition-all duration-500"
          :class="index === activeIndex
            ? 'bg-nordeste-terracota w-8'
            : 'bg-white/25 w-5'"
          @click="goToSlide(index)"
        />
      </div>
      <span class="font-light text-[10px] tracking-[2px] text-nordeste-areia/40">
        {{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(slides.length).padStart(2, '0') }}
      </span>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// ─────────────────────────────────────────────────────────────────────────────
// DADOS DOS SLIDES
// Para integrar com Supabase no futuro, substitua este array por:
//
//   const { data } = await useFetch('/api/slides')
//   const slides = data.value
//
// A estrutura de cada objeto deve manter os mesmos campos abaixo.
// ─────────────────────────────────────────────────────────────────────────────
const slides = [
  {
    id: 1,
    image: '/assets/images/hero-slide-1.png',      // troque pelo caminho real da sua imagem
    alt: 'Baião de dois na panela de barro',
    eyebrow: 'Cabrobó · Pernambuco',
    title: 'Do sertão para',
    titleBold: 'a sua ',
    titleAccent: 'mesa.',
    description: 'Sabores autênticos do Nordeste preparados com ingredientes frescos, técnica e o carinho de quem cresceu com esse tempero.',
    ctaPrimary:   { label: 'Ver Cardápio',  href: '#cardapio' },
    ctaSecondary: { label: 'Fazer pedido',  href: '#whatsapp' },
  },
  {
    id: 2,
    image: '/assets/images/hero-slide-2.png',      // troque pelo caminho real da sua imagem
    alt: 'Carne de sol com macaxeira',
    eyebrow: 'Feito com alma',
    title: 'Tradição nordestina',
    titleBold: 'em cada ',
    titleAccent: 'prato.',
    description: 'Ingredientes selecionados da região, receitas de família e aquele tempero que só o Nordeste tem.',
    ctaPrimary:   { label: 'Ver Cardápio',  href: '#cardapio' },
    ctaSecondary: { label: 'Fazer pedido',  href: '#whatsapp' },
  },
  {
    id: 3,
    image: '/assets/images/hero-slide-3.png',      // troque pelo caminho real da sua imagem
    alt: 'Ambiente aconchegante do restaurante',
    eyebrow: 'Venha nos visitar',
    title: 'Um lugar para',
    titleBold: 'reunir e ',
    titleAccent: 'saborear.',
    description: 'Ambiente acolhedor, culinária regional e aquela hospitalidade nordestina que faz você se sentir em casa.',
    ctaPrimary:   { label: 'Ver Cardápio',  href: '#cardapio' },
    ctaSecondary: { label: 'Fazer pedido',  href: '#whatsapp' },
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// LÓGICA DO CARROSSEL
// ─────────────────────────────────────────────────────────────────────────────
const INTERVALO_MS = 5000 // tempo em ms entre cada troca automática de slide

const activeIndex = ref(0)
let timer = null

function proximoSlide() {
  activeIndex.value = (activeIndex.value + 1) % slides.length
}

function goToSlide(index) {
  activeIndex.value = index
  resetTimer() // clicou num ponto → reseta o timer para não pular rápido demais
}

function resetTimer() {
  clearInterval(timer)
  timer = setInterval(proximoSlide, INTERVALO_MS)
}

onMounted(() => {
  timer = setInterval(proximoSlide, INTERVALO_MS)
})

onUnmounted(() => {
  clearInterval(timer) // limpa o timer ao sair da página para não vazar memória
})
</script>