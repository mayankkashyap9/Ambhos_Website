import styles from './cards.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from './card';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 2000, min: 1000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 1000, min: 824 },
    items: 1
  }

};
function History(){
  return (

    <>
    
    <h1> History </h1>
    <Carousel className={styles.card_style} responsive={responsive}>
        <Cards imgscr="images/image 78.jpg" classes="Apurva Yoga Classes" specialisation="specialisation(if any)" provided="provided by" name="Atul Kumar" date="22 Dec 2020-"/>
        <Cards imgscr="images/image 79.jpg" classes="Apurva Yoga Classes" specialisation="specialisation(if any)" provided="provided by" name="Atul Kumar" date="22 Dec 2020-"/>
        <Cards imgscr="images/image 75.jpg" classes="Apurva Yoga Classes" specialisation="specialisation(if any)"  provided="provided by" name="Atul Kumar" date="22 Dec 2020-"/>
        <Cards imgscr="images/image 76.jpg" classes="Apurva Yoga Classes" specialisation="specialisation(if any)" provided="provided by" name="Atul Kumar" date="22 Dec 2020-"/>
        <Cards imgscr="images/image 75-1.jpg" classes="Apurva Yoga Classes" specialisation="specialisation(if any)" provided="provided by" name="Atul Kumar" date="22 Dec 2020-"/>
        <Cards imgscr="images/image 84.jpg" classes="Apurva Yoga Classes" specialisation="specialisation(if any)" provided="provided by" name="Atul Kumar" date="22 Dec 2020-"/>
        <Cards imgscr="images/image 75-3.jpg" classes="Apurva Yoga Classes" specialisation="specialisation(if any)" provided="provided by" name="Atul kumar" date="22 Dec 2020-"/>
    </Carousel>


    </>
  )
}

export default History;
