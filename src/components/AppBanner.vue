<script>
export default {
    name: 'AppBanner'
}
</script>

<template>
 <div class="banner">
    <div class="search-form">
        <form class="d-flex" role="search">
        <input class="form-control search-tab" type="search" placeholder="Cerca appartamenti" aria-label="Cerca appartamenti">
        <button class="btn btn-primary search-btn ms-2" type="submit">Cerca</button>
      </form>
      <a @click.prevent="goList()" class="btn btn-success mt-4" href="">Vai alla lista appartamenti</a>
    </div>
 </div>
</template>

<style lang="scss">
.banner{
    width: 100%;
    background-color: blue;

    .search-form{
        margin: 0 auto;
        width: 33%;
        padding: 200px 0 200px 0;
        text-align: center;

    }
}
</style>