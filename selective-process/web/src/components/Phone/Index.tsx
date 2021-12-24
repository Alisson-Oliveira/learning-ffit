import { Link } from 'react-router-dom'; 

import "./styles.css";

export type PhoneProps = {
  id: number,
  name: string,
  brand: string,
  url: string, 
  cost: string,
  color: string,
  connections?: string,
  connectorType?: string,
  productWeight?: string,
  productDimensions?: string
}

type Props = {
  data: PhoneProps
  seeMore?: boolean
}

function Phone({ data: props, seeMore }: Props) {
  return (
    <div id="container-phone">
      <img 
        src={props.url} 
        alt="" 
        width={"256px"} 
        height={"256px"} 
      />
      <div className="content-phone">
        <h1>{props.name}</h1>
        <div className="cost-brand">
          <div className="line-row">
            Por: <h2>{props.cost}</h2>
          </div>
          <div className="line-row">
            Marca: <h3>{props.brand}</h3>
          </div>
        </div>
        {
          seeMore ? (
            <Link to={`/details/${props.id}`}>
              Ver mais
            </Link>
          ) : (
            <div>
              <h3 className="data-sheet">Ficha Tecnica</h3>
              <table>
                {
                  props.color && (
                    <tr>
                      <td className="line-item">Cores disponíveis</td>
                      <td>{props.color}</td>
                    </tr>  
                  )
                }
                {
                  props.connections && (
                    <tr>
                      <td className="line-item">Conexões</td>
                      <td>{props.connections}</td>
                    </tr>
                  )
                }
                {
                  props.connectorType && (
                    <tr>
                      <td className="line-item">Tipo de conector</td>
                      <td>{props.connectorType}</td>
                    </tr>
                  )
                }
                {
                  props.productWeight && (
                    <tr>
                      <td className="line-item">Peso do produto</td>
                      <td>{props.productWeight}</td>
                    </tr>
                  )
                }
                {
                  props.productDimensions && (
                    <tr>
                      <td className="line-item">Dimensões do produto</td>
                      <td>{props.productDimensions}</td>
                    </tr>
                  )
                }               
              </table>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Phone;