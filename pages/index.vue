<script setup lang="ts">

</script>

<template>
  <div>
    <div class="bg-gradient-to-br from-[#1B2240] to-[#661F4E] p-[40px]">
      <h1 class="text-white text-5xl font-extrabold text-center mb-[16px]">
        GraphQL Tutorials
      </h1>
      <h2 class="text-white text-3xl font-bold text-center mb-[32px]">
        Boost your developer skills with our hands-on GraphQL tutorials and trainings
      </h2>
      <div class="flex justify-center items-center">
        <a class="inline-flex items-center bg-[#ad9bf6] text-lg px-[24px] h-[3rem] rounded-md">Browse tutorials</a>
        <a class="ml-[1rem] text-white inline-flex items-center rounded-md border-[1px] border-grey h-[3rem] px-[24px]">
          Explore certifications
        </a>
      </div>
    </div>
    <div class="bg-[#1B2240] grid grid-cols-2 px-[40px] py-[80px]">
      <div>
        <h2 class="text-white text-4xl">Welcome to Apollo Odyssey</h2>
        <img class="max-w-[400px]" src="https://www.apollographql.com/tutorials/assets/intro_illu.svg" alt="img-1">
      </div>
      <div class="text-white">
        <p class="text-lg font-thin">Odyssey is Apollo's official learning platform that offers free hands-on GraphQL tutorials. It's the perfect place to start your GraphQL journey. Odyssey courses are collections of short and snappy lessons you can complete on your own schedule. Each lesson comes with a video and its written counterpart. Additionally, our GraphQL tutorials are enriched with code challenges, tasks, and quick quizzes to make the experience interactive and reinforce your knowledge.</p>
        <p class="mt-[16px] text-lg font-thin">Each GraphQL tutorial comes with a real-life application that you'll be building along with the instructor, step by step. You'll also get many opportunities to practice with in-lesson code challenges to keep things concrete and hands-on. When you pass a challenge, you get wonderful colorful digital confetti celebrating your success 🎉! If something's not quite right, read the failed tests to help guide you toward the correct solution.</p>
        <p class="mt-[16px] text-lg font-thin">If you ever need extra guidance or want to talk about what you just learned, join the Apollo community forums! Our team and community members will be happy to help. And in case you're looking for more targeted information on one of our Apollo libraries, you can always check out our documentation.</p>
      </div>
    </div>
    <div class="bg-[#060F2F] p-[40px]">
      <div class="text-white">
        <h2 class="text-4xl text-center leading-[1.2em] mb-[4px]">GraphQL tutorials and resources</h2>
        <p class="text-lg font-light text-center">Explore our materials, at your own pace.</p>
      </div>
      <div class="flex">
        <CourseLabQuest
            image="https://www.apollographql.com/tutorials/assets/course.svg"
            title="Courses"
            subtitle="Take any of our courses, individually and at your own pace."
        />
        <CourseLabQuest
            image="https://www.apollographql.com/tutorials/assets/lab.svg"
            title="Labs"
            subtitle="Get even more hands-on experience by building stuff in our labs."
        />
        <CourseLabQuest
            image="https://www.apollographql.com/tutorials/assets/side-quest.svg"
            title="Side quests"
            subtitle="Learn from practical examples focused on real-world applications"
        />
      </div>
    </div>
  </div>
</template>