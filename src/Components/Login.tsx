

import{useRef, useState} from 'react';

 function Login() {

    const formulario = ()=>{
        const[correo, setCorreo] = useState<any>('');
        const[pass, setPass]= useState<any>('');
    
        const txtCorreo = useRef<any>();
        const txtPass = useRef<any>();
    
        const handlerChageCorreo = (event: any)=>{
            const valor = event.target.value;
            setCorreo(valor);
        };
        const handlerChagePass = (event: any)=>{
            const valor = event.target.value;
            setPass(valor);
        };
        const handlerChageLogin = (event: any)=>{
            event.preventDefault()
            if(correo.length==0){
                txtCorreo.current.focus();
            }
            if(pass.length==0){
                txtPass.current.focus();
            }
        };

    return (
        <>
            <main className="main">
	<div className="container">
		<section className="wrapper">
			<div className="heading">
				<h1 className="text text-large">Sign In</h1>
				<p className="text text-normal">New user? <span><a href="#" className="text text-links">Create an account</a></span>
				</p>
			</div>
			<form name="login" className="form">
				<div className="input-control">
					<label className="input-label" hidden>Email Address</label>
					<input type="email" name="email" className="input-field" placeholder="Email Address" onChange={handlerChageCorreo} ref={txtCorreo} />
				</div>
				<div className="input-control">
					<label  className="input-label" hidden>Password</label>
					<input type="password" name="password" className="input-field" placeholder="Password" onChange={handlerChagePass} ref={txtPass} />
				</div>
				<div className="input-control">
					
					<input type="button" name="submit" className="input-submit" value="Login" onClick={handlerChageLogin} />
				</div>
			</form>
			
			
		</section>
	</div>
</main>
        </>
    )
}
}