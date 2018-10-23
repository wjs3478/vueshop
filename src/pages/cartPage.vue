<template>
    <div class="col-lg-9">
        <div class="row" >
            <h3>장바구니</h3>
        </div>

        <transition-group name="list" tag="ul">
            <li v-for="val in this.getCart" v-bind:key="val.id" class="shadow">
                <div class="col-lg-2"><i class="checkBtn fas fa-check"></i>
                <img src="http://placehold.it/700x400" width="40" height="40" class="center-block"/>
                </div>
                <span class="col-lg-4">{{val.name}}</span>
                <!-- <span class="">{{val.count}}</span> -->
                <div class="row col-lg-3">
                    <div class="col-lg-3" v-on:click="val.count!==1?val.count--:1"><i class="fas fa-minus"></i></div>
                    <div class="col-lg-6 form-group"><input type="text" class="form-control text-center" v-model="val.count" style="margin-top:5px"/></div>
                    <div class="col-lg-3" v-on:click="val.count++"><i class="fas fa-plus"></i></div>
                </div>
                <span class="col-lg-2 text-right">{{(val.count*val.price).toLocaleString()}} 원</span>
                <span class="removeBtn col-lg-1">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>

        <div class="text-right">
            총 금액 : {{this.getTotal.toLocaleString()}} 원
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {

    components:{
        
    },
    methods:{
        increase(vv){
            vv=vv+1;
            return vv;
        },
        decrease(vv){
            if(vv!==0)
                vv=vv-1;

            return vv;
        }

    },
    computed:{
        //스토어에 있는 메시지를 가져온다.
        ...mapGetters(['getCart'])
        
        ,
        getTotal()
        {
            console.log("안녕")
            let total=0
            let arr=this.getCart
            for(let i=0;arr.length>i;i++)
            {
                total=total+(arr[i].count*arr[i].price)
            }
            return total
        }
    }
    
  }


</script>

<style scoped>

    ul{
        list-style-type:none;
        padding-left:0px;
        margin-top:0;
        text-align:left;
    }

    li{
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius:5px;
    }

    .checkBtn{
        line-height: 45px;
        color:#62acde;
        margin-right: 5px;
    }

    .checkBtnCompleted{
        columns: #b3adad;
    }

    .textCompleted{
        text-decoration: line-through;
        color: #b3adad
    }

    .removeBtn{
        margin-left: auto;
        color: red
    }



    
    .list-enter-active, .list-leave-active {
    transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
    }

</style>
