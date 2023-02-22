<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header >
        <nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="#"><img id="logo" src="../assets/bebr.png" alt="logo BeBr" @click.prevent="this.$store.goHome()"></a>
      <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="http://127.0.0.1:8000/login">Accedi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://127.0.0.1:8000/register">Registrati</a>
            </li>
          </ul>
    </div>
  </div>
</nav>
    </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
header {
  width: 100%;
  height: $header-height;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  nav{
    width: 100%;
    height: $header-height;
    background-image: linear-gradient(to bottom, rgba(175, 175, 175, .5), rgba(255, 255, 255, 0));
    a{
      color: #c9e265;
      font-weight: bold;
    }
  }
}
</style>