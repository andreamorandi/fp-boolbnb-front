<script>
import { store } from '../store';
import AppBanner from '../components/AppBanner.vue';

export default {
    name: "HomePage",
    methods: {
        goList() {
            this.$router.push({ name: "apartments" });
        }
    },
    components: { AppBanner }
}
</script>

<template>
    <main>
        <!-- <div class="container">
            <div class="text-center p-5"> -->
                <AppBanner></AppBanner>
            <!-- </div>
        </div> -->
    </main>
</template>