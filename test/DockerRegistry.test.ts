import DockerRegistry from "../src/DockerRegistry";

const dockerReg: DockerRegistry = new DockerRegistry("", 0, "", "",false);
describe("test add function", () => {
    it("should return 15 for add(10,5)", () => {
      expect(dockerReg.test()).toBe(false);
    });
  });