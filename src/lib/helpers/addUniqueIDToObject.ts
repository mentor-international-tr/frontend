import uuidv4 from "uuid/v4";
export default (obj: object) => {
  return {
    ...obj,
    keyID: uuidv4(),
  };
};
