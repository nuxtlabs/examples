export default ({ app }, inject) => {
    const nuxtApi = async function(path){
        return  await fetch('https://api.nuxtjs.dev/' + path).then(res => res.json())  
    }
    inject('nuxtApi', nuxtApi)
}