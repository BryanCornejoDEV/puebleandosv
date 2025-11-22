import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f0f2f0] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-300 pb-10">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
             <div className="w-6 h-6 rounded-full bg-primary" />
             <span className="font-bold text-dark text-xl">Puebleando SV</span>
          </div>
          <p className="text-gray-500 max-w-sm">
            Redefiniendo el turismo mediante el análisis de datos y la preservación activa. Tu próxima aventura está calculada a la perfección.
          </p>
        </div>
        
        <div>
          <h5 className="font-bold text-dark mb-4">Plataforma</h5>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a>Destinos</a></li>
            <li><a>Análisis de Riesgo</a></li>
            <li><a>Seguros</a></li>
            <li><a href="https://chat.whatsapp.com/J2EoX9TDcLH37pV4sicEmZ" target="_blank" rel="noopener noreferrer">Comunidad</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-dark mb-4">Legal</h5>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a>Términos</a></li>
            <li><a>Privacidad</a></li>
            <li><a>Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 flex justify-between items-center text-xs text-gray-400">
        <p>© 2025 Puebleando SV. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/puebleando_sv/" target='_blank' className="hover:underline">Instagram</a>
          <a href="https://www.facebook.com/p/Puebleando-SV-100084123681601/" target='_blank' className="hover:underline">Facebook</a>
          <a href="https://www.tiktok.com/@puebleandosv" target='_blank' className="hover:underline">Tiktok</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;