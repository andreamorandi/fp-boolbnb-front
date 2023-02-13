<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img id="logo" src="../assets/bebr.png" alt="logo BeBr"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
        <form class="d-flex" role="search">
        <input class="form-control search-tab" type="search" placeholder="Cerca appartamenti" aria-label="Cerca appartamenti">
        <button class="btn btn-primary search-btn ms-2" type="submit">Cerca</button>
      </form>
    </div>
      <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Accedi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Registrati</a>
            </li>
          </ul>
    </div>
  </div>
</nav>
    </header>
</template>

<style lang="scss">

</style>