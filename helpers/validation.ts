const validateName = (name: string) => {
  var regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/g;
  return regex.test(name);
}
const validationEmail = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const validationPhone = (phone: string) => {
  const re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
  return re.test(phone);
}
const validationAddress = (address: string) => {
  const re = /^[a-zA-Z0-9\s,'-]*$/g;
  return re.test(address);
}

export const validationForm = (type: string, state: any, error: any, setError: any) => {
  if(type === 'email' && !validationEmail(state.email)){
    setError({...error, email: true})
    return true
  }
  if((type === 'name' || type === 'surname') && !validateName(state[type])){
    setError({...error, [type]: true})
    return true
  }
  if(type === 'phone' && !validationPhone(state.phone)){
    setError({...error, phone: true})
    return true
  }
  if(type === 'city' && !validateName(state.city)){
    setError({...error, city: true})
    return true
  }
  if(type === 'address' && !validationAddress(state.address)){
    setError({...error, address: true})
    return true
  }

  return false
}