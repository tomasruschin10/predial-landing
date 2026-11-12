import { useEffect } from "react";

interface HubSpotEmbedFormProps {
  portalId: string;
  formId: string;
  region?: string;
}

const SCRIPT_SRC = "https://js.hsforms.net/forms/embed/";

const HubSpotEmbedForm = ({ portalId, formId, region = "na1" }: HubSpotEmbedFormProps) => {
  useEffect(() => {
    // Re-inject the script so forms mounted after page load still render
    document.querySelectorAll('script[src*="js.hsforms.net/forms/embed"]').forEach((s) => s.remove());
    const script = document.createElement("script");
    script.src = `${SCRIPT_SRC}${portalId}.js`;
    script.defer = true;
    document.body.appendChild(script);
  }, [portalId, formId]);

  return (
    <div
      className="hs-form-frame"
      data-region={region}
      data-form-id={formId}
      data-portal-id={portalId}
    />
  );
};

export default HubSpotEmbedForm;
