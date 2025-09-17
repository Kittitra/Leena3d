'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";


const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        setLoading(true);

        try {
            if (formRef.current) {
                await emailjs.sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                    formRef.current,
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
                );
            }

            setForm({ name: "", email: "", message: "" });
        }catch(error) {
            console.log('EMAILJS ERROR, ', error)
        } finally{
            setLoading(false);
        }
    }
  return (
    <Card className='border border-black py-10 px-5'>
        <CardHeader>
            <CardTitle>
                <h1 className='font-noto-bold text-xl md:text-4xl text-end'>
                    ส่งอีเมล
                </h1>
            </CardTitle>
        </CardHeader>

        <CardContent className='text-sm md:text-lg'>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7 "
              >

                <div className='flex flex-col xl:flex-row gap-5'>
                    <div className='gap-3 flex flex-col'>
                    <label htmlFor="name">ชื่อ</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="คุณชื่ออะไร?"
                        required
                        className='border rounded-sm p-3'
                    />
                    </div>

                    <div className='gap-3 flex flex-col'>
                        <label htmlFor="email">อีเมล</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="ใส่อีเมลของคุณ"
                            required
                            className='border rounded-sm p-3'
                        />
                    </div>
                </div>

                <div className='gap-3 flex items-start flex-col'>
                  <label htmlFor="message">ข้อความ/คำถาม</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="กินข้าวกับอะไร?"
                    rows={5}
                    required
                    className='border rounded-sm p-3 w-full'
                  />
                </div>

                <button type="submit" className='border cursor-pointer p-2 rounded-full 
                transition ease-in-out duration-200 hover:bg-grey-500 hover:text-white'>
                  <div className=" group ">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "กำลังส่ง..." : "ส่งข้อความ"}
                    </p>
                  </div>
                </button>
            </form>
        </CardContent>

        <CardFooter>
            <span className='w-full pt-7 font-noto-sans text-md text-end'>
                ขอบคุณ
            </span>
        </CardFooter>
    </Card>
  )
}

export default ContactForm