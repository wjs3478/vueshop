<template>
    <div class="col-lg-9">
        <bigcard :mainProduct="mainPRD"></bigcard>
        <div class="row" >
            <card :product="value" v-for="value in products" :key="value.id"></card>
        </div>
    </div>
</template>

<script>

import bigcard from '../components/bigcard.vue'
import card from '../components/card.vue'

export default {
    components:{
        bigcard,
        card
    },
    data () {
    return {
      products: [{id:123,name:"테스트1",iuri:1, price:59,summary:'이것은 뭐냐'},
      {id:234,name:"테스트2",iuri:1,price:78,summary:'배고프다'},
      {id:345,name:"테스트3",iuri:1,price:81,summary:'아해해애'}]
      ,
      mainPRD: [{id:123,name:"테스트1",iuri:1, price:59,summary:'이것은 뭐냐'},
      {id:234,name:"테스트2",iuri:1,price:78,summary:'배고프다'},
      {id:345,name:"테스트3",iuri:1,price:81,summary:'아해해애'}]
      ,
      pd:[]

    }
  },
  mounted() {
      
      this.searchProduct()
  },
  methods:{
      searchProduct(){

          let baseURI='https://jsonplaceholder.typicode.com'

          this.$http.get(`${baseURI}`).then((result)=>{
              console.log(result)
                this.pd=result
          })

      }
  }


}
</script>

<style>

</style>
