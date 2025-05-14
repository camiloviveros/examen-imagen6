import React from 'react';

export default function AirlineTicket() {
  return (
    <div className="flex flex-col w-full max-w-xs mx-auto overflow-hidden rounded-md shadow-xl">
      {/* Header - Purple Section */}
      <div className="bg-[#560D40] text-white p-6 pb-4 relative">
        <div className="absolute top-6 left-6">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* Flight Route Info */}
        <div className="flex items-center justify-between mt-10">
          <div className="text-xl font-bold">LHR</div>
          <div className="mx-2 flex-1 flex justify-center">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="17" stroke="white" strokeWidth="1.5"/>
              <g transform="rotate(90, 18, 18)">
                <path d="M18 7l-3 7h6l-3-7z" fill="white"/>
                <path d="M18 29l-3-7h6l-3 7z" fill="white"/>
                <path d="M11 18h14" stroke="white" strokeWidth="1.5"/>
              </g>
            </svg>
          </div>
          <div className="text-xl font-bold">DXB</div>
        </div>
        
        {/* City Names */}
        <div className="flex justify-between text-xs mt-1 text-gray-300">
          <div>LONDON</div>
          <div>DUBAI</div>
        </div>
        
        {/* Airline */}
        <div className="text-center mt-10 mb-1 text-xs font-light tracking-wide">QATAR AIRWAYS</div>
      </div>
      
      {/* Ticket Details - White Section */}
      <div className="bg-white p-6">
        {/* Class and Times */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-left">
            <div className="text-2xl font-medium">3:40am</div>
          </div>
          
          <div className="flex items-center justify-center mx-4">
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6H38M38 6l-6 -4M38 6l-6 4" stroke="#000" strokeWidth="1" strokeOpacity="0.3"/>
            </svg>
          </div>
          
          <div className="text-right">
            <div className="text-xs text-gray-500 mb-1">Business</div>
            <div className="text-2xl font-medium">1:15pm</div>
          </div>
        </div>
        
        {/* Boarding Info */}
        <div className="flex justify-between mb-6">
          <div>
            <div className="text-xs text-gray-500">Boarding</div>
            <div className="text-sm font-medium">January 17, 2015</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-medium">3:00am</div>
          </div>
        </div>
        
        {/* Flight Info */}
        <div className="flex justify-between mb-8">
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
          <svg className="w-full h-10" viewBox="0 0 200 40">
            <rect x="0" y="0" width="1" height="40" fill="black" />
            <rect x="3" y="0" width="2" height="40" fill="black" />
            <rect x="7" y="0" width="1" height="40" fill="black" />
            <rect x="10" y="0" width="3" height="40" fill="black" />
            <rect x="15" y="0" width="1" height="40" fill="black" />
            <rect x="18" y="0" width="2" height="40" fill="black" />
            <rect x="22" y="0" width="1" height="40" fill="black" />
            <rect x="25" y="0" width="3" height="40" fill="black" />
            <rect x="30" y="0" width="1" height="40" fill="black" />
            <rect x="33" y="0" width="2" height="40" fill="black" />
            <rect x="37" y="0" width="1" height="40" fill="black" />
            <rect x="40" y="0" width="3" height="40" fill="black" />
            <rect x="45" y="0" width="1" height="40" fill="black" />
            <rect x="48" y="0" width="2" height="40" fill="black" />
            <rect x="52" y="0" width="1" height="40" fill="black" />
            <rect x="55" y="0" width="3" height="40" fill="black" />
            <rect x="60" y="0" width="1" height="40" fill="black" />
            <rect x="63" y="0" width="2" height="40" fill="black" />
            <rect x="67" y="0" width="1" height="40" fill="black" />
            <rect x="70" y="0" width="3" height="40" fill="black" />
            <rect x="75" y="0" width="1" height="40" fill="black" />
            <rect x="78" y="0" width="2" height="40" fill="black" />
            <rect x="82" y="0" width="1" height="40" fill="black" />
            <rect x="85" y="0" width="3" height="40" fill="black" />
            <rect x="90" y="0" width="1" height="40" fill="black" />
            <rect x="93" y="0" width="2" height="40" fill="black" />
            <rect x="97" y="0" width="1" height="40" fill="black" />
            <rect x="100" y="0" width="3" height="40" fill="black" />
            <rect x="105" y="0" width="1" height="40" fill="black" />
            <rect x="108" y="0" width="2" height="40" fill="black" />
            <rect x="112" y="0" width="1" height="40" fill="black" />
            <rect x="115" y="0" width="3" height="40" fill="black" />
            <rect x="120" y="0" width="1" height="40" fill="black" />
            <rect x="123" y="0" width="2" height="40" fill="black" />
            <rect x="127" y="0" width="1" height="40" fill="black" />
            <rect x="130" y="0" width="3" height="40" fill="black" />
            <rect x="135" y="0" width="1" height="40" fill="black" />
            <rect x="138" y="0" width="2" height="40" fill="black" />
            <rect x="142" y="0" width="1" height="40" fill="black" />
            <rect x="145" y="0" width="3" height="40" fill="black" />
            <rect x="150" y="0" width="1" height="40" fill="black" />
            <rect x="153" y="0" width="2" height="40" fill="black" />
            <rect x="157" y="0" width="1" height="40" fill="black" />
            <rect x="160" y="0" width="3" height="40" fill="black" />
            <rect x="165" y="0" width="1" height="40" fill="black" />
            <rect x="168" y="0" width="2" height="40" fill="black" />
            <rect x="172" y="0" width="1" height="40" fill="black" />
            <rect x="175" y="0" width="3" height="40" fill="black" />
            <rect x="180" y="0" width="1" height="40" fill="black" />
            <rect x="183" y="0" width="2" height="40" fill="black" />
            <rect x="187" y="0" width="1" height="40" fill="black" />
            <rect x="190" y="0" width="3" height="40" fill="black" />
            <rect x="195" y="0" width="1" height="40" fill="black" />
            <rect x="198" y="0" width="2" height="40" fill="black" />
          </svg>
        </div>
      </div>
    </div>
  );
}