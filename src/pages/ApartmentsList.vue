  <script>
import axios from 'axios';
import ApartmentCard from '../components/ApartmentCard.vue';
import { store } from '../store';

export default {
    name: "ApartmentsList",
    data() {
        return {
            store,
            apartments: [],
            // query: "",
        };
    },
    created() {
        this.getApartments();
    },
    methods: {
        getApartments() {
            const options = {
                params: {
                    ...this.query && {}
                }
            };
            axios.get(`${this.store.apiBaseUrl}/api/apartments`).then(resp => {
                this.apartments = resp.data.results;
            });
        },
        goHome() {
            this.$router.push({ name: 'home' });
        }
    },
    components: { 
        ApartmentCard 
    }
};
</script>

<template>
    <main>
        <a @click.prevent="goHome()" class="btn btn-primary m-5" href="">Torna alla pagina home</a>

        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 g-md-5 align-items-stretch">
                <div class="col" v-for="apartment in apartments">
                    <router-link :to="{ name: 'single-apartment', params: { slug: apartment.slug } }" href="">
                        <ApartmentCard :apartment="apartment" :key="apartment.id" class="d-flex justify-content-center h-100"/>
                    </router-link>
                </div>
            </div>
        </div>
    </main>
</template>