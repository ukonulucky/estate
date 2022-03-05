import React, { useState } from 'react'
import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap"
import styles from "../styles/Sliders.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link"
function Sliders() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval="5000" >
      <Carousel.Item className={ styles.item }>
        <div className={styles.pic}>
        <Image
          className="d-block w-100"
          src="/images/flat1/pic4.jpg"
          alt="Second slide"
            layout="fill"
            objectFit="cover"
       
        />   
          </div>
    

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.item}>
        <div className={styles.pic}>
        <Image
          className="d-block w-100"
          src="/images/flat1/pic6.jpg"
          alt="Second slide"
            layout="fill"
            objectFit="cover"
        
        />

        </div>
       

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles.item}>
        <div className={styles.pic}>
        <Image
          className="d-block w-100"
          src="/images/flat1/pic8.jpg"
          alt="Second slide"
            layout="fill"
            objectFit="cover"
        />
        </div>
        <Carousel.Caption>
        <h3> slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

    
      <Carousel.Item className={ styles.item }>
      <div className={styles.pic}>
        <Image
          className="d-block w-100"
          src="/images/flat1/pic2.jpg"
          alt="Second slide"
            layout="fill"
            objectFit="cover"
        
        />

        </div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={ styles.item }>
      <div className={styles.pic}>
        <Image
          className="d-block w-100"
          src="/images/flat1/pic3.jpg"
          alt="Second slide"
            layout="fill"
            objectFit="cover"
        
        />

        </div>

        <Carousel.Caption>
          <h3>Third slide label 3</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}




export default Sliders