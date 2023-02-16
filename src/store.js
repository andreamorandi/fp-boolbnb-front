import { reactive } from "vue";
import { router } from "./router";
import axios from 'axios';

export const store = reactive({
    apiBaseUrl: "http://127.0.0.1:8000",
    address: '',
    apartments: [],
    fetchApartments() {
        let options = null;
        if (this.address) {
            options = {
                params: {
                    full_address: this.address
                }
            };
        }
        return axios.get(`${this.apiBaseUrl}/api/apartments`, options).then(resp => {
            this.apartments = resp.data.apartments;
            return resp.data.apartments;
        }).catch(error => {
            console.log(error);
        });
    },
    clearApartments() {
        this.apartments = [];
    },
    goHome() {
        router.push({ name: 'home' });
    },
    goList() {
        router.push({ name: "apartments" });
    },
});
