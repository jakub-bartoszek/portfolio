"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Loader2, Mail, TriangleAlert } from "lucide-react";

interface ContactFormProps {
 serviceKey: string | undefined;
 templateKey: string | undefined;
 userKey: string | undefined;
}

const ContactForm = ({
 serviceKey,
 templateKey,
 userKey
}: ContactFormProps) => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");
 const [formStatus, setFormStatus] = useState("");

 const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setFormStatus("loading");

  if (serviceKey && templateKey)
   emailjs
    .send(serviceKey, templateKey, { name, email, message }, userKey)
    .then(
     () => {
      setFormStatus("success");
     },
     () => {
      setFormStatus("error");
     }
    );
 };

 const resetForm = () => {
  setFormStatus("");
 };

 return (
  <div className="h-1/2">
   {formStatus === "loading" && (
    <div className="h-full flex flex-col items-center justify-center">
     <Loader2 className="h-24 w-24 text-[#5136ed] animate-spin" />
    </div>
   )}
   {formStatus === "error" && (
    <div className="h-full flex flex-col items-center justify-around text-center">
     <div>
      <p className="text-3xl font-bold text-[#9b9bed]">Error</p>
      <p className="text-xl text-slate-500 mb-4">
       An error occurred while sending your message.
       <br />
       Please try again.
      </p>
     </div>
     <TriangleAlert className="h-52 w-52 text-[#5136ed] mb-4" />
     <button
      onClick={resetForm}
      className="px-6 py-3 rounded bg-[#9b9bed] text-[#111423] font-bold
      hover:bg-[#5136ed] hover:text-white transition"
     >
      Try Again
     </button>
    </div>
   )}
   {formStatus === "success" && (
    <div className="h-full flex flex-col items-center justify-around text-center">
     <div>
      <p className="text-3xl font-bold text-[#9b9bed]">
       Thank you for your message!
      </p>
      <p className="text-xl text-slate-500 mb-4">
       I will respond as fast as possible.
      </p>
     </div>
     <Mail className="h-52 w-52 text-[#5136ed]" />
     <button
      onClick={resetForm}
      className="px-6 py-3 rounded bg-[#9b9bed] text-[#111423] font-bold
      hover:bg-[#5136ed] hover:text-white transition"
     >
      Send another message
     </button>
    </div>
   )}
   {!formStatus && (
    <div className="flex flex-col gap-4">
     <p className="text-lg">
      Alternatively, you can fill out the form below to send me a direct
      message:
     </p>
     <form
      className="flex flex-col gap-4 text-black"
      onSubmit={onFormSubmit}
     >
      <input
       value={name}
       onChange={(e) => setName(e.target.value)}
       type="text"
       placeholder="Your Name"
       className="p-2 rounded"
      />
      <input
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       type="email"
       placeholder="Your Email"
       className="p-2 rounded"
      />
      <textarea
       value={message}
       onChange={(e) => setMessage(e.target.value)}
       placeholder="Your Message"
       className="p-2 rounded"
      />
      <button
       disabled={!name || !email || !message}
       type="submit"
       className="p-4 w-full m-auto rounded bg-[#6753da] text-white font-bold transition-all
       hover:bg-[#5136ed] disabled:w-48 disabled:bg-slate-500 disabled:cursor-not-allowed"
      >
       Send Message
      </button>
     </form>
    </div>
   )}
  </div>
 );
};

export default ContactForm;
