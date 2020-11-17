<template>
    <section>
        <div>
            <img src="~/assets/logo.svg" alt="nuxt">
            <p>Image Tag</p>
        </div>
        <div>
            <div class="imgbg"></div>
            <p>Background Img</p>
        </div>
    </section>
</template>

<script>

</script>

<style scoped>
section{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.imgbg{
    background: url("~assets/logo.svg");
    height: 120px;
    width: 159px;
}
p{
    font-family: 'DM Sans';
    font-size: 25px;
}

</style>