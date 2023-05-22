<template>
    <section>
        <nav class="main-menu">
            <div>
                <a class="logo" href="http://startific.com">
                </a>
            </div>
            <div class="settings" />
            <div id="style-1" class="scrollbar">
                <Tag tag="ul" v-bind:arr="nav_list" />
                <ul class="social">
                    <li>
                        <a href="http://startific.com">
                            <i class="fa fa-heart-o fa-lg"></i>
                            <div class="addthis_default_style addthis_32x32_style">
                                <div style="position:absolute; margin-left: 66px; bottom:3px; height: 27px;">
                                    <a class="share-popup" href="https://www.facebook.com/sharer/sharer.php?u="
                                       target="_blank"><img alt=""
                                                                height="30px"
                                                                src="http://icons.iconarchive.com/icons/danleech/simple/512/facebook-icon.png" width="30px" /></a>
                                    <a class="share-popup" href="https://twitter.com/share" target="_blank">
                                        <img alt=""
                                             height="30px" src="https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Twitter_alt.png" width="30px" />
                                    </a>
                                    <a class="share-popup"
                                       href="https://plusone.google.com/_/+1/confirm?hl=en&url=_URL_&title=_TITLE_" target="_blank"><img alt=""
                                                                                height="30px"
                                                                                src="http://icons.iconarchive.com/icons/danleech/simple/512/google-plus-icon.png" width="30px" /></a>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </section>
</template>

<script>
import Tag from '../containers/Tag.vue';
import Grid from '../containers/Grid.vue';

export default {
    name: 'SideBar', components: { Grid, Tag }, data() {
        return {
            nav_list: [{ title: 'Главная', icon: 'home', class: '', href: '#', gear: 'NavItem' }, {
                title: 'Войти',
                icon: 'login',
                class: '',
                href: '#',
                gear: 'NavItem',
            }, { title: 'Контакты', icon: 'contacts', class: '', href: '#', gear: 'NavItem' }, {
                title: 'Новости',
                icon: 'newspaper',
                class: 'darkerlishadow',
                href: '#',
                gear: 'NavItem',
            }, {
                title: 'Технологии',
                icon: 'science',
                class: 'darkerli',
                href: '#',
                gear: 'NavItem',
            }, {
                title: 'Музыка',
                icon: 'music_note',
                class: 'darkerli',
                href: '#',
                gear: 'NavItem',
            }, {
                title: 'Разработка',
                icon: 'code',
                class: 'darkerli',
                href: '#',
                gear: 'NavItem',
            }, { title: 'Искусство', icon: 'brush', class: 'darkerli', href: '#', gear: 'NavItem' }, {
                title: 'Игры',
                icon: 'sports_esports',
                class: 'darkerlishadowdown',
                href: '#',
                gear: 'NavItem',
            }, { title: 'Блог', icon: 'rss_feed', class: '', href: '#', gear: 'NavItem' }, {
                title: 'Помощь',
                icon: 'help',
                class: '',
                href: '#',
                gear: 'NavItem',
            }, // e.t.c.
            ],
        };
    },
};
</script>

<style scoped>

nav {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;

}

nav ul, nav li {
    outline: 0;
    margin: 0;
    padding: 0;
    font-size: 10px;
    text-transform: uppercase;
}

.logo {
}

.settings {
    height: 100px;
    float: left;
    background-repeat: no-repeat;
    width: 250px;
    margin: 0px;
    text-align: center;
    font-size: 20px;
    font-family: 'Strait', sans-serif;
}


/* ScrolBar  */
.scrollbar {
    height: 90%;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
}

.scrollbar:hover {
    height: 90%;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
}

/* Scrollbar Style */


#style-1::-webkit-scrollbar-track {
    border-radius: 2px;
}

#style-1::-webkit-scrollbar {
    width: 5px;
    background-color: #F7F7F7;
}

#style-1::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #BFBFBF;
}

/* Scrollbar End */

.main-menu:hover, nav.main-menu.expanded {
    width: 250px;
    overflow: hidden;
    opacity: 1;

}

.main-menu {
    background: #F7F7F7;
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    left: 0;
    width: 55px;
    overflow: hidden;
    -webkit-transition: width .2s linear;
    transition: width .2s linear;
    -webkit-transform: translateZ(0) scale(1, 1);
    box-shadow: 1px 0 15px rgba(0, 0, 0, 0.07);
    opacity: 1;
    z-index: 2;
}

.no-touch .scrollable.hover {
    overflow-y: hidden;
}

.no-touch .scrollable.hover:hover {
    overflow-y: auto;
    overflow: visible;
}

.main-menu > ul.social {
    position: absolute;
    left: 0;
    bottom: 0;
}


/* Logo Hover Property


.settings:hover, settings:focus {
  -webkit-transition: all 0.2s ease-in-out, width 0, height 0, top 0, left 0;
  -moz-transition: all 0.2s ease-in-out, width 0, height 0, top 0, left 0;
  -o-transition: all 0.2s ease-in-out, width 0, height 0, top 0, left 0;
  transition: all 0.2s ease-in-out, width 0, height 0, top 0, left 0;
}

.settings:active, settings:focus {
  -webkit-transition: all 0.1s ease-in-out, width 0, height 0, top 0, left 0;
  -moz-transition: all 0.1s ease-in-out, width 0, height 0, top 0, left 0;
  -o-transition: all 0.1s ease-in-out, width 0, height 0, top 0, left 0;
  transition: all 0.1s ease-in-out, width 0, height 0, top 0, left 0;
}
*/

@font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 300;
    src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');
}
</style>