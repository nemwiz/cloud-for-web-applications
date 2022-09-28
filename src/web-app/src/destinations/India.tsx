import {FC} from 'react';
import Destination from './Destination';
import IndiaFlag from './india-flag.webp';

const indiaBio = `India, officially the Republic of India (Hindi: Bhārat Gaṇarājya), is a country in South Asia.
 It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world.
  Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east.
 In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar and Indonesia. `

const indiaAbout = `India has been a federal republic since 1950, governed in a democratic parliamentary system. 
It is a pluralistic, multilingual and multi-ethnic society. India's population grew from 361 million in 1951 to 1.211 billion in 2011. 
During the same time, its nominal per capita income increased from US$64 annually to US$1,498, and its literacy rate from 16.6% to 74%.
From being a comparatively destitute country in 1951, India has become a fast-growing major economy and a hub for information technology services, with an expanding middle class. 
It has a space programme which includes several planned or completed extraterrestrial missions. Indian movies, music, and spiritual teachings play an increasing role in global culture. 
India has substantially reduced its rate of poverty, though at the cost of increasing economic inequality. India is a nuclear-weapon state, which ranks high in military expenditure. 
It has disputes over Kashmir with its neighbours, Pakistan and China, unresolved since the mid-20th century. 
Among the socio-economic challenges India faces are gender inequality, child malnutrition, and rising levels of air pollution. India's land is megadiverse, with four biodiversity hotspots. Its forest cover comprises 21.7% of its area.
India's wildlife, which has traditionally been viewed with tolerance in India's culture, is supported among these forests, and elsewhere, in protected habitats. `

const India: FC = () => {
    return (
        <Destination name={'India'}
                     imgSrc={IndiaFlag}
                     imgAlt={'India flag'}
                     firstParagraph={indiaBio}
                     secondParagraph={indiaAbout}/>
    )
}

export default India;