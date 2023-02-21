<script>
import AppBanner from '../components/AppBanner.vue';
import SponsorAppartament from '../components/SponsorApartment.vue';
import InfoBeBr from '../components/InfoBeBr.vue';

export default {
    name: "HomePage",
    methods: {
        goList() {
            this.$router.push({ name: "apartments" });
        }
    },
    components: { AppBanner, SponsorAppartament, InfoBeBr }
}
</script>

<template>
    <main>
        <!-- <div class="container">
            <div class="text-center p-5"> -->
                <AppBanner></AppBanner>
                <SponsorAppartament></SponsorAppartament>
                <InfoBeBr></InfoBeBr>
            <!-- </div>
        </div> -->
    </main>
</template>