<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <!-- <a class="navbar-brand" href="#">Vue Shop</a> -->
        <router-link to="/" class="navbar-brand">Vue Shop</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
        <button type="button" class="btn btn-primary navbar-right" v-on:click="move()"><i class="fas fa-shopping-cart"></i> 장바구니 <span class='badge'>{{getCart.length}}</span></button>
      </div>
    </nav>
</template>

<script>

import {mapGetters} from 'vuex'


export default {
  
  methods:{
        move(){
            //console.log(this.ruri)
            this.$router.push({ name: "cart"  });
        }
    },
  computed:{
        //스토어에 있는 메시지를 가져온다.
        ...mapGetters(['getCart'])
    }

}
</script>

<style>

</style>
