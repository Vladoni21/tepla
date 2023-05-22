<template>
    <tbody>
    <TItem v-for="i of arr" v-bind:item="i" />
    </tbody>
</template>

<script>
import TItem from './TItem.vue';

export default {
    name: 'TBody', components: { TItem }, props: ['arr'],
};
</script>

<style scoped>
tbody {
    max-height: 370px;
}

tbody tr:nth-child(even) {
    background: #f3f3f3;
}

tbody td {
    text-align: left;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    padding: 10px 15px;
    font-size: 14px;
    vertical-align: top;
}
</style>