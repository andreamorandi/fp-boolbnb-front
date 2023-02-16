import { reactive } from "vue";
import { router } from "./router";
import axios from 'axios';

export const store = reactive({
    apiBaseUrl: "http://127.0.0.1:8000",
    apartments: [],
    fetchApartments(full_address) {
        let options = null;
        if (full_address) {
            options = {
                params: {
                    full_address: full_address
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
