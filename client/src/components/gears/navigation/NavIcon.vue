<template>
    <section>
        <nav>
            <ul>
                <li>
                    <a href="#">
                        <svg class="icon icon--2x">
                            <fa icon="home"/>
                        </svg>
                        <span class="invisible">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg class="icon icon--2x">
                            <fa icon="shopping-cart"/>
                        </svg>
                        <span class="invisible">Products</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg class="icon icon--2x">
                            <fa icon="bell"/>
                        </svg>
                        <span class="invisible">Notifications</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg class="icon icon--2x">
                            <fa icon="user"/>
                        </svg>
                        <span class="invisible">Profile</span>
                    </a>
                </li>
            </ul>
        </nav>
    </section>
</template>

<script>

export default {
    name: "NavIcon"
}
</script>

<style scoped>

.invisible {
    left: -999px;
    overflow: hidden;
    position: absolute;
    top: -999px;
}

a {
    color: #97adc6;
    outline: 0;
}
a:hover {
    color: #0056b3;
}

.icon {
    block-size: 1em;
    display: inline-block;
    fill: currentcolor;
    inline-size: 1em;
    vertical-align: middle;
}

.icon--2x {
    font-size: 2rem;
}


svg {
    max-inline-size: 100%;
}

section {
    box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    width: fit-content;
    overflow: hidden;
}

section ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
}

section a {
    display: block;
    padding: 15px 20px;
    position: relative;
    text-decoration: none;
}

section a:focus::after,
section a:hover::after {
    opacity: 1;
}

section a::after {
    block-size: 100%;
    box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.3);
    background-color: rgba(96,160,210,0.1);;
    content: '';
    inline-size: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: opacity 0.3s;
}

.navigation--inline ul {
    display: flex;
}
</style>