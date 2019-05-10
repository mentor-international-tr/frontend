import { cloneObjectWithKeyID } from "../index";

describe("cloneObjectWithKeyID", () => {
  it("adds keyID prop to object", () => {
    const obj: any = {};
    expect(obj["keyID"]).toBeUndefined();
    const newObj = cloneObjectWithKeyID(obj);
    expect(newObj.keyID).toBeDefined();
  });
  it("the props of the orginal object stays the same even if keyID has been added", () => {
    const obj: any = {
      a: 5,
      b: {
        c: 3,
      },
    };
    const newObj = cloneObjectWithKeyID(obj);
    expect(newObj.keyID).toBeDefined();
    expect(newObj).toMatchObject({
      ...obj,
      keyID: newObj.keyID,
    });
  });
});
