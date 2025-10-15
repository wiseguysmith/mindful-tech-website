import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Mindful Tech',
  description: 'Privacy policy for Mindful Tech AI automation and chatbot services. Learn how we protect your data.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1>Privacy Policy</h1>
      <p>At Mindful Tech, your privacy is our priority. We collect only the information necessary to provide our AI automation and chatbot services.</p>
      <p>We do not sell, rent, or share your personal information with any third parties. Data collected through WhatsApp or our connected systems is used only to improve your experience.</p>
      <p>You may request data deletion at any time by contacting us at <a href="mailto:shiftculture111@gmail.com">shiftculture111@gmail.com</a>.</p>
      <p>Effective Date: October 2025</p>
      <footer style={{ marginTop: '3rem', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Mindful Tech. All rights reserved.
      </footer>
    </main>
  );
}

