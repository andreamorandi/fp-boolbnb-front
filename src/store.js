import { reactive } from "vue";
import { router } from "./router";
import axios from 'axios';

export const store = reactive({
    apiBaseUrl: "http://127.0.0.1:8000",
    isLoading: false,
    address: '',
    apartments: [],
    services: [],
    selectedServices: [],
    roomNumber: 1,
    bedNumber: 1,
    range: 20,
    page: 1,
    currentPage: 1,
    lastPage: null,
    fetchApartments() {
        this.isLoading = true;
        const params = {
            page: this.page,
            ...(this.address && { full_address: this.address }),
            ...(this.roomNumber > 1 && { room_number: this.roomNumber }),
            ...(this.bedNumber > 1 && { bed_number: this.bedNumber }),
            ...(this.selectedServices.length && { services: this.selectedServices }),
            ...(this.range !== 20 && { range: this.range }),
        };

        return axios.get(`${this.apiBaseUrl}/api/apartments`, { params: params }).then(resp => {
            this.apartments = resp.data.apartments.data;
            this.isLoading = false;
            this.currentPage = resp.data.apartments.current_page;
            this.lastPage = resp.data.apartments.last_page;
            return resp.data.apartments.data;
        }).catch(error => {
            console.log(error);
        });
    },
    clearApartments() {
        this.apartments = [];
    },
    fetchServices() {
        return axios.get(`${this.apiBaseUrl}/api/services`).then(resp => {
            this.services = resp.data.services;
            return resp.data.services;
        }).catch(error => {
            console.log(error);
        });
    },
    clearServices() {
        this.services = [];
    },
    goHome() {
        router.push({ name: 'home' });
    },
    goList() {
        router.push({ name: "apartments" });
    },
});
