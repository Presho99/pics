import React from 'react'

const ImageList = (props) => {
   const images = props.images.map(({description, id, urls}) => {
    //    Only assign the key to the root element we are returning from the rendered list
       return <img key={id} alt={description} src={urls.regular}/>
   })
   return(
   <div>
       {images}
   </div>
   )
  
}
export default ImageList