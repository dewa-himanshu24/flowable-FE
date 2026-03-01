import { useState, useEffect } from 'react';
import { useStore } from '../store';

export function NodeCounter({ id, field='inputName', counterName, disabled }) {
  const updateNodeField = useStore((state) => state.updateNodeField);

  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(counterName);

  useEffect(() => {
    setValue(counterName);
  }, [counterName]);

  const handleSave = () => {
    setIsEditing(false);
    updateNodeField(id, field, value);
  };

  return (
    <div
      style={{
        background: '#e5e7eb',
        borderRadius: '3px',
        padding: '4px',
        fontSize: '12px',
        fontWeight: '500',
        color: '#4b5563',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '60px',
        cursor: 'pointer',
      }}
      onDoubleClick={() => !disabled && setIsEditing(true)}
    >
      {isEditing ? (
        <input
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSave();
            if (e.key === 'Escape') {
              setValue(counterName);
              setIsEditing(false);
            }
          }}
          style={{
            fontSize: '12px',
            border: 'none',
            outline: 'none',
            background: 'transparent',
            textAlign: 'center',
            width: '100%',
          }}
          disabled={disabled}
        />
      ) : (
        value
      )}
    </div>
  );
}