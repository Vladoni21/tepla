<template>
  <div class="navbar">
    <nav class="navbar fixed-top navbar-light bg-light">
      <b-navbar>
        <div class="logo">
          <b-navbar-brand href="#">
            <img
                alt=""
                class="teapla-logo-1"
                src="https://static.overlay-tech.com/assets/d3d73cb5-9ecc-4dcf-a760-038a70420f7f.png"
            />
          </b-navbar-brand>
        </div>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <button type="submit" class="login_button">Login</button>
            <button type="submit" class="signup_button">SignUp</button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.navbar {
  min-width: 100%;
  padding: 0;
  background-color: #7BAE7F;
  align-items: center;
  font-family: 'Open Sans', sans-serif;

}

.logo {
  margin-left: 5px;
  border-radius: 5px;
  min-width: auto;
}

.login_button {
  background-color: #73956F;
  border: none;
  border-radius: 10px;
  padding-right: 5px;
  margin-right: 5px;
  height: 50px;
  width: 70px;
  font-family: 'Open Sans', sans-serif;
  color: white;
}

.login_button:hover {
  background-color: #95D7AE;
  transition: 0.2s;
}

.login_button:active {
  background-color: #73956F;
}

.signup_button {
  background-color: #73956F;
  border: none;
  border-radius: 10px;
  padding-right: 5px;
  margin-right: 5px;
  height: 50px;
  width: 70px;
  font-family: 'Open Sans', sans-serif;
  color: white;
}

.signup_button:hover {
  background-color: #95D7AE;
  transition: 0.2s;
}

.signup_button:active {
  background-color: #73956F;
}
</style>