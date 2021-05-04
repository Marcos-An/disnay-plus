import styles from './cards.module.scss'
import React from 'react'

type BackgroundProps = {
  image: string,
  alt: string
}

export function HomeCard({ image, alt }: BackgroundProps) {
  return (
    <img className={styles.homeCard} src={image} alt={alt} />
  )
}

export const BannerCard: React.FC<BackgroundProps> = ({ image }) => {
  return (
    <div>

    </div>
  )
}


export const BasicCard: React.FC<BackgroundProps> = ({ image }) => {
  return (
    <div>

    </div>
  )
}
