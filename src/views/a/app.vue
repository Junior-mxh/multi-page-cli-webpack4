<template>
    <div class="aaa">
         {{testmxh}}
         <cmp-c></cmp-c>
         <img src="@/assets/icon.jpg" alt="">
         <i class="fa fa-calendar-minus-o fa-fw"></i>
    </div>
</template>
<script>
    import CmpC from '@/components/cmp-c';
    import printMe from '@/utils/print'
    export default {
        name: "",
        components:{
            CmpC
        },
        computed:{
        },
        data(){
            return {
                testmxh:'hell0 vue'
            }
        },
        mounted(){
           printMe()
        }
    }
</script>

<style scoped>
  .aaa{
      background-color: red
  }
</style>