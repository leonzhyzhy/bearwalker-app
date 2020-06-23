import { axiosRequest } from './axios'

function setbanner (data, success, fail) {
  axiosRequest({
    url: '/setbanner',
    type: 'get',
    data: data
  }).then(() => {
    success()
  }).catch(() => {
    fail()
  })
}
function setnews (data, success, fail) {
  axiosRequest({
    url: '/setnews',
    type: 'get',
    data: data
  }).then(() => {
    success()
  }).catch(() => {
    fail()
  })
}
function deletebannermes (data, success, fail) {
  axiosRequest({
    url: '/deletebanner',
    type: 'get',
    data: data
  }).then(() => {
    success()
  }).catch(() => {
    fail()
  })
}
function uploadGoods (options) {
  axiosRequest({
    url: '/setgoods',
    type: 'post',
    data: options.data,
    header: { 'Content-Type': 'multipart/form-data' }
  }).then((res) => {
    options.success(res)
  })
}

function SetOrders (data, success, fail) {
  axiosRequest({
    url: 'setorders',
    type: 'post',
    data: data
  }).then((res) => {
    success()
  }).catch(() => {
    fail()
  })
}
function SetGoodsInfo (data, success, fail) {
  axiosRequest({
    url: 'getidgoods',
    type: 'post',
    data: data
  }).then((res) => {
    success()
  }).catch(() => {
    fail()
  })
}
function getClass1 (data, success, fail) {
  axiosRequest({
    url: 'getclass',
    type: 'post',
    data: data
  }).then((res) => {
    success()
  }).catch(() => {
    fail()
  })
}
function getClass2 (data, success, fail) {
  axiosRequest({
    url: 'getclass',
    type: 'post',
    data: data
  }).then((res) => {
    success()
  }).catch(() => {
    fail()
  })
}
function getClass3 (data, success, fail) {
  axiosRequest({
    url: 'getclass',
    type: 'post',
    data: data
  }).then((res) => {
    success()
  }).catch(() => {
    fail()
  })
}
function getClass4 (data, success, fail) {
  axiosRequest({
    url: 'getclass',
    type: 'post',
    data: data
  }).then((res) => {
    success()
  }).catch(() => {
    fail()
  })
}

export {
  SetOrders,
  deletebannermes,
  setnews,
  setbanner,
  uploadGoods,
  getClass1,
  getClass2,
  getClass3,
  getClass4,
  SetGoodsInfo
}
