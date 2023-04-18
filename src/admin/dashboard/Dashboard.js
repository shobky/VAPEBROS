import React, { useEffect, useState } from 'react'
import './dashboard.css'
import Login from '../auth/Login'
import { getRedirectResult, signOut } from 'firebase/auth'
import { signInWithGoogle, auth } from '../../firebase/config'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useProducts } from '../../contexts/ProductsContext'
const Dashboard = () => {

    const [error, setError] = useState(false)
    const [currentUser, setCurrentUser] = useState()
    const { hadnleUser } = useProducts()

    const navigate = useNavigate()

    const login = async () => {
        signInWithGoogle().then(() => {
            getRedirectResult(auth)
                .then(() => {
                })
                .catch((err) => {
                    setError(err.message)
                    console.log(error, 'er')
                })
        })
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            hadnleUser(user)
        })
    }, [currentUser])

    const logout = () => {
        signOut(auth).then(() => {
            navigate('/')
        })
    }

    console.log(currentUser)
    return (
        <div className='dashboard'>
            {
                currentUser ?
                    <div>
                        <div className='dashboard-profile'>
                            <img alt='you' src={currentUser.photoURL} className='dashboard-profile-pic' />
                            <p> {currentUser.displayName}</p>
                        </div>
                        <div className='dashboard-links'>
                            <Link className='dashboard-link' to='/dashboard/add-products'>Add Products</Link>
                            <Link className='dashboard-link' to='/dashboard/add-blogs'>Add Blogs</Link>

                        </div>
                    </div>
                    :
                    <Login login={login} />
            }

        </div>

    )
}

export default Dashboard