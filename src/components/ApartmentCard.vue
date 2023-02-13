<script>
import { store } from '../store';

export default {
    name: 'ApartmentCard',
    data() {
        return {
            store,
        };
    },
    props: {
        apartment: Object,
    }
}
</script>

<template>
    <div class="card text-center">
            <img :src="`${store.apiBaseUrl}/storage/${apartment.image}`" alt="" v-if="apartment.image">
            <h1>{{  apartment.title  }}</h1>
            <h6>Numero di camere: {{ apartment.room_number }}</h6>
            <h5>Indirizzo: {{ apartment.full_address }}</h5>
    </div>
</template>

<style lang="scss" scoped>
    .card {
        background-color: #c9e265;
        color: navy;
        &.a {

            text-decoration: none;
        }
    }
</style>