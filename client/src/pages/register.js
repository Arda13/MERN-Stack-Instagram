import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { register } from '../redux/actions/authAction'


const Register = () => {
    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const initialState = { 
        fullname: '',
        username: '',
        email: '', 
        password: '',
        cf_password: '',
        gender:'male',
    }
    const [userData, setUserData] = useState(initialState)
    const { fullname, username, email, password, cf_password } = userData

    const [typePass, setTypePass] = useState(false)
    const [typeConfirmPass, setTypeConfirmPass] = useState(false)



    useEffect(() => {
        if (auth.token) history.push("/")
    },[auth.token, history])



    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(register(userData))
    }


    return(
        <div className="auth_page">
            <form onSubmit={handleSubmit}>
                <h3 className="text-uppercase text-center mb-2"> Mernstagram</h3>
                <div className="form-group m-2">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" className="form-control" id="fullname" onChange={handleChangeInput} name="fullname" value={fullname} style={{background: `${alert.fullname ? '#fd2d6a14' : ''}`}}/>
                </div>
                <div className="form-group m-2">
                    <label htmlFor="username">User Name</label>
                    <input type="text" className="form-control" id="username" onChange={handleChangeInput} name="username" value={username.toLowerCase().replace(/ /g, '')} style={{background: `${alert.username ? '#fd2d6a14' : ''}`}}/>
                </div>
                <div className="form-group m-2">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" onChange={handleChangeInput} name="email" value={email} style={{background: `${alert.email ? '#fd2d6a14' : ''}`}}/>
                </div>
                <div className="form-group m-2">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <div className="pass">
                        <input type={ typePass ? "text" : "password" } className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChangeInput} name="password" value={password} style={{background: `${alert.password ? '#fd2d6a14' : ''}`}}/>
                        <small onClick={() => setTypePass(!typePass)}>
                            {typePass ? 'Hide' : 'Show'}
                        </small>
                    </div>
       
                </div>
                <div className="form-group m-2">
                    <label htmlFor="cf_password">Confirm Password</label>
                    <div className="pass">
                        <input type={ typeConfirmPass ? "text" : "password" } className="form-control" id="cf_password" placeholder="Password" onChange={handleChangeInput} name="cf_password" value={cf_password} style={{background: `${alert.cf_password ? '#fd2d6a14' : ''}`}}/>
                        <small onClick={() => setTypeConfirmPass(!typeConfirmPass)}>
                            {typeConfirmPass ? 'Hide' : 'Show'}
                        </small>
                    </div>
                </div>
                <div className="d-flex justify-content-between m-2">
                    <label htmlFor="male">
                        Male: <input type="radio" id="male" name="gender" value="male" defaultChecked onChange={handleChangeInput}/>
                    </label>
                    <label htmlFor="female">
                        Female: <input type="radio" id="female" name="gender" value="female" onChange={handleChangeInput}/>
                    </label>
                    <label htmlFor="other">
                        Other: <input type="radio" id="other" name="gender" value="other" onChange={handleChangeInput}/>
                    </label>
                </div>
                <button type="submit" className="btn btn-dark w-100 mt-4" disabled={email && password ? false : true}>Register</button>

                <p className="my-2"> Already have an account? <Link to="/login">Login Now</Link></p>
            </form>
        </div> 
    )
}

export default Register