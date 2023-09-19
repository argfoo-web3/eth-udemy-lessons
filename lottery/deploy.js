const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { abi, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'runway attack rocket tool lyrics eyebrow clarify hint fitness medal faith nerve',
  'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
