<template>
    <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
        <img class="card-img-top" src="http://placehold.it/700x400" alt="" v-on:click="move()">
        <div class="card-body">
            <h4 class="card-title">
            <router-link :to="{name:'item', query:{'pid':this.product.id} }">{{product.name}}</router-link>
            <!-- <a v-on:click="move()">{{product.name}}</a> -->
            </h4>
            <h5>{{product.price}} 원</h5>
            <p class="card-text">{{product.summary}}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            <button type="button" class="btn btn-primary navbar-right" v-on:click="addCart(product)">장바구니 추가</button>
        </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
      product:Object
    },
    methods:{
        move(){
            //console.log(this.ruri)
            this.$router.push({ name: "item", query:{'pid':this.product.id} });
        },

        addCart(value)
        {
            let obj={
                id : value.id,
                name : value.name,
                price : value.price
            }
            this.$store.commit('addCart',obj)
        }

    }

}
</script>

<style>
img{
    cursor:pointer
}
</style>
