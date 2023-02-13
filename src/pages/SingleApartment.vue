<script>
import axios from 'axios';
import { store } from "../store";
export default {
    name: "SingleApartment",
    data() {
        return {
            store,
            apartment: {}
        }
    },
    created() {
        const slug = this.$route.params.slug;
        axios.get(`${this.store.apiBaseUrl}/api/apartments/${slug}`).then(resp => {
            if (resp.data.success) {
                console.log(resp);
                this.apartment = resp.data.apartment;
            } else {
                this.$router.push({ name: "not-found" });
            }
        });
    },
    computed: {
        // type() {
        //     return this.project.type ? this.project.type.name : 'Nessun tipo';
        // }
    },
    methods: {
        goList() {
            this.$router.push({ name: 'apartments' });
        }
    }
}
</script>

<template>
    <main>
        <a @click.prevent="goList()" class="btn btn-primary m-5" href="">Torna alla lista appartamenti</a>
        
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col" class="text-uppercase">{{ apartment.title }}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" class="fs-4 ms_text_navy">{{ apartment.full_address }}</th>  
                        </tr>
                        <tr>
                          <th scope="row">Numero di stanze: {{ apartment.room_number }}</th>  
                        </tr>
                        <tr>
                          <th scope="row">Numero di letti: {{ apartment.bed_number }}</th>    
                        </tr>
                        <tr>
                          <th scope="row">Numero di bagni: {{  apartment.bathroom_number }}</th>
                        </tr>
                        <tr>
                          <th scope="row">Superficie in metri quadri: {{ apartment.surface_sqm }}</th>
                        </tr>
                      </tbody>
                    </table>              
                </div>
                <div class="col-sm">
                    <img :src="`${store.apiBaseUrl}/storage/${apartment.image}`" alt="`Immagine di ${apartment.image}`" v-if="apartment.image">
                    <div v-else class="text-center mt-4">Nessuna immagine</div>      
                </div>
            </div>
        </div>        
    </main>
</template>
<!-- <div>
</div> -->

<style lang="scss">
    img{
        width: 100%;
    }
    main{
        background-color:#F3F5F6;
    }
    .text-uppercase{
        font-size: 2.5rem;
        color:#c9e265 ;
    }
    .ms_text_navy {
        color: navy;
    }

</style> 