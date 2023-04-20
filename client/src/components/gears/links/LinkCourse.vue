<template>
    <div v-bind:class="item.class">
        <fa v-bind:icon="item.icon"/>
        <div>
            <h6>{{item.title}}</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: "LinkCourse",
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.top_courses {
    font-size: 2.3rem;
    border-radius: 5px;
    text-align: center;
    background: linear-gradient(71deg, #62B6CB, #45c5c5, #62B6CB);
    box-shadow: 0px 0px 24px #4cbbb2;
    height: 100%;
}
</style>