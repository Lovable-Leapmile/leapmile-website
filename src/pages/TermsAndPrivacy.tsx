import Footer from "@/components/Footer";

const TermsAndPrivacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="pt-24 pb-16">
        <div className="page-wrapper">
          <div className="max-w-4xl mx-auto">
            {/* Main Header */}
            <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
              Terms of Use - Privacy Policy - Cookies Policy
            </h1>

            {/* General Disclaimer */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                General Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using our website, you acknowledge that you have read and agreed to our Terms of Use, Privacy Policy, and Cookies Policy listed below. Please note that all of the above policies may be updated at any time without notice. If you disagree with any of these policies in whole or in part, please refrain from using our website.
              </p>
            </section>

            {/* Terms of Use */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Terms of Use
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Lawful Use:</h3>
                  <p className="text-muted-foreground leading-relaxed">You agree to use our website solely for lawful purposes.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Modification and Discontinuation:</h3>
                  <p className="text-muted-foreground leading-relaxed">We reserve the right to modify or discontinue any part of our website at any time without prior notice.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Third-party Content:</h3>
                  <p className="text-muted-foreground leading-relaxed">We are not responsible for the content of any third-party websites linked to or from our website.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Limitation of Liability:</h3>
                  <p className="text-muted-foreground leading-relaxed">We are not liable for any damages or losses resulting from your use of our website.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Indemnification:</h3>
                  <p className="text-muted-foreground leading-relaxed">You agree to indemnify and hold us harmless from any claims, damages, or liabilities arising out of your use of our website.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Acceptance of Terms:</h3>
                  <p className="text-muted-foreground leading-relaxed">Your continued access and use of our website constitute acceptance of these terms. If you do not agree to these terms, please refrain from using our website.</p>
                </div>
              </div>
            </section>

            {/* Privacy Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Privacy Policy
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Collection of Personal Information:</h3>
                  <p className="text-muted-foreground leading-relaxed">We may collect personal information provided voluntarily by users.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Collection of Non-Personal Information:</h3>
                  <p className="text-muted-foreground leading-relaxed">We may collect non-personal information automatically through cookies.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Use of Collected Information:</h3>
                  <p className="text-muted-foreground leading-relaxed">We may use collected information for internal purposes, including improving our services and marketing.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Sharing of Information:</h3>
                  <p className="text-muted-foreground leading-relaxed">We may share information with trusted third-party service providers.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Security Measures:</h3>
                  <p className="text-muted-foreground leading-relaxed">We implement reasonable security measures to protect user data.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">User Rights:</h3>
                  <p className="text-muted-foreground leading-relaxed">Users have the right to access, correct, or delete their information.</p>
                </div>
              </div>
            </section>

            {/* Cookies Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Cookies Policy
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Purpose of Cookies:</h3>
                  <p className="text-muted-foreground leading-relaxed">We utilize cookies for tracking and other purposes aimed at enhancing your browsing experience.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Traffic Analysis:</h3>
                  <p className="text-muted-foreground leading-relaxed">Cookies assist us in analysing website traffic and improving our services.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Cookie Management:</h3>
                  <p className="text-muted-foreground leading-relaxed">You have the option to adjust your browser settings to refuse cookies or receive alerts when cookies are being sent.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Acceptance of Cookies:</h3>
                  <p className="text-muted-foreground leading-relaxed">By clicking on the popup message or continuing to use our website, you consent to the use of cookies for tracking and other purposes.</p>
                </div>
              </div>
            </section>

            {/* Last Updated */}
            <div className="text-right">
              <p className="text-xs text-muted-foreground/60">
                Last updated on: Jan 01, 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndPrivacy;