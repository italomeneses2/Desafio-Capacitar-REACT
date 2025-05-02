
import React from 'react';

const FlexboxHome = ({ itens, gap = '13px', backgroundColor = 'lightgray' }) => {
  return (
    <div style={{ backgroundColor, border: '2px solid black', padding: '10px 0' }}>
      <div style={{ display: 'flex', gap: gap, justifyContent: 'flex-end', alignItems: 'center' }}>
        {itens.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default FlexboxHome;