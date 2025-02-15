import React, { Suspense } from 'react'

export default function Page1() {
  return (
    <div className='text'>
      This is Page 1 <br />
      <Suspense fallback={<div>Loading...</div>}>
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores et, iure, accusamus optio minus velit, sapiente quasi similique vitae mollitia esse? Unde perspiciatis corrupti incidunt! Molestiae culpa, iure dignissimos quod soluta qui dolorum non alias accusamus dolorem voluptatum. Magnam esse in eveniet debitis deleniti assumenda exercitationem illum non explicabo facilis.
       </Suspense>
    </div>
  )
}
