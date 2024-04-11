import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Sidebar from '../Sidebar'
import { IconSearch,IconMessageCircle ,IconDots} from '@tabler/icons-react';

import './index.css'


const peopleList = [
  {
    id: 1,
    name: "John Doe",
    imgUrl: "https://characterai.io/i/200/static/avatars/uploaded/2023/9/19/IFQxaB9adKrQ11acblThhzG5zDl79sgDI76c_Le0SPE.webp?webp=true&anim=0",
    about: "Passionate about programming and technology.",
    likes: "35k" // Represents 35 thousand likes
  },
  {
    id: 2,
    name: "Jane Smith",
    imgUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/12/27/JfJTxjXaI0BeJ3RUu1z9RvPQPDO2TN_qZgLMInaRg8o.webp?webp=true&anim=0",
    about: "Nature enthusiast and outdoor adventurer.",
    likes: "43m" // Represents 43 million likes
  },
  {
    id: 3,
    name: "Alice Johnson",
    imgUrl: "https://characterai.io/i/200/static/avatars/uploaded/2023/12/14/DlB4wQMKUa70nOtyrDOLZeH3ORymUviw8ZZj0_tNHzQ.webp?webp=true&anim=0",
    about: "Art lover and aspiring painter.",
    likes: "10k" // Represents 10 thousand likes
  },
  {
    id: 1,
    name: "John Doe",
    imgUrl: "https://characterai.io/i/200/static/avatars/uploaded/2023/9/19/IFQxaB9adKrQ11acblThhzG5zDl79sgDI76c_Le0SPE.webp?webp=true&anim=0",
    about: "Passionate about programming and technology.",
    likes: "35k" // Represents 35 thousand likes
  },
  {
    id: 2,
    name: "Jane Smith",
    imgUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/12/27/JfJTxjXaI0BeJ3RUu1z9RvPQPDO2TN_qZgLMInaRg8o.webp?webp=true&anim=0",
    about: "Nature enthusiast and outdoor adventurer.",
    likes: "43m" // Represents 43 million likes
  },
  {
    id: 3,
    name: "Alice Johnson",
    imgUrl: "https://characterai.io/i/200/static/avatars/uploaded/2023/12/14/DlB4wQMKUa70nOtyrDOLZeH3ORymUviw8ZZj0_tNHzQ.webp?webp=true&anim=0",
    about: "Art lover and aspiring painter.",
    likes: "10k" // Represents 10 thousand likes
  },
  {
    id: 1,
    name: "John Doe",
    imgUrl: "https://characterai.io/i/200/static/avatars/uploaded/2023/9/19/IFQxaB9adKrQ11acblThhzG5zDl79sgDI76c_Le0SPE.webp?webp=true&anim=0",
    about: "Passionate about programming and technology.",
    likes: "35k" // Represents 35 thousand likes
  },
  {
    id: 2,
    name: "Jane Smith",
    imgUrl: "https://characterai.io/i/200/static/avatars/uploaded/2022/12/27/JfJTxjXaI0BeJ3RUu1z9RvPQPDO2TN_qZgLMInaRg8o.webp?webp=true&anim=0",
    about: "Nature enthusiast and outdoor adventurer.",
    likes: "43m" // Represents 43 million likes
  },
  {
    id: 3,
    name: "Alice Johnson",
    imgUrl: "https://characterai.io/i/200/static/avatars/uploaded/2023/12/14/DlB4wQMKUa70nOtyrDOLZeH3ORymUviw8ZZj0_tNHzQ.webp?webp=true&anim=0",
    about: "Art lover and aspiring painter.",
    likes: "10k" // Represents 10 thousand likes
  },
];

export default function Home() {
    const [isOpen, setIsOpen] = React.useState(true);
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
  return (
    <>

     <div  className={`home-section ${isOpen ? '' : 'expanded'}`}>
     <div className='home-container'>
<div className='name-search-container'>
    <div className='home-name-container'>
        <p>Welcome back,</p>
        <div className='home-name-logo-container'>
  <div className='home-name-logo'>
    <span>O</span>
  </div>
   <p className='h-name'> Omprakash</p>
   </div>
    </div>
    <div className='search-container'>
        <IconSearch color='#a2a2ac'  size={16} />
        <input type="text" placeholder='Search for Characters'/>
       
    </div>
  </div>

  {/*<Slider {...settings}>
            {peopleList.map(person => (
              <div key={person.id} className='for-you-bg-card'>
              <div  className='for-you-card'>
                <img src={person.imgUrl} alt={person.name} />
                <div className='for-you-card-info'>
                <h2>{person.name}</h2>
                <p>{person.about}</p>
                <div className=''>
  <div>
    <IconMessageCircle color='#a2a2ac'  size={16} />
    <span className='likes'>  {person.likes}</span>
  </div>
  <IconDots color='#a2a2ac'  size={16} className='dots-icon'/>
                </div>
              
                </div>
                </div>
              
              </div>
            ))}
          </Slider>*/}

</div>
     </div>
    </>
  )
}
