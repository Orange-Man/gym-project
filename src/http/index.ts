import axios, { AxiosInstance, AxiosRequestConfig,InternalAxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from "axios";
import { ElMessage } from "element-plus"; 

//axios配置
const config = {
    //接口请求的地址，真实上线是一个域名
    baseURL: 'http://localhost:8089',
    timeout: 10000
}
//定义返回值类型
export interface Result<T = any> {
    code:number,
    msg:string,
    data:T
}
//axios封装(clss用于定义一个类)
class Http {
    //axios的实例
    private instance:AxiosInstance;
    //构造函数：初始化
    constructor(config:AxiosRequestConfig){
        //创建axios实例
        this.instance = axios.create(config)
        //配置拦截器
        this.interceptors()
    }
    //拦截器:处理(请求发送)和(请求返回)的数据
    private interceptors() {
        //请求发送之前的处理:通常用来携带token到请求的头部(AxiosRequestConfig修改为InternalAxiosRequestConfig)
        this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) =>{
            //在请求的头部添加token
            let token = '';//可以从cookies，sessionStorage里面获取
            if (token) {
                //设置token到头部(!表明token一定存在)
                config.headers!['token'] = token
            }
            return config;
        },(error:any)=>{
            error.data = {}
            error.data.msg = '服务器异常，请联系管理员!'
            return error;
        })
        //请求返回之后的拦截器：可以根据后端返回的转台吗，做想要提示
        this.instance.interceptors.response.use((res: AxiosResponse)=>{
            if (res.data.code != 200) {
                ElMessage.error(res.data.msg || '服务器出错!')
                return Promise.reject(res.data.msg || '服务器出错')
            } else {
                return res.data
            }
        },(error: any) => {
            console.log('进入错误')
            error.data = {};
            if (error && error.response) {
                switch (error.response.status) {
                    case 400:
                        error.data.msg = '错误请求';
                        ElMessage.error(error.data.msg)
                        break
                    case 401:
                        error.data.msg = '未授权，请重新登录';
                        ElMessage.error(error.data.msg)
                        break
                    case 403:
                        error.data.msg = '拒绝访问';
                        ElMessage.error(error.data.msg)
                        break
                    case 404:
                        error.data.msg = '请求错误,未找到该资源';
                        ElMessage.error(error.data.msg)
                        break
                    case 405:
                        error.data.msg = '请求方法未允许';
                        ElMessage.error(error.data.msg)
                        break
                    case 408:
                        error.data.msg = '请求超时';
                        ElMessage.error(error.data.msg)
                        break
                    case 500:
                        error.data.msg = '服务器端出错';
                        ElMessage.error(error.data.msg)
                        break
                    case 501:
                        error.data.msg = '网络未实现';
                        ElMessage.error(error.data.msg)
                        break
                    case 502:
                        error.data.msg = '网络错误';
                        ElMessage.error(error.data.msg)
                        break
                    case 503:
                        error.data.msg = '服务不可用';
                        ElMessage.error(error.data.msg)
                        break
                    case 504:
                        error.data.msg = '网络超时';
                        ElMessage.error(error.data.msg)
                        break
                    case 505:
                        error.data.msg = 'http版本不支持该请求';
                        ElMessage.error(error.data.msg)
                        break
                    default:
                        error.data.msg = `连接错误${error.response.status}`;
                        ElMessage.error(error.data.msg)
                }
            } else {
                error.data.msg = "连接到服务器失败";
                ElMessage.error(error.data.msg)
            }
            return Promise.reject(error)
        })
    }
    //resful api封装
    // Get请求
    get<T = Result>(url:string,params?:object): Promise<T> {
        return this.instance.get(url, { params })
    }
    // POST请求
    post<T = Result>(url:string,data?:object): Promise<T> {
        return this.instance.post(url,data)
    }
    // PUT请求
    put<T = Result>(url:string,data?:object): Promise<T> {
        return this.instance.put(url,data)
    }
    //DELETE请求
    delete<T = Result>(url: string): Promise<T> {
        return this.instance.delete(url)
    }
}
//导出工具类
export default new Http(config)