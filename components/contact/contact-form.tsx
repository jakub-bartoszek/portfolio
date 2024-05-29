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
     <TriangleAlert className="h-48 w-48 text-[#5136ed] mb-4" />
     <button
      onClick={resetForm}
      className="p-4 m-auto rounded bg-[#5136ed]/60 text-white font-bold transition-all hover:bg-[#5136ed]"
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
     <Mail className="h-48 w-48 text-[#5136ed]" />
     <button
      onClick={resetForm}
      className="p-4 m-auto rounded bg-[#5136ed]/60 text-white font-bold transition-all hover:bg-[#5136ed]"
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
      className="flex flex-col gap-4"
      onSubmit={onFormSubmit}
     >
      <input
       value={name}
       onChange={(e) => setName(e.target.value)}
       type="text"
       placeholder="Your Name"
       className="p-2 rounded bg-[#5136ed]/5 border-2 border-[#5136ed]/30"
      />
      <input
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       type="email"
       placeholder="Your Email"
       className="p-2 rounded bg-[#5136ed]/5 border-2 border-[#5136ed]/30"
      />
      <textarea
       value={message}
       onChange={(e) => setMessage(e.target.value)}
       placeholder="Your Message"
       className="p-2 rounded bg-[#5136ed]/5 border-2 border-[#5136ed]/30"
      />
      <button
       disabled={!name || !email || !message}
       type="submit"
       className="p-4 w-full m-auto rounded bg-[#5136ed]/60 text-white font-bold transition-all
       hover:bg-[#5136ed] disabled:w-48 disabled:bg-slate-600 disabled:cursor-not-allowed"
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
