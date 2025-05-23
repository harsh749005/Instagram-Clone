import React, { useState } from 'react'

function Products({naam,data}) {
    const [a,b] = useState(true);
  return (
    <div className='w-full h-44 m-2 rounded-md p-3 bg-slate-400'>
      This is {naam}
      Your age is : {data.age} 
      <h4 className={`${a === false ? "text-red-300 " : "text-red-800"}`}>{a === false ? "hello" : "hey"}</h4>
      <button onClick={()=>b(!a)}>Change</button>
    </div>
  )
}

export default Products
