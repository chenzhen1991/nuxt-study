<template>
    <div>
        admin 页面
        <nuxt-child></nuxt-child>
    </div>
</template>

<script>
    export default {
        middleware:['auth']
    }
</script>

<style lang="scss" scoped>

</style>