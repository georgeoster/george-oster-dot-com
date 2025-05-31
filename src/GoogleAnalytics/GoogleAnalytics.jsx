import { useEffect } from "react";

const GA_TRACKING_ID = "G-KSGZ6HWRC8"; 

export default function GoogleAnalytics() {
  useEffect(() => {
    // Inject <script async src="...">
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Inject inline config script
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}');
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return null;
}
