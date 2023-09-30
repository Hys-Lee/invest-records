import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="main">
        <div className="flex h-screen justify-center">
          <div className="hidden sm:flex bg-red-100 mr-4 w-[375px]">
            <div id="title">
              <h2>Am I in the red or the green?</h2>
              <h3>Get instant answers about your profits and losses.</h3>
              <div> Logo or Link .. </div>
            </div>
          </div>
          <div className="bg-red-200 py-[60px] rounded-xl w-[375px]">
            <div className="bg-neutral-300 h-full">Stock Contents</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
