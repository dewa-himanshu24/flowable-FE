// nodes/BaseNode.js

import { Handle } from 'reactflow';

const BaseNode = ({ id, label, children, minWidth = 200, minHeight = 80, handles = [] }) => {
  return (
    <div style={{
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
    }}>
      <div style={{ 
        borderBottom: '1px solid #e5e7eb', 
        paddingBottom: '4px',
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#4b5563'
      }}>
        <span>{label}</span>
      </div>
      
      <div style={{ flexGrow: 1 }}>
        {children}
      </div>

      {handles.map((h, idx) => (
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