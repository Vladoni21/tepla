<template>
    <div class="mahi_holder">
        <div class="container">
            <div class="row bg_1">
                <div class="col-3">
                    <input class="effect-8" type="text" placeholder="Placeholder Text">
                    <span class="focus-border"><i></i></span>
                </div>
            </div>
            <div class="row bg_2">
                <div class="col-3">
                    <input class="effect-15" type="text" placeholder="Placeholder Text">
                    <span class="focus-bg"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "answer"
}
</script>

<style scoped>


:focus {
    outline: none;
}

/* necessary to give position: relative to parent. */
input[type="text"] {
    font: 15px/24px 'Muli', sans-serif;
    color: #333;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
}

:focus {
    outline: none;
}

.col-3 {
    float: left;
    width: 27.33%;
    margin: 40px 3%;
    position: relative;
}

/* necessary to give position: relative to parent. */
input[type="text"] {
    font: 15px/24px "Lato", Arial, sans-serif;
    color: #333;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
}

.effect-8 {
    border: 1px solid #ccc;
    padding: 7px 14px 9px;
    transition: 0.4s;
}

.effect-8 ~ .focus-border:before,
.effect-8 ~ .focus-border:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #4caf50;
    transition: 0.3s;
}

.effect-8 ~ .focus-border:after {
    top: auto;
    bottom: 0;
    left: auto;
    right: 0;
}

.effect-8 ~ .focus-border i:before,
.effect-8 ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #4caf50;
    transition: 0.4s;
}

.effect-8 ~ .focus-border i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
}

.effect-8:focus ~ .focus-border:before,
.effect-8:focus ~ .focus-border:after {
    width: 100%;
    transition: 0.3s;
}

.effect-8:focus ~ .focus-border i:before,
.effect-8:focus ~ .focus-border i:after {
    height: 100%;
    transition: 0.4s;
}

.effect-15 {
    border: 0;
    padding: 7px 15px;
    border: 1px solid #ccc;
    position: relative;
    background: transparent;
}

.effect-15 ~ .focus-bg:before,
.effect-15 ~ .focus-bg:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0;
    height: 0;
    background-color: #ededed;
    transition: 0.3s;
    z-index: -1;
}

.effect-15:focus ~ .focus-bg:before {
    transition: 0.3s;
    width: 50%;
    left: 0;
    top: 0;
    height: 100%;
}

.effect-15 ~ .focus-bg:after {
    left: auto;
    right: 50%;
    top: auto;
    bottom: 50%;
}

.effect-15:focus ~ .focus-bg:after {
    transition: 0.3s;
    width: 50%;
    height: 100%;
    bottom: 0;
    right: 0;
}

</style>