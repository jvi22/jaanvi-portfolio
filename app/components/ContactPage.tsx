import Image from 'next/image';

function ContactPage() {
  return (
    <div className="flex flex-col flex-1 p-4 overflow-y-auto">
      <div className="flex-1 flex flex-col items-center justify-start p-4">
        <div className="relative w-16 h-16 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/images/profile-contact.jpg"
            alt="Jaanvi Nayak"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 128px"
          />
        </div>
        
        <p className="pt-4 text-center mb-4 text-lg">
          lets get in touch!
        </p>
        <a
         href="https://mail.google.com/mail/?view=cm&fs=1&to=nayakjaanvi321@gmail.com"
         target="_blank"
         rel="noopener noreferrer"
         className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full transition-colors text-center text-sm mb-4"
       >
         send me an email!
       </a>
        {/* Add more content here to test scrollability */}
        
      </div>
    </div>
  );
}

export default ContactPage;