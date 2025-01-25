import { Mail, MailCheck } from "lucide-react";
import { useEffect, useState } from "react";

function getStatusBasedOnTime(timeString: string): string {
    // Convert 12-hour time format (with AM/PM) to 24-hour format
    const date = new Date(`1970-01-01T${timeString}`);
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    // 11:00 PM to 7:00 AM -> sleeping
    if ((hours >= 23 && minutes >= 0) || (hours < 7)) {
      return 'Sleeping';
    }
  
    // 7:00 AM to 8:30 AM -> awake (probably free)
    if ((hours === 7 && minutes >= 0) || (hours < 8 || (hours === 8 && minutes <= 30))) {
      return 'Awake (Probably Free)';
    }
  
    // 8:30 AM to 3:40 PM -> awake (in school)
    if ((hours > 8 || (hours === 8 && minutes >= 30)) && (hours < 15 || (hours === 15 && minutes < 40))) {
      return 'Awake (In School)';
    }
  
    // 3:40 PM to 11:00 PM -> awake (probably free)
    return 'Awake (Probably Free)';
  }
  
  
  

const Contact = () => {
    const [lisbonTime, setLisbonTime] = useState<string>('');
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // Get Lisbon time with A.M./P.M.
      const lisbonFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/Lisbon',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setLisbonTime(lisbonFormatter.format(new Date()));

      // Get local time with A.M./P.M.
      const localFormatter = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setLocalTime(localFormatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);


  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("gabrieltoninilopes@gmail.com");
      setCopied(true);
      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };
  return (
    <div className="flex flex-row align-middle items-center justify-center h-full">
        <div className="border border-ext-500 rounded-3xl flex flex-col mt-12 w-11/12 sm:w-4/5 md:w-2/3 lg:w-3/5 h-[640px]">
            <div className="h-16 w-full bg-ext-500 bg-opacity-10 rounded-t-3xl justify-start items-center flex flex-row">
            <div className="flex justify-left items-left p-5 space-x-4">
      <button 
        className="w-5 h-5 bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300" 
        aria-label="Red Button"
      />
      <button 
        className="w-5 h-5 bg-yellow-400 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300" 
        aria-label="Yellow Button"
      />
      <button 
        className="w-5 h-5 bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300" 
        aria-label="Green Button"
      />
    </div>
                <div className="text-2xl text-neutral-900 ">Contact</div>
            </div>
            <div className="p-5 border-ext-500 border-t">
                <div className="flex flex-row px-20 py-5"><img src="/phone.png" height={"50px"} width={"50px"}/> <div className="text-4xl font-semibold ml-2">Get in touch</div></div>
                <div className="flex flex-col">
                    <div className="flex flex-row px-20">
                        <div className="flex flex-col w-32">
                            <div className="text-neutral-400 text-lg font-semibold">Your time:</div>
                            <div className="text-neutral-600 text-xl font-semibold">{localTime || 'Loading...'}</div>
                        </div>
                        <div className="flex flex-col w-32">
                            <div className="text-neutral-400 text-lg font-semibold">My time:</div>
                            <div className="text-neutral-600 text-xl font-semibold">{lisbonTime || 'Loading...'}</div>
                        </div>
                        <div className="flex flex-col w-56">
                            <div className="text-neutral-400 text-lg font-semibold">Status:</div>
                            <div className="text-neutral-600 text-xl font-semibold">{getStatusBasedOnTime(lisbonTime) || 'Loading...'}</div>
                        </div>
                    </div>
                </div>
                <div className="px-20 text-xl mt-6 text-neutral-800">
                    Want to get in touch, start a conversation? Send me a message over at LinkedIn or start with an email.
                </div>
                <div className="flex justify-center items-center my-4 mx-20 border border-ext-500">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50795.98223254702!2d-9.3447365!3d38.7125723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1694889594876!5m2!1sen!2sus"
        width="100%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
                <div className="flex flex-row px-20 justify-between">
                    <div className="p-0.5 hover:transform hover:perspective-[600px] hover:rotate-x-[-2.10476deg] hover:rotate-y-[0.555556deg] hover:scale-[1.05]   border-2 border-neutral-600 rounded-2xl">
                        <a target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/gabriel-gramicelli/" className="flex cursor-pointer flex-row rounded-xl bg-neutral-600 text-white p-3 items-center justify-center align-middle"> 
                        <img src="linkedin.png" className="invert brightness-200" height={"20px"} width={"20px"}/>
                        <div className="text-lg font-bold ml-2">in/gabriel-gramicelli</div>
                    </a>  </div>
                    <div className="p-0.5 ml-6 hover:transform hover:perspective-[600px] hover:rotate-x-[-2.10476deg] hover:rotate-y-[0.555556deg] hover:scale-[1.05]   border-2 border-neutral-600 rounded-2xl">
                        <a target="_blank" rel="noopener noreferrer"  href="https://github.com/y0n1n1/" className="flex cursor-pointer flex-row rounded-xl bg-neutral-600 text-white p-3 items-center justify-center align-middle"> 
                        <img src="github.png" className="" height={"20px"} width={"20px"}/>
                        <div className="text-lg font-bold ml-2">y0n1n1</div>
                    </a>  </div>
                    <div className="p-0.5  ml-6 hover:transform hover:perspective-[600px] hover:rotate-x-[-2.10476deg] hover:rotate-y-[0.555556deg] hover:scale-[1.05]   border-2 border-neutral-600 rounded-2xl">
                        
                    <a  target="_blank" onClick={handleCopy} rel="noopener noreferrer"  className=" flex cursor-pointer flex-row rounded-xl bg-neutral-600 text-white p-3 items-center justify-center align-middle"> 
                        {copied ? <MailCheck  strokeWidth={3} width={"20px"} height={"20px"} /> : <Mail width={"20px"} height={"20px"}  strokeWidth={3}/>}
                        {copied ? <div className=" absolute -mt-36 bg-neutral-50 text-neutral-800 rounded-md p-2">Copied</div> : <div></div>}
                        
                        <div className="text-lg font-bold ml-2">gabrieltoninilopes@gmail.com</div>
                    </a>  

                    </div>
                </div>
                
                <div>
                </div>
            </div>       
        </div>
    </div>
  )
}

export default Contact