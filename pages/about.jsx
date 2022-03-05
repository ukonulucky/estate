import styles from "../styles/About.module.scss";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import AppsIcon from "@mui/icons-material/Apps";
function About() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperOuter}>
        <div className={styles.wrapper}>
          <div className={styles.pic}>
            <Image
              src="/images/flat1/pic8.jpg"
              layout="fill"
              quality="100"
              objectFit="cover"
              priority="true"
            />
          </div>
        </div>
        <div className={styles.content3}>
          <div className={styles.wrapper}>
            <h2>Who We ARE</h2>
            <div className={ styles.content4}>
            <div className={styles.item}>
                <span>
                 
                  <hr />
                </span>
                <span>
                 
                  <AppsIcon />
                </span>
                <span>
                 
                  <hr />
                </span>
              </div>
            
            </div>
            <div className={styles.text}>
              <p>
                We believe that our business is more than housing we are
                building lives & nations in Africa.
              </p>
            </div>
                </div>
            
         
          <div className={styles.wrapper}>
     <div className={styles.text}>
            <p>
                VicksHomes has built its reputation on the abilities to respond quickly
                to opportunities in the market place by selling of real estate as cost
                effective as possible while maintaining the highest level of service with a history of positive
                performance on behalf of our clients. <br />
                Our company is not confined by traditional real estate boundaries
                when it comes to buying, selling, and renting asset management, instead we are always
                coming up with new innovative ways to satisfy our client’s need and be the leading
                company in the real estate industry.  <br />
                Our team is hands-on when it comes to making sure
                that all our properties are in good condition,
                location and perfect view before showing it to the clients.
                We also work continually to interpret and act upon economic forces in the marketplace.
                And with every transaction, we stress on creative solving coupled with judicious
                application of sound real estate principles.
            </p>
            </div>
            <div className={styles.carousel}>
              <Carousel>
                <Carousel.Item>
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
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
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
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
                  </div>
         <div className={ styles.content2}>
                      <div className={styles.wrapper}>
                      <div className={styles.mission}>
                              <span>
                         <div className={ styles.pic }>
                          <Image src="/images/icons/diamondIcon.png" width="40px" height="40px" about="logo" />
                          </div>
                          </span>
                          <span>
                              <h2>Our Mission</h2>
                         </span>
                          <span>
                              <p>
                              "To be an outstanding real estate property management industry with authentic level of service on the basic of our core value of integrity and professionalism."
                            </p>
                          </span>
                    </div>
                      <div className={styles.vission}>
                              <span>
                                  <div className={ styles.pic }>
                              <Image src="/images/icons/rocketIcon.png" width="40px" height="40px" priority="true" quality="100" alt="logo" />
                              </div>
                          </span>
                          <span>
                              <h2>
                                  Our Vission
                              </h2>
                          </span>
                          <span>
                              <p>
                              "To be an outstanding real estate property management industry with authentic level of service on the basic of our core value of integrity and professionalism."
                              </p>
                          </span>
                      </div>
          </div>
         </div>
        <div className={styles.footer}>
          <h2>Our Values</h2>
          <span>
          </span>
          <p>
            Outlined below are the core values that drives our firm.
          </p>
          <div className={styles.value1}>
            <div className="list">
              <span>

              </span>
              <span>
                <h2></h2>
              </span>
            </div>
            <div className="list"></div>
            <div className="list"></div>

          </div>
          <div className={styles.value2}>
            <div className="list"></div>
            <div className="list"></div>
            <div className="list"></div>

          </div>
        </div>
      </div>

    </div>

  );
}

export default About;
