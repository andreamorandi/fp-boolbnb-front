<script>
import axios from 'axios';
export default {
    name: 'SponsorApartment',
    data() {
        return {
            sponsoredApartments: []
        }
    },
    mounted() {
        axios.get(this.$store.apiBaseUrl + '/api/apartments/sponsored')
        .then(response => {
            this.sponsoredApartments = response.data.apartments;
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>

<template>
    <div class="container-fluid text-center pb-4 bg-dark">
        <h3 class="pt-4 title">Appartamenti in primo piano</h3>
        <div class="row g-5 card-container">
        <div v-for="apartment in sponsoredApartments" :key="apartment.id" class="card col mx-2 pt-2">
            <img :src="`${this.$store.apiBaseUrl}/storage/${apartment.image}`" alt="">
            <a :href="'/apartments/' + apartment.id">{{ apartment.title }}</a>
            <p>{{ apartment.address }}</p>
        </div>
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
.title{
    color: #c9e265;
}
.card-container{
    width: 90%;
    margin: 0 auto;
}
    .card{
        background-color: #c9e265;

        a{
            color: black;
            font-size:x-large;
        }

        p{
            color: black;
            font-size: smaller;
        }

        img{
            height: 90%;
        }
    }
    .card:hover{
        transform: scale(1.1);
    }
</style>