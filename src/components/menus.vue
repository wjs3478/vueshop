<template>
    <div class="col-lg-3">
        <h1 class="my-4">Vue Shop</h1>
        <div class="list-group" v-for="value in mdata" v-bind:key="value.id">
            <a href="#" class="list-group-item">{{value.text}}</a>
            <!-- <a href="#" class="list-group-item">Category 2</a>
            <a href="#" class="list-group-item">Category 3</a> -->
        </div>
    </div>
</template>

<script>
export default {
    //step 페이지네이션에서 한번에 보일 단계
//page는 페이지에서 보일 row 갯수
    props: {
      mdata: Array
    },

    data(){
        return{
            newMsg:""
        }
    },
  computed: {
   
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    

  }
}

</script>

<style>

</style>
