<template>
    <section class="container">
        <input aria-describedby="search-addon" aria-label="Search" class="input" placeholder="..."
               type="search" />
        <a class="button" href="#">Ответить</a>
    </section>
</template>

<script>
export default {
    name: 'SearchBar',
};
</script>

<style scoped>

.container {
    display: flex;
    padding: 0;
    box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    justify-content: space-between;
    overflow: hidden;
    width: 300px;
}

.input {
    outline: none;
    border: rgba(0, 0, 0, 0);
    width: 100%;
    text-align: start;
    padding-left: 30px;
    font-size: 20px;
    border-bottom: 3px solid rgba(0, 0, 0, 0);
    transition: 0.5s;
}

.input:hover {
    border-bottom: 3px solid #5FA8D3;
}

.button {
    padding: 15px 25px;
    background-color: rgba(96, 160, 210, 0.1);
    margin: 0;
}
</style>