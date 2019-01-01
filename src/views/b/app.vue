<template>
    <div class="aaa">
         {{mxh22}}
         
    </div>
</template>
<script>
    import printMe from '@/utils/print';
    export default {
        name: "",
        components:{
        },
        computed:{
        },
        data(){
            return {
                mxh22:'page b'
            }
        },
        mounted(){
            printMe();
        }
    }
</script>

<style scoped>
</style>