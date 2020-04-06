<template>
  <div>
    文章管理页面
    <div v-for="item in titles" :key="item.id">
      <nuxt-link to="/title/detail/5">
        <span>{{item.text}}</span>
        <span>{{item.price}}</span>
      </nuxt-link>
    </div>
    <!-- <nuxt-child></nuxt-child> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: [
        // { id: 1, text: "喜欢春天的五彩缤纷与色彩斑斓", price: 2 },
        // { id: 2, text: "喜欢冬天的银装素裹", price: 4 }
      ]
    };
  },
  head() {
    return {
      title: "课程列表",
      mate: [
        { name: "description", hid: "discription", content: "文章管理页面" }
      ],
      link: [{ rel: "favicon", href: "favicon.ico" }]
    };
  },
  async asyncData({ $axios }) {
    const { ok, titles } = await $axios.$get("/api/titles");
    if(ok){
      return{
        titles
      }
    }
    //错误处理
    error({statusCode:400,message:'数据查询失败'})
  }
};
</script>

<style lang="scss" scoped>
</style>