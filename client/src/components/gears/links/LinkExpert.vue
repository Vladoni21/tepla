<template>
    <div v-bind:class="item.class">
        <img alt="" v-bind:src="item.img">
        <h6>{{ item.name }}</h6>
        <p>{{ item.description }}</p>
    </div>
</template>

<script>


export default {
    name: 'LinkExpert', props: {
        item: {
            type: Object, required: true,
        },
    },
};
</script>

<style scoped>
.top_experts {
    font-size: 1em;
    background: linear-gradient(71deg, #62B6CB, #45c5c5, #62B6CB);
    box-shadow: 0px 0px 24px #4cbbb2;
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