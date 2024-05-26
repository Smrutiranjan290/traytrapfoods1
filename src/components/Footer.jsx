const Footer = () => {
  return (
    <footer className="bg-[#222] text-white flex flex-col justify-center items-center">
      <div className="flex justify-end items-center w-full font-semibold text-sm gap-4 px-4">
        Follow Us:
        <a href="https://www.instagram.com/tray_trap_foods/">
          <img
            src="src/assets/instagram.svg"
            width="32px"
            height="32px"
            alt="insta"
          />
        </a>
        <a href="https://wa.me/9439388655">
          <img
            src="src/assets/whatsapp-50.png"
            width="32px"
            height="32px"
            alt="whatsapp"
          />
        </a>
      </div>
      <br />
      <div>© 2023 Tray trap - All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
