'use client';

import React, { useState } from 'react';
import { CONTACT } from '../config/site';
import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle2, Send } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Spirits Order / General Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const text = `From: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`;

    // Server route: logs the message and emails the concierge via Zoho SMTP.
    fetch('/api/inquiry/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        kind: 'contact',
        subject: `Concierge message: ${formData.subject}`,
        text,
        replyTo: formData.email,
      }),
    }).catch(() => {});

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block">
          Spirits Advisor Concierge
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-amber-100">
          Contact Our Tasting Desk
        </h1>
        <p className="text-sm text-amber-200/70">
          Have questions regarding order status, 21+ adult signature carrier tracking, or tasting notes? Connect directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Info Panel */}
        <div className="space-y-6 bg-[#1A120B] p-6 rounded-3xl border border-amber-900/40 text-xs">
          <h3 className="font-serif font-bold text-base text-[#D4AF37]">
            Cellar Headquarters
          </h3>

          <div className="space-y-4 text-amber-200/80">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-amber-100 font-serif">Address</strong>
                <span>{CONTACT.address}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-amber-100 font-serif">Email Desk</strong>
                <a href={`mailto:${CONTACT.email}`} className="hover:underline">{CONTACT.email}</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-amber-100 font-serif">Direct Line</strong>
                <a href={`tel:${CONTACT.phone}`} className="hover:underline">{CONTACT.phone}</a>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-amber-900/30">
              <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-amber-100 font-serif">Concierge Hours</strong>
                <span>Mon – Sat: 9:00 AM – 7:00 PM PST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-2 p-8 rounded-3xl bg-[#1C140E] border border-[#D4AF37]/30 space-y-6">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="font-serif font-bold text-amber-100 text-xl">
                Message Dispatched
              </h3>
              <p className="text-xs text-amber-200/80">
                Thank you. A spirits advisor from our Napa Valley desk will respond to <strong>{formData.email}</strong> shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 placeholder-stone-500 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 placeholder-stone-500 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <input
                type="text"
                required
                placeholder="Subject (e.g. Order Status, Cask Inquiry)"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 placeholder-stone-500 text-xs focus:outline-none focus:border-[#D4AF37]"
              />

              <textarea
                rows={5}
                required
                placeholder="How can our cellar team assist you today?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 placeholder-stone-500 text-xs focus:outline-none focus:border-[#D4AF37]"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-xs hover:bg-[#E5C158] transition-all shadow-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message to Concierge'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
