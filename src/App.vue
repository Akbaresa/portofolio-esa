<script setup>
import SkillView from "@/views/SkillView.vue";
import NavbarComp from "./components/NavbarComp.vue";
import { ref, onMounted } from "vue";

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};

const phrases = ["Backend Developer", "Software Architect"];
const currentPhrase = ref("");
let curPhraseIndex = 0;

const writeLoop = async () => {
  while (curPhraseIndex > -1) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      currentPhrase.value = curWord.substring(0, i + 1);
      await sleep(100);
    }
    await sleep(1000);

    for (let i = curWord.length; i > 0; i--) {
      currentPhrase.value = curWord.substring(0, i - 1);
      await sleep(100);
    }
    await sleep(500);

    curPhraseIndex = (curPhraseIndex + 1) % phrases.length;
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

onMounted(() => {
  writeLoop();
});
</script>

<template>
  <div class="h-screen flex flex-row justify-start items-center">
    <section class="font-mono ml-7 md:ml-48">
      <div class="flex-initial w-full">
        <p class="text-3xl">
          I am <span class="text-teal-500">Akbar Esa</span>
          <br />
          <span id="typewriter" class="text-white">{{ currentPhrase }}</span>
          <span id="cursor">|</span>
        </p>
        <p class="text-xl">Software Architecture wannabe</p>
        <p style="font-size: medium">
          Currently, I am still in the sixth semester <br />
          of Informatics Engineering.
        </p>
      </div>

      <NavbarComp />

      <vue-particles id="tsparticles" @particles-loaded="particlesLoaded" />
      <vue-particles
        id="tsparticles"
        @particles-loaded="particlesLoaded"
        :options="{
          background: {
            color: {
              value: '#fffff',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'grab',
              },
            },
            modes: {
              grab: {
                distance: 120,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 100,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: 'bounce',
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 180,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }"
      />
    </section>
  </div>
  <SkillView />
</template>

<style src="./assets/main.css"></style>
