<script>
export default {
    name: 'AppBanner',
    methods: {
        goList() {
            this.$router.push({ name: "apartments" });
        }
    },
}
</script>

<template>
        <div class="banner">
            <div class="container-fluid">
                <div class="search-form">
                    <div class="form-appartament">
                        <form class="d-flex flex-sm-row flex-column" role="search">
                        <input class="form-control search-tab mb-2" type="search" placeholder="Quale città vorresti visitare" aria-label="Cerca appartamenti">
                        <button id="btn-color" class="btn search-btn ms-2 mb-2" type="submit">Cerca</button>
                      </form>
                      <a @click.prevent="goList()" class="btn btn-success mt-4" href="">Mi sento fortunato</a>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss">
.banner{
    width: 100%;
    background-image: url(../assets/banner3.jpeg);
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
    

    .search-form{
        margin: 0 auto;
        width: 70%;
        padding: 200px 0 200px 0;
        text-align: center;

        .form-appartament{
            padding: 80px;
            border-radius: 20px;
            // backdrop-filter: blur(3px);
            @media (min-width:1270px) {
            width: 60%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;

        }
    }
}
#btn-color{
 background-color: #c9e265;
 border-color: #c9e265;
 color: #383e42;
 font-weight:bolder;
    }
}
</style>