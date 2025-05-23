import React from "react";

function Footer() {
  const footerItems = [
    'Meta',
    'About',
    'Blog',
    'Jobs',
    'Help',
    'API',
    'Privacy',
    'Terms',
    'Locations',
    'Instagram Lite',
    'Threads',
    'Contact Uploding & Non-Users',
    'Meta Verified'
  ];
  return (
    <>
      <div className="footer bg-zinc-950">
        <div className="footer-links space-x-5 flex py-2">
          {footerItems.map((item,index)=>(
            <h3 key={index} className="text-[12px] text-zinc-400">{item}</h3>
          ))}
  
        </div>
        <h3 className="text-[12px] text-zinc-400 text-center py-2">English &#169;2024 Instagram from Meta</h3>
      </div>
    </>
  );
}

export default Footer;
