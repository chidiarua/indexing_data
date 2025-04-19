/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
const {
 ENSToken,
} = require("generated");

ENSToken.Approval.handler(async ({event, context}) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.ENSToken_Approval.set(entity);
});


ENSToken.Claim.handler(async ({event, context}) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    claimant: event.params.claimant,
    amount: event.params.amount,
  };

  context.ENSToken_Claim.set(entity);
});


ENSToken.DelegateChanged.handler(async ({event, context}) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    delegator: event.params.delegator,
    fromDelegate: event.params.fromDelegate,
    toDelegate: event.params.toDelegate,
  };

  context.ENSToken_DelegateChanged.set(entity);
});


ENSToken.DelegateVotesChanged.handler(async ({event, context}) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    delegate: event.params.delegate,
    previousBalance: event.params.previousBalance,
    newBalance: event.params.newBalance,
  };

  context.ENSToken_DelegateVotesChanged.set(entity);
});


ENSToken.MerkleRootChanged.handler(async ({event, context}) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    merkleRoot: event.params.merkleRoot,
  };

  context.ENSToken_MerkleRootChanged.set(entity);
});


ENSToken.OwnershipTransferred.handler(async ({event, context}) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.ENSToken_OwnershipTransferred.set(entity);
});


ENSToken.Transfer.handler(async ({event, context}) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.ENSToken_Transfer.set(entity);
});

