<script>
export default {
    name: 'AppBanner',
    data() {
        return {
            full_address: '',
        }
    },
    methods: {
        search() {
            this.$store.fetchApartments(this.full_address).then(this.$store.goList());
        },
        lucky() {
            this.full_address = '';
            this.search();
        }
    }
}
</script>

<template>
        <div class="banner">
            <div class="container-fluid">
                <div class="search-form">
                    <div class="apartments-form d-flex flex-column align-items-center">
                        <div>
                            <label for="search">Cerca:</label>
                            <input type="text" id="search" v-model="full_address" required>
                        </div>
                        <button type="button" @click="this.search" class="btn btn-primary mt-1">Cerca</button>
                        <button @click="this.lucky" class="btn btn-success mt-4" href="">Mi sento fortunato</button>
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