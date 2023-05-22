<template>
    <nav>
        <div class="underline"></div>
        <div class="underline"></div>
        <div class="underline"></div>
        <a onClick="ul(0)">Home</a><a onClick="ul(1)">Videos</a><a onClick="ul(2)">Playlists</a><a onClick="ul(3)">Community</a><a
            onClick="ul(4)">Channels</a><a onClick="ul(5)">About</a>
    </nav>
</template>

<script>
export default {
    name: 'Menu', mounted() {
        function ul(index) {

            let underlines = document.querySelectorAll('.underline');

            for (let i = 0; i < underlines.length; i++) {
                underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
            }
        }
    },
};
</script>

<style scoped>

:root {
    --underline-height: 0.5em;
    --transition-duration: 0.5s;
}

nav {
    position: relative;
    white-space: nowrap;
    background: white;
    padding: var(--underline-height) 0;
    margin: 2em 0;
    box-shadow: 0 1em 2em rgba(0, 0, 0, 0.05);
}

.underline {
    display: block;
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    height: var(--underline-height);
    width: 20%;
    background: black;
    pointer-events: none;
    mix-blend-mode: multiply;
    transition: transform var(--transition-duration) ease-in-out;
}

.underline:nth-child(1) {
    background: yellow;
    transition: calc(var(--transition-duration) * 0.8);
}

.underline:nth-child(2) {
    background: cyan;
    transition: calc(var(--transition-duration) * 1.2);
}

.underline:nth-child(3) {
    background: magenta;
}

a {
    display: inline-block;
    z-index: 10;
    width: 20%;
    padding: 1em 0;
    text-align: center;
    cursor: pointer;
}

nav.black .underline {
    background: #222;
    border-radius: 0.25em;
    height: calc(var(--underline-height) / 2);
    mix-blend-mode: initial;
}

nav.full {
    font-weight: bold;
    background: #111;
    color: white;
}

nav.full .underline {
    height: 100%;
    background: gold;
}

nav.retro .underline {
    border-radius: 100% 100% 0 0;
}

nav.retro .underline:nth-child(1) {
    background: gold;
}

nav.retro .underline:nth-child(2) {
    background: dodgerblue;
}

nav.retro .underline:nth-child(3) {
    background: tomato;
}
</style>