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

### Link

Link `@xtoken/abis` package via [yarn](https://classic.yarnpkg.com/en/docs/cli/link/) for local development and testing the integration on the UI

```sh
$ cd abis
$ yarn link # @xtoken/abis package will be linked to the local copy

$ cd cafe
$ yarn link @xtoken/abis # This will create a symlink named cafe/node_modules/@xtoken/abis that links to the local copy of the xToken abis project

$ yarn unlink # To unlink the installed package
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

## Adding new contracts
```sh
1. Add Contract constants in constants.ts
2. Add mainnet addresses based on the constants in addresses.ts
3. Add the contract abis in abis/
4. Export the ABIs in abis/index.ts
```
