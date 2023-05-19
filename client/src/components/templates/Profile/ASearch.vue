<template>
  <section>
      <article>
        <form class="form">
          <i class="fa fa-search"></i>
          <input type="text" placeholder="Search anything...">
          <span class="left-pan"><i class="fa fa-microphone"></i></span>
        </form>
    </article>
  </section>
</template>

<script>
export default {
  name: "ASearch"
}
</script>

<style scoped>

section {
  align-items: center !important;
   justify-content: center !important;
   display: flex !important;
   flex-wrap: wrap;
   margin-right: -15px;
   margin-left: -15px;
}
section > article {
  flex: 0 0 50%;
  max-width: 50%;
}

form{
  position: relative;
}
form .fa-search{
  position: absolute;
  top:20px;
  left: 20px;
  color: #9ca3af;

}
form span{
  position: absolute;
  right: 17px;
  top: 13px;
  padding: 2px;
  border-left: 1px solid #d1d5db;

}
form input {
  width: 100%;
  height: 55px;
  text-indent: 33px;
  border-radius: 10px;
  outline: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
form input:focus{
  box-shadow: none;
  border:none;
}

.left-pan{
  padding-left: 7px;
}
.left-pan i{
  padding-left: 10px;
}

</style>