import React from 'react';
import { useNavigate } from 'react-router-dom';


const Splash = () => {
  return (
<div
      className="w-screen h-screen overflow-hidden"
    
    >     <img style={{width: "100vw", height: "100vh", left: 0, top: 0, position: 'absolute'}}  src="../src/assets/images/background.png" />

    {/* Container for text and logo overlay */}
    <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Logo Image */}
        <img
          style={{
            width: 727,
            height: 562,
            marginBottom: '310px', // Adjust margin to position the image close to the text
          }}
          src="../src/assets/images/logo.png"
          alt="Logo"
        />
      
      {/* Container for text overlay */}
      <div
        style={{
          width: '581px',
          height: '319px',
          left: '50%',
          top: '50%',
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div style={{ width: '486px', height: '195px', position: 'absolute' }}>
          <div
            style={{
              width: '128px',
              height: '195px',
              position: 'absolute',
              color: 'white',
              fontSize: '128px',
              fontFamily: 'Libre Baskerville, serif',
              fontWeight: '700',
              wordWrap: 'break-word',
            }}
          >
            R
          </div>
          <div
            style={{
              width: '128px',
              height: '195px',
              position: 'absolute',
              color: 'white',
              fontSize: '128px',
              fontFamily: 'Libre Baskerville, serif',
              fontWeight: '700',
              wordWrap: 'break-word',
              left: '86px',
            }}
          >
            e
          </div>
          <div
            style={{
              width: '128px',
              height: '195px',
              position: 'absolute',
              color: 'white',
              fontSize: '128px',
              fontFamily: 'Libre Baskerville, serif',
              fontWeight: '700',
              wordWrap: 'break-word',
              left: '160px',
            }}
          >
            g
          </div>
          <div
            style={{
              width: '128px',
              height: '195px',
              position: 'absolute',
              color: 'white',
              fontSize: '128px',
              fontFamily: 'Libre Baskerville, serif',
              fontWeight: '700',
              wordWrap: 'break-word',
              left: '228px',
            }}
          >
            e
          </div>
          <div
            style={{
              width: '128px',
              height: '195px',
              position: 'absolute',
              color: 'white',
              fontSize: '128px',
              fontFamily: 'Libre Baskerville, serif',
              fontWeight: '700',
              wordWrap: 'break-word',
              left: '302px',
            }}
          >
            n
          </div>
        </div>
        <div style={{width: 468, height: 195, left: 113, top: 134, position: 'absolute'}}>
        <div style={{width: 128, height: 195, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 128, fontFamily: 'Libre Baskerville', fontWeight: '700', wordWrap: 'break-word'}}>R</div>
        <div style={{width: 128, height: 195, left: 88, top: 0, position: 'absolute', color: 'white', fontSize: 128, fontFamily: 'Libre Baskerville', fontWeight: '700', wordWrap: 'break-word'}}>o</div>
        <div style={{width: 128, height: 195, left: 168,top: 0, position: 'absolute', color: 'white', fontSize: 128, fontFamily: 'Libre Baskerville', fontWeight: '700', wordWrap: 'break-word'}}>o</div>
        <div style={{width: 128, height: 195, left: 228, top: 0, position: 'absolute', color: 'white', fontSize: 128, fontFamily: 'Libre Baskerville', fontWeight: '700', wordWrap: 'break-word'}}>t</div>
        <div style={{width: 128, height: 195, left: 278, top: 0, position: 'absolute', color: 'white', fontSize: 128, fontFamily: 'Libre Baskerville', fontWeight: '700', wordWrap: 'break-word'}}>s</div>
    </div>
      </div>
      </div>
    </div>
  );
};

export default Splash;
