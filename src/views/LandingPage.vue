<template>
  <div class="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-blue-300">

    <!--    Navigation Bar Section-->
    <div>
      <LandingPageNavBar :imagePath="imagePath"/>
    </div>
    <!--    Main Section-->
    <div class="flex flex-col items-center justify-center space-y-10 h-screen">
      <!--      height of 1/2 of screen-->
      <h1 class=" text-4xl text-primaryText font-headingsBold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Supercharge your productivity with TaskEase</h1>
      <p class=" text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Stay
        organized, focused, and in control of your daily tasks with our feature-rich task management web app.
        Experience seamless collaboration, efficient task tracking, and enhanced productivity all in one place.</p>
      <a href="#"
         class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-secondary rounded-full hover:bg-secondaryhover focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
        Learn more
      </a>
      <!--      height of 1/2 of screen-->
      <div class="grid grid-cols-1 text-gray-500 sm:grid-cols-2 md:grid-cols-3 gap-20">
        <div class="flex flex-col items-center">
          <img :src="imagePath1" alt="Image 1" class="w-full h-auto sm:w-72 sm:h-72">
          <p class="text-center mt-2">Tame the Chaos</p>
        </div>
        <div class="flex flex-col items-center">
          <img :src="imagePath2" alt="Image 2" class="w-full h-auto sm:w-72 sm:h-72">
          <p class="text-center mt-2">Unlock Your Potential</p>
        </div>
        <div class="flex flex-col items-center">
          <img :src="imagePath3" alt="Image 3" class="w-full h-auto sm:w-72 sm:h-72">
          <p class="text-center mt-2">Achieve Serenity</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LandingPageNavBar from "@/components/LandingPageNavBar";

export default {
  name: 'MyComponent',
  components: {
    LandingPageNavBar,
  },
  data() {
    return {
      imagePath: require('@/assets/images/logos/full_logo.png'),
      imagePath1: require('@/assets/images/svg/MessyDoodle.svg'),
      imagePath2: require('@/assets/images/svg/ReadingDoodle.svg'),
      imagePath3: require('@/assets/images/svg/MeditatingDoodle.svg'),
    };
  },
  props: {
    // Component props go here
  },
  computed: {
    // Computed properties go here
  },
  methods: {
    // Component methods go here
  },
};
</script>

<style scoped>

</style>
