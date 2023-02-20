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
                this.addView();
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
                    this.success = resp.data.success;
                    if (this.success) {
                        console.log("SUCCESS-VIEW", this.success);
                    } else {
                        this.errors = resp.data.errors
                        console.log(errors);
                    }
                });
            }
        }
    }
}
</script>

<template>
    <main>
        <a @click.prevent="goList()" class="btn btn-dark m-5" href="">Torna alla lista appartamenti</a>

        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <table class="table mb-5">
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
                                <th scope="row">Numero di bagni: {{ apartment.bathroom_number }}</th>
                            </tr>
                            <tr>
                                <th scope="row">Superficie in metri quadri: {{ apartment.surface_sqm }}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-sm">
                    <img :src="`${store.apiBaseUrl}/storage/${apartment.image}`" alt="`Immagine di ${apartment.image}`"
                        v-if="apartment.image">
                    <div v-else class="text-center mt-4">Nessuna immagine</div>
                </div>
            </div>
            <section id="contact">
                <div class="container">
                    <form @submit.prevent="sendForm()">
                        <h3 class="mb-3">Contatta il proprietario</h3>
                        <p v-if="loading">Invio..</p>
                        <div class="alert alert-success" v-if="success">
                            Il tuo messaggio è stato inviato
                        </div>
                        <div class="form-group">
                            <label for="lead_first_name">Name</label>
                            <input type="text" class="form-control  mb-3 w-75" :class="{ 'is-invalid': errors.name }"
                                id="lead_first_name" placeholder="ex:Marco" v-model="firstname">
                            <small class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</small>
                        </div>
                        <div class="form-group">
                            <label for="lead_last_name">Last name</label>
                            <input type="text" class="form-control  mb-3 w-75" :class="{ 'is-invalid': errors.name }"
                                id="lead_last_name" placeholder="ex:Rossi" v-model="lastname">
                            <small class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</small>
                        </div>
                        <div class="form-group ">
                            <label for="lead_email">Email address</label>
                            <input type="email" class="form-control  mb-3 w-75" :class="{ 'is-invalid': errors.name }"
                                id="lead_email" placeholder="name@example.com" v-model="email">
                            <small class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</small>
                        </div>
                        <div class="form-group">
                            <label for="text">Message</label>
                            <textarea class="form-control  mb-3 w-75" placeholder="Lascia il tuo messaggio qui"
                                :class="{ 'is-invalid': errors.name }" id="text" rows="10" v-model="message"></textarea>
                            <small class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</small>
                        </div>
                        <button type="submit" class="btn btn-success">Invia</button>
                    </form>
                </div>
            </section>
        </div>
    </main>
</template>
<!-- <div>
</div> -->

<style lang="scss">
img {
    width: 100%;
}

main {
    background-color: #F3F5F6;
}

.text-uppercase {
    font-size: 2.5rem;
    color: #c9e265;
}

.ms_text_navy {
    color: navy;
}
</style> 