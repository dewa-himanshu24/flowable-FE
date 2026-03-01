import BaseNode from './baseNode';

export const StartNode = ({ id }) => {
    return (
        <BaseNode 
          id={id}
          outputs={['start-output']}
          style={{ border: 'none', background: 'green', color: 'white', minWidth: '100px', padding: '2px', boxShadow: 'none', borderRadius: '12px' ,display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >    
            <div>Start</div>
        </BaseNode>
    );
} 

export const EndNode = ({ id }) => {
    return (
        <BaseNode 
          id={id}
          inputs={['end-input']}
          style={{ border: 'none', background: 'red', color: 'white', minWidth: '100px', padding: '2px', boxShadow: 'none', borderRadius: '12px' ,display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >    
            <div>End</div>
        </BaseNode>
    );
} 