export default function ({ $axios, redirect }) {
  $axios.onError((error) => {
    if (error.response.status === 404) {
      redirect('/404/')
    }
  })
}
