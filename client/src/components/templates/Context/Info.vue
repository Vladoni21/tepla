<template>
  <section class="course__aside page__aside">
      <aside class="learning-aside__profile learning-aside__widget">
        <article class="learning-aside__profile-item">
          <img
            src="https://app.uxcel.com/assets/images/courses/certificate-placeholder.png"
            alt="Certificate" class="learning-aside__image">
        </article>
        <article class="learning-aside__profile-item">
          <section class="learning-aside__profile-item"><h2
              class="learning-aside__profile-item-title">About the course</h2>
            <p class="learning-aside__profile-description _collapsed">In today's
              digital landscape, User Experience (UX) design has become a crucial component of any
              successful product or service. UX design aims to create visually appealing, easy-to-use, and
              enjoyable products that meet the needs and preferences of users. As the demand for UX
              designers continues to grow, understanding the principles and deliverables of this field can
              help aspiring designers build the skills necessary to succeed in the industry.<br><br>The UX
              Design Foundations course is an ideal starting point for anyone interested in UX design. In
              this course, you'll be introduced to key concepts such as user research, persona, wireframing,
              prototyping, empathy mapping, and usability testing. These concepts form the foundation of UX
              design, and understanding them is essential to creating products that meet the needs and
              preferences of users.<br><br>In addition to the core concepts, the course also covers visual
              design principles such as color theory, typography, composition, iconography, and animation.
              These design elements are crucial in creating visually engaging interfaces that are
              user-friendly and meet the needs of users.<br><br>The course also provides an overview of
              common design roles and their responsibilities. Whether you're just entering the design field
              or looking to enhance your skills as a UX design professional, this course will help you
              structure your knowledge and build the skills necessary for a successful career in UX
              design.<br><br>By the end of the course, you'll have a solid foundation in UX design
              principles and deliverables. You'll also have the skills necessary to create user-friendly
              products that meet the needs of users. So if you're looking to start a career in UX design or
              enhance your existing skills, enroll in the UX Design Foundations course today!</p>
          </section>
          <section class="learning-aside__profile-item"><h2
              class="learning-aside__profile-item-title">
            Course details</h2>
            <div class="learning-aside__profile-item-content metadata _vertical">
              <div class="metadata__item">
                <svg-icon class="metadata__item-icon" _nghost-aop-c130="">
                  <svg class="svg-icon">
                    <use href="#calendar"></use>
                  </svg>
                </svg-icon>
                <span class="metadata__item-text"> Last updated May 18, 2023 </span>
              </div>
              <div class="metadata__item">
                <svg-icon icon="play-outlined" class="metadata__item-icon"
                          _nghost-aop-c130="">
                  <svg class="svg-icon">
                    <use href="#play-outlined"></use>
                  </svg>
                </svg-icon>
                <span class="metadata__item-text"> 25 lessons in the course </span>
              </div>
              <div class="metadata__item">
                <svg-icon icon="globe" class="metadata__item-icon"
                          _nghost-aop-c130="">
                  <svg class="svg-icon">
                    <use href="#globe"></use>
                  </svg>
                </svg-icon>
                <span class="metadata__item-text">English</span></div>
              <div class="metadata__item">
                <svg-icon icon="mobile" class="metadata__item-icon"
                          _nghost-aop-c130="">
                  <svg class="svg-icon">
                    <use href="#mobile"></use>
                  </svg>
                </svg-icon>
                <span class="metadata__item-text">Access on tablet and phone</span>
              </div>
              <div class="metadata__item">
                <svg-icon icon="positive-smile" class="metadata__item-icon"
                          _nghost-aop-c130="">
                  <svg class="svg-icon">
                    <use href="#positive-smile"></use>
                  </svg>
                </svg-icon>
                <span class="metadata__item-text">Online at your own pace</span>
              </div>
            </div>
          </section>
        </article>
        <article class="learning-aside__profile-item">
          <h2
            class="learning-aside__profile-item-title">Contributing Experts</h2>
          <div class="learning-aside__contributors">
            <div class="learning-aside__contributor"><img
                class="learning-aside__contributor-image"
                src="https://img.uxcel.com/contributors/Lorenzo Doremi.png" alt="Lorenzo Doremi">
              <div class="learning-aside__contributor-content">
                <div class="learning-aside__contributor-name"> Lorenzo Doremi</div>
                <div class="learning-aside__contributor-role"> UX Designer at
                  Freelancer
                </div>
              </div>
            </div>
            <div class="learning-aside__contributor"><img
                class="learning-aside__contributor-image"
                src="https://img.uxcel.com/contributors/Krisztina Szerovay.png" alt="Krisztina Szerovay">
              <div class="learning-aside__contributor-content">
                <div class="learning-aside__contributor-name"> Krisztina Szerovay
                </div>
                <div class="learning-aside__contributor-role"> Senior UX Designer at
                  MKB Fintechlab
                </div>
              </div>
            </div>
          </div>
        </article>
      </aside>
  </section>
</template>

<script>
export default {
  name: "Info"
}
</script>

<style scoped>
.page__aside {
  flex-shrink: 0;
  margin-top: 20px;
  height: fit-content;
  width: 485px;
}

.learning-aside__profile {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #FFFFFF;
}
.learning-aside__widget {
  padding: 32px;
  border-radius: 20px;
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 20px rgba(8,7,16,0.6);
}

.learning-aside__image {
  width: 100%;
  height: auto;
}

.learning-aside__profile-item:not(:first-child) {
  margin-top: 32px;
}

.learning-aside__profile-item-title {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: var(--black);
}

.learning-aside__profile-description._collapsed {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  word-break: break-word;
  overflow: hidden;
}
.learning-aside__profile-description {
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: black;
  white-space: pre-wrap;
}

.metadata._vertical {
  flex-direction: column;
  margin: -8px;
}
.metadata {
  display: flex;
}

.metadata._vertical .metadata__item {
  margin: 8px;
}
.metadata__item:not(:last-child) {
  margin-right: 20px;
}
.metadata__item {
  position: relative;
  display: flex;
  align-items: center;
  color: black;
}

.metadata__item-icon {
  display: flex;
  width: 20px;
  height: 20px;
  color: inherit;
  flex-shrink: 0;
  margin-right: 4px;
}

.svg-icon {
  width: 100%;
  height: 100%;
  display: inline-block;
  fill: currentColor;
}

.metadata__item-text {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: inherit;
  white-space: nowrap;
}

.learning-aside__contributors {
  display: flex;
  flex-direction: column;
  margin: -8px 0;
}
.learning-aside__contributor {
  display: flex;
  align-items: center;
  margin: 8px 0;
}
.learning-aside__contributor-image {
  flex-shrink: 0;
  margin-right: 12px;
  width: 44px;
  height: 44px;
}
.learning-aside__contributor-content {
  flex-grow: 1;
}
.learning-aside__contributor-name {
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  word-break: break-all;
  overflow: hidden;
  color: var(--black);
}
.learning-aside__contributor-role {
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #40444f;
}

.content-back {
  border-radius: 20px;
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 20px rgba(8,7,16,0.6);
}
</style>