export default function Footer() {
  return (
    <footer className="border-t border-stone-200 px-6 md:px-10 lg:px-16 py-8 mt-auto">
      {/* Desktop footer */}
      <div className="hidden md:flex flex-row justify-between items-center">
        <p className="font-display text-stone-800 text-sm font-light tracking-wide">
          William Stewart-Blacker
        </p>
        <div className="flex gap-8">
          <a href="mailto:wdstewartblacker@gmail.com" className="footer-link hover:text-stone-900 transition-colors">
            wdstewartblacker@gmail.com
          </a>
          <a href="tel:07746194738" className="footer-link hover:text-stone-900 transition-colors">
            07746194738
          </a>
        </div>
      </div>
      {/* Mobile footer — email left, phone right, no name */}
      <div className="flex md:hidden flex-row justify-between items-center">
        <a href="mailto:wdstewartblacker@gmail.com" className="footer-link hover:text-stone-900 transition-colors">
          wdstewartblacker@gmail.com
        </a>
        <a href="tel:07746194738" className="footer-link hover:text-stone-900 transition-colors">
          07746194738
        </a>
      </div>
    </footer>
  );
}
