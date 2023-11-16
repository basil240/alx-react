export default function accessImmutableObject(object, array) {
    if (!object || !Array.isArray(array) || array.length === 0) {
        
      return undefined;
    }

    const result = array.reduce((acc, key) => {

      if (Map.isMap(acc)) {
        return acc.get(key);
      } else if (typeof acc === 'object' && acc !== null) {
        return acc[key];
      } else {

        return undefined;
      }
    }, object);
  
    return result;
  }