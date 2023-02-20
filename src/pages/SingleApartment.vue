<script>
import axios from 'axios';
import { store } from "../store";
export default {
    name: "SingleApartment",
    data() {
        return {
            store,
            apartment: {},
            name: '',
            lastname: '',
            email: '',
            message: '',
            loading: null,
            success: false,
            apartment_id: null,
            errors: {}
        }
    },
    created() {
        const slug = this.$route.params.slug;
        axios.get(`${this.store.apiBaseUrl}/api/apartments/${slug}`).then(resp => {
            if (resp.data.success) {
                this.apartment = resp.data.apartment;
                console.log(resp.data.apartment);
                this.addView();
                this.tomtomCall();
            } else {
                this.$router.push({ name: "not-found" });
            }
        });

    },
    computed: {
        services() {
            return this.apartment.services ? this.apartement.services.type.name : "Tipologia non specificata";
        }
    },
    methods: {
        goList() {
            this.$router.push({ name: 'apartments' });
        },
        sendForm() {
            const data = {
                lead_first_name: this.firstname,
                lead_last_name: this.lastname,
                lead_email: this.email,
                text: this.message,
                apartment_id: this.apartment.id
            };
            this.loading = true;
            axios.post(`${this.store.apiBaseUrl}/api/messages/`, data).then(resp => {
                this.success = resp.data.success;
                if (this.success) {
                    this.loading = false;
                    this.firstname = '';
                    this.lastname = '';
                    this.email = '';
                    this.message = '';
                } else {
                    console.log('ERRORE');
                    this.errors = resp.data.errors
                }
            });
        },
        addView() {
            if (this.apartment.id) {
                const data = {
                    date: new Date().toISOString().slice(0, 19).replace('T', ' '),
                    apartment_id: this.apartment.id,
                };
                axios.post(`${this.store.apiBaseUrl}/api/views/`, data).then(resp => {
                    const successView = resp.data.success;
                    if (successView) {
                        console.log("SUCCESSs-VIEW", successView);
                    } else {
                        this.errors = resp.data.errors
                        console.log(errors);
                    }
                });
            }
        },
        tomtomCall() {
            const apiKey = "icqraNKAcD0A91G90JmWxaTl0MOJPR3a"
            const address = encodeURIComponent(this.apartment.full_address);

            axios.get(`https://api.tomtom.com/search/2/geocode/${address}.json?key=${apiKey}`).then(
                response => {
                    console.log("il respose", response);
                    let latitude = response.data.results[0].position.lat;
                    let longitude = response.data.results[0].position.lon;

                    let map = tt.map({
                        key: apiKey,
                        container: "map",
                        center: [longitude, latitude],
                        zoom: 16
                    })

                    map.on("load", () => {
                        new tt.Marker().setLngLat([longitude, latitude]).addTo(map)
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <a @click.prevent="goList()" class="btn btn-dark m-5" href="">Torna alla lista appartamenti</a>
        </div>
        <div class="container-fluid">
            <h1 class="ms_title-bg">{{ apartment.title }}</h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <img :src="`${store.apiBaseUrl}/storage/${apartment.image}`" alt="`Immagine di ${apartment.image}`"
                        v-if="apartment.image">
                    <div v-else class="text-center mt-4">Nessuna immagine</div>

                    <div class="ms_card">
                        <h2>
                            Indirizzo: {{ apartment.full_address }}
                        </h2>
                        <h3>Numero di stanze: {{ apartment.room_number }}</h3>
                        <h3>Numero di letti: {{ apartment.bed_number }}</h3>
                        <h3>Numero di bagni: {{ apartment.bathroom_number }}</h3>
                        <h3>Superficie in metri quadri: {{ apartment.surface_sqm }}</h3>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="mt-3" id="map"></div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <section id="contact">
                        <div class="container mb-3">
                            <form @submit.prevent="sendForm()">
                                <h3 class="mb-3">Contatta il proprietario</h3>
                                <p v-if="loading">Invio..</p>
                                <div class="alert alert-success" v-if="success">
                                    Il tuo messaggio è stato inviato
                                </div>
                                <div class="form-group">
                                    <label for="lead_first_name">Name</label>
                                    <input type="text" class="form-control  mb-3 w-75"
                                        :class="{ 'is-invalid': errors.name }" id="lead_first_name" placeholder="ex:Marco"
                                        v-model="firstname">
                                    <small class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</small>
                                </div>
                                <div class="form-group">
                                    <label for="lead_last_name">Last name</label>
                                    <input type="text" class="form-control  mb-3 w-75"
                                        :class="{ 'is-invalid': errors.name }" id="lead_last_name" placeholder="ex:Rossi"
                                        v-model="lastname">
                                    <small class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</small>
                                </div>
                                <div class="form-group ">
                                    <label for="lead_email">Email address</label>
                                    <input type="email" class="form-control  mb-3 w-75"
                                        :class="{ 'is-invalid': errors.name }" id="lead_email"
                                        placeholder="name@example.com" v-model="email">
                                    <small class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</small>
                                </div>
                                <div class="form-group">
                                    <label for="text">Message</label>
                                    <textarea class="form-control  mb-3 w-75" placeholder="Lascia il tuo messaggio qui"
                                        :class="{ 'is-invalid': errors.name }" id="text" rows="10"
                                        v-model="message"></textarea>
                                    <small class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</small>
                                </div>
                                <button type="submit" class="btn btn-success">Invia</button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </main>
</template>
<!-- <div>
</div> -->

<style lang="scss">
img {
    width: 100%;
}

#map {
    width: 100%;
    height: 800px;
}

main {
    background-color: #212529;
}

.text-uppercase {
    font-size: 2.5rem;
    color: #c9e265;
}

.ms_text_navy {
    color: navy;
}

.ms_card {
    border-top: 2px solid #c9e265;
    border-bottom: 2px solid #c9e265;
    margin-top: 2rem;
    color: #F3F5F6;
    margin-bottom: 4rem;

    h2 {
        border-bottom: 1px solid #c9e265;
    }
}

.ms_card-data {
    background-color: #F3F5F6;
}

.ms_title-bg {
    display: inline-block;

    height: 10rem;
    font-size: 2.5rem;

    padding: 2rem;
    color: #c9e265;
    background-color: #2c3e50;

    border-radius: 0 20px 20px 0;
}
</style> 