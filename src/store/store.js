import Vue from 'vue'
import Vuex from 'vuex'

//vuex 사용
Vue.use(Vuex)

//전역변수, 메시지 저장하는 곳
const storage={
    fetch(){
        const arr=[];
        
        return arr;
    }
}


//vuex store 정의
export const store=new Vuex.Store({

    //스테이트 적용
    state:{
        cart:storage.fetch(),
    },

    //게터
    getters:{
        getCart(state){
            return state.cart
        }

    }

    //뮤테이션
    ,mutations:{

        //메시지 추가
        addCart(state,obj){
            // if(state.cart.indexOf(obj.id)!==-1)
            
            for(let i=0;i<state.cart.length;i++)
            {
                if(state.cart[i].id==obj.id)
                {
                    state.cart[i].count=state.cart[i].count+1
                    console.log('배고파')
                    return
                }
            }
            obj.count=1
            state.cart.push(obj)
            console.log(state.cart)
        }

    }

});
