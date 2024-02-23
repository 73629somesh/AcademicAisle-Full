
import FrontP from '../images/FrontP2.jpg'
import React, { useState, useEffect } from 'react';


function TopSlider() {

    const initialText = "Weelcome To Academic Aisle !!";
    const [text, setText] = useState('');
  
    useEffect(() => {
      let index = 0;
      const intervalId = setInterval(() => {
        setText((prevText) => prevText + initialText[index]);
        index++;
        if (index === initialText.length-1) {
          clearInterval(intervalId);
        }
      }, 150  ); 
     
      return () => clearInterval(intervalId);
    }, []);


  const textStyle = {
    
    position: 'absolute',
    top: '46%',
    left: '32%',
    transform: 'translate(-50%, -50%)',
    color: 'black',
    fontSize: '5em',
    fontWeight: 'bold',
    textAlign: 'left',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };


  return (
        <div> 
            <img
                        className="d-block w-100 h-30"
                        src={FrontP}
                        alt="Home Page"
                    style={{height:"700px",objectFit: 'cover'}}/>
                    <div style={textStyle}>
        {text}
      </div>         
</div>

     );
 }

 export default TopSlider;





