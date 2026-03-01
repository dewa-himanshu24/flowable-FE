// nodes/BaseNode.js

import { Handle, Position } from 'reactflow';

const BaseNode = ({ id, label, children, minWidth=300, minHeight, inputs = [], outputs = [], nodeType='regular' }) => {

  const generateHandles = (items, type, position) =>
  items.map((name, idx) => ({
    id: name,
    type,
    position,
    style: {
      top:
        items.length === 1
          ? '50%'
          : `${((idx + 1) * 100) / (items.length + 1)}%`,
    },
  }));

  const inputHandles = generateHandles(inputs, 'target', Position.Left);
  const outputHandles = generateHandles(outputs, 'source', Position.Right);

  function nodeStyle() {
    if (nodeType === 'regular') {
      return {
        minWidth: minWidth,
        minHeight: minHeight,
        border: '2px solid #6366f1',
        borderRadius: '8px',
        background: '#fff',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
      }
    }
  }

  return (
    <div style={nodeStyle()}>
      <div style={{ flexGrow: 1 }}>
        {children}
      </div>

      {[...inputHandles, ...outputHandles].map((h, idx) => (
        <Handle
          key={`${id}-${h.id}`}
          type={h.type}
          position={h.position}
          id={`${id}-${h.id}`}
          style={{ 
            background: '#6366f1', 
            width: '8px', 
            height: '8px',
            ...h.style 
          }}
        />
      ))}
    </div>
  );
};

export default BaseNode;