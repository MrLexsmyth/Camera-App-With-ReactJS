import React, {useCallback} from 'react'
import {useEffect, useRef, useState} from 'react'
import Webcam from 'react-webcam'

import {saveAs} from 'file-saver'

const videoConstraints = {
    width: 540,
    facingMode: 'environment'
}

function Webca() {
 //const [hasPhoto,setHasPhoto]=useState()
const webCamRef = useRef(null)

const [url,setUrl]=useState()
const capturePhoto = useCallback(async ()=>{
    const imageSrc = webCamRef.current.getScreenshot()
    setUrl(imageSrc)

},[webCamRef])
const onUserMedia = (e)=>{
    console.log(e);
}
const downloadImage = () =>{
    saveAs(url, 'image.jpg')
}   

  return (
    // {this.state.isCamOn && <Camera>
    //     </Camera>}
   <div className=' cam2'>
        <div className='webcam'>
            
        <Webcam
        audio={false}
         height={500}
        ref={webCamRef}
        screenshotFormat='image/jpeg'
        width='100%'
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
        mirrored={true}
        className='vid'
        />
        <button className='btn btn-light mb-2' onClick={capturePhoto}>Take Photo</button>
        </div>
{url ? (<div className='result' >
    <img src={url} alt="screenpicture"/>
   <div> 
       <button className=' btn btn-light my-5 download' onClick={downloadImage}>Download</button>
    <button className='btn ms-4 btn-light my-5' onClick={()=> setUrl(null)}>Delete Photo</button>
</div>
</div>
):null}
    </div>
    )
  }
export default Webca;