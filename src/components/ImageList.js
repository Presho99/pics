import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {
   const images = props.images.map((image) => {
    //    Only assign the key to the root element we are returning from the rendered list
       return <ImageCard key={image.id} image={image} />
   })
   return(
   <div className='image-list'>
       {images}
   </div>
   )
  
} 
export default ImageList