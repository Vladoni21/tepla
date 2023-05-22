<template>
  <section class="course__level ng-star-inserted">
    <header class="course__level-header">
      <article>
      <div class="course__level-header-subtitle"> Level 1</div>
      <h2 class="course__level-header-title"> Getting Started with UX Design </h2>
      <div class="course__level-header-text ng-star-inserted">
        Learn the fundamentals of UX
        design, including its importance, principles, and process. Explore user research, personas, user journeys,
        wireframes, and more!
      </div>
      </article>
    </header>
    <article class="course__level-content">
      <Block/>
      <Block/>
      <Block/>
    </article>
    <footer class="course__level-footer ng-star-inserted">
      <img
          class="course__level-footer-image"
          src="https://app.uxcel.com/assets/images/courses/course-path-first.svg"
          alt="Course Path Level 0"
      >
    </footer>
  </section>
</template>

<script>
import Block from "./Step/Block.vue";

export default {
  name: "Step",
  components: {Block}
}
</script>

<style scoped>
.course__level {
  height: fit-content;
}

.course__level {
  margin-bottom: 30px;
}
.course__level:not(:last-child) {
  margin-bottom: 80px;
}

.course__level-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  background-color: #FFFFFF;
  padding: 40px;
  border-radius: 20px;
}
.course__level-header-subtitle {
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: .5px;
  text-transform: uppercase;
  color: black;
}
.course__level-header-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: var(--black);
}
.course__level-header-text {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: black;
  white-space: pre-wrap;
}
.course__level-content {
  display: flex;
  flex-direction: column;
}
.course__level-footer:not(:first-child) {
  margin-top: 40px;
}
.course__level-footer {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}
.course__level-footer-image {
  width: auto;
  height: auto;
}

img {
  border-style: none;
}
</style>