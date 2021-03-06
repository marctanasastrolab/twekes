import React, {useState} from 'react';

const MerchantsUpdate = (prop) => {

  let idUpdate;
  let nameUpdate;
  let codeUpdate;

  const updateMerchant = () => {

  //   const [state, setState] = useState(
  //     {
  //         updated: false,
  //     }
  // );

    fetch('http://localhost:8080/merchants/update', 
          {
            method: 'POST',
            body: JSON.stringify(
                {
                  _id: idUpdate.value,
                  brandName: nameUpdate.value, 
                  discountCode: codeUpdate.value, 
                }
            ),
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${[localStorage.getItem('jwt')]}`
            },

        }
        )
        .then(            
          (result) => result.json(),
        )
        .then(
          (json) => console.log(json),
    )
        
      alert(prop.name , "Merchant has been updated");
  }  

  

  return (
      <div className="container">
        <br></br>
        <form method="get" onSubmit={updateMerchant}>
          <label htmlFor="fname" placeholder={prop.id} ref={(elem) => idUpdate = elem}>Object ID: </label>
          <input type="text" placeholder={prop.name} ref={(elem) => nameUpdate = elem}/><br></br><br></br>
          <label htmlFor="fname" placeholder={prop.name}>Brand Name: </label>
          <input type="text" placeholder={prop.name} ref={(elem) => nameUpdate = elem}/><br></br><br></br>
          <label htmlFor="fname" placeholder={prop.code}>Discount code: </label>
          <input type="text" placeholder={prop.code} ref={(elem) => codeUpdate = elem}/><br></br><br></br>
          <button>Update</button><br></br><br></br>
        </form>

      </div>
    )
}

export default MerchantsUpdate;