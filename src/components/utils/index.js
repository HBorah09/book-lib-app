export const getUniqueOptions = data => {
  const options = [];
  data.map(eachData => {
    if(!options.includes(eachData.publisher.toLowerCase())) {
      options.push(eachData.publisher.toLowerCase());
    }
  });
  return options;
}

const validateEmail = mail => /\S+@\S+\.\S+/.test(mail);

export const validateEmails = str => {
  const separators = /[\n,;\s]/;
  const list = str.split(separators);
  return list.filter(email => !validateEmail(email));
}