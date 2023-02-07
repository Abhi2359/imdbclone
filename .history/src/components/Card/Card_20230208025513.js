import React ,{useEffect,useState}from 'react'
import Skeleton,{SkeletonTheme} from "react-loading-skeleton"
import './Card.css'
import {Link} from "react-router-dom"

const Cards =({movie})=>{
   const [isLoading,setIsLoading] =useState(true)

   useEffect(()=>{
    setTimeout(()=>{
        setIsLoading(false)
    },1500)
   },[])
   return(
    <>

    {
        isLoading?
        <div className="cards">
            <SkeletonTheme>
        <Skeleton?
            </SkeletonTheme>
        </div>:
    }
    </>
   );
}