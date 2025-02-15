import React, { Suspense } from 'react'

export default function Page5() {
  return (
    <div className='text'>
      <Suspense fallback={<div>Loading...</div>}>
      This is Page 5
      </Suspense>
    </div>
  )
}
