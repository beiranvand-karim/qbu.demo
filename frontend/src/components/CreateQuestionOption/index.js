import React, {Component} from 'react'
import ImagePreview from "../ImagePreview"
import RemoveImage from "../RemoveImage"

export class CreateQuestionOption extends Component {
   constructor(props) {
      super(props);
      this.imageChange = this.imageChange.bind(this);
      this.removeImage = this.removeImage.bind(this)
   }

   state = {
      image: null
   };

   imageChange(e) {
      // e.preventDefault();
      console.log(e.target.files);
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = () => {
         const image = reader.result;
         this.setState({image});
         this.props.insertCreateQuestionOptionImage(image)
      };
      reader.readAsDataURL(file)
   }

   removeImage(e) {
      e.preventDefault();
      this.props.removeCreateQuestionOptionImage(this.state.image);
      this.setState({image: null});
   }

   render() {
      const {image} = this.state;
      return <div>
         <ImagePreview image={image}/>
         <RemoveImage image={image} removeImageFn={this.removeImage} />
         <input onChange={this.imageChange} type="file"/>
      </div>
   }
}

export default CreateQuestionOption
