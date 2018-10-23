<template>
  <div id="app">
    <vHeader></vHeader>
    <div class="container">
      <div class="row">
        <menus :mdata="menudata" ></menus>
        <router-view></router-view>
      </div>
    </div>

    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; (주)JH도그</p>
      </div>
    </footer>
  </div>
</template>

<script>
import vHeader from './components/vHeader.vue'
import menus from './components/menus.vue'

export default {
  components:{
    vHeader,
    menus
  },
  name: 'app',
  data () {
    return {
      menudata: [{id:1,text:"테스트1",level:1},
      {id:2,text:"테스트2",level:1},
      {id:3,text:"테스트3",level:1}]
      
    }
  }
}
</script>

<style>

</style>
