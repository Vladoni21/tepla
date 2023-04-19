<template xmlns="http://www.w3.org/1999/html">
    <article class="Home">
        <div class="login">
            <div class="text">
                <h2>Добро пожаловать!</h2>
                <p>TEAPLA - это уникальная обучающая платформа, где вы можете научиться чему угодно в любое время и в
                    любом
                    месте. Узнайте что угодно: начиная от изучения языков и заканчивая программированием, маркетингом,
                    финансами и
                    предпринимательством. </p>
            </div>
            <div class="item">
                <Login></Login>
            </div>
        </div>
        <!--features-->
        <section id="features">
            <div class="fea-disc">
                <h1>Наши преимущества</h1>
                <div class="fea-base">
                    <div class="fea-box">
                        <fa icon="graduation-cap"/>
                        <h3>Быстрое освоение программы</h3>
                    </div>
                    <div class="fea-box">
                        <fa icon="certificate"/>
                        <h3>Обучение происходит с помощью практики</h3>
                    </div>
                    <div class="fea-box">
                        <fa icon="award"/>
                        <h3>Сертификат государственного образца</h3>
                    </div>
                </div>
            </div>
        </section>
        <!--Courses-->
        <section id="course">
            <h1>Наши популярные курсы</h1>
            <div class="course-box">
                <Grid v-bind:arr="top_courses"/>
            </div>
        </section>
        <!--Profiles-->
        <section id="experts">
            <h1>Наши лучшие преподаватели</h1>
            <div class="expert-box">
                <Grid v-bind:arr="top_experts"/>
            </div>
        </section>
    </article>
    <article class="Home">
        <Card v-bind:arr="test"/>
    </article>
</template>

<script>
import Navbar from "../components/NavBar.vue";
import Login from "../components/Login.vue";
import expert from "../components/img/expert.jpg";
import Grid from "../components/Grid.vue";
import Card from "../components/Card.vue";

export default {
    data() {
        return {
            image: expert,
            top_courses: [
                {id: 1, title: "Django разработчик", icon: "code", href: "#", class: "top_courses", gear: "LinkCourse"},
                {id: 2, title: "Python разработчик", icon: "code", href: "#", class: "top_courses", gear: "LinkCourse"},
                {id: 3, title: "JavaScript разработчик", icon: "code", href: "#", class: "top_courses", gear: "LinkCourse"},
                {id: 4, title: "Математика", icon: "calculator", href: "#", class: "top_courses", gear: "LinkCourse"},
                {id: 5, title: "Английский язык", icon: "globe", href: "#", class: "top_courses", gear: "LinkCourse"},
                {id: 6, title: "Немецкий язык", icon: "globe", href: "#", class: "top_courses", gear: "LinkCourse"}
            ],
            top_experts: [
                {id: 1, name: "Райан Гослинг", description: "Data science аналитик", img: expert, alt: "", href: "#", class: "top_experts", gear: "LinkExpert"},
                {id: 2, name: "Райан Гослинг", description: "Сдал профильную метематику на 100 баллов", img: expert, alt: "", href: "#", class: "top_experts", gear: "LinkExpert"},
                {id: 3, name: "Райан Гослинг", description: "JavaScript разработчик", img: expert, alt: "", href: "#", class: "top_experts", gear: "LinkExpert"},
                {id: 4, name: "Райан Гослинг", description: "Дед немец, поэтому учитель немецкого", img: expert, alt: "", href: "#", class: "top_experts", gear: "LinkExpert"}
            ],
            test: [
                {id: 1, gear: "CardBenefit", grid: "grid_benefit", class: "bg-green-box", description: "Hubble lets users borrow USDH for a one-time 0.5% fee. No variable\n" +
                        " rates. No interest charged, ever.", title: "Zero-cost Possibilities", icon: ""},
                {id: 2, gear: "CardBenefit", grid: "grid_benefit", class: "bg-white-box", description: "Deposit a variety of assets on Hubble, raise your collateral ratio, and unlock the liquidity in your wallet.", title: "Multi-Asset Collateral", icon: ""},
                {id: 3, gear: "CardBenefit", grid: "grid_benefit", class: "bg-yellow-box", description: "While your collateral is deposited, delegate it to earn the highest yield available in the Solana ecosystem.", title: "Get Yield on Deposits", icon: ""},
                {id: 4, gear: "CardBenefit", grid: "grid_benefit", class: "bg-blue-box", description: "Hubble’s capital-efficient 110% collateral ratio lets users leverage up to 11x on their deposits.", title: "Get up to 11x Leverage", icon: ""},
                {id: 5, gear: "CardBranch", grid: "grid_branch", class: "", icon: ""}
            ]
        }
    },
    name: "Home",
    components: {
        Navbar,
        Login,
        Grid,
        Card
    }
}
</script>

<style scoped>

:root {
    --main-color: #CAE9FF;
    --blue: #5FA8D3;
    --light-blue: #62B6CB;
    --light-color: #888;
    --light-bg: #eee;
    --black: #2c3e50;
    --white: #fff;
    --border: .1rem solid rgba(0, 0, 0, .2);
}

.Home {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
}

.login {
    margin-top: 50px;
    padding-right: 20px;
    padding-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-width: 800px;
    height: 450px;
    background: #5FA8D3;
    border: 1px solid white;
    border-radius: 5px;
}

.item {
    position: relative;
    right: 0;
}

.text {
    position: relative;
    padding-right: 5px;
    padding-left: 5px;
    color: white;
    font-family: 'Open Sans', sans-serif;
}

/* features */
#features .fea-disc {
    background-color: #5FA8D3;
    border-radius: 5px;
    font-family: 'Open Sans', sans-serif;
    color: white;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
    min-width: 800px;
    border: 1px solid white;
}

#features {
    min-width: 800px;
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 50px;
}

#features .fea-base {
    min-width: 800px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
    padding: 25px 25px 20px;
}

#features .fea-box {
    border-radius: 5px;
    background: #62B6CB;
    text-align: center;
}

#features .fea-box {
    font-family: 'Open Sans', sans-serif;
    font-size: 2.3rem;
    color: white;
}

#features .fea-box h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
    padding: 10px 0 7px 5px;
}

#features .fea-box p {
    font-size: 1rem;
    font-weight: 400;
    color: white;
    padding-left: 5px;
}

/* course */
#course {
    margin-top: 50px;
    text-align: center;
    background-color: #5FA8D3;
    border-radius: 5px;
    font-family: 'Open Sans', sans-serif;
    color: white;
    padding-bottom: 25px;
    min-width: 800px;
    border: 1px solid white;
}

#course .course-box {
    min-width: 800px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
    padding: 25px 25px 20px;
}

#course .courses {
    font-size: 2.3rem;
    border-radius: 5px;
    text-align: center;
    background: #62B6CB;
    height: 100%;
}

/* experts */
.expert {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30%;
    margin-bottom: 15px;
}

#experts {
    margin-top: 50px;
    text-align: center;
    background-color: #5FA8D3;
    border-radius: 5px;
    font-family: 'Open Sans', sans-serif;
    color: white;
    padding-bottom: 25px;
    min-width: 800px;
    border: 1px solid white;
}

#experts .expert-box {
    min-width: 800px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
    padding: 25px 25px 20px;
}

#experts .expert-box .profile {
    font-size: 1em;
    background: #5FA8D3;
    padding-top: 30px;
    border-radius: 5px;
}

#experts .expert-box h6 {
    font-size: 1.2em;
}


</style>