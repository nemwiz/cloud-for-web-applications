import {FC} from 'react';
import Destination from './Destination';
import JapanFlag from './japan-flag.png';

const japanBio = `Japan (Japanese: 日本, Nippon or Nihon, and formally 日本国) is an island country in East Asia. 
It is situated in the northwest Pacific Ocean, and is bordered on the west by the Sea of Japan, while extending from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south. 
Japan is a part of the Ring of Fire, and spans an archipelago of 6852 islands covering 377,975 square kilometers (145,937 sq mi); the five main islands are Hokkaido, Honshu (the "mainland"), Shikoku, Kyushu, and Okinawa. 
Tokyo is the nation's capital and largest city; other major cities include Yokohama, Osaka, Nagoya, Sapporo, Fukuoka, Kobe, and Kyoto.`

const japanAbout = `Japan is a great power and a member of numerous international organizations, including the United Nations (since 1956), the OECD, the G20 and the Group of Seven. 
Although it has renounced its right to declare war, the country maintains Self-Defense Forces that rank as one of the world's strongest militaries.
 After World War II, Japan experienced record growth in an economic miracle, becoming the second-largest economy in the world by 1972 but has stagnated since 1995 in what is referred to as the Lost Decades. 
 As of 2021, the country's economy is the third-largest by nominal GDP and the fourth-largest by PPP. 
 Ranked "very high" on the Human Development Index, Japan has one of the world's highest life expectancies, though it is experiencing a decline in population.
  A global leader in the automotive, robotics and electronics industries, Japan has made significant contributions to science and technology. 
The culture of Japan is well known around the world, including its art, cuisine, music, and popular culture, which encompasses prominent comic, animation and video game industries. `

const Japan: FC = () => {
    return (
        <Destination name={'Japan'}
                     imgSrc={JapanFlag}
                     imgAlt={'Japan flag'}
                     firstParagraph={japanBio}
                     secondParagraph={japanAbout}/>
    )
}

export default Japan;