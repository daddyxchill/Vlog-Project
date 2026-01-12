import { useEffect } from "react";

const Contact: React.FC = () => {
  useEffect(() => {
    // Re-run LinkedIn badge script after component mounts
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <h2>Contact</h2>
      <p>Email: feddiesandoval@gmail.com</p>
      <p>Contact No.: +63 945 665 6557</p>
      <p>GitHub: https://github.com/daddyxchill</p>

      <div className="badge-base LI-profile-badge"
           data-locale="en_US"
           data-size="medium"
           data-theme="dark"
           data-type="VERTICAL"
           data-vanity="feddie-sandoval-51065723b"
           data-version="v1">      
      </div>
    </>
  );
};

export default Contact;