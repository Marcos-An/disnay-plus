import styles from './footer.module.scss'


export default function Footer({ background }) {
  return (
    <footer className={styles.footer} style={{ backgroundColor: background }}>
      <img src="/logo.svg" alt="logo" className={styles.logoFooter} />
      <ul>
        <li>Contrato de Assinatura</li>
        <li>Política de privacidade</li>
        <li>Proteção de Dados no Brasil</li>
        <li>Anúncios personalizados</li>
        <li>Dispositivos compativeis</li>
        <li>Ajuda</li>
        <li>Sobre o Disney+</li>
      </ul>

      <span>© 2021 Disney e seu grupo de empresas afiliadas. Todos os direitos reservados.</span>
      <span>
        Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e condições. O serviço Disney+ é comercializado por The Walt Disney Company (Brasil) Ltda., World Trade Center, Av. Das Nações Unidas, 12.551, 12.555, 12.559, Piso 10, São Paulo/SP – CEP 04578-903, Brasil e CNPJ/M 73.042.962/0004-20
    </span>
    </footer>
  )
}