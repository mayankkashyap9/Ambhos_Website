import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import styles from './cards.module.css';


function Cards(props){
  return(
    <>

    <Card className={styles.main_card} >
      <Card.Img className={styles.card_img} variant="top" src={props.imgscr} /><hr/>
      <Card.Body>
        <Card.Title className={styles.card_title}>{props.classes} <span className={styles.stars}>⭐️ ⭐️ ⭐️ ⭐️</span></Card.Title>
          <Card.Text >{props.specialisation} <span className={styles.provided}>{props.provided}</span></Card.Text>
        <Card.Text> <i class="fas fa-clock"></i> {props.date}<span className={styles.continuing}>Continuing </span> <span className={styles.name}>{props.name}</span></Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}
export default Cards;
