<template>
    <div class="card">
        <div class="container-card" v-bind:class="item.class">
            <svg fill="none" height="80" viewBox="0 0 120 120" width="80"
                 xmlns="http://www.w3.org/2000/svg">
                <rect fill="url(#paint0_linear_1366_4547)" fill-opacity="0.15" height="118" rx="24" stroke="url(#paint1_radial_1366_4547)" stroke-width="2"
                      width="118" x="1" y="1"></rect>
                <path d="M33.2182 61.4C33.2182 75.425 37.2682 86.75 51.5932 86.75C65.9182 86.75 69.8182 75.425 69.8182 61.4C69.8182 47.225 65.9182 35.9 51.5932 35.9C37.2682 35.9 33.2182 47.225 33.2182 61.4ZM43.7182 61.4C43.7182 53.075 45.5932 46.1 51.5932 46.1C57.5182 46.1 59.3182 53.075 59.3182 61.4C59.3182 69.65 57.5182 76.55 51.5932 76.55C45.5932 76.55 43.7182 69.65 43.7182 61.4Z"
                      fill="#54E8A9"></path>
                <path d="M87.7143 36.35L78.0543 56H80.1243L89.7843 36.35H87.7143ZM74.6943 40.16C74.6943 42.44 76.4043 44.15 78.6843 44.15C80.9343 44.15 82.7043 42.44 82.7043 40.16C82.7043 37.91 80.9343 36.14 78.6843 36.14C76.4043 36.14 74.6943 37.91 74.6943 40.16ZM77.1243 40.16C77.1243 39.29 77.7543 38.57 78.6843 38.57C79.5543 38.57 80.2743 39.29 80.2743 40.16C80.2743 41.09 79.5543 41.72 78.6843 41.72C77.7543 41.72 77.1243 41.09 77.1243 40.16ZM85.3143 52.31C85.3143 54.59 87.0243 56.3 89.3043 56.3C91.5543 56.3 93.3243 54.59 93.3243 52.31C93.3243 50.06 91.5543 48.29 89.3043 48.29C87.0243 48.29 85.3143 50.06 85.3143 52.31ZM87.7443 52.31C87.7443 51.44 88.3743 50.72 89.3043 50.72C90.1743 50.72 90.8943 51.44 90.8943 52.31C90.8943 53.24 90.1743 53.87 89.3043 53.87C88.3743 53.87 87.7443 53.24 87.7443 52.31Z"
                      fill="#2FCB89"></path>
                <defs>
                    <linearGradient id="paint0_linear_1366_4547" gradientUnits="userSpaceOnUse" x1="0.0063367" x2="120.853"
                                    y1="0.168432" y2="119.009">
                        <stop stop-color="#2FCB89" stop-opacity="0.7"></stop>
                        <stop offset="0.489583" stop-color="#2FCB89" stop-opacity="0"></stop>
                        <stop offset="1" stop-color="#2FCB89" stop-opacity="0.7"></stop>
                    </linearGradient>
                    <radialGradient id="paint1_radial_1366_4547" cx="0" cy="0" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)"
                                    gradientUnits="userSpaceOnUse"
                                    r="1">
                        <stop stop-color="#54E8A9"></stop>
                        <stop offset="1" stop-color="#1A3E31" stop-opacity="0.2"></stop>
                    </radialGradient>
                </defs>
            </svg>
            <p class="card-title">{{ item.title }}</p>
            <p class="card-description">{{ item.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardBenefit', props: {
        item: {
            type: Object, required: true,
        },
    },
};
</script>

<style scoped>
.card {
    min-width: 500px;
    border: 0;
    width: 40%;
    margin-inline: auto;
    background: rgba(0, 0, 0, 0);
}

.container-card {
    position: relative;
    border: 2px solid transparent;
    background: linear-gradient(71deg, #080509, #1a171c, #080509);
    background-clip: padding-box;
    border-radius: 45px;
    padding: 40px;

    img {
        margin-bottom: 32px;
    }

    left: 0;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(0px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    z-index: 1;
    transform: 0.5s;
    color: #fff;
}

.bg-green-box,
.bg-white-box,
.bg-yellow-box,
.bg-blue-box {
    position: relative;
}


.bg-green-box::after,
.bg-white-box::after,
.bg-yellow-box::after,
.bg-blue-box::after {
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    content: "";
    z-index: -1;
    border-radius: 45px;
}

.bg-green-box::after {
    background: linear-gradient(71deg, rgba(61, 161, 119, 0.32), rgba(61, 161, 119, 0.72), rgba(61, 161, 119, 0.32));
}

.bg-white-box::after {
    background: linear-gradient(71deg, rgba(165, 210, 247, 0.32), rgba(165, 210, 247, 0.72), rgba(165, 210, 247, 0.32));
}

.bg-yellow-box::after {
    background: linear-gradient(71deg, rgba(175, 162, 32, 0.32), rgba(175, 162, 32, 0.72), rgba(175, 162, 32, 0.32));
}

.bg-blue-box::after {
    background: linear-gradient(71deg, rgba(128, 92, 212, 0.32), rgba(128, 92, 212, 0.72), rgba(128, 92, 212, 0.32));
}

.card-title {
    font-weight: 600;
    color: white;
    letter-spacing: -0.02em;
    line-height: 40px;
    font-style: normal;
    font-size: 28px;
    padding-bottom: 8px;
}

.card-description {
    font-weight: 600;
    line-height: 32px;
    color: hsla(0, 0%, 100%, 0.5);
    font-size: 16px;
    max-width: 470px;
}

</style>