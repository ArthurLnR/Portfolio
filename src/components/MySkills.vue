<script setup>

</script>

<template>
 <section id="skills">
        <h1>Languages maitrisés</h1>
        <div class="container">
            <div class="skills_containers">
                <h3>HTML</h3>
                <img class="skills_logo" src="../assets/html logo.png" alt="">
            </div>
            <div class="skills_containers">
                <h3>CSS</h3>
                <img class="skills_logo" src="../assets/css logo.png" alt="">
            </div>
        </div>
    </section>
</template>

<style scoped>
.skills{
    font-family: 'Bai Jamjuree', sans-serif;
}
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 150px;
}
.skills_logo {
    width: 100px;
    height: 100px;
    transition: transform 0.3s ease;
}
.skills_containers {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}
h3 {
    display: flex;
    justify-content: center ;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0%;
}
.skills_logo:hover {
    transform: scale(1.2);
}


</style>