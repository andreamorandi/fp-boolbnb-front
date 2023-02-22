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
            <div class="row  g-5 card-container bg-dark">
                <div v-for="apartment in sponsoredApartments" :key="apartment.id" class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="card h-100 bg-dark">
                        <div class="test-image">
                            <router-link :to="{ name: 'single-apartment', params: { slug: apartment.slug } }" href=""><img :src="`${this.$store.apiBaseUrl}/storage/${apartment.image}`" alt=""></router-link>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><router-link :to="{ name: 'single-apartment', params: { slug: apartment.slug } }" href="">{{ apartment.title }}</router-link></h5>
                            <p class="card-text ">{{ apartment.full_address }}</p>
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
        border-color: #c9e265;
        overflow: hidden;
        transition: .5s;
        
        a{
            color: #c9e265;
            font-size:x-large;
        }

        p{
            color: white;
            font-size: smaller;
        }

        .test-image{
            height: 200px;
            overflow: hidden;
            img{
                height: 100%;
                object-fit: cover;
            };
        }
    }
    .card:hover{
        transform: scale(1.1);
    }
    .card-body{

        
    }
</style>