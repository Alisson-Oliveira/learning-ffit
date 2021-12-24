import { useEffect, useState } from 'react';

import Phone, { PhoneProps } from '../Phone/Index';

import { phones } from '../../database/phones';

import "./styles.css";

function ListPhones() {
  const [brandTotal, setBrandTotal] = useState<string[]>([]);
  const [brandChecked, setBrandChecked] = useState<boolean[]>([]);

  const [phoneFiltered, setPhoneFiltered] = useState<PhoneProps[]>([]);
  const [phoneChecked, setPhoneChecked] = useState(
    new Array(phones.length).fill(false)
  );
  
  useEffect(() => {
    brandFilter();
  }, []);

  function brandFilter() {
    const arrTemp: string[] = [];
    
    phones.filter(phone => {
      if (!arrTemp.includes(phone.brand)) {
        return arrTemp.push(phone.brand)
      } else {
        return null;
      }
    })

    setBrandTotal(arrTemp);
    setBrandChecked(
      new Array(arrTemp.length).fill(false)
    );
  };

  function handleBrandFilter(brand: string) {
    const updatedCheckedFilter = brandTotal.map((nameBrand, index) => {
      if (nameBrand === brand) {
        return brandChecked[index] = !brandChecked[index];
      } else {
        return brandChecked[index];
      }
    });

    setBrandChecked(updatedCheckedFilter);

    handleFilter(brand);
  };

  function handleFilter(brand: string) {
    const updatedCheckedState = phones.map((phone, index) => {
      if (phone.brand === brand) {
        return phoneChecked[index] = !phoneChecked[index];
      } else {
        return phoneChecked[index];
      }
    });

    setPhoneChecked(updatedCheckedState);

    const checkeds: PhoneProps[] = [];

    updatedCheckedState.filter((checked, index) => {
      if (checked === true) {
        return checkeds.push(phones[index]);
      } else {
        return null;
      }
    });

    setPhoneFiltered(checkeds);
  };

  return (
    <div id="container-list-phones">
      <div className="filter-list">
        <h3>Filtro</h3>
        {
          brandTotal.map((model, index) => (
            <div key={index} className="checkbox-item">
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                name={model}
                value={model}
                checked={brandChecked[index]}
                onChange={() => handleBrandFilter(model)}
              />
              <label htmlFor={`checkbox-${index}`}>{model}</label>
            </div>
          ))
        }
      </div>
      <div className="list-phones">
        {
          phoneFiltered.length !== 0 ? (
            phoneFiltered.map((phone, index) => (
              <Phone
                key={index}
                data={phone} 
                seeMore
              />
            ))
          ) : (
            phones.map((phone, index) => (
              <Phone
                key={index}
                data={phone} 
                seeMore
              />
            ))
          )
        }
      </div>
    </div>
  )
}

export default ListPhones;