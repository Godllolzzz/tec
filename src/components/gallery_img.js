import * as React from "react";
import Dialog from "@mui/material/Dialog";

const GalleryImage = (props) => {
   const [openDialog, handleDisplay] = React.useState(true);
   const { image } = props;
   const handleClose = () => {
      props.onClose()
   };

   console.log(image)
   return (
      <>
         <Dialog style={{width:"100%", height:"100%"}} onClose = {handleClose} open = {openDialog}>
            <img src={image}></img>
         </Dialog>
      </>
   );
}
export default GalleryImage;