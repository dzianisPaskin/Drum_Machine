import { useState, useEffect, useRef } from 'react';

const DrumPad = ({ letter, src, id, handleDrumPad, power, volume }) => {
  const [isClicked, setIsClicked] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleKeyDown = (event) => {
    if (event.key.toLowerCase() === letter.toLowerCase()) {
      power ? audioRef.current.play() : (audioRef.current.currentTime = 0);
      handleDrumPad(id);
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 150);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleClick = () => {
    power ? audioRef.current.play() : (audioRef.current.currentTime = 0);
    handleDrumPad(id);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);
  };

  const buttonStyles = 'shadow-none bg-teal-400';

  return (
    <div
      className={`drum-pad shadow-md ${
        isClicked ? buttonStyles : 'shadow-black bg-slate-400'
      }  cursor-pointer pt-10  rounded`}
      onClick={handleClick}
      id={id}
    >
      <audio className="clip" id={letter} ref={audioRef} src={src}>
        {' '}
      </audio>
      {letter}
    </div>
  );
};

export default DrumPad;
