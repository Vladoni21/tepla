<template>
  <section class="content__wrapper">
    <section class="content__main">
          <article class="feature-header"
               style="background-color: rgb(86, 39, 255);">
            <div class="feature-header__wrapper _top">
              <div class="feature-header__content">
                <div class="feature-header__subtitle">Course</div>
                <h1 class="feature-header__title"> UX Design Foundations </h1>
                <div class="feature-header__text"> Learn the basics of UX design
                  &amp; key foundational concepts with this online intro course. With 25 lessons, you’ll learn
                  principles, elements, terminology, &amp; more!
                </div>
                <div class="metadata _wrap feature-header__metadata">
                  <div class="metadata__item feature-header__metadata-item">
                    <span class="metadata__item-text"> Beginner </span></div>
                  <div class="metadata__item feature-header__metadata-item">
                    <span class="metadata__item-text"> 6 hours </span></div>
                  <div class="metadata__item feature-header__metadata-item">
                    <span class="metadata__item-text"> 4.7 (6.1K) </span></div>
                  <div class="metadata__item feature-header__metadata-item">
                    <span class="metadata__item-text"><strong
                        >37,217</strong> learners enrolled </span></div>
                  </div>
                </div>
              <div class="feature-header__image-wrapper">
                <app-svg-image class="feature-header__image"><img
                    _ngcontent-aop-c177="" class="svg-image"
                    src="https://img.uxcel.com/courses/ux-design-foundations-1663154749794.svg"
                    alt="UX Design Foundations Course"></app-svg-image></div></div>
          </article>
          <article class="course page">
            <div class="course__wrapper">
              <div class="page__main content-back">
                <Step/>
                <Step/>
                <Step/>
              </div>
              <Info/>
            </div>
          </article>
    </section>
  </section>
</template>

<script>
import Step from "../components/templates/Context/Step.vue";
import Info from "../components/templates/Context/Info.vue";

export default {
  name: "Contest",
  components: {Info, Step}
}
</script>

<style scoped>
.content__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content__main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: min-content;
}

.feature-header {
  position: relative;
  background: 22px;
  padding: 40px 32px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}

.feature-header__wrapper._top {
  align-items: flex-start;
}
.feature-header__wrapper {
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 auto;
  max-width: 1376px;
}

.feature-header__content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
}
.feature-header__image-wrapper {
  flex-shrink: 0;
  margin-left: 64px;
  position: relative;
  width: 256px;
  height: 256px;
}
.feature-header__image {
  display: block;
  overflow: hidden;
  padding: 32px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: white;
}
.svg-image {
  height: 200%;
  width: 200%;
  vertical-align: middle;
  -webkit-transform: scale(.5);
  transform: scale(.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

.feature-header__subtitle {
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: .5px;
  text-transform: uppercase;
  color: white;
}
.feature-header__title {
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  color: white;
}
.feature-header__text {
  max-width: 640px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: white;
}
.metadata._wrap {
  flex-wrap: wrap;
}
.feature-header__metadata {
  margin-top: 12px;
}
.metadata {
  display: flex;
}
.metadata__item:not(:last-child) {
  margin-right: 20px;
}
.feature-header__metadata-item {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: white;
}
.metadata__item {
  position: relative;
  display: flex;
  align-items: center;
  color: black;
}
.metadata__item-text {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: inherit;
  white-space: nowrap;
}
.feature-header__metadata-item:not(:last-child):after {
  background-color: white;
}
.metadata__item:not(:last-child):after {
  position: absolute;
  content: "";
  right: -12px;
  top: 50%;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: black;
  -webkit-transform: translate3d(0,-50%,0);
  transform: translate3d(0,-50%,0);
}
.feature-header__metadata-item {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: white;
}



.course {
  width: 100%;
  flex-direction: column;
}
.course__wrapper {
  display: flex;
  max-height: 1040px;
  justify-content: space-around;
  width: 100%;
}

.page {
  display: flex;
  align-items: center;
  padding: 32px 0;
}
.page__main {
  overflow-y: scroll;
  padding: 20px;
  margin-top: 20px;
  max-height: inherit;
}

.content-back {
  background-color: rgba(255,255,255,0.13);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 20px rgba(8,7,16,0.6);
  padding-bottom: 40px;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
</style>