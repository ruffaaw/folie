function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full h-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-center py-2 bg-gray-dark px-4 sm:px-8 md:px-16">
          <p className="my-2 text-center md:text-left" id="footer-text">
            2025 Policrafts ©
          </p>
          <div className="text-center md:text-right">
            <p className="p-0 m-0" id="footer-text">
              Realizacja witryny: Rafał Ciupek
            </p>
            <p className="p-0 m-0" id="footer-text">
              Wizualizacje: Maciej Krzyszkowski
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
