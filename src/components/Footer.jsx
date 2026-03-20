const Footer = () => {
  return (
    <footer className="w-screen bg-eid-green py-6 text-blue-50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm font-light">
            Made with ❤️ by <span className="text-yellow-300 font-semibold">Ahmed Abbasi</span>
          </p>
          <p className="text-xs opacity-70 mt-1">
            B23110006007 | UBIT Karachi University
          </p>
        </div>

        <div className="flex items-center gap-2">
          <svg className="w-6 h-6" viewBox="0 0 50 50">
            <path
              d="M25 2 A23 23 0 1 1 25 48 A18 18 0 1 0 25 2"
              fill="#D4AF37"
            />
          </svg>
          <span className="text-yellow-300 font-semibold" style={{ fontFamily: 'serif' }}>
            عید مبارک ۲۰۲۶
          </span>
        </div>

        <p className="text-center text-xs font-light md:text-right opacity-70">
          BSCS 3rd Year | 5th Semester
        </p>
      </div>
    </footer>
  );
};

export default Footer;