<template>
    <div class="container">
        <div class="answer">
            <input class="effect-8" style="text-align: center;" type="text" placeholder="Placeholder Text">
            <span class="focus-border"><i></i></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "answer"
}
</script>

<style scoped>

.container {
    padding: 0;
    width: inherit;
    height: 66px;
    background-color: #FFFFFF;
    border-radius: 50px;
}

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

.answer {
    position: relative;
    width: 100%;
    height: 100%;
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
    border: 0 solid #ccc;
    padding: 7px;
    background: transparent;
    transition: 0.4s;
}

.effect-8 ~ .focus-border {
    border-radius: 50px;
}

.effect-8 ~ .focus-border:before,
.effect-8 ~ .focus-border:after {
    content: "";
    position: absolute;
    border-radius: 50px;
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
    border-radius: 50px;
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

</style>