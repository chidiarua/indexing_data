
const assert = require("assert");
const { TestHelpers } = require("generated");
const { MockDb, ENSToken } = TestHelpers;

describe("ENSToken contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for ENSToken contract Approval event
  const event = ENSToken.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("ENSToken_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await ENSToken.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualENSTokenApproval = mockDbUpdated.entities.ENSToken_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedENSTokenApproval = {
      id:`${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(
      actualENSTokenApproval,
      expectedENSTokenApproval,
      "Actual ENSTokenApproval should be the same as the expectedENSTokenApproval"
    );
  });
});
