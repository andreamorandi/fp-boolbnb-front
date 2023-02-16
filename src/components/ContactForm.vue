<script>
import axios from 'axios';
import { store } from "../store";
export default {
    name: "ContactForm",
    data() {
        return {
            store,
            firstname:'',
            lastname:'',
            email:'',
            message:'',
            loading: null,
            success: false,
            errors: {}
        }
    },
    methods: {
        sendForm(){
             const data = {
                lead_first_name: this.firstname,
                lead_last_name: this.lastname,
                lead_email: this.email,
                text: this.message
             };
             this.loading = true;
        axios.post(`${this.store.apiBaseUrl}/api/messages/`, data).then(resp => {
            this.success = resp.data.success;
            if (this.success) {
                this.loading = false;
                console.log(resp.data);
                this.firstname = '';
                this.lastname ='';
                this.email ='';
                this.message ='';
            } else {
                console.log('ERRORE');
                this.errors = resp.data.errors
            }
        });
        }
       
    }
}
</script>

<template>
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
                        <input type="text" class="form-control  mb-3 w-75" :class="{ 'is-invalid' : errors.name }" id="lead_first_name" placeholder="ex:Marco" v-model="firstname">
                        <small class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</small>
                    </div>
                    <div class="form-group">
                        <label for="lead_last_name">Last name</label>
                        <input type="text" class="form-control  mb-3 w-75" :class="{ 'is-invalid' : errors.name }" id="lead_last_name" placeholder="ex:Rossi" v-model="lastname">
                        <small class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</small>
                    </div>
                    <div class="form-group ">
                        <label for="lead_email">Email address</label>
                        <input type="email" class="form-control  mb-3 w-75" :class="{ 'is-invalid' : errors.name }" id="lead_email" placeholder="name@example.com" v-model="email">
                        <small class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</small>
                    </div>
                    <div class="form-group">
                        <label for="text">Message</label>
                        <textarea class="form-control  mb-3 w-75" placeholder="Lascia il tuo messaggio qui" :class="{ 'is-invalid' : errors.name }" id="text" rows="10" v-model="message"></textarea>
                        <small class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</small>
                    </div>
                  <button type="submit" class="btn btn-success">Invia</button>
                </form>
            </div>     
        </section>
</template>

<style lang="scss">
</style> 