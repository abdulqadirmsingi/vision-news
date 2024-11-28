import React from 'react';
import { ScrollText } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-center mb-8">
        <ScrollText className="w-12 h-12 text-gray-800" />
      </div>
      <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2>1. Terms of Use</h2>
          <p>
            By accessing and using VisionPress, you accept and agree to be bound by the terms and conditions of this agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2>2. User Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the security of your account.
          </p>
        </section>

        <section className="mb-8">
          <h2>3. Content Guidelines</h2>
          <p>
            Users must not post content that is illegal, offensive, or violates the rights of others. VisionPress reserves the right to remove any content at its discretion.
          </p>
        </section>

        <section className="mb-8">
          <h2>4. Intellectual Property</h2>
          <p>
            All content published on VisionPress is protected by copyright and other intellectual property laws. Users may not reproduce or distribute content without permission.
          </p>
        </section>
      </div>
    </div>
  );
}