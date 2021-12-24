import ListPhones from '../../components/ListPhones/Index';

import "./styles.css";

function Home() {
  return (
    <div id="container-home">
      <header> Tecnologia Bluetooth </header>
      <article>
        Bluetooth é uma especificação de rede sem fio de âmbito pessoal (Wireless personal area networks – PANs) consideradas do tipo PAN ou mesmo WPAN. O Bluetooth provê uma maneira de conectar e trocar informações entre dispositivos como telefones celulares, notebooks, computadores, impressoras, câmeras digitais e consoles de videogames digitais através de uma frequência de rádio de curto alcance globalmente licenciada e segura. As especificações do Bluetooth foram desenvolvidas e licenciadas pelo "Bluetooth Special Interest Group". A tecnologia Bluetooth diferencia-se da tecnologia IrDA inclusive pelo tipo de radiação eletromagnética utilizada.
      </article>
      <ListPhones />
      <footer>
        Processo Seletivo [2º Etapa]
      </footer>
    </div>
  )
}

export default Home;