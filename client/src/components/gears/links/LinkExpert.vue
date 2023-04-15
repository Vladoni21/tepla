<template>
    <div v-bind:class="item.class">
        <img v-bind:src="item.img" alt="">
        <h6>{{item.name}}</h6>
        <p>{{item.description}}</p>
    </div>
</template>

<script>
import expert from "../../img/expert.jpg";


export default {
    name: "LinkExpert",
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.top_experts {
    font-size: 1em;
    background: #95D7AE;
    padding-top: 30px;
    border-radius: 5px;
}
.top_experts h6 {
    font-size: 1.2em;
}
.top_experts img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30%;
    margin-bottom: 15px;
}

</style>