'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/SocialIcons';
import confetti from 'canvas-confetti';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activationNotice, setActivationNotice] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setErrorMessage('');
    setActivationNotice(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        if (data.needsActivation) {
          setActivationNotice(true);
        }
        setFormData({ name: '', email: '', message: '' });
        try {
          confetti({
            particleCount: 80,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#005fea', '#1a75ff', '#ffffff'],
          });
        } catch (err) {}
      } else {
        setErrorMessage(data.error || 'Unable to send message automatically. Please email directly.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage('Network connection error. You can click below to email directly via Gmail.');
    } finally {
      setLoading(false);
    }
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Inquiry from ${formData.name || 'Client'}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.dotBefore}>Contact</div>
      <h2 className={styles.heading}>
        Let's Connect & Build Together
      </h2>
      <p className={styles.lead}>
        Whether you are looking to build a high-performance Flutter mobile application, engineer a scalable Next.js web platform, or discuss engineering opportunities, feel free to reach out. Every message is delivered directly to my inbox.
      </p>

      <div className={styles.contactGrid}>
        {/* Contact Info Card */}
        <div className={styles.infoCard}>
          <div className={styles.linksList}>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className={styles.contactLink}
            >
              <div className={styles.iconCircle}>
                <Mail size={18} />
              </div>
              <div>
                <div className={styles.linkSublabel}>Email</div>
                <div className={styles.linkTitle}>{portfolioData.personal.email}</div>
              </div>
            </a>

            <a
              href={portfolioData.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={styles.whatsappLink}
              title="Click to chat directly with Faraz on WhatsApp"
            >
              <div className={styles.whatsappCircle}>
                <WhatsAppIcon size={20} color="#25D366" />
              </div>
              <div>
                <div className={styles.linkSublabel}>Instant Messaging</div>
                <div className={styles.linkTitle}>Direct Chat on WhatsApp</div>
              </div>
            </a>

            <div className={styles.contactStaticRow}>
              <div className={styles.iconCircle}>
                <MapPin size={18} />
              </div>
              <div>
                <div className={styles.linkSublabel}>Location & Timezone</div>
                <div className={styles.linkTitle}>{portfolioData.personal.location} (PKT / UTC+5)</div>
              </div>
            </div>
          </div>

          <div className={styles.footerNote}>
            Direct communication with guaranteed delivery. Typically replying within 24 hours.
          </div>
        </div>

        {/* Message Form */}
        <div className={styles.formCard}>
          {submitted ? (
            <div className={styles.successCard}>
              <CheckCircle2 size={50} className={styles.successIcon} />
              <h3 className={styles.successTitle}>
                Message Sent Successfully!
              </h3>
              <p className={styles.successDesc}>
                Thank you for getting in touch. Your message has been forwarded directly to <strong>{portfolioData.personal.email}</strong>. You will receive a response shortly.
              </p>

              {activationNotice && (
                <div className={styles.activationNotice}>
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>
                    📧 First-Time Setup Notice:
                  </strong>
                  A verification email has been sent to <strong>{portfolioData.personal.email}</strong>. Please check your inbox and click <strong>"Activate Form"</strong> once to complete the integration.
                </div>
              )}

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className={styles.anotherBtn}
              >
                <RefreshCw size={14} />
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div>
                <label className={styles.label}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Vance"
                  className={styles.input}
                />
              </div>

              <div>
                <label className={styles.label}>
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className={styles.input}
                />
              </div>

              <div>
                <label className={styles.label}>
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, timeline, budget, or inquiry..."
                  className={styles.textarea}
                />
              </div>

              {errorMessage && (
                <div className={styles.errorMessage}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleMailtoFallback}
                    className={styles.fallbackBtn}
                  >
                    Open Mail Client
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={styles.submitBtn}
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
