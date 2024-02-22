import AuthCard from "@/app/_components/AuthCard"

const RegisterPage = () => {
  return (
    <div className='h-full flex justify-center'>
       <AuthCard header='Register' subtitle='Create an account!' authType='register' /> 
    </div>
  )
}

export default RegisterPage