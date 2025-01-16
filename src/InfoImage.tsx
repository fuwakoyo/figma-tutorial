import React from 'react'

interface InfoImageProps{
    src:string;
    alt?:string;
}

export default function InfoImage({src,alt}:InfoImageProps) {
  return (
    <div >
        <img src={src} alt={alt} />
    </div>
  )
}
