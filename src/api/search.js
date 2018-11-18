import {commonParams,options} from './config'
import axios from 'axios'
export function getHotKey() {
  const url = '/getHotKey';
  const data = Object.assign({},commonParams,{
    g_tk: 5381,
    format: 'json',
    platform: 'h5',
    needNewCode: 1
  })
  return axios.get(url,{
    params: data
  }).then(res=>{
    return Promise.resolve(res.data)
  })
}
export function search(query,page,zhida,perpage) {
  const url = '/search';
  const data = Object.assign({},commonParams,{
    g_tk: 5381,
    format: 'json',
    platform: 'h5',
    needNewCode: 1,
    w: query,
    zhidaqu: 1,
    catZhida: zhida ? 1 : 0,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage: perpage,
    n: perpage,
    p: page,
    remoteplace: 'txt.mqq.all'
  })
  return axios.get(url,{
    params: data
  }).then(res=>{
    return Promise.resolve(res.data);
  })
}
