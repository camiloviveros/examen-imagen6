import React from 'react';

const AirlineTicket: React.FC = () => {
  return (
    <div className="w-72 mx-auto overflow-hidden rounded-lg shadow-xl">
      {/* Header section with purple background */}
      <div className="bg-[#560D40] text-white p-5 relative">
        {/* Back arrow */}
        <div className="absolute top-5 left-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* Airport codes with airplane icon */}
        <div className="flex items-center justify-between mt-2 mb-4">
          <div className="text-left">
            <div className="text-xl font-bold">LHR</div>
            <div className="text-xs mt-1">LONDON</div>
          </div>
          
          {/* Airplane icon in circle */}
          <div className="mx-2">
            <div className="relative w-11 h-11">
              <div className="absolute inset-0 rounded-full border border-white flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6l2 5h-4l2-5z" fill="white"/>
                  <path d="M12 18l-2-5h4l-2 5z" fill="white"/>
                  <path d="M5 12h14" stroke="white" strokeWidth="1"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-xl font-bold">DXB</div>
            <div className="text-xs mt-1">DUBAI</div>
          </div>
        </div>
        
        {/* Qatar Airways */}
        <div className="text-center text-xs tracking-wide mb-1">QATAR AIRWAYS</div>
      </div>
      
      {/* Main content with white background */}
      <div className="bg-white p-5">
        {/* Times and flight class */}
        <div className="flex justify-between items-center mb-5">
          <div className="text-left">
            <div className="text-xl font-bold">3:40am</div>
          </div>
          
          <div className="flex-1 flex justify-center px-3 mx-2">
            <div className="w-full relative h-0.5">
              <div className="absolute inset-0 w-full bg-gray-300"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14m0 0l-4-4m4 4l-4 4" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-xs text-gray-500 mb-1">Business</div>
            <div className="text-xl font-bold">1:15pm</div>
          </div>
        </div>
        
        {/* Boarding information */}
        <div className="flex justify-between mb-4">
          <div>
            <div className="text-xs text-gray-500">Boarding</div>
            <div className="text-sm">January 17, 2015</div>
          </div>
          <div className="text-right">
            <div className="text-sm">3:00am</div>
          </div>
        </div>
        
        {/* Flight, gate and seat information */}
        <div className="flex justify-between mb-6">
          <div>
            <div className="text-xs text-gray-500">Flight</div>
            <div className="text-sm font-medium">BAW31</div>
          </div>
          
          <div>
            <div className="text-xs text-gray-500">Gate</div>
            <div className="text-sm font-medium">E30</div>
          </div>
          
          <div>
            <div className="text-xs text-gray-500">Seat</div>
            <div className="text-sm font-medium">21a</div>
          </div>
        </div>
        
        {/* Barcode */}
        <div className="w-full flex justify-center">
          <svg viewBox="0 0 200 40" className="w-full h-10">
            {[...Array(50)].map((_, i) => {
              const width = Math.random() < 0.5 ? 1 : 2;
              const gap = 2;
              const x = i * (width + gap);
              return (
                <rect 
                  key={i}
                  x={x}
                  y="0"
                  width={width}
                  height="40"
                  fill="black"
                />
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AirlineTicket;