<template>
    <section id="design-foundationswhat-is-ux-design-317" class="course__card">
        <article class="lesson-card _clickable">
            <figure class="lesson-card__image-wrapper"><img
                    alt="What is UX Design? Lesson"
                    class="lesson-card__image ng-star-inserted"
                    src="https://img.uxcel.com/lessons/what-is-ux-design-1680599838421-2x.svg"
                    srcset="https://img.uxcel.com/lessons/what-is-ux-design-1680599838421-2x.svg 1x, https://img.uxcel.com/lessons/what-is-ux-design-1680599838421-2x.svg 2x">
            </figure>
            <div class="lesson-card__content">
                <div class="lesson-card__name-wrapper ng-star-inserted"><h3
                        class="lesson-card__name ng-star-inserted">
                    What is UX Design? </h3></div>
                <div class="metadata _small lesson-card__meta ng-star-inserted">
                    <div class="metadata__item ng-star-inserted"><span
                            class="metadata__item-text"> Leadership </span>
                    </div>
                    <div class="metadata__item ng-star-inserted"><span
                            class="metadata__item-text _truncatable"> 7 exercises </span>
                    </div>
                </div>
            </div>
            <div class="lesson-card__status lesson-card__status-icon-wrapper _grey ng-star-inserted">
                <svg-icon class="lesson-card__status-icon" icon="checkmark">
                    <svg class="svg-icon">
                        <use href="#checkmark"></use>
                    </svg>
                </svg-icon>
            </div>
        </article>
    </section>
</template>

<script>
export default {
    name: 'Block',
};
</script>

<style scoped>
.course__card {
    margin: 16px 35px;
    position: relative;
}

.lesson-card._clickable {
    cursor: pointer;
}

.lesson-card {
    display: flex;
    align-items: center;
    -webkit-tap-highlight-color: transparent;
    padding: 24px;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
}

.lesson-card._clickable:hover {
    cursor: pointer;
    transform: translate3d(0, -2px, 0);
    box-shadow: 0 8px 16px #201e1e7a;
}

.lesson-card__image-wrapper {
    width: 44px;
    height: 44px;
    margin-right: 16px;
}

.lesson-card__image-wrapper {
    position: relative;
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-right: 20px;
}

.lesson-card__image {
    width: 100%;
    height: 100%;
    background: inherit;
    transition: -webkit-transform .2s cubic-bezier(.25, .01, .25, 1) 0s;
    transition: transform .2s cubic-bezier(.25, .01, .25, 1) 0s;
    transition: transform .2s cubic-bezier(.25, .01, .25, 1) 0s, -webkit-transform .2s cubic-bezier(.25, .01, .25, 1) 0s;
}

figure {
    margin: 0;
    font-weight: 400;
}

img {
    overflow-clip-margin: content-box;
    overflow: clip;
}

.lesson-card__content {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
}

.lesson-card__name-wrapper {
    display: flex;
}

.lesson-card__name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-break: break-all;
    overflow: hidden;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: var(--black);
    transition: color .2s cubic-bezier(.25, .01, .25, 1) 0s;
}

.lesson-card__status-icon-wrapper {
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.24);
}

.lesson-card__status {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-left: 16px;
    width: 22px;
    height: 22px;
}

.lesson-card__status-icon {
    width: 16px;
    height: 16px;
    color: var(--white);
    display: flex;
}

.svg-icon {
    width: 100%;
    height: 100%;
    display: inline-block;
    fill: currentColor;
}

</style>