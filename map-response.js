
module.exports = (resp) => {

  const products = resp.items.map((product) => {
    return {
        name: product.name,
        quantity: product.quantity,
        unitary_value: product.price
    }
  });

  const volumes = resp.items.additionalInfo === undefined ? [{
    height: 15,
    width: 20,
    length: 10,
    weight: 3
  }] : resp.items.additionalInfo.dimension.map((volume) => {
    return {
        height: volume.height,
        width: volume.width,
        length: volume.length,
        weight: volume.weight,
    }
  });

  return {
    orderId: resp.orderId,
    client : {
      name: resp.shippingData.address.receiverName,
      phone: resp.clientProfileData.phone,
      email: resp.clientProfileData.email,
      document: resp.clientProfileData.document,
      company_document: resp.clientProfileData.corporateDocument,
      state_register: resp.clientProfileData.stateInscription,
      address: resp.shippingData.address.street,
      complement: resp.shippingData.address.complement,
      number: resp.shippingData.address.number,
      district: resp.shippingData.address.neighborhood,
      city: resp.shippingData.address.city,
      state_abbr: resp.shippingData.address.state,
      country_id: "BR",
      postal_code: resp.shippingData.address.postalCode,
      note: resp.shippingData.address.reference
    },
    products,
    volumes
  }   
  
}