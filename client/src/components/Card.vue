<template>
        <section class="container">
            <article v-for="i of arr" v-bind:class="i.grid">
                <component v-bind:is="i.gear" v-bind:item="i"/>
            </article>
        </section>
</template>

<script>
import CardBenefit from "./gears/cards/CardBenefit.vue";
import CardBranch from "./gears/cards/CardBranch.vue";


export default {
    name: "Card",
    props: ['arr'],
    components: {CardBenefit, CardBranch}
}
</script>

<style scoped>
.container {
    --background-color: #fafafa;
    --text-color: #52525b;
    --card-background-color: transparent;
    --card-border-color: rgba(24, 24, 27, 0.08);
    --card-box-shadow-1: rgba(24, 24, 27, 0.02);
    --card-box-shadow-1-y: 3px;
    --card-box-shadow-1-blur: 6px;
    --card-box-shadow-2: rgba(24, 24, 27, 0.04);
    --card-box-shadow-2-y: 2px;
    --card-box-shadow-2-blur: 7px;
    --card-label-color: #18181b;
    --card-icon-color: #18181b;
    --card-icon-background-color: rgba(24, 24, 27, 0.04);
    --card-icon-border-color: rgba(24, 24, 27, 0.1);
    --card-shine-opacity: 0.3;
    --card-shine-gradient: conic-gradient(
            from 205deg at 50% 50%,
            rgba(16, 185, 129, 0) 0deg,
            #10b981 25deg,
            rgba(52, 211, 153, 0.18) 295deg,
            rgba(16, 185, 129, 0) 360deg
    );
    --card-line-color: #e9e9e7;
    --card-tile-color: rgba(16, 185, 129, 0.18);
    --card-hover-border-color: rgba(24, 24, 27, 0.15);
    --card-hover-box-shadow-1: rgba(24, 24, 27, 0.05);
    --card-hover-box-shadow-1-y: 3px;
    --card-hover-box-shadow-1-blur: 6px;
    --card-hover-box-shadow-2: rgba(24, 24, 27, 0.1);
    --card-hover-box-shadow-2-y: 8px;
    --card-hover-box-shadow-2-blur: 15px;
    --card-hover-icon-color: #34d399;
    --card-hover-icon-background-color: rgba(52, 211, 153, 0.1);
    --card-hover-icon-border-color: rgba(52, 211, 153, 0.2);
    --blur-opacity: 0.1;
    width: 1200px !important;
    padding: 0 !important;
    margin-right: auto;
    margin-left: auto;

    @media screen and (min-width: 992px) and (max-width: 1439px) {
        max-width: 1279px !important;
        padding: 0 !important;
        margin: 0 80px !important;
        width: auto !important;
    }

    @media screen and (max-width: 991px) {
        max-width: 959px !important;
        margin: 0 16px !important;
        padding: 0 !important;
        width: auto !important;
    }
}

.grid_benefit {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
    padding: 30px;
    @media screen and (max-width: 991px) {
        grid-template-columns: 1fr;
    }
}

.grid_branch {
    display: grid;
    grid-template-columns: repeat(2, 240px);
    grid-gap: 32px;
    position: relative;
    z-index: 1;
}
</style>