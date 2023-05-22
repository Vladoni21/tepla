<template>
  <section id="scrollableArea" tabindex="1000" class="content__wrapper ng-tns-c202-0">
    <article class="courses-page page">
            <div class="courses-page__content page__main">
              <div
                  description="Learn UX design skills with focused micro-courses and receive a certificate of completion to demonstrate your proficiency."
                  imagename="marketing-banner-courses" class="page__marketing-banner">
                <section class="marketing-banner">
                  <div class="marketing-banner__content">
                    <h2 class="marketing-banner__title">Interactive UX design courses</h2>
                    <p class="marketing-banner__description">Learn UX design skills with focused micro-courses and receive a certificate of completion to demonstrate your proficiency.</p>
                  </div>
                </section>
              </div>
              <div class="page__section-info _with-tabs _first">
                <div class="page__section-info-title-wrapper _center-align">
                  <app-action-group class="page__tabs">
                    <div class="action-group">
                      <div class="action-group__wrapper">
                        <div class="action-group__items">
                          <div class="action-group__item btn _extra-small" content="Discover">Discover</div>
                          <div class="action-group__item btn _extra-small _transparent _font-weight-normal" content="Beginner">Beginner</div>
                          <div class="action-group__item btn _extra-small _transparent _font-weight-normal" content="Intermediate">Intermediate</div>
                          <div class="action-group__item btn _extra-small _transparent _font-weight-normal" content="Advanced">Advanced</div>
                        </div>
                      </div>
                    </div>
                  </app-action-group>
                </div>
              </div>
              <div class="page__items">
                <Slip v-for="i of arr" v-bind:item="i"/>
              </div>
            </div>
          </article>
  </section>
</template>

<script>
import Slip from "../components/templates/Display/Slip.vue";
import Menu from "../components/templates/Display/Menu.vue";

export default {
  name: "Display",
  components: {Menu, Slip},
  props: ["arr"]
}
</script>

<style scoped>
.content__wrapper {
  width: 100%;
}

.page {
  display: flex;
  padding: 32px 0;
  height: 100%;

}

.page__marketing-banner {
  padding: 1em 3em 2em 3em;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 4.2px;
  box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.2);
}
.marketing-banner {
  padding: 20px;
}

.courses-page__content {
  position: relative;
  min-width: 0;
}
.page__main {
  flex-grow: 1;
}

._tablet .page__section-info._with-tabs, ._mobile .page__section-info._with-tabs {
  margin-bottom: 24px;
}
.page__section-info {
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  padding: 12px 0;
  background-color: #fff;
  border-radius: 4.2px;
  box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.2);
}

.page__section-info-title-wrapper._center-align {
  align-items: center;
}
.page__section-info-title-wrapper {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.action-group {
  display: flex;
  flex-direction: column;
  position: relative;
  --tabs-smooth-gradient-color: var(--grey-100);
}

.action-group__wrapper {
  flex-grow: 1;
  display: flex;
  transition: -webkit-transform .2s cubic-bezier(.25,.01,.25,1) 0s;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 0 var(--action-group-inner-padding);
}

.action-group__items {
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
}

.action-group__item:not(:last-child) {
  margin-right: 2px;
}

.action-group__item {
   display: flex;
   flex-direction: column;
   flex-shrink: 0;
 }
.btn._extra-small {
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  height: 36px;
  border-radius: 8px;
  padding: 0 12px;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  color: var(--black);
  cursor: pointer;
  background: var(--black-100);
  transition: background-color .2s cubic-bezier(.25,.01,.25,1) 0s,color .2s cubic-bezier(.25,.01,.25,1) 0s;
  -webkit-tap-highlight-color: transparent;
  font-size: 20px;
  line-height: 32px;
  font-weight: 700;
  height: 64px;
}

.action-group__item._font-weight-normal {
  font-weight: 400;
}

.action-group__item:before {
  display: block;
  content: attr(content);
  font-weight: 700;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.page__items {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>