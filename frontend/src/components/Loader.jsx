import React from 'react';

const Loader = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
          }
          .pulsating-chain {
            animation: pulse 1.5s infinite ease-in-out;
            width: 80px;
            height: 80px;
            color: #343a40; /* Adjust color to match your theme */
            margin-bottom: 20px;
          }
        `}
      </style>
      
      {/* Chain Link SVG */}
      <svg
        className="pulsating-chain"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" 
        />
      </svg>
      
      <h5 className="text-muted mt-3">Please hang tight!</h5>
      <p className="text-muted">The server takes a minute to wake up.</p>
    </div>
  );
};

export default Loader;