import styles from './menu.module.scss'

export default function Menu(){
  const options =[
    {
      url: "/icons/home.svg",
      alt: "Home",
      label: "INÍCIO"
    },
    {
      url: "/icons/search.svg",
      alt: "Search",
      label: "PESQUISA"
    },
    {
      url: "/icons/plus.svg",
      alt: "My-list",
      label: "MINHA LISTA"
    },
    {
      url: "/icons/star.svg",
      alt: "Originals",
      label: "ORIGINAIS"
    },
    {
      url: "/icons/movies.svg",
      alt: "Movies",
      label: "FILMES"
    },
    {
      url: "/icons/series.svg",
      alt: "Series",
      label: "SÉRIES"
    },
  ]
  return(
    <ul className={styles.menu}>
      {
        options.map(option => (
          <li key={option.label}>
            <div className={styles.menuItem}>
              <img src={option.url} alt={option.alt}/>
              <span>{option.label}</span>
            </div>
          </li>
        ))
      }
    </ul>
  )
}