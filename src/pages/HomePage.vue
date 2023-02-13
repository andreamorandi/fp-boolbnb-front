<script>
import { store } from '../store';

export default {
    name: 'HomePage',
    methods: {
        goList() {
            this.$router.push({ name: 'apartments' });
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="text-center p-5">
                <a @click.prevent="goList()" class="btn btn-success" href="">Vai alla lista appartamenti</a>
            </div>
        </div>
    </main>
</template>