import '../assets/style/load.scss'


export const SignUp = () => {

    return(
        <>
            <div className={'boxTwo'}>
                <span className={'borderLineTwo'}></span>
                <form>
                    <h1>Sign up</h1>
                    <div className={'inputBox'}>
                        <h2 className={'p'}>Username</h2>
                        <input/>
                    </div>
                    <div className={'inputBox'}>
                        <h2 className={'p'}>Repeat Password</h2>
                        <input type={'password'}/>

                    </div>
                    <div className={'links'}>
                        {/*<a href={'#'}>sign up</a>*/}
                    </div>
                    <button type='sumbit'>login</button>



                </form>
            </div>
        </>
    )
}