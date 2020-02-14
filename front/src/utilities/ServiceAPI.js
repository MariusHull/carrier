import { Component } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { baseUrl, serviceUrl } from '../config'

export default class ServiceApi extends Component {

  handleResponse = (resp) => {
    if (resp.request.responseURL.includes(`?next=${baseUrl}`)) {
      window.location.replace(`${resp.request.responseURL.split('?next=')[0]}?next=${window.location.pathname}`)
    }
  }

  handleError = (error) => {
    if (error.response && error.response.status === 400 && error.response.data.error) {
      toast.error(`Error : ${error.response.data.error}`, {
        position: 'top-right',
        autoClose: 10000
      })
    } else {
      toast.error("An unexpected error occured.", {
        position: 'top-right',
        autoClose: 10000
      })
    }
  }

  loadServices = async () => {
    const request = axios.create()
    try {
      let resp = await request.get(serviceUrl)
      this.handleResponse(resp)
      return { data: resp.data }
    } catch (error) {
      this.handleError(error)
      return { data: null }
    }
  }

  postService = async (payload) => {
    const request = axios.create()
    try {
      let resp = await request.post(serviceUrl, JSON.parse(payload))
      this.handleResponse(resp)
      return { data: resp.data }
    } catch (error) {
      this.handleError(error)
      return { data: null }
    }
  }

  patchService = async (serviceId, payload) => {
    const request = axios.create()
    try {
      let resp = await request.patch(serviceUrl + `/${serviceId}`, JSON.parse(payload))
      this.handleResponse(resp)
      return { data: resp.data }
    } catch (error) {
      this.handleError(error)
      return { data: null }
    }
  }

  deleteServiceById = async (serviceId) => {
    const request = axios.create()
    try {
      let resp = await request.delete(serviceUrl + `/${serviceId}`)
      this.handleResponse(resp)
      return { data: resp.data }
    } catch (error) {
      this.handleError(error)
      return { data: null }
    }
  }

  loadServiceById = async (serviceId) => {
    const request = axios.create()
    try {
      let resp = await request.get(serviceUrl + `/${serviceId}`)
      this.handleResponse(resp)
      return { data: resp.data }
    } catch (error) {
      this.handleError(error)
      return { data: null }
    }
  }

  render () {
    return null
  }
}
