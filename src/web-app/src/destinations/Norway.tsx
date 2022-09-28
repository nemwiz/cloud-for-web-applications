import {FC} from 'react';
import Destination from './Destination';
import NorwayFlag from './norway-flag.webp';

const norwayBio = `Norway, officially the Kingdom of Norway, is a Nordic country in Northern Europe, the mainland
                territory of which comprises the western and northernmost portion of the Scandinavian Peninsula. The
                remote Arctic island of Jan Mayen and the archipelago of Svalbard also form part of Norway.
                Bouvet Island, located in the Subantarctic, is a dependency of Norway; it also lays claims to the
                Antarctic territories of Peter I Island and Queen Maud Land. The capital and largest city in Norway is
                Oslo.`

const norwayAbout = `Norway maintains the Nordic welfare model with universal health care and a comprehensive social security
                system, and its values are rooted in egalitarian ideals. The Norwegian state has large ownership
                positions in key industrial sectors, having extensive reserves of petroleum, natural gas, minerals,
                lumber, seafood, and fresh water. The petroleum industry accounts for around a quarter of the country's
                gross domestic product (GDP). On a per-capita basis, Norway is the world's largest producer of oil
                and natural gas outside of the Middle East.`

const Norway: FC = () => {
    return (
        <Destination name={'Norway'}
                     imgSrc={NorwayFlag}
                     imgAlt={'Norway flag'}
                     firstParagraph={norwayBio}
                     secondParagraph={norwayAbout}/>
    )
}

export default Norway;