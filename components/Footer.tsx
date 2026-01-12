
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-gold-accent pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="text-[10px]">›</span> Home</a></li>
              <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="text-[10px]">›</span> About Us</a></li>
              <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="text-[10px]">›</span> Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Terms</h4>
            <ul className="space-y-3 text-sm">
              <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="text-[10px]">›</span> Terms & Conditions</a></li>
              <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="text-[10px]">›</span> Privacy & Policy</a></li>
              <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="text-[10px]">›</span> Payment Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Pay Safely With Us</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              The payment is encrypted and transmitted securely with an SSL protocol for your financial safety.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-4 items-center grayscale brightness-200">
              <img alt="IATA" className="h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdX8C4SxeyHxLAqHhToLl0Gq0fTpButPYa4HYlUUBdRuErO7jAciBmfqmCLW33Sk4il1iKe9aANQ-KxFJe_2Q5XMAB8gEKfjLDW8wizHjfK6AKvUIQyYFFe6zDcrfE3R7LX1vV4yUwpN0cIHZ_RP0r03is4vwtNcjyvUPL9g7Ui4NJzgDBC9LdkcKOShLUDqJCWOoAvqkuSabgZ32lGMmIo9CWCl4mXvfWLKCVU87rPVDNN4Unnegfq1IHg_dhGyQ5W-cXPEAFSts" />
              <img alt="Payments" className="h-6 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_Zv9tfmNAyEJZU2skDf3RAQFUi6hkCQiUjm4kY8j1bCJ8k0tVxc_cfvm5c_CBknoa5z97q-hWvuLG5K2WzaweydBcF7Z126whtUCKa6QytcPrJD-Aj2FZ-KW5T9oMlBzRmBYlIcRcSa5U3yKU8iVl1phWR-p1FiI_n5f7ar1WgsUqFUyuzRa0EM7exIP52pEPEwSZUyrzsNFk-v0Lvf_v6kWn2sauWDm6JP1ow1p5FlPSyUaW86WHPFJuwM2y8XylByNfmVz_0yk" />
              <div className="flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-y border-white/10 py-10 mb-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left md:border-r border-white/10 px-4">
            <p className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Call Us</p>
            <p className="text-white font-bold">+1 (800) 123-4567</p>
          </div>
          <div className="text-center md:text-left md:border-r border-white/10 px-4">
            <p className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Write To Us</p>
            <p className="text-white font-bold">contact@alsalamtravel.com</p>
          </div>
          <div className="text-center md:text-left md:border-r border-white/10 px-4">
            <p className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Office Address</p>
            <p className="text-white font-bold text-xs">123 Oxford Street, London, W1D 2LG</p>
          </div>
          <div className="text-center md:text-left px-4">
            <p className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Social Media</p>
            <div className="flex justify-center md:justify-start gap-3">
              <a className="size-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-accent hover:text-primary transition-all" href="#"><span className="material-symbols-outlined text-base">public</span></a>
              <a className="size-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-accent hover:text-primary transition-all" href="#"><span className="material-symbols-outlined text-base">photo_camera</span></a>
              <a className="size-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-accent hover:text-primary transition-all" href="#"><span className="material-symbols-outlined text-base">alternate_email</span></a>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h4 className="text-white font-bold text-center mb-8 uppercase tracking-[0.2em] text-xs">Global Presence</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <p className="font-extrabold text-white mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-gold-accent text-sm">location_on</span> London HQ
              </p>
              <p className="text-white/60 text-xs leading-relaxed">123 Oxford Street, Westminster, London, W1D 2LG</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <p className="font-extrabold text-white mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-gold-accent text-sm">location_on</span> Dubai Branch
              </p>
              <p className="text-white/60 text-xs leading-relaxed">Emaar Square, Building 4, Downtown Dubai</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <p className="font-extrabold text-white mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-gold-accent text-sm">location_on</span> Riyadh Office
              </p>
              <p className="text-white/60 text-xs leading-relaxed">King Fahd Rd, Al Olaya District, Riyadh 12211</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 rounded-2xl p-8 mb-12 border border-white/10">
          <p className="text-[11px] text-white/50 leading-relaxed text-center italic">
            Many of the flights and flight-inclusive holidays on this website are financially protected by the ATOL scheme. But ATOL protection does not apply to all holiday and travel services listed on this website. Please ask us to confirm what protection may apply to your booking. If you do not receive an ATOL Certificate then the booking will not be ATOL protected. If you do receive an ATOL Certificate but all the parts of your trip are not listed on it, those parts will not be ATOL protected. Please see our booking conditions for information, or for more information about financial protection and the ATOL Certificate go to: <a className="text-gold-accent hover:underline" href="https://www.atol.org.uk/about-atol/atol-certificates">https://www.atol.org.uk/about-atol/atol-certificates</a>
          </p>
        </div>
        
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-[10px] text-white/40 uppercase tracking-widest">
            © 2024 Al-Salam Travel & Tours. Ministry of Hajj License #49202. IATA Accredited Member. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
