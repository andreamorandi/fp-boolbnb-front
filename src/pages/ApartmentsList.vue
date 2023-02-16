  <script>
import ApartmentCard from '../components/ApartmentCard.vue';

export default {
    name: "ApartmentsList",
    components: { 
        ApartmentCard 
    },
    created() {
        if (!this.$store.apartments.length) {
            this.$store.fetchApartments('');
        }
    }
};
</script>

<template>
    <main>
        <a @click.prevent="this.$store.goHome()" class="btn btn-primary m-5" href="">Torna alla pagina home</a>

        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 g-md-5 align-items-stretch">
                <div class="col" v-for="apartment in this.$store.apartments">
                    <router-link :to="{ name: 'single-apartment', params: { slug: apartment.slug } }" href="">
                        <ApartmentCard :apartment="apartment" :key="apartment.id" class="d-flex justify-content-center h-100"/>
                    </router-link>
                </div>
            </div>
        </div>
    </main>
</template>