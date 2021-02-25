<template>
    <div class="card" style="width: 18rem;">
        <img src="../assets/Cover.jpg" alt="building silhouette" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">{{ address }}</p>
            <a href="#" class="btn btn-primary">Go Somewhere</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        address: String
    }
}
</script>