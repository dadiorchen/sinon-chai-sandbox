const sinon = require("sinon");
const {expect} = require("chai");


describe("Sinon", () => {

  it("match", () => {
    const AObject = class {
      aFunction(a){
        console.log("a:",a);
      }
    }
    const aFunctionStub = sinon.stub(AObject.prototype, "aFunction");
    const aObject = new AObject();
    aObject.aFunction({b:"text", c: 1, d: []});
    sinon.assert.neverCalledWith(aFunctionStub, {b:"text"});
    sinon.assert.calledWith(aFunctionStub, sinon.match({b:"text"}));
    sinon.assert.calledWithMatch(aFunctionStub, {b:"text"});
  });

});
