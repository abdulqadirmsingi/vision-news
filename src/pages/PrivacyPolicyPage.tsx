import React from 'react';
import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-center mb-8">
        <Shield className="w-12 h-12 text-gray-800" />
      </div>
      <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us when you create an account, subscribe to our newsletter, or interact with our content.
          </p>
        </section>

        <section className="mb-8">
          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, to develop new features, and to protect VisionPress and our users.
          </p>
        </section>

        <section className="mb-8">
          <h2>Information Sharing</h2>
          <p>
            We do not share your personal information with third parties except as described in this privacy policy or with your consent.
          </p>
        </section>

        <section className="mb-8">
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2>Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information at any time. Contact us to exercise these rights.
          </p>
        </section>
      </div>
    </div>
  );
}