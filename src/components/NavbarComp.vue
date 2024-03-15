<script setup></script>

<template>
  <nav class="nav-jajargenjang fixed z-50 w-72 h-16 border bottom-12 left-1/2 transform">
    <div class="grid h-full max-w-lg grid-cols-3 mx-auto nav-content">
      <button
        data-tooltip-target="tooltip-home"
        type="button"
        class="mt-8 inline-flex items-center justify-center home"
      >
        <svg
          class="vertical w-5 h-5 mb-1 dark:hover:border-none home"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
          />
        </svg>
        <span class="sr-only">Home</span>
      </button>

      <button
        data-tooltip-target="tooltip-wallet"
        type="button"
        class="inline-flex flex-col items-center justify-center"
      >
        <svg
          class="vertical w-5 h-5 mb-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path
            id="path-code"
            fill="#b0b0b0"
            d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
          />
        </svg>
        <span class="sr-only">code</span>
      </button>
      <div
        id="tooltip-wallet"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        code
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>

      <div
        id="tooltip-new"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Create new item
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>

      <div
        id="tooltip-settings"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Settings
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <button
        id="profile"
        data-tooltip-target="tooltip-profile"
        type="button"
        class="mb-7 inline-flex items-center justify-center"
      >
        <svg
          id="profile-svg"
          class="vertical w-5 h-5 mb-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
          />
        </svg>
        <span class="sr-only">Profile</span>
      </button>
      <div
        id="tooltip-profile"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Profile
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-jajargenjang {
  background-color: #181a19;
  border-color: #4a5551;
  transform: skewY(-10deg);
  margin-left: -9rem;
}

.nav-content {
  transform: skewY(10deg);
}

.nav-jajargenjang:hover {
  background-color: #242624;
  border-top: 3px solid rgb(35, 120, 24);
}
.home {
  transition: color 0.1s ease;
}
.home:hover {
  color: rgb(255, 255, 255);
}
#profile:hover {
  color: rgb(255, 255, 255);
}
button:hover svg path {
  fill: white;
}

@media (min-width: 1024px) {
  .nav-jajargenjang {
    left: auto;
    top: 45%;
    right: 2%;
    rotate: 90deg;
  }
  .vertical {
    rotate: 270deg;
  }
  .nav-jajargenjang:hover {
    background-color: #242624;
    border-bottom: 5px solid rgb(35, 120, 24);
    border-top: none;
    transition: border-bottom-color 1s ease;
  }
  .home {
    transition: color 0.5s ease;
  }
  .home:hover {
    color: rgb(255, 255, 255);
  }
  #profile:hover {
    color: rgb(255, 255, 255);
  }
}
</style>
