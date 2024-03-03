"use client"

import React, { useTransition, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import registerSchema from "@/schemas/registerSchema"
import { z } from "zod"
import { useToast } from '../ui/use-toast'

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
import { register } from '@/actions/register'

const RegisterForm = () => {

    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const { toast } = useToast()

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof registerSchema>) {
        startTransition(() => {
            register(values)
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
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input disabled={isPending} placeholder="Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                                    <Input type="password" disabled={isPending} placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <OAuthSocial />
                    <Button disabled={isPending} style={{ width: "100%" }} type="submit" variant={"colored"}>Register</Button>
                </form>
            </Form>
        </div>
    )
}

export default RegisterForm