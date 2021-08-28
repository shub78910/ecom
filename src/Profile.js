import React from 'react'
import { useStateValue } from './StateProvider'



function Profile({fullName,setFullName}) {

    const [{ basket, user }] = useStateValue();


    return (
        <div>
            <h4>Hello, <span>{user ?.email}</span></h4>

            {/* <h3>Address: </h3> */}
        </div>
    )
}

export default Profile
