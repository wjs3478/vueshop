<template>
    <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
        <ol class="carousel-indicators" >
            <li data-target="#carouselExampleIndicators" v-on:click="setSelect(index)" :datas="index" v-for="(value,index) in mainProduct" :key="value.id" :class="getClass(index)"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item" :datas="index" v-for="(value,index) in mainProduct" :key="value.id" :class="getClass(index)" >
                <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide">
            </div>
        </div>
        <a class="carousel-control-prev" v-on:click="prev()" role="button">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" v-on:click="next()" role="button">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

</template>

<script>
export default {
    props: {
      mainProduct:Array
    },
    data () {
    return {
        select:0
        }
    },
    methods:{
        move(){
            //console.log(this.ruri)
            this.$router.push({ name: "item", query:{'pid':this.product.id} });
        },
        setSelect(index)
        {
            this.select=index
            console.log(this.select)
        },
        getClass(index)
        {
            
            
            let isActive=false
            if(this.select==index)
            {
                isActive=true
            }
            
            return {active : isActive}
        },
        next(){
            if(this.getMax==this.select)
            {
                this.select=0    
            }else{
                this.select=this.select+1
            }
            
        },
        prev(){
            if(this.select==0)
            {
                this.select=this.getMax
            }else
            {
                this.select=this.select-1
            }
            console.log(this.select)
        }

    },
    computed:{
        getMax(){
            return this.mainProduct.length-1
        }
        
    }

}
</script>

<style>

</style>

