  <script>
import ApartmentCard from '../components/ApartmentCard.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';

export default {
    name: "ApartmentsList",
    components: { 
        ApartmentCard,
        LoadingSpinner
    },
    created() {
        if (!this.$store.apartments.length) {
            this.$store.fetchApartments('');
        }
    }
};
</script>

<template>
    <main class="py-5">

        <!-- <div class="container">
            <LoadingSpinner size="large" v-if="this.$store.isLoading"/>
            <div v-else>
                <div v-if="this.$store.apartments.length" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 g-md-5 align-items-stretch">
                    <div class="col" v-for="apartment in this.$store.apartments">
                        <router-link :to="{ name: 'single-apartment', params: { slug: apartment.slug } }" href="">
                            <ApartmentCard :apartment="apartment" :key="apartment.id" class="d-flex justify-content-center h-100"/>
                        </router-link>
                    </div>
                </div>
                <div v-else>
                    <h1 class="text-center pb-5">Nessun appartamento corrisponde alla ricerca</h1>
                </div>
            </div>
        </div> -->
        <hr>
        <div class="container d-flex">
            <div class="apartment-img">
                <img src="../assets/appartament/appartamento1.jpg" alt="">
            </div>
            <div class="text-side">
                <h4>Prova</h4>
                <hr>
                <div class="details">
                    <p>Letti:4 - camere da letto:3 - bagni:1 - WIFI- Posto Macchina</p>
                </div>
            </div>
        </div>
        <hr>
    </main>
</template>

<style lang="scss">
.apartment-img{
    width: 30%;
    margin-right: 10px;
    img{
        border-radius: 5px;

    }
}
.text-side{
    margin: 5px 0 5px 0;
    hr{
        width: 20%;
    }
    .details{
        width: 50%;
        font-size: small;
        color: grey;
    }
}

hr{
    border: 1px solid #c9e265;
}
</style>