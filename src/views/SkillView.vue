<script setup>
import { ref } from "vue";

const activeTab = ref("web");

const setActiveTab = (tab) => {
  activeTab.value = tab;
  console.log(activeTab.value);
};
</script>

<template>
  <div class="bg-white h-screen">
    <div class="mx-5 md:mx-12 pt-4">
      <p class="text-3xl font-bold text-gray-800 font-mono">Projects</p>

      <div class="md:flex mt-5">
        <ul
          class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0"
        >
          <li>
            <button
              @click="setActiveTab('web')"
              ref="#"
              :class="{
                active: activeTab === 'web',
                'bg-teal-600': activeTab === 'web',
                'bg-gray-800': activeTab !== 'web',
                'text-white': activeTab === 'web',
              }"
              class="inline-flex font-semibold items-center px-4 py-3 rounded-lg w-full hover:text-white hover:bg-teal-600 transition-colors duration-200 ease-in-out"
              aria-current="page"
            >
              <svg
                class="w-4 h-4 me-2 text-white transition-colors duration-150"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="#d9d9d9"
                  d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"
                />
              </svg>
              Web Developer
            </button>
          </li>
          <li>
            <button
              @click="setActiveTab('mobile')"
              :class="{
                active: activeTab === 'mobile',
                'bg-teal-600': activeTab === 'mobile',
                'bg-gray-800': activeTab !== 'mobile',
              }"
              class="inline-flex font-semibold items-center px-4 py-3 rounded-lg w-full hover:text-white hover:bg-teal-600"
            >
              <svg
                class="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#d6d6d6"
                  d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"
                />
              </svg>
              <p :class="{ 'text-white': activeTab === 'mobile' }" class="font-semibold">
                Mobile
              </p>
            </button>
          </li>
          <li>
            <button
              @click="setActiveTab('automation')"
              :class="{
                active: activeTab === 'automation',
                'bg-teal-600': activeTab === 'automation',
                'bg-gray-800': activeTab !== 'automation',
              }"
              class="inline-flex font-semibold items-center px-4 py-3 rounded-lg w-full hover:text-white hover:bg-teal-600 transition-colors duration-200 ease-in-out"
            >
              <svg
                class="w-4 h-4 me-2 text-black-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="#c2c2c2"
                  d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                />
              </svg>
              <p
                :class="{ 'text-white': activeTab === 'automation' }"
                class="font-semibold"
              >
                Automation
              </p>
            </button>
          </li>
        </ul>
        <div class="flex flex-col gap-2 overflow-y-auto h-[80vh]">
          <div class="">
            <a
              href="#"
              class="block md:max-w-sm p-6 bg-white border text-gray-700 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-white-800 dark:border-teal-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight">Shipper</h5>
              <p class="text-gray-800 dark:text-gray-400 text-sm">
                Ini adalah website tentang pengiriman barang penyimpanan barang dalam
                jangka waktu tertentu
              </p>
              <div class="mt-2">
                <button
                  class="w-15 bg-white-200 shadow-md shadow-teal-500/30 bg-gray-100 text-teal-500 border inline-flex py-1 px-2 rounded hover:bg-gray-500 hover:text-teal-300 transition-colors duration-100 ease-in-out"
                >
                  <svg
                    class="transition-colors duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    />
                  </svg>
                  <p class="ml-2 font-semibold transition-colors duration-100">github</p>
                </button>
              </div>
            </a>
          </div>
          <div class="">
            <a
              href="#"
              class="block md:max-w-sm p-6 bg-white border text-gray-700 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-white-800 dark:border-teal-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight">Shipper</h5>
              <p class="text-gray-800 dark:text-gray-400 text-sm">
                Ini adalah website tentang pengiriman barang penyimpanan barang dalam
                jangka waktu tertentu
              </p>
              <div class="mt-2">
                <button
                  class="w-15 bg-white-200 shadow-md shadow-teal-500/30 bg-gray-100 text-teal-500 border inline-flex py-1 px-2 rounded hover:bg-gray-500 hover:text-teal-300 transition-colors duration-100 ease-in-out"
                >
                  <svg
                    class="transition-colors duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    />
                  </svg>
                  <p class="ml-2 font-semibold transition-colors duration-100">github</p>
                </button>
              </div>
            </a>
          </div>
          <div class="">
            <a
              href="#"
              class="block md:max-w-sm p-6 bg-white border text-gray-700 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-white-800 dark:border-teal-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight">Shipper</h5>
              <p class="text-gray-800 dark:text-gray-400 text-sm">
                Ini adalah website tentang pengiriman barang penyimpanan barang dalam
                jangka waktu tertentu
              </p>
              <div class="mt-2">
                <button
                  class="w-15 bg-white-200 shadow-md shadow-teal-500/30 bg-gray-100 text-teal-500 border inline-flex py-1 px-2 rounded hover:bg-gray-500 hover:text-teal-300 transition-colors duration-100 ease-in-out"
                >
                  <svg
                    class="transition-colors duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    />
                  </svg>
                  <p class="ml-2 font-semibold transition-colors duration-100">github</p>
                </button>
              </div>
            </a>
          </div>
          <div class="">
            <a
              href="#"
              class="block md:max-w-sm p-6 bg-white border text-gray-700 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-white-800 dark:border-teal-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight">Shipper</h5>
              <p class="text-gray-800 dark:text-gray-400 text-sm">
                Ini adalah website tentang pengiriman barang penyimpanan barang dalam
                jangka waktu tertentu
              </p>
              <div class="mt-2">
                <button
                  class="w-15 bg-white-200 shadow-md shadow-teal-500/30 bg-gray-100 text-teal-500 border inline-flex py-1 px-2 rounded hover:bg-gray-500 hover:text-teal-300 transition-colors duration-100 ease-in-out"
                >
                  <svg
                    class="transition-colors duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    />
                  </svg>
                  <p class="ml-2 font-semibold transition-colors duration-100">github</p>
                </button>
              </div>
            </a>
          </div>
          <div class="">
            <a
              href="#"
              class="block md:max-w-sm p-6 bg-white border text-gray-700 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-white-800 dark:border-teal-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight">Shipper</h5>
              <p class="text-gray-800 dark:text-gray-400 text-sm">
                Ini adalah website tentang pengiriman barang penyimpanan barang dalam
                jangka waktu tertentu
              </p>
              <div class="mt-2">
                <button
                  class="w-15 bg-white-200 shadow-md shadow-teal-500/30 bg-gray-100 text-teal-500 border inline-flex py-1 px-2 rounded hover:bg-gray-500 hover:text-teal-300 transition-colors duration-100 ease-in-out"
                >
                  <svg
                    class="transition-colors duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    />
                  </svg>
                  <p class="ml-2 font-semibold transition-colors duration-100">github</p>
                </button>
              </div>
            </a>
          </div>
          <div class="">
            <a
              href="#"
              class="block md:max-w-sm p-6 bg-white border text-gray-700 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-white-800 dark:border-teal-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight">Shipper</h5>
              <p class="text-gray-800 dark:text-gray-400 text-sm">
                Ini adalah website tentang pengiriman barang penyimpanan barang dalam
                jangka waktu tertentu
              </p>
              <div class="mt-2">
                <button
                  class="w-15 bg-white-200 shadow-md shadow-teal-500/30 bg-gray-100 text-teal-500 border inline-flex py-1 px-2 rounded hover:bg-gray-500 hover:text-teal-300 transition-colors duration-100 ease-in-out"
                >
                  <svg
                    class="transition-colors duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    />
                  </svg>
                  <p class="ml-2 font-semibold transition-colors duration-100">github</p>
                </button>
              </div>
            </a>
          </div>
        </div>

        <div class="w-45 mt-2 md:max-w-md md:mt-0 md:ml-2">
          <img class="border-gray-200 rounded-md" src="/shipper.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
