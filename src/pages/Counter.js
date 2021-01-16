import { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  function handleClick(e) {
    if (e.target.name === 'plus') {
      // plus number
      setNumber(number + 1);
    } else if (e.target.name === 'minus') {
      // minus number
      setNumber(number - 1);
    }
  }

  return (
    <>
      <h1>Counter!</h1>
      <h4>{number}</h4>
      <button
        type="button"
        name="plus"
        onClick={handleClick}
        className="mx-2 px-2 py-1 border"
      >
        +1
      </button>
      <button
        type="button"
        name="minus"
        onClick={handleClick}
        className="mx-2 px-2 py-1 border"
      >
        -1
      </button>
    </>
  );
}

export default Counter;
