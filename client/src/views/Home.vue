<template>
  <div class="navbar">
    <Navbar></Navbar>
  </div>
  <div class="box">
    <form>
      <h2>Sign in</h2>
      <div class="inputBox">
        <input type="text" required="required">
        <span>Username</span>
        <i></i>
      </div>
      <div class="inputBox">
        <input type="password" required="required">
        <span>Password</span>
        <i></i>
      </div>
      <div class="links">
        <a href="#">Forgot Password</a>
        <a href="#">SignUp</a>
      </div>
      <input type="submit" value="Login">
    </form>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Home",
  components: {
    Navbar
  }
}
</script>

<style>
  {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  .box{
    position: relative;
    width: 380px;
    height: 420px;
    background: #7BAE7F;
    border-radius: 8px;
  }
  .box form{
    position: absolute;
    inset: 4px;
    background: #95D7AE;
    padding: 50px 40px;
    border-radius: 8px;
    z-index: 2;
    display: flex;
    flex-direction: column;
  }
  .box form h2{
    color: white;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.1em;
  }
  .box form .inputBox{
    position: relative;
    width: 300px;
    margin-top: 35px;
  }
  .box form .inputBox input{
    position: relative;
    width: 100%;
    padding: 20px 10px 10px;
    background: transparent;
    outline: none;
    border: none;
    box-shadow: none;
    color: #454851;
    font-size: 1em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    z-index: 10;
  }
  .box form .inputBox span{
    position: absolute;
    left: 0;
    padding: 20px 10px 10px;
    pointer-events: none;
    color: #f8f8f8;
    font-size: 1em;
    letter-spacing: 0.05em;
    transition: 0.5s;
  }
  .box form .inputBox input:valid ~ span,
  .box form .inputBox input:focus ~span
  {
    color: white;
    font-size: 0.75em;
    transform: translateY(-34px);
  }
  .box form .inputBox i{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: white;
    border-radius: 4px;
    overflow: hidden;
    transition: 0.5s;
    pointer-events: none;
  }
  .box form .inputBox input:valid ~ i,
  .box form .inputBox input:focus ~ i
  {
    height: 44px;
  }
  .box form .links{
    display: flex;
    justify-content: space-between;
  }
  .box form .links a{
    margin: 10px 0;
    font-size: 0.75em;
    color: white;
    text-display: none;
  }
  .box form .links a:hover,
  .box form .links a:nth-child(2)
  {
    color: white;
  }
  .box form input[type="submit"]{
    border: none;
    outline: none;
    padding: 9px 25px;
    background: white;
    cursor: pointer;
    font-size: 0.9em;
    border-radius: 4px;
    font-weight: 600;
    width: 100px;
    margin-top: 10px;
  }
  .box form input[type="submit"]:active
  {
    opacity: 0.8;
  }
</style>