import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

const ContactInfo = () => {
  return (
    <div className="flex items-center justify-center w-full ">
      <div className="w-full bg-black border border-blue-400 p-6 space-y-8 rounded-sm">
        <h2 className="text-white text-xl font-semibold border-b border-blue-400 pb-3">Contact Information:</h2>
        
        <div className="flex items-center gap-4 bg-blue-400/10 hover:bg-blue-400/20 transition rounded-lg p-4 text-white">
          <MdEmail className="text-blue-400 text-xl" />
          <span>dipchondo007@gmail.com</span>
        </div>

        <div className="flex items-center gap-4 bg-blue-400/10 hover:bg-blue-400/20 transition rounded-lg p-4 text-white">
          <MdPhone className="text-blue-400 text-xl" />
          <span>+880 1331726414</span>
        </div>

        <div className="flex items-center gap-4 bg-blue-400/10 hover:bg-blue-400/20 transition rounded-lg p-4 text-white">
          <FaLinkedin className="text-blue-400 text-xl" />
          <a href='https://www.linkedin.com/in/dip-chondo-2b871b360/' target='_blank'>linkedin.com</a>
        </div>

        <div className="flex items-center gap-4 bg-blue-400/10 hover:bg-blue-400/20 transition rounded-lg p-4 text-white">
          <BsWhatsapp className="text-blue-400 text-xl" />
          <span>+880 1331726414</span>
        </div>

        <div className="flex items-center gap-4 bg-blue-400/10 hover:bg-blue-400/20 transition rounded-lg p-4 text-white">
          <MdLocationOn className="text-blue-400 text-xl" />
          <span>Sylhet, Bangladesh</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
