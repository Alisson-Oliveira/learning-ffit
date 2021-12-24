import { PhoneProps } from "../components/Phone/Index";

import sony1Img from '../assets/image-sony-1.png';
import sony2Img from '../assets/image-sony-2.png';
import apple1Img from '../assets/image-apple-1.png';
import edidier1Img from '../assets/image-edidier-1.png';
import hyperx1Img from '../assets/image-hyperx-1.png';
import jbl1Img from '../assets/image-jbl-1.png';
import jbl2Img from '../assets/image-jbl-2.png';
import jbl3Img from '../assets/image-jbl-3.png';
import tribit1Img from '../assets/image-tribit-1.png';
import xiaomi1Img from '../assets/image-xiaomi-1.png';

export const phones: PhoneProps[] = [
  {
    id: 1,
    name: "Headphone Wh-1000Xm3 Com Noise Cancelling, com Alexa Integrada",
    brand: "Sony",
    url: sony1Img,
    cost: "R$1.709,17",
    color: "Branco, Preto",
    connections: "Sem fio Bluetooth 4.2, NFC", 
    connectorType: "Jack de 3,5 mm",
    productWeight: "254 g",
    productDimensions: "18.57 x 7.47 x 26.52 cm; 254.86 g"
  },
  {
    id: 2,
    name: "Fone De Ouvido Bluetooth Jbl Tune 500bt Sem Fio",
    brand: "JBL",
    url: jbl1Img,
    cost: "R$249,00",
    color: "Branco, Preto",
    connections: "Com fio Bluetooth",
    connectorType: "USB tipo C",
    productWeight: "154 g",
    productDimensions: "4.5 x 22 x 25 cm; 154.22 g"
  },
  {
    id: 3,
    name: "Fone de Ouvido, Tribit Tempo de Reprodução de 100 Horas Bluetooth 5.0 IPX8 Controle de toque à prova d'água Ture Fone de Ouvido Sem Fio Bluetooth com Mic Auriculares Graves Profundos Mic Embutido Fone de Ouvido Bluetooth, FlyBuds 3",
    brand: "Tribit",
    url: tribit1Img,
    cost: "R$279,00",
    color: "Preto",
    connections: "Sem fio Bluetooth",
    connectorType: "USB tipo C",
    productWeight: "9.62 g",
    productDimensions: "8.64 x 5.08 x 3.05 cm; 9.64 g"
  },
  {
    id: 4,
    name: "Xiaomi Mi True Wireless Earbuds Basic 2S, Bluetooth 5.0 Touch Control Modo de jogo estéreo de baixa latência Fones de ouvido com microfone, fones de ouvido intra-auriculares esportivos à prova de suor com capa de carregamento (Redmi Airdots 2S)",
    brand: "Xiaomi",
    url: xiaomi1Img,
    cost: "R$149,00",
    color: "Preto",
    connections: "Sem fio",
    productWeight: "41 g",
    productDimensions: "2.67 x 1.65 x 2.16 cm; 41 g"
  },
  {
    id: 5,
    name: "Fone de Ouvido sem Fio Apple AirPods Pro com Estojo de Carregamento Wireless",
    brand: "Apple",
    url: apple1Img,
    cost: "R$1.547,76",
    color: "Branco",
    productWeight: "45.3 g",
    productDimensions: "2.38 x 2.18 x 3.09 cm; 45.36 g"
  },
  {
    id: 6,
    name: "Fones de Ouvido Bluetooth Sem Fio Sony WF-1000XM3SMUC com Cancelamento de Ruído (Noise Cancelling, com controle de voz via Alexa",
    brand: "Sony",
    url: sony2Img,
    cost: "R$R$1.158,06",
    color: "Branco, Preto",
    connections: "Sem fio Bluetooth 5.0, NFC",
    connectorType: "USB tipo C",
    productWeight: "100 g",
    productDimensions: "14.22 x 11.99 x 6.35 cm; 100 g"
  },
  {
    id: 7,
    name: "Fone de ouvido Bluetooth sem fio com cancelamento de ruído JBL T600BTNC",
    brand: "JBL",
    url: jbl2Img,
    cost: "R$469,00",
    color: "Branco",
    connections: "Sem fio Bluetooth",
    productWeight: "173 g",
    productDimensions: "20.5 x 4.8 x 22.3 cm; 172.93 g"
  },
  {
    id: 8,
    name: "Fone De Ouvido Bluetooth Tune 110bt JBL",
    brand: "JBL",
    url: jbl3Img,
    cost: "R$128,16",
    color: "Preto, Branco, Azul",
    connections: "Sem fio Bluetooth",
    connectorType: "USB tipo C",
    productWeight: "16.2 g",
    productDimensions: "10 x 3.5 x 16 cm; 16.2 g"
  },
  {
    id: 9,
    name: "Fone de Ouvido Headset EDIFIER W800BT PLUS - Bluetooth 5.1",
    brand: "Edifier",
    url: edidier1Img,
    cost: "R$229,90",
    color: "Preto",
    connections: "Sem fio Com fio",
    connectorType: "USB tipo C, Jack de 3,5 mm",
    productWeight: "267 g",
    productDimensions: "17 x 7.5 x 19 cm; 267 g"
  },
  {
    id: 10,
    name: "HyperX Cloud Stinger Wireless PC",
    brand: "HyperX",
    url: hyperx1Img,
    cost: "R$796,20",
    color: "Preto",
    productWeight: "313 g",
    productDimensions: "18.92 x 18.64 x 8.81 cm; 312.98 g"
  }
];