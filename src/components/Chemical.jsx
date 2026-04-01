import React from 'react';

const Chemical = () => {
  const formulas = [
    <>4(MgCO<sub>3</sub>) · Mg(OH)<sub>2</sub> · 4H<sub>2</sub>O</>,
    <>MgCO<sub>3</sub> · 3H<sub>2</sub>O</>,
    <>Na<sub>2</sub>CO<sub>3</sub> · NaHCO<sub>3</sub> · 2H<sub>2</sub>O</>,
    <>Na<sub>2</sub>CO<sub>3</sub> · H<sub>2</sub>O</>
  ];

  return (
    <>
      {formulas.map((formula, index) => (
        <div key={index}>
          {formula}
        </div>
      ))}
    </>
  );
};

export default Chemical;