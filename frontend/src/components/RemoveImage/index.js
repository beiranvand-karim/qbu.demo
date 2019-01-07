import React from "react"

const RemoveImage = ({removeImageFn, image}) => {
   if (image) {
      return <button onClick={removeImageFn}>remove image</button>
   }
   return null
};
export default RemoveImage