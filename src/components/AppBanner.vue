<script>
import { createSearchBox } from '../assets/autocomplete';

export default {
    name: 'AppBanner',
    data() {
        return {
            advancedSearch: false,
        }
    },
    created() {
        this.getServices();
        this.$store.resetSearch();
    },
    mounted() {
        const addressBox = document.getElementById('address-box');
        createSearchBox(addressBox);
    },
    methods: {
        search() {
            this.$store.resetPage();
            this.$store.fetchApartments().then(this.$store.goList());
        },
        lucky() {
            this.$store.resetPage();
            this.$store.resetSearch();
            this.search();
        },
        getServices() {
            this.$store.fetchServices();
        }
    }
}
</script>

<template>
        <div class="banner">
            <div class="container-fluid">
                <div class="search-form">
                    <div class="apartments-form d-flex flex-column align-items-center">
                        <h2><strong>Ogni viaggio è un'avventura che ti porta a scoprire luoghi meravigliosi e incontrare persone incredibili</strong></h2>
                    <div class="w-100 d-flex justify-content-center">
                        
                        <div id="address-box"></div>
                    </div>
                    <button type="button" @click="this.search" class="btn btn-primary" v-show="!advancedSearch">Cerca</button>
                    <button @click="this.lucky" class="btn btn-success mt-4" v-show="!advancedSearch">Mi sento fortunato</button>
                    <button type="button" class="btn btn-secondary mt-4" @click="advancedSearch = !advancedSearch" v-show="!advancedSearch">Ricerca avanzata</button>
                    <div class="advanced-search" v-show="advancedSearch">
                        <button type="button" class="btn btn-secondary mt-4" @click="advancedSearch = !advancedSearch">Torna alla ricerca base</button>
                        <div class="form-group d-flex justify-content-center" v-if="this.$store.address">
                            <label for="range" class="form-label">
                                <h5>Distanza</h5>
                            </label>
                            <div class="ms-4">
                                <p>{{ Math.floor(this.$store.range) }} Km</p>
                                <input type="range" class="form-range" min="1" max="30" id="range" step="0.1" v-model="this.$store.range" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="form-label">
                                <h5>Numero di stanze</h5>
                            </label>
                            <input class="form-control w-25" type="number" min="1" v-model="this.$store.roomNumber" />
                        </div>

                        <div class="form-group">
                            <label class="form-label">
                                <h5>Numero di letti</h5>
                            </label>
                            <input class="form-control w-25" type="number" min="1" v-model="this.$store.bedNumber" />
                        </div>

                        <div class="form-group mb-2">
                            <label class="form-label">
                                <h5>Servizi</h5>
                            </label>
                            <div>
                                <div class="form-check" v-for="service in this.$store.services">
                                    <div class="row">
                                        <div class="col-3">
                                            <input type="checkbox" v-model="this.$store.selectedServices" :value="service.id" class="form-check-input" :id="`service-${service.id}`" />
                                        </div>
                                        <div class="col-9 text-start">
                                            <label class="form-check-label nowrap" :for="`service-${service.id}`">{{ service.name }}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type="button" @click="this.search" class="btn btn-primary mt-1">Cerca</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.banner {
    width: 100%;
    background-image: url(../assets/Slide-Baros-Maldives1920x1000.jpg);
    background-repeat: no-repeat;
    background-position:center 20%;
    background-size: cover;

    .search-form {
    margin: 0 auto;
    width: 70%;
    padding: 200px 0 100px 0;
    text-align: center;

        .apartments-form {
            padding: 80px;
            border-radius: 20px;
            backdrop-filter: blur(1.5px);
           
            @media (min-width:1270px) {
                width: 60%;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
            }
            h2{
                color: #c9e265;
            }
            .form-group {
                margin-top: 20px;

                label {
                    font-size: 1.2rem;
                }

                p {
                    font-size: 1.2rem;
                    margin-bottom: 0;
                }
            }

            .btn {
                background-color: #212529;
                border-color: #212529;
                font-weight: bold;
                color: #c9e265;
            }

            .btn-secondary {
                background-color: #212529;
                border-color: #212529;
                font-weight: bold;
                color: #c9e265;
            }

            .btn-success {
                background-color: #c9e265;
                border-color: #c9e265;
                font-weight: bold;
                color: #212529;
            }
        }
    }

    .advanced-search {
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 20px;
        padding: 20px;

        .form-group {
            display: flex;
            align-items: center;
            
            label {
                margin-bottom: 0;
            }

            h5 {
                margin-bottom: 0;
            }

            input {
            margin-left: 10px;
            }
        }

        .btn-primary {
            margin-top: 20px;
            background-color: #2980b9;
            border-color: #2980b9;
            font-weight: bold;
        }
    }
    #address-box {
        width: 60%;
        margin-bottom: 20px;
        transition: .5s;
        &:focus-within {
            width: 100%;
        }
    }
}

</style>