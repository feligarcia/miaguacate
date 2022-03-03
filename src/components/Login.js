import React from "react";
import { Body } from '../styles/RegistroStyle'
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import "../styles/GoogleBtn.css";
import { loginGoogle, loginEmailPassword, loginFacebook, } from "../redux/actions/actionLogin";
import { useNavigate } from "react-router-dom";
import Logo from '../data/images/logo.png'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      dispatch(loginEmailPassword(data));
      // navigate("/");
    },
  });

  const handleGoogle = () => {
    dispatch(loginGoogle());
    // navigate("/");
  };
  const handleFacebook = () => {
    dispatch(loginFacebook());
    // navigate("/");
  };

  return (
    <Body className="divlog">
      <img alt='' src={Logo} className='logologin'/>
      <h1>miAguacate</h1>
      <h3>Ingresa a tu cuenta</h3>

      <form className="form-group" onSubmit={formik.handleSubmit}>
        <input
          id="inputEmailSignIn"
          type="email"
          className="form-control mt-2"
          name="email"
          autoComplete="off"
          placeholder="Tu correo"
          required
          onChange={formik.handleChange}
        />

        <input
          id="inputpasswordSignIn"
          type="password"
          className="form-control mt-2"
          name="password"
          autoComplete="off"
          placeholder="Ingresa tu contraseña"
          required
          onChange={formik.handleChange}
        />
        <div className="d-grid gap-2 mx-auto mt-2">
          <button value="Save" type="submit" variant="outline-primary">
            Ingresar
          </button>
        </div>
        <p>Puedes probar con prueba@prueba.com | 123456</p>

        <div style={{background:'white'}} onClick={handleGoogle} className="handleSocial">
             <img src="https://img.icons8.com/fluency/30/000000/google-logo.png" alt="login con Google"/>
              Google
        </div>
        
          <div style={{background: ' #005bb8', color:'white'}} onClick={handleFacebook} className="handleSocial">
            <img src="https://img.icons8.com/fluency/35/000000/facebook.png" alt="login con Facebook"/>
              Facebook
          </div>
        <br></br>
        <br></br>
        <h6 onClick={() => navigate("/registro")} className="linklogintitle">
          {" "}
          ¿Deseas crear una cuenta? <span>Haz click aqui</span>
        </h6>
      </form>
    </Body>
  );
};

export default Login;
