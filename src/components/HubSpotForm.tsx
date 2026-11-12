import { useEffect } from "react";

const PORTAL_ID = "45058290";
const DEFAULT_FORM_ID = "47ad29ec-cd72-4e68-acc8-204f6e0ba706";

interface HubSpotFormProps {
  formId?: string;
}

const HubSpotForm = ({ formId = DEFAULT_FORM_ID }: HubSpotFormProps) => {
  useEffect(() => {
    // Inject script only once
    if (!document.querySelector('script[src*="js.hsforms.net"]')) {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/45058290.js";
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      className="hs-form-frame"
      data-region="na1"
      data-form-id={formId}
      data-portal-id={PORTAL_ID}
    />
  );
};

export default HubSpotForm;

