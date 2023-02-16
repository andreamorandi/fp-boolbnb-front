<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'AppBanner',
    data() {
        return {
            store,
            full_address: '',
            apartments: [],
        }
    },
    methods: {
        goList() {
            this.$router.push({ name: "apartments" });
        },
        search() {
            const options = {
                params: {
                    full_address: this.full_address
                }
            };
            axios.get(`${this.store.apiBaseUrl}/api/apartments`, options).then(resp => {
                this.apartments = resp.data.apartmets;
                console.log(resp.data.apartments);
            }).catch(error => {
        console.log(error);
    });
        },
    },
}
</script>

<template>
        <div class="banner">
            <div class="container-fluid">
                <div class="search-form">
                    <div class="form-appartament">
                        <form @submit.prevent="submitForm">
                            <div>
                                <label for="search">Cerca:</label>
                                <input type="text" id="search" v-model="full_address" required>
                            </div>
                            <button type="button" @click="this.search" @click.prevent="goList()">Cerca</button>
                        </form>



                        <!-- <label class="d-flex flex-sm-row flex-column" role="search">
                            <input class="form-control input-search mb-2" type="search" placeholder="Quale città vorresti visitare" aria-label="Cerca appartamenti" v-model="this.full_address">
                            <button id="btn-color" class="btn search-btn ms-2 mb-2" type="submit">Cerca</button>
                        </label> -->
                      <a @click.prevent="goList()" class="btn btn-success mt-4" href="">Mi sento fortunato</a>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss">
.banner{
    width: 100%;
    background-image: url(../assets/banner3.jpeg);
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
    

    .search-form{
        margin: 0 auto;
        width: 70%;
        padding: 200px 0 200px 0;
        text-align: center;

        .form-appartament{
            padding: 80px;
            border-radius: 20px;
            // backdrop-filter: blur(3px);
            @media (min-width:1270px) {
            width: 60%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;

        }
    }
}
#btn-color{
 background-color: #c9e265;
 border-color: #c9e265;
 color: #383e42;
 font-weight:bolder;
    }
}
</style>