
import Inputlogin from '../components/login/Inputlogin';
import Checkbox from '../components/login/Checkbox';
import { Link } from 'react-router-dom'
import { login } from '../api/user';
import { useState } from 'react';

function LoginP() {
  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const [error, setError] = useState(false)

  const handleLogin = () => {
    const user = login(values.username, values.password)
    console.log(user)

    if (user) {
      window.location.href = '/'
    } else {
      setError(true)

    }



  }

  const handleUsername = (e) => {
    setValues({ ...values, username: e.target.value })
    if (error) {
      setError(false)
    }
  }

  const handlePassword = (e) => {
    setValues({ ...values, password: e.target.value })
    if (error) {
      setError(false)
    }
  }

  return (
    <div className='h-screen flex justify-center items-center '>
      <div className='bg-[#2C2C2D] w-[510px] h-[505px] flex rounded-2xl  px-5  justify-center '>
        <div className='flex flex-col mt-4'>
          <h1 className='font-bold text-[60px] text-white mb-2  text-center'>
            Inicia Sesión
          </h1>
          {/* <div className='flex flex-row justify-center mb-2'>
            <Checkbox name={'Comprador'} />
            <Checkbox name={'Vendedor'} />
          </div> */}
          <Inputlogin
            title='Usuario'
            onChange={handleUsername}
            name='username'
            placeholder='JaneDoe23'
            type='text'
          />
          <Inputlogin
            title='Contraseña'
            onChange={handlePassword}
            name='password'
            placeholder='******'
            type='password'
          />

          {error && <p className='text-red-500'>Usuario o contraseña incorrectos</p>}

          <div className='flex flex-col w-full '>
            <p className="text-white">¿No tienes una cuenta?
              <Link className='' to={'/register'}>
                <a className='ml-1 text-[#EF476F] font-semibold hover:text-[#EF476F] hover:none'>
                  Registrate
                </a>
              </Link>

            </p>
          </div>

          <div className='flex flex-col w-full mt-4'>
            <button
              onClick={handleLogin}
              className='bg-[#06D6A0] green_shadow rounded-lg w-[343px] h-[52.46px] text-white font-bold text-lg'
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default LoginP;