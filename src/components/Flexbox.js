
import React from 'react'; 

const Flexbox = ({ itens, gap = '13px', backgroundColor = 'lightgray' }) => {
  return (
    <div style={{ backgroundColor, border: '2px solid black', padding: '10px 0' }}>
      <div style={{ display: 'flex', gap: gap, justifyContent: 'center', alignItems: 'center' }}>
        {itens.map((item, index) => (
          <p key={index} >{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Flexbox;