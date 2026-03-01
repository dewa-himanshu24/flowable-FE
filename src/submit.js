// submit.js
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }), shallow);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes, edges })
            });

            const data = await response.json();
            
            // Requirements ask for a user-friendly alert
            alert(
                `Pipeline Analysis:\n` +
                `• Nodes: ${data.num_nodes}\n` +
                `• Edges: ${data.num_edges}\n` +
                `• Is DAG: ${data.is_dag ? '✅ Yes' : '❌ No (Cycles detected)'}`
            );
        } catch (error) {
            console.error("Submission failed:", error);
            alert("Error communicating with the backend.");
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <button 
                onClick={handleSubmit}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#6366f1',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
                type="button"
            >
                Submit Pipeline
            </button>
        </div>
    );
}