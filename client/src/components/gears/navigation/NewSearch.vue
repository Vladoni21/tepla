<template>
  <section class="search">
    <div class="loop"/>
    <div class="input">
      <input class="field" placeholder="Поиск" id="search"/>
    </div>
    <span class="clear" onclick="document.getElementById('search').value = ''"/>
  </section>
</template>

<script>
export default {
  name: "SearchBar",
  mounted() {
    const icon = document.querySelector(".loop");
    const search = document.querySelector(".search");
    icon.onclick = function(){
      search.classList.toggle('active')
    }
  }
}
</script>

<style scoped>
  .search {
    margin: 0 5px;
    position: relative;
    width: 360px; /* width: 56px; */
    height: 56px;
    background: #fff;
    border-radius: 60px;
    transition: 0.5s;
    overflow: hidden;
    box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.3);
  }
  .search.active {
    width: 360px;
  }

  .search .loop {
    position: absolute;
    top: 0;
    left: 0;
    width: 56px;
    height: inherit;
    background: #fff;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 5;
  }
  .search .loop::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border: 3px solid #48abe0;
  border-radius: 50%;
    transform: translate(-4px,-4px);
  }
  .search .loop::after {
  content: "";
  position: absolute;
  width: 3px;
  height: 12px;
  background: #48abe0;
  transform: translate(6px, 6px) rotate(315deg);
  }
  .search .input {
    position: relative;
    width: 300px;
    height: inherit;
    left: 60px;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .search .input .field {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: rgba(0,0,0,0);
    outline: none;
    font-size: 18px;
    padding: 10px 0;
  }
  .clear {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    right: 15px;
    background: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
  }
  .clear:before {
    position: absolute;
    content: "";
    width: 1px;
    height: 15px;
    background: #999;
    transform: rotate(45deg);
  }
  .clear:after {
    position: absolute;
    content: "";
    width: 1px;
    height: 15px;
    background: #999;
    transform: rotate(315deg);
  }

</style>