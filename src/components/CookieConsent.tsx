import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";

interface CookieConsentProps {
  pageName: string;
}

const CookieConsent = ({ pageName }: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem(`cookieConsent-${pageName}`);
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, [pageName]);

  const handleAccept = () => {
    localStorage.setItem(`cookieConsent-${pageName}`, "accepted");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-in slide-in-from-bottom-4 md:left-auto md:right-4 md:max-w-md">
      <Card className="bg-background border shadow-lg p-4">
        <div className="flex items-start gap-3">
          <Cookie className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="flex-1 space-y-3">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">
                We use cookies
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                onClick={handleAccept}
                size="sm"
                className="text-xs"
              >
                Accept All
              </Button>
              <Button
                onClick={handleClose}
                variant="outline"
                size="sm"
                className="text-xs"
              >
                Close
              </Button>
            </div>
          </div>
          <Button
            onClick={handleClose}
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 flex-shrink-0"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;