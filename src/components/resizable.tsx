import { ResizableBox } from 'react-resizable';
import './resizable.css';

interface ResizableProps {
    direction: 'vertical' | 'horizontal';
}

const Resizable: React.FC<ResizableProps> = ({direction, children}) => {
    return (

    <ResizableBox height={Infinity} width={Infinity} resizeHandles={['s']}>{children}</ResizableBox>
    );
};

export default Resizable;