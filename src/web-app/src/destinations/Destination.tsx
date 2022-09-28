import {FC} from 'react';
import './Destination.css';

interface DestinationProps {
    name: string;
    imgSrc: string;
    imgAlt: string;
    firstParagraph: string;
    secondParagraph: string;
}

const Destination: FC<DestinationProps> = ({name, imgSrc, imgAlt, firstParagraph, secondParagraph}) => {
    return (
        <div className={'destination-container'}>
            <h1>{name}</h1>
            <img src={imgSrc} alt={imgAlt} className={'flag-container'}/>
            <p>{firstParagraph}</p>
            <p>{secondParagraph}</p>
        </div>
    )
}

export default Destination;