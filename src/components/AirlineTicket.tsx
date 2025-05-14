import React from 'react';

const AirlineTicket: React.FC = () => {
  return (
    <div className="w-64 mx-auto overflow-hidden rounded-md shadow-md">
      {/* Sección superior morada */}
      <div className="bg-[#560D40] text-white p-5 relative">
        {/* Flecha de retroceso */}
        <div className="absolute top-5 left-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* Códigos de aeropuerto con el ícono de avión en el medio */}
        <div className="flex items-center justify-between mt-2 mb-6">
          <div>
            <div className="text-2xl font-bold">LHR</div>
            <div className="text-xs">LONDON</div>
          </div>
          
          {/* Ícono de avión en círculo */}
          <div className="mx-4">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="17" stroke="white" strokeWidth="1.5"/>
              <path d="M18 9L21 17H15L18 9Z" fill="white"/>
              <path d="M18 27L15 19H21L18 27Z" fill="white"/>
              <path d="M9 18H27" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          
          <div>
            <div className="text-2xl font-bold">DXB</div>
            <div className="text-xs">DUBAI</div>
          </div>
        </div>
        
        {/* Qatar Airways */}
        <div className="text-center text-xs tracking-wide">QATAR AIRWAYS</div>
      </div>
      
      {/* Sección inferior blanca */}
      <div className="bg-white p-5">
        {/* Horarios y clase */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-left">
            <div className="text-2xl font-bold">3:40am</div>
          </div>
          
          <div className="flex-1 flex justify-center px-2">
            <svg width="40" height="8" viewBox="0 0 40 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 4H38M38 4L34 1M38 4L34 7" stroke="#000000" strokeWidth="1" strokeOpacity="0.3"/>
            </svg>
          </div>
          
          <div className="text-right">
            <div className="text-xs text-gray-400 mb-1">Business</div>
            <div className="text-2xl font-bold">1:15pm</div>
          </div>
        </div>
        
        {/* Información de embarque */}
        <div className="flex justify-between mb-5">
          <div>
            <div className="text-xs text-gray-400">Boarding</div>
            <div className="text-base">January 17, 2015</div>
          </div>
          <div className="text-right">
            <div className="text-base">3:00am</div>
          </div>
        </div>
        
        {/* Información de vuelo, puerta y asiento */}
        <div className="flex justify-between mb-8">
          <div>
            <div className="text-xs text-gray-400">Flight</div>
            <div className="text-base font-medium">BAW31</div>
          </div>
          
          <div>
            <div className="text-xs text-gray-400">Gate</div>
            <div className="text-base font-medium">E30</div>
          </div>
          
          <div>
            <div className="text-xs text-gray-400">Seat</div>
            <div className="text-base font-medium">21a</div>
          </div>
        </div>
        
        {/* Código de barras */}
        <div className="w-full flex justify-center">
          <svg className="w-full h-12" viewBox="0 0 180 40">
            {Array.from({ length: 40 }).map((_, i) => (
              <rect 
                key={i} 
                x={i * 4.5} 
                y="0" 
                width="1.5" 
                height="40" 
                fill="black" 
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AirlineTicket;