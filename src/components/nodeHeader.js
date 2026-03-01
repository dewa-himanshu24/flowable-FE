export function NodeHeader({ label }) {
    return (
        <div style={{ 
        borderBottom: '1px solid #e5e7eb', 
        paddingBottom: '4px',
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#4b5563',
        display: 'flex',
        alignItems: 'center',     
        justifyContent: 'center',  
      }}>
            <span >{label}</span>
        </div>
    );
}
