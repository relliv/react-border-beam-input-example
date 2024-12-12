import { useState } from 'react';
import { BorderBeam } from '@stianlarsen/border-beam';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onTextChange = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="beam-input-container">
        {isLoading && (
          <BorderBeam
            size={50}
            duration={5}
            colorFrom="yellow"
            colorTo="orange"
            anchor={120}
          />
        )}

        <input onChange={onTextChange} placeholder="Type anything..." />
      </div>

      <button onClick={() => setIsLoading(!isLoading)}>
        {isLoading ? 'Stop' : 'Start'}
      </button>
    </>
  );
}

export default App;
