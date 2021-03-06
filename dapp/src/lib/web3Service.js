export const getProvider = (networkId) => {
  switch (networkId) {
    case '1':
      return 'https://mainnet.infura.io/v3/ed8dd5da3de14262878f970d583df954';
    //! This currently need a project Id in order to access, please run locally if you can
    case '3':
      return 'https://ropsten.infura.io/v3/ed8dd5da3de14262878f970d583df954';
    case '4':
      return 'https://rinkeby.infura.io/v3/ed8dd5da3de14262878f970d583df954';
    case '42':
      return 'https://kovan.infura.io/v3/ed8dd5da3de14262878f970d583df954';
    case '96':
      return 'https://rpc.bitkubchain.io/';
    default:
      return 'http://localhost:8545/';
  }
}

export const getCryptoHerosTokenAddress = (networkId) => {
  switch (networkId) {
    case '1':
      return '0x0';
    case '3':
      return '0xa82Bc392bF65d03A796E1666d27594fB31De4B93';
    case '4':
      return '0x0';
    case '42':
      return '0x0';
    case '1337':
      //* development at local, please update your local contract's address here
      return '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    case '96':
      return '0x53B619344a7492000feCe2a669E7575A8e5892fc';
    default:
      return '0x0';
  }
}

export const getCryptoHerosGameAddress = (networkId) => {
  switch (networkId) {
    case '1':
      return '0x0';
    case '3':
      return '0xb4FF27d8cD1C5b1e3D4BD8A8FFEBdA9BE9517a4b';
    case '4':
      return '0x0';
    case '42':
      return '0x0';
    case '1337':
      //* development at local, please update your local contract's address here
      return '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
    case '96':
      return '0xD96e2EF8C2E0A07Ca7f9601e2414b8390f31638e';
    default:
      return '0x0';
  }
}

export const getCurrentAddress = (web3) => {
  if (web3 === null) return;
  return web3.eth.accounts[0];
}

export const getCurrentNetwork = (web3) => {
  if (web3 === null) return;
  return web3.version.network;
}
