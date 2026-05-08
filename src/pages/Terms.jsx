import HeroBanner from '../components/HeroBanner'
import CTASection from '../components/CTASection'
import usePageTitle from '../hooks/usePageTitle'
import './Legal.css'

export default function Terms() {
  usePageTitle('Terms & Conditions')
  return (
    <div className="legal-page">
      <HeroBanner title="Terms & Conditions" subtitle="By using Coinsend, you agree to the following terms and conditions. Please read them carefully before using our services." lastUpdated="April 30, 2026" />
      <section className="legal-content section">
        <div className="legal-content__inner container">
          <div className="legal-body">
            <h2>Acceptance of Terms</h2>
            <p>By accessing or using the Coinsend platform, mobile application, and any associated services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.</p>
            <h2>Eligibility</h2>
            <p>You must be at least 18 years old to use Coinsend. By creating an account, you represent that you are of legal age and have the capacity to enter into a binding agreement. You must also comply with all applicable laws and regulations in your jurisdiction.</p>
            <h2>Account Registration</h2>
            <p>To use our services, you must create an account and complete our KYC verification process. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
            <h2>Services</h2>
            <p>Coinsend provides a platform for converting stablecoins (USDT, USDC) to local currencies (KES, NGN) and related financial services including bill payments, money transfers, and rewards programs. We reserve the right to modify, suspend, or discontinue any part of our services at any time.</p>
            <h2>Transaction Terms</h2>
            <p>All transactions are subject to our prevailing exchange rates and fees, which are displayed at the time of each transaction. Once a transaction is confirmed, it cannot be reversed. You acknowledge that cryptocurrency values are volatile and rates may fluctuate.</p>
            <h2>Prohibited Activities</h2>
            <p>Users may not use Coinsend for money laundering, terrorist financing, or any illegal purpose; fraud or deceptive practices; circumventing financial regulations; or any activity that violates applicable laws.</p>
            <h2>Limitation of Liability</h2>
            <p>Coinsend shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, including but not limited to loss of profits, data, or business opportunities.</p>
            <h2>Intellectual Property</h2>
            <p>All content, trademarks, logos, and intellectual property on the Coinsend platform are owned by Coinsend and protected by applicable intellectual property laws. You may not use, reproduce, or distribute any content without prior written consent.</p>
            <h2>Termination</h2>
            <p>We reserve the right to suspend or terminate your account at any time if you violate these Terms & Conditions or engage in any prohibited activities. Upon termination, you remain liable for any pending transactions.</p>
            <h2>Governing Law</h2>
            <p>These Terms & Conditions are governed by and construed in accordance with the laws of Kenya. Any disputes arising from these terms shall be resolved through arbitration in Nairobi, Kenya.</p>
            <h2>Changes to Terms</h2>
            <p>We may update these Terms & Conditions from time to time. We will notify users of material changes through the app or email. Continued use of Coinsend after changes constitutes acceptance of the updated terms.</p>
            <h2>Contact</h2>
            <p>For any questions regarding these Terms & Conditions, please contact us at legal@coinsend.io or through the Contact Us page.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}
