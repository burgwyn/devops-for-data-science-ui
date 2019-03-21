import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

import './Dropzone.css';

function Dropzone({onSubmit}) {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    onSubmit(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <form className="Dropzone" encType="multipart/form-data" {...getRootProps()}>
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
