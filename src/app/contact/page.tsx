"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { toast } from "sonner";

interface FormData {
    name: string,
        email: string,
        message: string,
}

type FormStatus = "idle" | "loading" | "success" | "error";

const ContactPage = () => {
    const [formData, setFormData] = useState<FormData>({ 
        name: "",
        email: "",
        message: "",
    })

    const [status, setStatus] = useState<FormStatus>("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
        const response = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-Type" : "aplication/json"
            },
            body: JSON.stringify(formData)
        })

        if(!response.ok) {
            throw new Error("Failed to send message");
        }

        setStatus("success");
        setFormData({
            name: "",
            email: "",
            message: "",
        })
        } catch (error) {
            setStatus("error");
            toast("" + error)
        }

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData( prev => ({
            ...prev,
            [e.target.name]: e.target.value
        })) 
    }


    return (
        <div className="container max-w-7xl mx-auto py-20 ">
            <h1 className="text-4xl font-bold mb-20 text-center">
                Contact Me
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-muted-foreground w-[70%]"> 
                        I&apos;m always happy to explore new projects, share creative ideas, or contribute to meaningful initiatives.
                    </p>
                    <div className="space-y-8 ">
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="w-6 h-6 text-primary"/>
                            <div>
                                <h3 className="font-semibold">
                                    Email
                                </h3>
                                <Link className="text-muted-foreground hover:text-primary" href="mailto: Marcmaker@outlook.com">
                                Marcmaker@outlook.com
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaPhone className="w-6 h-6 text-primary"/>
                            <div>
                                <h3 className="font-semibold">
                                    Phone
                                </h3>
                                <Link className="text-muted-foreground hover:text-primary" href="tel: +5545998405219">
                                +55 (45) 998405219
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaMapLocation className="w-6 h-6 text-primary"/>
                            <div>
                                <h3 className="font-semibold">
                                    Location
                                </h3>
                                <Link className="text-muted-foreground hover:text-primary" href="https://www.google.com/maps/place/Corb%C3%A9lia,+PR,+85420-000/data=!4m2!3m1!1s0x94f231f4dba9f175:0x22f74524dcc7c5a9?sa=X&ved=1t:242&ictx=111">
                                Corbélia - PR
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-muted p-6 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="Name" className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <input required value={formData.name} onChange={handleChange} type="text" id="name" name="name" placeholder="Enter your name" className="w-full px-4 py-2 rounded-md border border-muted-foreground bg-muted focus:ring-2 focus:ring-primary focus:border-none"/>
                        </div>
                        <div>
                            <label htmlFor="Email" className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <input required value={formData.email} onChange={handleChange} type="email" id="email" name="email" placeholder="Enter your Email" className="w-full px-4 py-2 rounded-md border border-muted-foreground bg-muted focus:ring-2 focus:ring-primary focus:border-none"/>
                        </div>
                        <div>
                            <label htmlFor="Message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea rows={4} required value={formData.message} onChange={handleChange} id="message" name="message" placeholder="Enter your message" className="w-full px-4 py-2 rounded-md border border-muted-foreground bg-muted focus:ring-2 focus:ring-primary focus:border-none"/>
                        </div>
                        <button type="submit" className="w-full bg-primary py-4 font-bold rounded-md text-white">
                            {status === "loading" ? "Sending..." : "Send Message"}
                        </button>
                        {
                            status === "success" && (
                                <p className="text-emerald-500 text-center"> Message sent successfully </p> 
                            )
                        }

                        { 
                            status ===  "error" && (
                                <p className="text-fuchsia-700 text-center"> Failed to send message. Please try again. </p>
                            )
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;