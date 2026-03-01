import { useStore } from '../store';

export function NodeSubType({ label, id, field = 'inputType', value }) {
  const updateNodeField = useStore((s) => s.updateNodeField);

  const NODE_TYPES = {
    text: { label: 'Text' },
    dropdown: { label: 'Dropdown' },
    file: { label: 'File' },
  };

  return (
       <div
      style={{
        paddingTop: '12px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
    <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '12px',
          fontWeight: 500,
          color: '#374151',
        }}
      >
        <span>
          {label}
        </span>

        <span
          style={{
            background: '#e0e7ff',
            color: '#4338ca',
            fontSize: '12px',
            padding: '2px 4px',
            borderRadius: '4px',
            fontWeight: 500,
          }}
        >
          {value}
        </span>
      </div>

        <select
        value={value}
        onChange={(e) =>
            updateNodeField(id, field, e.target.value)
        }
        style={{
            width: '100%',
            padding: '4px',
            borderRadius: '4px',
            border: '1px solid #d1d5db',
            fontSize: '12px',
        }}
        >
        {Object.entries(NODE_TYPES).map(([key, config]) => (
            <option key={key} value={key}>
            {config.label}
            </option>
        ))}
        </select>
    </div>
  );
}