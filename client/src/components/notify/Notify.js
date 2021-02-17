import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading'
import Toast from './Toast'


const Notify = () => {
    const  { notify } = useSelector(state => state)
    return (
        <div>
            {notify.loading && <Loading></Loading>}
            {notify.error && <Toast msg={{title:"Error !!", body:notify.error}} handleShow="" bgColor="bg-danger"></Toast>}
            {notify.success && <Toast msg={{title:"Success !!", body:notify.success}} handleShow="" bgColor="bg-success"></Toast>}
        </div>

    )
}

export default Notify