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
    <div class="wrapper bg-dark">
        <div class="container text-center pb-4 ">
            <h3 class="pt-4 title">Appartamenti in primo piano</h3>
            <div class="row  g-5 card-container">
                <div v-for="apartment in sponsoredApartments" :key="apartment.id" class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card h-100">
                        <a :href="'/apartments/' + apartment.id"><img :src="`${this.$store.apiBaseUrl}/storage/${apartment.image}`" alt=""></a>
                        <div class="card-body">
                            <h5 class="card-title"><a :href="'/apartments/' + apartment.id">{{ apartment.title }}</a></h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">{{ apartment.full_address }}</p>
                        </div>
                    </div>
                </div>
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
            
        }
    }
    .card:hover{
        transform: scale(1.1);
    }
</style>