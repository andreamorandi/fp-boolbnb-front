<script>
import AppBanner from '../components/AppBanner.vue';
import SponsorAppartament from '../components/SponsorApartament.vue';

export default {
    name: "HomePage",
    methods: {
        goList() {
            this.$router.push({ name: "apartments" });
        }
    },
    components: { AppBanner, SponsorAppartament }
}
</script>

<template>
    <main>
        <!-- <div class="container">
            <div class="text-center p-5"> -->
                <AppBanner></AppBanner>
                <SponsorAppartament></SponsorAppartament>
            <!-- </div>
        </div> -->
    </main>
</template>