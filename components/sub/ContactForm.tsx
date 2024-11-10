"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSending, setIsSending] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = (): FormErrors => {
    let errors: FormErrors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_s1u5wm3",
          "template_8aroxyz",
          formData,
          "U4HUSy-SQ03bRZ9Za"
        )
        .then((res) => {
          setToastMessage("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          setToastMessage("Failed to send message. Please try again later.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mb-20">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8">
        Let's Connect
      </h1>
      <div className="w-full max-w-6xl border border-[#2A0E61] rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-200 block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-3 py-2 bg-transparent border border-[#2A0E61] rounded-md text-white outline-none"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-200 block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full px-3 py-2 bg-transparent border border-[#2A0E61] rounded-md text-white outline-none"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-200 block"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={4}
              className="w-full px-3 py-2 bg-transparent border border-[#2A0E61] rounded-md text-white outline-none"
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-white text-black font-semibold rounded-md"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-white text-black px-4 py-2 rounded-md">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
