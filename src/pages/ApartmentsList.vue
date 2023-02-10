<script>
// import axios from 'axios';
import { store } from '../store';

export default {
    name: 'ApartmentsList',
    data() {
        return {
            store,
            apartments: [],
            // query: "",
        }
    },
    created() {
        this.getApartments();
    },
    methods: {
        getApartments() {
            const options = {
                // params: {
                //     ...this.query && {  }
                // }
            }
            // axios.get(`${this.store.apiBaseUrl}/api/apartments`, options).then(resp => {
            //     this.apartments = resp.data.results.data;
            // });
        },
    },
};
</script>

<template>
    <main>
        Main list :D
        <div class="container">
            
        </div>
    </main>
</template>