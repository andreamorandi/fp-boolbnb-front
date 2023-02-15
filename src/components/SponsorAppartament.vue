<script>
export default{
    name: 'SponsorAppartament'
}
</script>

<template>
<div class="container-fluid text-center pb-4 bg-dark">
    <h3 class="pt-4 title">Appartamenti in primo piano</h3>
    <div class="row g-5 card-container">
        <div class="card col mx-2 pt-2">
            <img src="../assets/appartament/appartamento1.jpg" alt="">
            <a href="">Appartamento 1</a>
            <p>Via Pippo, Usa <i class="fa-solid fa-location-dot"></i></p>
        </div>
        <div class="card col mx-2 pt-2">
            <img src="../assets/appartament/appartamento5.jpg" alt="">
            <a href="">Appartamento 2</a>
            <p>Via Pippo, Usa <i class="fa-solid fa-location-dot"></i></p>
        </div>
        <div class="card col mx-2 pt-2">
            <img src="../assets/appartament/appartamento3.jpg" alt="">
            <a href="">Appartamento 3</a>
            <p>Via Pippo, Usa <i class="fa-solid fa-location-dot"></i></p>
        </div>
        <div class="card col mx-2 pt-2">
            <img src="../assets/appartament/appartamento4.jpg" alt="">
            <a href="">Appartamento 4</a>
            <p>Via Pippo, Usa <i class="fa-solid fa-location-dot"></i></p>
        </div>
    </div>
</div>
</template>

<style lang="scss">
.title{
    color: #c9e265;
}
.card-container{
    width: 90%;
    margin: 0 auto;
}
    .card{
        background-color: #c9e265;

        a{
            color: black;
            font-size:x-large;
        }

        p{
            color: black;
            font-size: smaller;
        }

        img{
            height: 90%;
        }
    }
    .card:hover{
        transform: scale(1.1);
    }
</style>