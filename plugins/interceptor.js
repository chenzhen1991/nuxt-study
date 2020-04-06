export default function ({$axios,store}){
    //onRequest 是@nuxt/axios模块提供的帮助方法
    $axios.onRequest(config => {
        if(store.state.user.token){
            config.headers.Authorization = 'Bearer' +store.state.user.token
        }
        return config
    })
}