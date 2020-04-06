export const actions = {
    nuxtServerInit({commit},{app}){
        //app是server实例也就是koa实例
        const token = app.$cookies.get('token');
        if(token){
            commit('user/init',token)
        }
    }
}