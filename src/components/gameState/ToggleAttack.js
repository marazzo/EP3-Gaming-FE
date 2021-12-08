import React, {useState} from 'react';

const Toggle = ({ handleClick }) => {

  const [isAttacking, setIsAttacking] = useState(false);

  const toggleImage = () => {
    setIsAttacking(!isAttacking);
    handleClick()
  }

  const heroImage = isAttacking? image1 : image2;
  return (
    <div>
      <div onClick={toggleImage}>
        <img alt='hero' src={heroImage} />
      </div>
    </div>
  )
}