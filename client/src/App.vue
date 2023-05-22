<template>
    <router-view/>
</template>

<script>
import Sidebar from './components/bars/Sidebar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { Sidebar },
});

</script>

