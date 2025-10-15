import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Deletion Instructions | Mindful Tech',
  description: 'Request deletion of your personal data from Mindful Tech services. Meta and WhatsApp compliant.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function DataDeletion() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1>Data Deletion Instructions</h1>
      <p>Mindful Tech complies with Meta and WhatsApp's user data deletion policy. You may request deletion of any personal data associated with our services.</p>
      <p>To request data deletion, email <a href="mailto:shiftculture111@gmail.com">shiftculture111@gmail.com</a> with the subject line "Data Deletion Request." We will permanently remove your data within 30 days.</p>
      <footer style={{ marginTop: '3rem', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Mindful Tech. All rights reserved.
      </footer>
    </main>
  );
}

