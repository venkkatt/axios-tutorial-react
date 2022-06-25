import { useEffect } from 'react'
import authFetch from '../axios/Custom'
import axios from 'axios'

const randomUserUrl = 'https://randomuser.me/api'

const CustomInstance = () => {
  const fetchData = async () => {
    console.log('custom axios instance')
    try {
      const resp1 = await authFetch('/react-store-products')
      const resp2 = await axios(randomUserUrl)
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>custom instance</h2>
}
export default CustomInstance
