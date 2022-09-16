export const checkValidity = (value, rules) => {
  let isValid = true;
  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }
  if (rules.isEmail) {
    const pattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^(\s*|\d+)$/;
    isValid = pattern.test(value) && isValid;
  }
  return isValid;
};
export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};
export const dontShowScreenHeader = (screen) => {
  return {
    screen: screen,
    navigationOptions: {
      headerShown: false,
    },
  };
};


export const convertNumbers =(value)=>{

    let newValue = value;
    if (value >= 1000) {
      let suffixes = ["", "k", "m", "b","t"];
      let suffixNum = Math.floor( (""+value).length/3 );
      let shortValue = '';
      for (let precision = 2; precision >= 1; precision--) {
        shortValue = parseFloat( (suffixNum !== 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
        let dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
        if (dotLessShortValue.length <= 2) { break; }
      }
      if (shortValue % 1 !== 0)  shortValue = shortValue.toFixed(1);
      newValue = shortValue+suffixes[suffixNum];
    }
    return newValue
}

export const convertDate=(dateTime)=>{
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  let date = new Date(dateTime);
  return `${monthNames[(date.getMonth() + 1)]} ${date.getFullYear()}`;

}
