<template>
    <svg class="m-logo" shape-rendering="crispEdges" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 200 200">
        <rect class="box wave1 st0" width="50" height="50"/>
        <rect x="50" class="box wave2 st1" width="50" height="50"/>
        <rect x="100" class="box wave3 st2" width="50" height="50"/>
        <rect x="150" class="box wave4 st3" width="50" height="50"/>

        <rect y="50" class="box wave2 st4" width="50" height="50"/>
        <rect x="50" y="50" class="box wave3 st5" width="50" height="50"/>
        <rect x="100" y="50" class="box wave4 st6" width="50" height="50"/>
        <rect x="150" y="50" class="box wave5 st7" width="50" height="50"/>

        <rect y="100" class="box wave3 st8" width="50" height="50"/>
        <rect x="50" y="100" class="box wave4 st9" width="50" height="50"/>
        <rect x="100" y="100" class="box wave5 st10" width="50" height="50"/>
        <rect x="150" y="100" class="box wave6 st11" width="50" height="50"/>

        <rect y="150" class="box wave4 st12" width="50" height="50"/>
        <rect x="50" y="150" class="box wave5 st13" width="50" height="50"/>
        <rect x="100" y="150" class="box wave6 st14" width="50" height="50"/>
        <rect x="150" y="150" class="box wave7 st15" width="50" height="50"/>
    </svg>
</template>

<script>
export default {
    name: "LogoOld"
}
</script>

<style scoped>
.m-logo {
    display: block;
    width: 50%;
    max-width: 100px;
    min-width: 50px;
    height: auto;
    position: absolute;
    left: 30px;
    z-index: 0;

}

.box {
    opacity: 0;
    animation: wavey 5s ease alternate infinite;

    &.wave2 {
        animation-delay: 0.1s;
    }

    &.wave3 {
        animation-delay: 0.3s;
    }

    &.wave4 {
        animation-delay: 0.5s;
    }

    &.wave5 {
        animation-delay: 0.7s;
    }

    &.wave6 {
        animation-delay: 0.9s;
    }

    &.wave7 {
        animation-delay: 1.1s;
    }

}

@keyframes wavey {
    90% {
        opacity: 1.2;
    }
    100% {
        opacity: .5;
    }
}

.st0 {
    fill: #66AF4C;
}

.st1 {
    fill: #5D9D68;
}

.st2 {
    fill: #52868A;
}

.st3 {
    fill: #4874A6;
}

.st4 {
    fill: #8CB13F;
}

.st5 {
    fill: #849857;
}

.st6 {
    fill: #7A7C73;
}

.st7 {
    fill: #72638A;
}

.st8 {
    fill: #BAB230;
}

.st9 {
    fill: #B39442;
}

.st10 {
    fill: #AB6F57;
}

.st11 {
    fill: #A45069;
}

.st12 {
    fill: #E0B423;
}

.st13 {
    fill: #DA9031;
}

.st14 {
    fill: #D36541;
}

.st15 {
    fill: #CD404E;
}

.st16 {
    fill: #FFFFFF;
}

</style>