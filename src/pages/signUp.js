import '../assets/style/load.scss'
import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import {AdminPanel} from "./adminPanel";
import {memo, useEffect} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {getTodo} from "../store/todo/todo.action";

export const SignUp =memo( () => {
        const navigate = useNavigate()
        const {register, handleSubmit} = useForm();
        const dispatch = useDispatch()
        function Onsumbit(data)  {
            if(data.firstName !== '', data.password !== ''){
                navigate('/adminPanel')
            } else{
                alert('please,fill in input')
            }

        }

    useEffect(() => {
        axios.get('https://gorest.co.in/public/v2/users').then((res) =>{
            dispatch(getTodo(res.data))
        })
    }, []);
    return(
        <div className={'home'}>
            <div className={'boxTwo'}>
                <span className={'borderLineTwo'}></span>
                <form onSubmit={handleSubmit(onsubmit)}>
                    <h1>Sign up</h1>
                    <div className={'inputBox'}>
                        <h2 className={'p'}>Username</h2>
                        <input type={"text"} {...register("firstName", { required: true })}/>
                    </div>
                    <div className={'inputBox'}>
                        <h2 className={'p'}>Repeat Password</h2>
                        <input type={'password'} {...register("password", { required: true })}/>

                    </div>
                    <div className={'links'}>
                        {/*<a href={'#'}>sign up</a>*/}
                    </div>
                    <button onClick={Onsumbit}
                            style={{backgroundColor:'green',color:"white", padding:5}}
                            type='sumbit'>Click here!</button>



                </form>
            </div>
        </div>
    )
})