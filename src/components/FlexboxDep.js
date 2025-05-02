
import React from 'react';

const FlexboxDep = ({ itens, gap = '13px', backgroundColor = 'lightgray' }) => {
  return (
    <div style={{ backgroundColor, border: '2px solid black', padding: '10px 0' }}>
      <div style={{ display: 'flex', gap: gap, justifyContent: 'center', alignItems: 'center' }}>
        {itens.map((item, index) => (
          <p key={index} style={{ backgroundColor: ['#f0f0f0', '#f0f0f0', '#f0f0f0'][index % 3], padding: '8px', borderRadius: '4px' }}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default FlexboxDep;