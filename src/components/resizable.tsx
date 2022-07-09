import { ResizableBox } from 'react-resizable';
import './resizable.css';

interface ResizableProps {
    direction: 'vertical' | 'horizontal';
}

const Resizable: React.FC<ResizableProps> = ({direction, children}) => {
    return (

    <ResizableBox 
        height={Infinity} 
        width={Infinity} 
        resizeHandles={['s']}
        maxConstraints={[Infinity, window.innerHeight *0.9]}
        minConstraints={[Infinity, 24]}
        >
      {children}
    </ResizableBox>
    );
};

export default Resizable;