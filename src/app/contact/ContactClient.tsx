'use client';

import Link from "next/link";
import React, { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { useTranslation } from "@/hooks/useTranslation";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const ContactClient = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  React.useEffect(() => {
    if (status === "success") {
      toast.success(t('contact.emailSent'));
    } else if (status === "error") {
      toast.error(t('contact.emailError'));
    }
  }, [status, t]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.div
      className="container max-w-6xl mx-auto py-20"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        variants={fadeInUp}
      >
        {t('contact.pageTitle')}
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        variants={staggerContainer}
      >
        {/* Contact Information */}
        <motion.div className="space-y-8" variants={fadeInUp}>
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t('contact.getInTouchTitle')}</h2>
            <p className="text-muted-foreground">
              {t('contact.getInTouchDescription')}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <FaEnvelope className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{t('contact.emailLabel')}</h3>
                <Link
                  href="mailto:marcmaker@outlook.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  marcmaker@outlook.com
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <FaPhone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{t('contact.phoneLabel')}</h3>
                <Link
                  href="tel:+5545998405219"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +55 (45) 99840-5219
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <FaMapLocation className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{t('contact.locationLabel')}</h3>
                <p className="text-muted-foreground">Cascavel, PR - Brazil</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={fadeInUp}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                {t('contact.nameLabel')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                placeholder={t('contact.namePlaceholder')}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                {t('contact.emailLabel')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                placeholder={t('contact.emailPlaceholder')}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background resize-none"
                placeholder={t('contact.messagePlaceholder')}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? t('contact.sending') : t('contact.sendMessage')}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactClient;
