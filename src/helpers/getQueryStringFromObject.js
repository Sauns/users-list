export const getQueryStringFromObject = props => {  
  return props
    ? Object.keys(props).reduce(
        (acc, curr, idx, arr) =>
          props[curr] ? (acc + `${curr}=${curr === 'address' ? props[curr].replace(/&/g,'%26') : props[curr]}${idx !== arr.length - 1 ? '&' : ''}`) : (idx !== arr.length - 1 ? acc : acc.replace(/&$/,'')),
        '',
      )
    : ''}
