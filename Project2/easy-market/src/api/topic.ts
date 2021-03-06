import axios from '../utils/request'

// 获取专题列表
export let getTopicList = ()=>{
    return axios.get('/topic/list?page=1&size=100')
}

// 获取专题详情
export let getTopicDetail = (id: string)=>{
    return axios.get(`/topic/detail?id=${id}`)
}