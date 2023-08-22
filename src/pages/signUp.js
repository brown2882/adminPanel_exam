import '../assets/style/load.scss'
import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import {AdminPanel} from "./adminPanel";

export const SignUp = () => {
        const navigate = useNavigate()
        const {register, handleSubmit} = useForm();

        const onsumbit = (data) =>{
            console.log(data);

            navigate('/adminPanel')
        }

    return(
        <>
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
                    <button onClick={onsubmit}
                            style={{backgroundColor:'green',color:"white", padding:5}}
                            type='sumbit'>Click here!</button>



                </form>
            </div>
        </>
    )
}