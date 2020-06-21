import request from '../utils/request';

export function getList(params = {}) {
  return request('/api/home',params);
}

export function getProductData(params = {}) {
  return request('/api/detail',params);
}

export function login(params = {}){
  return request('/api/login',params);
}