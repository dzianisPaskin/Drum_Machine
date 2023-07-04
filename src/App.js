import { useState } from 'react';
import DrumPad from './DrumPad';

const heaterKit = {
  'Heater-1': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  'Heater-2': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  'Heater-3': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  'Heater-4': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  Clap: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  'Open-HH': 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  "Kick-n'-Hat": 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  Kick: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  'Closed-HH': 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
};

const pianoKit = {
  'Chord-1': 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  'Chord-2': 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  'Chord-3': 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  Shaker: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  'Open-HH': 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  'Closed-HH': 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  'Punchy-Kick':
    'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  'Side-Stick': 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  Snare: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
};

const App = () => {
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(0.26);
  const [isBank, isSetBank] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const handleDrumPad = (drumPad) => {
    power ? setDisplayText(drumPad) : setDisplayText('');
  };

  const handleSwitchPower = () => {
    if (power) {
      setPower(false);
    } else {
      setPower(true);
    }
  };

  const handleSwitchBank = () => {
    if (power) {
      if (isBank) {
        isSetBank(false);
        setDisplayText('Heater Kit');
      } else {
        isSetBank(true);
        setDisplayText('Smooth Piano Kit');
      }
    } else {
      setDisplayText('');
    }
  };

  const handleVolume = (e) => {
    if (power) {
      setVolume(e.target.value);
      setDisplayText(
        `Volume: ${parseFloat((e.target.value * 100).toFixed(0))}`
      );
    }
    setTimeout(() => {
      setDisplayText('');
    }, 400);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="outline-double outline-3 outline-offset-2 outline-gray-300 rounded relative  max-w-2xl flex text-center items-center"
        id="drum-machine"
      >
        <div className="w-80 h-80 m-5 grid grid-cols-3 gap-1.5 text-center ">
          <DrumPad
            power={power}
            id={isBank ? 'Chord-1' : 'Heater-1'}
            handleDrumPad={handleDrumPad}
            letter="Q"
            volume={volume}
            src={isBank ? pianoKit['Chord-1'] : heaterKit['Heater-1']}
          />
          <DrumPad
            power={power}
            id={isBank ? 'Chord-2' : 'Heater-2'}
            handleDrumPad={handleDrumPad}
            letter="W"
            volume={volume}
            src={isBank ? pianoKit['Chord-2'] : heaterKit['Heater-2']}
          />
          <DrumPad
            power={power}
            id={isBank ? 'Chord-3' : 'Heater-3'}
            handleDrumPad={handleDrumPad}
            letter="E"
            volume={volume}
            src={isBank ? pianoKit['Chord-3'] : heaterKit['Heater-3']}
          />
          <DrumPad
            power={power}
            id={isBank ? 'Shaker' : 'Heater-4'}
            handleDrumPad={handleDrumPad}
            letter="A"
            volume={volume}
            src={isBank ? pianoKit['Shaker'] : heaterKit['Heater-4']}
          />
          <DrumPad
            power={power}
            id={isBank ? 'Open-HH' : 'Clap'}
            handleDrumPad={handleDrumPad}
            letter="S"
            volume={volume}
            src={isBank ? pianoKit['Open-HH'] : heaterKit['Clap']}
          />
          <DrumPad
            power={power}
            id={isBank ? 'Closed-HH' : 'Open-HH'}
            handleDrumPad={handleDrumPad}
            letter="D"
            volume={volume}
            src={isBank ? pianoKit['Closed-HH'] : heaterKit['Open-HH']}
          />
          <DrumPad
            power={power}
            id={isBank ? 'Punchy-Kick' : "Kick-n'-Hat"}
            handleDrumPad={handleDrumPad}
            letter="Z"
            volume={volume}
            src={isBank ? pianoKit['Punchy-Kick'] : heaterKit["Kick-n'-Hat"]}
          />
          <DrumPad
            power={power}
            id={isBank ? 'Side-Stick' : 'Kick'}
            handleDrumPad={handleDrumPad}
            letter="X"
            volume={volume}
            src={isBank ? pianoKit['Side-Stick'] : heaterKit['Kick']}
          />
          <DrumPad
            power={power}
            id={isBank ? 'Share' : 'Closed-HH'}
            handleDrumPad={handleDrumPad}
            letter="C"
            volume={volume}
            src={isBank ? pianoKit['Share'] : heaterKit['Closed-HH']}
          />
        </div>

        <div className="controls-container flex flex-col items-center w-60 h-[13rem]">
          <div className="control w-24 m-auto">
            <p className="font-extrabold">Power</p>
            <div
              className="m-auto border border-black border-solid w-[54px] h-[23px] p-px bg-black"
              onClick={handleSwitchPower}
            >
              <div
                className={`w-6 h-[19px] cursor-pointer bg-sky-600 ${
                  power ? 'float-right' : 'float-left'
                }`}
              ></div>
            </div>
          </div>
          <p id="display" className="w-[200px] h-[50px] p-3 bg-slate-400">
            {power ? displayText : ''}
          </p>
          <div className="volume-slider w-full">
            <input
              className="w-full my-3"
              max="1"
              min="0"
              step="0.01"
              type="range"
              value={volume}
              onChange={handleVolume}
              disabled={!power}
            />
          </div>
          <div className="control">
            <p className="font-extrabold">Bank</p>
            <div
              className="m-auto border border-black border-solid w-[54px] h-[23px] p-px bg-black"
              onClick={handleSwitchBank}
            >
              <div
                className={`w-6 h-[19px] cursor-pointer bg-sky-600 ${
                  isBank ? 'float-right' : 'float-left'
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
