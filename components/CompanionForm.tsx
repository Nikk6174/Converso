"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { subjects } from "@/constants"

const formSchema = z.object({
    name: z.string().min(1, { message: 'Companion is required.' }),
    subject: z.string().min(1, { message: 'Subject is required.' }),
    topic: z.string().min(1, { message: 'Topic is required.' }),
    voice: z.string().min(1, { message: 'Voice is required.' }),
    style: z.string().min(1, { message: 'Style is required.' }),
    duration: z.coerce.number().min(1, { message: 'Duration is required.' }),
})



const CompanionForm = () => {

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            subject: "",
            topic: "",
            voice: "",
            style: "",
            duration: 15, // Default duration in minutes
        },
    })


    // 2. Define a submit handler.
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Companion name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the companion name" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    value={field.value}
                                >
                                    <SelectTrigger className="input capitalize w-[180px]">
                                        <SelectValue placeholder="select a subject" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {subjects.map((subject) => (
                                            <SelectItem
                                                key={subject}
                                                value={subject}
                                                className="capitalize"
                                            >
                                                {subject}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>What should the companion help with</FormLabel>
                            <FormControl>
                                <textarea
                                    placeholder="ex derivative and integrals"
                                    className="input border rounded-lg w-full h-24"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="voice"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>voice</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    value={field.value}
                                >
                                    <SelectTrigger className="input ">
                                        <SelectValue placeholder="select a voice" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem
                                            value="male">
                                            Male
                                        </SelectItem>
                                        <SelectItem
                                            value="female">
                                            female
                                        </SelectItem>

                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="style"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>style</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    value={field.value}
                                >
                                    <SelectTrigger className="input ">
                                        <SelectValue placeholder="select a style" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem
                                            value="formal">
                                            formal
                                        </SelectItem>
                                        <SelectItem
                                            value="casual">
                                            casual
                                        </SelectItem>

                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Estimated session duration in minutest</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="15 minutes"
                                    {...field}
                                    className="input"
                                />
                            

                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />


            <Button className="w-full cursor-pointer" type="submit">Build your companion</Button>
        </form>
        </Form >
    )
}

export default CompanionForm