<template>
    <li v-bind:class="item.class">
        <a v-bind:href="item.href">
            <div class="frame"><i class="material-icons">{{ item.icon }}</i></div>
            <span class="nav-text" v-text="item.title" />
        </a>
    </li>
</template>

<script>
export default {
    name: 'NavItem', props: {
        item: {
            type: Object, required: true,
        },
    },
};
</script>

<style scoped>
.material-icons {
    font-size: 2rem;
}

.frame {
    width: 55px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    block-size: 32px;
    font-size: 2rem;
    display: inline-block;
    fill: currentcolor;
    inline-size: 1em;
    vertical-align: middle;
    transition: 0.5s;
    padding: 3px;
}


.fa {
    position: relative;
    display: table-cell;
    width: 55px;
    height: 36px;
    text-align: center;
    top: 12px;
    font-size: 20px;
}


.main-menu > ul {
    margin: 7px 0;
}

.main-menu li {
    position: relative;
    display: block;
    width: 255px;
}

.main-menu li > a {
    position: relative;
    width: inherit;
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    color: #8a8a8a;
    font-size: 13px;
    text-decoration: none;
    -webkit-transform: translateZ(0) scale(1, 1);
    -webkit-transition: all .14s linear;
    transition: all .14s linear;
    font-family: 'Strait', sans-serif;
    border-top: 1px solid #f2f2f2;

    text-shadow: 1px 1px 1px #fff;
}

.main-menu .nav-text {

    position: relative;
    display: table-cell;
    vertical-align: middle;
    width: 190px;
    font-family: 'Titillium Web', sans-serif;
}

.main-menu > ul.logout {
    position: absolute;
    left: 0;
    bottom: 0;

}

.darkerli {
    background-color: #ededed;
    text-transform: capitalize;
}

.darkerlishadow {
    background-color: #ededed;
    text-transform: capitalize;
    -webkit-box-shadow: inset 0px 5px 5px -4px rgba(50, 50, 50, 0.55);
    -moz-box-shadow: inset 0px 5px 5px -4px rgba(50, 50, 50, 0.55);
    box-shadow: inset 0px 5px 5px -4px rgba(50, 50, 50, 0.55);
}


.darkerlishadowdown {
    background-color: #ededed;
    text-transform: capitalize;
    -webkit-box-shadow: inset 0px -4px 5px -4px rgba(50, 50, 50, 0.55);
    -moz-box-shadow: inset 0px -4px 5px -4px rgba(50, 50, 50, 0.55);
    box-shadow: inset 0px -4px 5px -4px rgba(50, 50, 50, 0.55);
}

.main-menu li:hover > a, nav.main-menu li.active > a, .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus, .dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus, .no-touch .dashboard-page nav.dashboard-menu ul li:hover a, .dashboard-page nav.dashboard-menu ul li.active a {
    color: #fff;
    background-color: #00bbbb;
    text-shadow: 0px 0px 0px;
}
</style>