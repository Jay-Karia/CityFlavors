"use client"

import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useTransition } from 'react'
import loginSchema from "@/schemas/loginSchema"
import { z } from "zod"
import { useToast } from "@/components/ui/use-toast"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import OAuthSocial from './oauth-social'
import { login } from '@/actions/login'

const LoginForm = () => {

    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const { toast } = useToast();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof loginSchema>) {
        startTransition(() => {
            login(values)
                .then((res) => {
                    if (res.status === "error")
                        toast({
                            description: res.msg,
                            variant: "destructive"
                        })
                    else
                        toast({
                            description: res.msg,
                            variant: "success"
                        })
                })
        });
    }
    return (
        <div className='p-5'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input disabled={isPending} placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input disabled={isPending} type="password" placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-2 flex-col">
                        <div className="flex justify-start">
                            <Button type="button" variant="link" className="p-0" aria-label='Forgot Password'>
                                <small className="text-sm font-medium text-slate-500 leading-none">Forgot Password?</small>
                            </Button>
                        </div>
                        <div className="flex gap-5 flex-col">
                            <OAuthSocial />
                            <Button disabled={isPending} style={{ width: "100%" }} type="submit" variant={"colored"}>Login</Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default LoginForm