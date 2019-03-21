import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

import './Dropzone.css';

function Dropzone({onSubmit}) {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    onSubmit(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const style = (isDragActive) ? { backgroundColor: '#e7f4e4', border: 'dashed black 2px'} : {};

  return (
    <form className="Dropzone" encType="multipart/form-data" {...getRootProps({style})}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </form>
  )
}

export default Dropzone;
