<template>
    <section>
        <input type="search" class="input" placeholder="Search" aria-label="Search"
               aria-describedby="search-addon"/>
              <a href="#" class="button">
                  <svg class="icon icon--2x">
                      <fa icon="search"/>
                  </svg>
              </a>
    </section>
</template>

<script>
export default {
    name: "SearchBar"
}
</script>

<style scoped>

section {
    display: flex;
    box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    justify-content: space-between;
    overflow: hidden;
    width: 626px;
}
.icon {
    block-size: 1em;
    display: inline-block;
    fill: currentcolor;
    inline-size: 1em;
    vertical-align: middle;
}

.icon--2x {
    font-size: 2rem;
}
.input {
    outline:none;
    border: rgba(0,0,0,0);
    width: 100%;
    text-align: start;
    padding-left: 30px;
    font-size: 20px;
    border-bottom: 3px solid rgba(0,0,0,0);
}
.input:hover {
    border-bottom: 3px solid #5FA8D3;
}
.button {
    padding: 20px;
    background-color: rgba(96,160,210,0.1);
}
</style>