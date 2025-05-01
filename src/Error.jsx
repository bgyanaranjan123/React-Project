import React from 'react'
import { useRouteError } from 'react-router'

function Error() {
  let errormsg = useRouteError()
  return (
   <>
     <div className="error">
     <h1>{errormsg.error.message}</h1>
     </div>
   </>
  )
}

export default Error