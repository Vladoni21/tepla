<template>
    <section>
        <form>
            <div class="row">
                <h4>Ваш Аккаунт</h4>
                <div class="input-group input-group-icon">
                    <input placeholder="Логин" type="text" />
                    <div class="input-icon"><i class="material-icons">person</i></div>
                </div>
                <div class="input-group input-group-icon">
                    <input placeholder="Почта" type="email" />
                    <div class="input-icon"><i class="material-icons">mail</i></div>
                </div>
                <div class="input-group input-group-icon">
                    <input placeholder="Пароль" type="password" />
                    <div class="input-icon"><i class="material-icons">lock</i></div>
                </div>
            </div>
            <div class="row">
                <div class="col-half">
                    <h4>Дата рождения</h4>
                    <div class="input-group">
                        <div class="col-third">
                            <input placeholder="ДД" type="text" />
                        </div>
                        <div class="col-third">
                            <input placeholder="ММ" type="text" />
                        </div>
                        <div class="col-third">
                            <input placeholder="ГГГГ" type="text" />
                        </div>
                    </div>
                </div>
                <div class="col-half">
                    <h4>Пол</h4>
                    <div class="input-group">
                        <input id="gender-male" name="gender" type="radio" value="male" />
                        <label for="gender-male">Мужской</label>
                        <input id="gender-female" name="gender" type="radio" value="female" />
                        <label for="gender-female">Женский</label>
                    </div>
                </div>
            </div>
            <div class="row panel">
                <Button color="grey" text="Редактировать" />
                <Button color="blue" text="Подтвердить" />
            </div>
        </form>
    </section>
</template>

<script>
import Button from './button.vue';

export default {
    name: 'Profile_Account', components: { Button },
};
</script>

<style scoped>

.panel {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

h4 {
    padding-top: 0.2em;
    color: rgb(59, 130, 246);
}

input,
input[type="radio"] + label,
input[type="checkbox"] + label:before,
select option,
select {
    width: 100%;
    padding: 1em;
    line-height: 1.4;
    background-color: #f9f9f9;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    -webkit-transition: 0.35s ease-in-out;
    -moz-transition: 0.35s ease-in-out;
    -o-transition: 0.35s ease-in-out;
    transition: 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
}

input:focus {
    outline: 0;
    border-color: rgb(59, 130, 246);
}

input:focus + .input-icon:after + .input-icon i {
    border-right-color: rgb(59, 130, 246);
}

input[type="radio"] {
    display: none;
}

input[type="radio"] + label,
select {
    display: inline-block;
    width: 50%;
    text-align: center;
    float: left;
    border-radius: 0;
}

input[type="radio"] + label:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}

input[type="radio"] + label:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

input[type="radio"] + label i {
    padding-right: 0.4em;
}

input[type="radio"]:checked + label,
input:checked + label:before,
select:focus,
select:active {
    background-color: rgb(59, 130, 246);
    color: #fff;
    border-color: rgb(23, 93, 208);
}

input[type="checkbox"] {
    display: none;
}

input[type="checkbox"] + label {
    position: relative;
    display: block;
    padding-left: 1.6em;
}

input[type="checkbox"] + label:before {
    position: absolute;
    top: 0.2em;
    left: 0;
    display: block;
    width: 1em;
    height: 1em;
    padding: 0;
    content: "";
}

input[type="checkbox"] + label:after {
    position: absolute;
    top: 0.45em;
    left: 0.2em;
    font-size: 0.8em;
    color: #fff;
    opacity: 0;
    content: "\f00c";
}

input:checked + label:after {
    opacity: 1;
}

select {
    height: 3.4em;
    line-height: 2;
}

select:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}

select:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

select:focus,
select:active {
    outline: 0;
}

select option {
    background-color: #f0a500;
    color: #fff;
}

.input-group {
    margin-bottom: 1em;
    zoom: 1;
}

.input-group:before,
.input-group:after {
    content: "";
    display: table;
}

.input-group:after {
    clear: both;
}

.input-group-icon {
    position: relative;
}

.input-group-icon input {
    padding-left: 4.4em;
}

.input-group-icon .input-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 3.4em;
    height: 3.4em;
    line-height: 3.4em;
    text-align: center;
    pointer-events: none;

    display: flex;
    justify-content: center;
    align-items: center;
}

.input-group-icon .input-icon:after {
    position: absolute;
    top: 0.6em;
    bottom: 0.6em;
    left: 3.4em;
    display: block;
    border-right: 1px solid #e5e5e5;
    content: "";
    -webkit-transition: 0.35s ease-in-out;
    -moz-transition: 0.35s ease-in-out;
    -o-transition: 0.35s ease-in-out;
    transition: 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
}

.input-group-icon .input-icon i {
    -webkit-transition: 0.35s ease-in-out;
    -moz-transition: 0.35s ease-in-out;
    -o-transition: 0.35s ease-in-out;
    transition: 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
}

.container {
    max-width: 38em;
    padding: 1em 3em 2em 3em;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 4.2px;
    box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.2);
}

.row {
    zoom: 1;
}

.row:before,
.row:after {
    content: "";
    display: table;
}

.row:after {
    clear: both;
}

.col-half {
    padding-right: 10px;
    float: left;
    width: 50%;
}

.col-half:last-of-type {
    padding-right: 0;
}

.col-third {
    padding-right: 10px;
    float: left;
    width: 33.33333333%;
}

.col-third:last-of-type {
    padding-right: 0;
}

.material-icons {
    font-size: 1.5rem;
    color: #7d7e85;
}

.input-group-icon > input:focus ~ .input-icon .material-icons {
    font-size: 1.5rem;
    color: rgb(23, 93, 208);
}

</style>