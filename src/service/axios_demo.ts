// import axios from 'axios'

// axios.defaults.baseURL = 'http://httpbin.org'
// axios.defaults.timeout = 5000

// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res.data)
// })

// axios
//   .get('/get', {
//     params: {
//       name: 'hzb',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })
// axios
//   .post('/post', {
//     data: {
//       name: 'hzb',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// axios.all([])

//axios拦截器
//function1表示请求成功时会执行的函数
//function2表示请求失败会执行的函数
// axios.interceptors.request.use(
//   (config) => {
//     //1、给请求加token
//     //、loading动画
//     return config
//   },
//   (error) => {
//     console.log('请求发生错误')
//     return error
//   }
// )

//function1表示数据正常，表示服务器返回成功的数据
// axios.interceptors.response.use(
//   (res) => {
//     console.log('响应成功的拦截')
//     return res
//   },
//   (error) => {
//     console.log('响应失败')
//     return error
//   }
// )
