import { useState } from "react";

const Checkd = () => {
  const [checkedState, setCheckedState] = useState({ one: false, two: false });

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setCheckedState((prevState) => ({ ...prevState, [name]: checked }));
  };

  return (
    <form>
      <label>
        <input
          type="checkbox"
          name="one"
          checked={checkedState.one}
          onChange={handleChecked}
        />
        <p>One</p>
      </label>
      <label>
        <input
          type="checkbox"
          name="two"
          checked={checkedState.two}
          onChange={handleChecked}
        />
        <p>Two</p>
      </label>
    </form>
  );
};

export default Checkd;
