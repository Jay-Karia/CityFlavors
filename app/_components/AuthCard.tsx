"use client"
import LoginForm from "@/components/auth/login-form"
import RegisterForm from "@/components/auth/register-form"
import BackButton from "@/components/auth/back-button"

type Props = {
	header: string
	subtitle: string
	authType: "login" | "register"
}

const AuthCard = ({ header, subtitle, authType }: Props) => {
	return (
		<div className="flex flex-col w-[350px] mb-20">
			<div className="flex flex-col items-center justify-center">
				<h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
					{header}
				</h2>
				<p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
			</div>
			<div className="mt-5">
				{authType === "login" ? <LoginForm /> : <RegisterForm />}
			</div>
			<BackButton authType={authType} />
		</div>
	)
}

export default AuthCard