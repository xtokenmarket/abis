# xToken ABIs

Package containing all the xToken contract ABIs and addresses.

## Install
```sh
yarn add @xtoken/abis
```

### Build
```sh
yarn build
```

### Linting

To automatically fix `eslint` and `prettier` formatting issues, run:

```sh
yarn fix
```

## Examples
```sh
import { ethers } from 'ethers'
import { Abis, ADDRESSES, X_AAVE_A } from '@xtoken/abis'

// Setup provider
const provider = new ethers.providers.InfuraProvider('homestead', '<API KEY>')
const network = await provider.getNetwork()
const { chainId } = network

// Initialise xAAVEa contract
const xaaveContract = new ethers.Contract(ADDRESSES[X_AAVE_A][chainId], Abis.xAAVE, provider)
```
