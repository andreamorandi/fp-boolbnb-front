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
    },
    methods: {
        search() {
            this.$store.fetchApartments();
        },
    }
};
</script>

<template>
    <main class="bg-color">

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
        <LoadingSpinner size="large" v-if="this.$store.isLoading"/>
        <div v-else class="wrapper mt-1" v-for="apartment in this.$store.apartments">
            <router-link :to="{ name: 'single-apartment', params: { slug: apartment.slug } }" href=""> 
            <div class="container d-flex">
                    <div class="apartment-img">
                        <img src="../assets/appartament/appartamento1.jpg" alt="">
                    </div>
                    <div class="text-side">
                        <h2>{{apartment.title}}</h2>
                        <hr>
                        <div class="details text-white">
                            <p>Stanze <i class="fa-solid fa-house"></i>: <strong>{{ apartment.room_number}}</strong> <br> Letti <i class="fa-solid fa-bed"></i>: <strong>{{ apartment.bed_number }}</strong> <br> bagni <i class="fa-solid fa-toilet"></i>: <strong>{{ apartment.bathroom_number }}</strong></p>
                            <p>Indirizzo: {{ apartment.full_address }}</p>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="pagination-bg d-flex justify-content-center pt-4">
            <nav class="navigation d-flex justify-content-between">
                    <div>
                        Pagina {{ this.$store.currentPage }} di {{ this.$store.lastPage }}
                    </div>
                    <div>
                        <a class="btn btn-success me-2" :class="this.$store.currentPage === 1 ? 'disabled' : ''" href=""
                            @click.prevent="(this.$store.page = this.$store.currentPage - 1)">Indietro</a>
                        <a class="btn btn-success" :class="{ 'disabled': this.$store.currentPage === this.$store.lastPage }" href=""
                            @click.prevent="(this.$store.page = this.$store.currentPage + 1)">Avanti</a>
                    </div>
                </nav>
        </div> 
    </main>
</template>

<style lang="scss">

.pagination-bg{
    background-color: rgb(24, 24, 24)!important;
}
.bg-color{
    background-color: #c9e265;
}
.wrapper{
    background-color: rgb(24, 24, 24);
    padding: 10px 0 10px 0;

}
.contianer{
    border-radius:15px ;
}
.wrapper:hover{
    background-color: rgb(53, 53, 53);
}
.apartment-img{
    width: 60%;
    margin-right: 10px;

    img{
        border-radius: 15px;

    }
}
.text-side{
    margin: 5px 0 5px 0;
    width: 40%;
    hr{
        // width: 60%;
    }
    .details{
        font-size: large;
        color: white;
    }
}

hr{
    border: 1px solid #c9e265;
}

h2{
        color: #c9e265;
    }
</style>