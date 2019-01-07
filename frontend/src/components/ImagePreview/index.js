import React from "react"

const ImagePreview = ({image}) => {
   if (image) {
      return <img src={image} alt=""/>
   }
   return null
};

export default ImagePreview