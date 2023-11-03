import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import { Container } from 'react-bootstrap';
const WebcamCapture = () => {
  const webcamRef = useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Aquí puedes manejar la imagen, por ejemplo, enviándola a un backend o guardándola localmente
    downloadImage(imageSrc);
  }, [webcamRef]);

  // Función para descargar la imagen como archivo
  const downloadImage = (imageSrc) => {
    const downloadLink = document.createElement('a');
    downloadLink.href = imageSrc;
    downloadLink.download = 'captured_image.jpg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className='p-5'>
      <Container className="mx-auto">
      <div className='mx-auto' style={{ width: '500px', height: '500px', overflow: 'hidden', borderRadius: '80%' }}>
        <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            style={{
                width: '500px', // Establecer el ancho deseado
                height: '500px', // Establecer el alto deseado
                borderRadius: '50%', // Hacerla ovalada
                // objectFit: 'cover', // Asegurar que el contenido se ajuste al contenedor
                position: "sticky"
            }}
            videoConstraints={{
                width: 1280,
                height: 720,
                facingMode: 'user',
            }}
        />
      </div>
      <div  className="text-center p-5">
      <button className="btn btn-primary" style={{ fontSize:"30px"}} onClick={capture}>Capturar Foto</button>
      </div>
      </Container>
    </div>
  );
};

export default WebcamCapture;