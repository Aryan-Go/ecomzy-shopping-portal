import axios from "axios"

const instance = axios.create({
    baseURL: "https://fakestoreapi.com"
})

instance.interceptors.request.use(function (config) {
    console.log(config)
    return config;
  }, function (error) {
    console.log("There has been some error as below")
    console.log(error)
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    console.log(response)
    return response;
  }, function (error) {
    console.log("There has been some error")
    console.log(error)
    return Promise.reject(error);
});
  
export default instance