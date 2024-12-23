import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function UseCategories() {

    function getAllCategories() {
        return  axios.get("https://ecommerce.routemisr.com/api/v1/categories")
        }
        
        let res =  useQuery({
          queryKey: ["recentCategories"],
                    queryFn:getAllCategories,
                    staleTime:1000,
          })
  
return res

}
