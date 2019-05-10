import { addUniqueIDToObject } from "../index";

describe("addUniqueIDToObject", () => {
  it("adds keyID prop to object", () => {
    const obj: any = {};
    expect(obj["keyID"]).toBeUndefined();
    const newObj = addUniqueIDToObject(obj);
    expect(newObj.keyID).toBeDefined();
  });
  it("the props of the orginal object stays the same even if keyID has been added", () => {
    const obj: any = {
      a: 5,
      b: {
        c: 3,
      },
    };
    const newObj = addUniqueIDToObject(obj);
    expect(newObj.keyID).toBeDefined();
    expect(newObj).toMatchObject({
      ...obj,
      keyID: newObj.keyID,
    });
  });
});
