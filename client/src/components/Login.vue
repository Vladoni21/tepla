<template>
    <section class="container">
        <div class="screen">
            <div class="screen__content">
                <form class="login">
                    <div class="login__field">
                        <i><fa icon="user"/></i>
                        <input type="text" class="login__input" placeholder="Логин / Email">
                    </div>
                    <div class="login__field">
                        <i><fa icon="lock"/></i>
                        <input type="password" class="login__input" placeholder="Пароль">
                    </div>
                    <button class="button login__submit">
                        <span class="button__text">Войти</span>
                        <i><fa icon="chevron-right"/></i>
                    </button>
                </form>
                <div class="social-login">
                    <a href="#">Забыли пароль?</a>
                    <!--div class="social-icons">
                      <a href="#" class="social-login__icon fab fa-instagram"></a>
                      <a href="#" class="social-login__icon fab fa-facebook"></a>
                      <a href="#" class="social-login__icon fab fa-twitter"></a>
                    </div-->
                </div>
            </div>
            <div class="screen__background">
                <span class="screen__background__shape screen__background__shape4"></span>
                <span class="screen__background__shape screen__background__shape3"></span>
                <span class="screen__background__shape screen__background__shape2"></span>
                <span class="screen__background__shape screen__background__shape1"></span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Login"
}
</script>

<style scoped>
.container .screen .screen__content .login i{
    color: #d1d1d4;
}

.container .screen .screen__content .social-login a {
    color: #FFFFFF;
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .3s;
}

.container .screen .screen__content .social-login a:hover {
    background-size: 100% 2px;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.screen {
    background: linear-gradient(90deg, #344de7, #61a5e8);
    position: relative;
    height: 500px;
    width: 360px;
    box-shadow: 0px 0px 24px #9ac7e7;
}

.screen__content {
    z-index: 1;
    position: relative;
    height: 100%;
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
    height: 520px;
    width: 520px;
    background: #fff;
    top: -50px;
    right: 120px;
    border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
    height: 220px;
    width: 220px;
    background: #6d82d5;
    top: -172px;
    right: 0;
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

.login {
    width: 320px;
    padding: 156px 30px 30px;
}

.login__field {
    padding: 20px 0px;
    position: relative;
}

.login__icon {
    position: absolute;
    top: 30px;
    color: #4fe1dd;
}

.login__input {
    border: none;
    border-bottom: 2px solid #d1d1d4;
    padding: 10px 10px 10px 10px;
    font-weight: 700;
    width: 75%;
    text-decoration: none;
    background-image: linear-gradient(#d1d1d4, #4FE1DDFF);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .3s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
    outline: none;
    border-bottom-color: white;
    background-size: 100% 2px;
}

.login__submit {
    background: #fff;
    font-size: 14px;
    margin-top: 30px;
    padding: 16px 20px;
    border-radius: 26px;
    border: 1px solid #d4d3e8;
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
    align-items: center;
    width: 100%;
    color: rgba(3, 3, 3, 0.53);
    box-shadow: 0px 2px 2px rgba(58, 40, 225, 0.8);
    cursor: pointer;
    transition: 0.2s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
    border-color: #6a679e;
    outline: none;
}

.button__icon {
    font-size: 24px;
    margin-left: auto;
    color: #8dd5ef;
}

.social-login {
    position: absolute;
    height: 50px;
    width: 160px;
    text-align: center;
    bottom: 0px;
    right: 0px;
    color: #fff;
}

.social-icons {
    display: flex;
    align-items: center;
    justify-content: center;
}

.social-login__icon {
    padding: 20px 10px;
    color: #fff;
    text-decoration: none;
    text-shadow: 0px 0px 8px #4f48dc;
}

.social-login__icon:hover {
    transform: scale(1.5);
}

</style>