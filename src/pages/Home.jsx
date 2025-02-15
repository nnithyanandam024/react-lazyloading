import React, { Suspense } from 'react'
import ReloadButton from '../pages/Reloadbutton'

export default function Home() {
  return (
    <div className='text'>
      This is Home page
      <br />
      <Suspense fallback={<div>Loading...</div>}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates culpa sequi voluptas enim quod illum eveniet. Odit, blanditiis. Voluptatem illum quae, sit odio corporis provident necessitatibus cum asperiores voluptate sapiente dignissimos nam suscipit error. Rem dicta, quod aut labore mollitia consequatur sequi doloribus at nam ad, commodi doloremque ducimus?
      </Suspense>
      <ReloadButton />
    </div>
  )
}
