import styles from './styles.module.scss'

interface CardProps {
  src: string;
  blur_opacity: number;
}

export const Card = ({ src, blur_opacity }: CardProps) => (
  <span className={styles.card}>
    <img 
      className={styles.card__blur} 
      src={src} 
      alt="" 
      style={{ opacity: blur_opacity }} // Dynamically setting opacity here
    />
    <img className={styles.card__img} src={src} alt="" />
  </span>
);
