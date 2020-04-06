<template>
    <div>
        文章编辑页面{{$route.params.id}}
    </div>
</template>

<script>
    export default {
        data(){
            goodInfo:''
        },
        async asyncData ({$axios,params,error}){
            if(params.id) {
                const {data: goodInfo} = await $axios('/api/title/detail',{params})

                if(goodInfo){
                    return {goodInfo}
                }

                console.log(goodInfo);
                error({statusCode:400,message:'商品详情查询失败'})
            }else{
                return {goodInfo:null}
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>