<template>
    <article id="container" class="container">
        <div class="form-container sign-up-container">
            <form action="#">
                <h1>Создать Аккаунт</h1>
                <div style="margin: 10px 0;">
                    <input placeholder="Имя" type="text" />
                    <input placeholder="Email" type="email" />
                    <input placeholder="Пароль" type="password" />
                </div>
                <button>Поехали</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#">
                <h1>Войти</h1>
                <div class="social-container">
                    <a class="social" href="#"><i class="fab fa-facebook-f"></i></a>
                    <a class="social" href="#"><i class="fab fa-google-plus-g"></i></a>
                    <a class="social" href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <input placeholder="Email" type="email" />
                <input placeholder="Пароль" type="password" />
                <a href="#">Забыли пароль?</a>
                <button>Войти</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="close" @click="showModal">
                <i class="material-icons">close</i>
            </div>
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Впервые на нашей платформе?</h1>
                    <p>Для регистрации на образовательной платфоре введите данные, приведенные в форме</p>
                    <button id="signIn" class="ghost" @click="signIn">Войти</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Приветсвуем!</h1>
                    <p>Для входа на образовательную платфору введите данные, приведенные в форме</p>
                    <button id="signUp" class="ghost" @click="signUp">Регистрация</button>
                </div>
            </div>
        </div>
        <div class="screen__background">
            <span class="screen__background__shape screen__background__shape6"></span>
            <span class="screen__background__shape screen__background__shape5"></span>
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
        </div>
    </article>
</template>

<script>


export default {
    name: 'Welcome', props: ['showModal'], methods: {
        signUp: function () {
            document.getElementById('container').classList.add('right-panel-active');
        }, signIn: function () {
            document.getElementById('container').classList.remove('right-panel-active');
        },
    },
};
</script>

<style scoped>

.fa {
    position: relative;
    display: table-cell;
    width: inherit;
    height: inherit;
    text-align: center;
    font-size: 20px;
    color: white;
}

.close {
    height: 38px;
    width: 38px;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1001;
    border-radius: 100%;
}

h1 {
    font-weight: bold;
    margin: 0;
}

h2 {
    text-align: center;
}

p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
}

span {
    font-size: 12px;
}

a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
}

button {
    border-radius: 20px;
    border: 1px solid white;
    background-color: #51b09a;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
}

button.ghost {
    background-color: transparent;
    border-color: #FFFFFF;
}

form {
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
}

input:hover {
    outline: none;
    border-bottom-color: white;
    background-size: 100% 2px;
}

input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;

    user-select: none;
    text-decoration: none;
    background-image: linear-gradient(#d1d1d4, #4FE1DDFF);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .3s;
}

.container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
    position: absolute;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
}

.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
}

.container.right-panel-active .sign-in-container {
    transform: translateX(100%);
}

.sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
}

@keyframes show {
    0%, 49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%, 100% {
        opacity: 1;
        z-index: 5;
    }
}

.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 51%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
}

.container.right-panel-active .overlay-container {
    transform: translateX(-100%);
}

.overlay {
    background: -webkit-linear-gradient(to right, #62B6CB, #51b09a);
    background: linear-gradient(to right, #62B6CB, #51b09a);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #FFFFFF;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.overlay-left {
    transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
    transform: translateX(0);
}

.overlay-right {
    right: 0;
    transform: translateX(0);
}

.container.right-panel-active .overlay-right {
    transform: translateX(20%);
}

.social-container {
    margin: 20px 0;
}

.social-container a {
    border: 1px solid #DDDDDD;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
}

footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}

footer p {
    margin: 10px 0;
}

footer i {
    color: red;
}

footer a {
    color: #3c97bf;
    text-decoration: none;
}

.popup-enter {
    animation: popup-in 0.5s;
}

.popup-leave-active {
    animation: popup-in 0.5s reverse;
}

@keyframes popup-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}

.screen__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    -webkit-clip-path: inset(0 0 0 0);
    clip-path: inset(0 0 0 0);
}

.screen__background__shape {
    transform: rotate(45deg);
    position: absolute;
}

.screen__background__shape1 {
    height: 325px;
    width: 365px;
    background: linear-gradient(130deg, #69dde8, #51b09a);
    top: -135px;
    right: 430px;
    border-radius: 72px;
}

.screen__background__shape2 {
    height: 220px;
    width: 220px;
    background: #6d82d5;
    top: -120px;
    right: 90px;
    border-radius: 32px;
}

.screen__background__shape3 {
    height: 540px;
    width: 190px;
    background: linear-gradient(270deg, #69dde8, #51b09a);
    top: -24px;
    right: 0;
    border-radius: 32px;
}

.screen__background__shape4 {
    height: 400px;
    width: 200px;
    background: rgba(68, 110, 217, 0.93);
    top: 420px;
    right: 50px;
    border-radius: 60px;
}

.screen__background__shape5 {
    height: 367px;
    width: 182px;
    background: rgba(68, 110, 217, 0.93);
    top: 270px;
    right: 465px;
    border-radius: 60px;
}

.screen__background__shape6 {
    height: 220px;
    width: 220px;
    background: #6d82d5;
    top: 220px;
    right: 700px;
    border-radius: 32px;
}
</style>