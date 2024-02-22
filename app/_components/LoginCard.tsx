"use client"
import LoginForm from "@/components/auth/login-form"

const LoginCard = () => {
	return (
		<div className="flex flex-col w-[350px]">
			<div className="flex flex-col items-center justify-center">
				<h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
					Login
				</h2>
				<p className="text-sm text-muted-foreground mt-1">Welcome Back!</p>
			</div>
			<div className="mt-5">
				<LoginForm/>
			</div>
		</div>
	)
}

export default LoginCard