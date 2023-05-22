<template>
    <section class="course-preview card _with-padding content-card _clickable">
        <div class="course-preview__colored-header bg-color-purple" />
        <div class="course-preview__content">
            <div class="course-preview__icon-wrapper ">
                <app-svg-image class="course-preview__icon "><img
                        alt="UX Design Foundations Course"
                        class="svg-image"
                        src="https://img.uxcel.com/courses/ux-design-foundations-1663154749794.svg">
                </app-svg-image>
            </div>
            <span class="badge _grey content-card__status _medium "> <router-link
                    to="context"> VIEW </router-link> </span>
            <div class="content-card__info">
                <div class="content-card__subtitle ">Course</div>
                <div class="course-preview__title-wrapper"><h3
                        class="content-card__title course-preview__title "
                        title="UX Design Foundations">{{ item.title }}</h3></div>
                <div class="content-card__description">
                    {{ item.description }}
                </div>
                <div class="content-card__metadata metadata _small ">
                    <div class="metadata__item "><span
                            class="metadata__item-text _truncatable"> {{ item.level }} </span>
                    </div>
                    <div class="metadata__item "><span
                            class="metadata__item-text"> {{ item.time }} </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Slip', props: {
        item: {
            type: Object, required: true,
        },
    },
};
</script>

<style scoped>
.card._clickable:not(._skeleton) {
    transition: background-color .2s cubic-bezier(.25, .01, .25, 1) 0s, box-shadow .2s cubic-bezier(.25, .01, .25, 1) 0s, transform .2s cubic-bezier(.25, .01, .25, 1) 0s, -webkit-transform .2s cubic-bezier(.25, .01, .25, 1) 0s;
    -webkit-tap-highlight-color: transparent;
}

.card._with-padding {
    padding: 24px;
    margin: 12px;
}

.content-card {
    height: 100%;
}

.card {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: var(--white);
    height: fit-content;
}

.course-preview__colored-header {
    margin: -24px -24px 0;
    height: 72px;
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
}

.course-preview:not(._minimized-view) .course-preview__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
}

.course-preview__icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    margin-top: -40px;
    background-color: var(--white);
    border-radius: 50%;
    box-shadow: 0 2px 5px, 0 2px #05060f0a, 0 0 2px #05060f05;
    overflow: hidden;
}

.course-preview__icon {
    width: 56px;
    height: 56px;
}

.svg-image {
    height: 200%;
    width: 200%;
    vertical-align: middle;
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}

img {
    border-style: none;
}

.badge._grey {
    color: var(--black);
}

.badge._medium {
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: .5px;
    text-transform: uppercase;
    height: 24px;
    border-radius: 6px;
    padding: 0 6px;
}

.content-card__status {
    position: absolute;
    display: flex;
    align-items: center;
    top: 24px;
    right: 24px;
}

.badge {
    font-size: 20px;
    line-height: 32px;
    font-weight: 700;
    height: 32px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
    border-radius: 8px;
    color: var(--black);
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

.content-card__info {
    display: flex;
    flex-direction: column;
}

.content-card__subtitle {
    font-size: 10px;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: .5px;
    text-transform: uppercase;
    margin-top: 20px;
}

.course-preview {
    max-width: 510px;
    height: 325px;
}

.course-preview:not(._minimized-view) .course-preview__title-wrapper {
    margin-top: 8px;
}

.course-preview__title-wrapper {
    display: flex;
    align-items: center;
}

.course-preview__title {
    margin-top: 0;
}

.content-card__title {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-break: break-all;
    overflow: hidden;
    color: var(--black);
    margin-top: 8px;
}

.content-card__description {
    flex-grow: 1;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-word;
    overflow: hidden;
    margin-top: 8px;
    height: 77px;
}

.content-card__description .mask {
    background: linear-gradient(rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.62));
    width: 100%;
    height: 100%;
    position: absolute;
}

.content-card__metadata {
    margin-top: 8px;
    display: flex;
}

.metadata._small .metadata__item:not(:last-child) {
    margin-right: 15px;
}

.metadata__item:not(:last-child) {
    margin-right: 20px;
}

.metadata__item {
    display: flex;
    align-items: center;
}

.metadata__item-pro-icon._small {
    --size: 16px;
}

.metadata__item-pro-icon:not(:last-child) {
    margin-right: 4px;
}

[_nghost-qgu-c149] {
    display: flex;
    align-items: center;
    --size: 20px;
    -webkit-tap-highlight-color: transparent;
}

.metadata._small .metadata__item-text {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: inherit;
    white-space: nowrap;
}

.metadata__item-text._truncatable {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-break: break-all;
    overflow: hidden;
    white-space: normal;
}

.bg-color-purple {
    background-color: #5627FF;
}

.card._clickable:hover {
    cursor: pointer;
    transform: translate3d(0, -2px, 0);
    box-shadow: 0 8px 16px #201e1e7a;
}
</style>