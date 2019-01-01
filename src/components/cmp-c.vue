<template>
  <div class="cmp-c">
   {{name}}
  </div>
</template>

<script>
    // import {mapGetters, mapMutations, mapActions} from 'vuex'
    export default {
        name: "cmp-c",
        data(){
            return{
                name:'cmp-c'
            }
        },
        computed:{
        
        },
        methods:{
        
        }
    }
</script>

<style scoped>
  .cmp-c{
      background-color: yellow
  }
</style>
