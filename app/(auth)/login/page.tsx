import AuthCard from "@/app/_components/AuthCard"

const LoginPage = () => {
  return (
    <div className='h-full flex justify-center'>
       <AuthCard header='Login' subtitle='Welcome back!' authType='login' /> 
    </div>
  )
}

export default LoginPage