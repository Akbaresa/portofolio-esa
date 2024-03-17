<script setup>
import NavbarComp from "@/components/NavbarComp.vue";
import { ref, onMounted } from "vue";
// import ParticleJs from "@/components/ParticleJs.vue";

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
    </section>
  </div>
</template>
