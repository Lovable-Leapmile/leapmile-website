import Footer from "@/components/Footer";

const PricingAndRefunds = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="pt-24 pb-16">
        <div className="page-wrapper">
          <div className="max-w-4xl mx-auto">
            {/* Main Header */}
            <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
              Leapmile Logistics Legal Information
            </h1>

            {/* Terms and Conditions */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Terms and Conditions
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For the purpose of these Terms and Conditions, the term "we", "us", "our" used anywhere on this page shall mean LEAPMILE LOGISTICS PRIVATE LIMITED, whose registered/operational office is:
                </p>
                <p className="font-medium">
                  Ground Floor, 216/1-8, SS Commercial Estate, Varthuru Road, SS Commercial Estate, CV Raman Nagar, Bengaluru, Bengaluru Urban, Karnataka 560093.
                </p>
                <p>
                  "you", "your", "user", "visitor" shall mean any natural or legal person who is visiting our website and/or has agreed to purchase from us.
                </p>
                <p>
                  Your use of the website and/or purchase from us are governed by the following Terms and Conditions:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The content of the pages of this website is subject to change without notice.</li>
                  <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
                  <li>Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through our website and/or product pages meet your specific requirements.</li>
                  <li>Our website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
                  <li>All trademarks reproduced on our website which are not the property of, or licensed to, the operator are acknowledged on the website.</li>
                  <li>Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.</li>
                  <li>From time to time, our website may also include links to other websites. These links are provided for your convenience to provide further information.</li>
                  <li>You may not create a link to our website from another website or document without LEAPMILE LOGISTICS PRIVATE LIMITED's prior written consent.</li>
                  <li>Any dispute arising out of the use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.</li>
                  <li>We shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any transaction, on account of the cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.</li>
                </ul>
              </div>
            </section>

            {/* Pricing */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Pricing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Pricing will be displayed within the app or reservation page after login. All pricing is shown in INR, based on the selected location and locker usage duration.
              </p>
            </section>

            {/* Cancellation and Refund */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Cancellation and Refund
              </h2>
              <p className="text-sm text-muted-foreground mb-2">Last updated on: Sep 16, 2024</p>
              <p className="text-muted-foreground leading-relaxed">
                No cancellations and refunds are entertained.
              </p>
            </section>

            {/* Shipping and Delivery */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Shipping and Delivery
              </h2>
              <p className="text-sm text-muted-foreground mb-2">Last updated on: Sep 16, 2024</p>
              <p className="text-muted-foreground leading-relaxed">
                Shipping is not applicable for business.
              </p>
            </section>

            {/* Contact Support */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Contact Support
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-medium">Phone:</span> (080) 4709-5986</p>
                <p><span className="font-medium">Email:</span> support@qikpod.com</p>
              </div>
            </section>

            {/* Operating Address */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Operating Address
              </h2>
              <div className="text-muted-foreground leading-relaxed">
                <p className="font-medium">Leapmile Logistics Pvt. Ltd.</p>
                <p>216/2, Plot No 8, SS Commercial Estate,</p>
                <p>Nagavarpalya, C.V. Raman Nagar,</p>
                <p>Bangalore (560093)</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PricingAndRefunds;