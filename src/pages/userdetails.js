import '../assets/style/styles.scss'
import user from '../assets/images/user.webp'
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";

export const Userdetails = () => {
    const navigate = useNavigate()
    const adminPanel = () =>{
        navigate('/adminPanel')
    }

    const [loader, setloader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setloader(false)
        }, 2000)
    }, []);


    return(
        <div>
            {loader ?
                <div className={'mainSpinner'}>
                    <div className={'mainSpin'}>
                        <div className="spinner"></div>
                    </div>

                </div>
                :
                    <div className={'userDetails'}>
                <h2>User details</h2>
                <div className={'firstDiv'}>
                 <img src={user} alt={'manOne'} style={{width:150,height:150, borderRadius:90}}/>
                 <h3>Name - John </h3>
                 <h4>Surname-Brown</h4>
                 <h4>Age - 30</h4>
                 <h4>Mail - kk</h4>
                 <button onClick={adminPanel}>Admin Panel</button>
                </div>
                </div>

            }
        </div>
    )
}