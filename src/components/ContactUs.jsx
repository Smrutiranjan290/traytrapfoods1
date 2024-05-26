const ContactUs = () => {
  return (
    <section className="flex flex-col justify-around text-white bg-[#222] p-4">
      <div className="flex justify-between items-center w-full mb-4">
        <div>
          <div className="flex gap-4">
            <img src="src/assets/phone.svg" alt="phonesvg" />
            <p className="text-2xl font-bold">Call us</p>
          </div>
          <div>
            <p className="text-xl font-medium">+91 - 9439388655</p>
          </div>
        </div>
        <a href="https://wa.me/9439388655">
          <img
            src="src/assets/WhatsApp.svg.png"
            width="48px"
            height="48px"
            alt="whatsapp"
            className="cursor-pointer"
          />
        </a>
      </div>
      <hr />
      <div className="mt-2 mb-2">
        <div className="flex gap-2">
          <img src="src/assets/address.svg" alt="" />
          <p className="text-xl font-bold mb-2">Our Address</p>
        </div>
        <div>
          HIG 22, Housing Board Colony, Chandrasekharpur, Bhubaneswar, Odisha
        </div>
      </div>
      <div className="mt-2 mb-2 w-full">
        <p className="text-[#fec72f] font-bold text-2xl mb-1">We Delivery At</p>
        <div>
          <ul className="flex flex-wrap gap-4">
            <li>Patia</li>
            <li>Info City</li>
            <li>Niladri Bihar</li>
            <li>Jaydev Bihar</li>
            <li>Acharya Bihar</li>
            <li>Vani Bihar</li>
          </ul>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default ContactUs;
