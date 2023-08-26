<template>
  <div class="h-screen w-screen flex flex-row">
    <!-- Left Section - Sign Up Form -->
    <div
      class="bg-white w-1/2 flex flex-col space-y-2 items-center justify-center"
    >
      <div class="w-1/2">
        <!-- Insert your SignUp component here -->
        <SignUp :imagePath="imagePath" />
      </div>
    </div>

    <!-- Right Section - Registration Information -->
    <div
      class="bg-lightblue bg-diagonal-lines w-1/2 space-y-16 flex flex-col items-center rounded-2xl m-3 justify-center"
    >
      <div class="text-left px-16 mx-4 flex flex-col">
        <h1 class="text-3xl font-headingStyle py-6">Boost Your Productivity</h1>
        <p class="text-md text-gray-500 lg:text-lg dark:text-gray-400">
          Supercharge your productivity with TaskEase. Stay organized, focused,
          and in control of your tasks. Collaborate seamlessly, track tasks, and
          boost efficiency, all in one place.
        </p>
        <img
          :src="imagePath1"
          alt="Image 1"
          class="mt-12 w-full h-full sm:w-full sm:h-80"
        />
      </div>
    </div>
  </div>
</template>
<script>
import SignUp from "@/components/SignUp.vue";

export default {
  name: "GetStartedView",
  components: {
    SignUp,
  },
  data() {
    return {
      imagePath: require("@/assets/images/logos/logo_icon.png"),
      imagePath1: require("@/assets/images/svg/ReadingSideDoodle.svg"),
    };
  },
};
</script>
<style scoped></style>
