# SDK using Typescript | NodeJS

#### Why you need SDKs?
SDKs help to simplify common development tasks – saving time and cutting costs. Choosing vendors that offer SDKs lets you integrate more quickly using an approach endorsed by the supplier. This shortens the development cycle and maximizes reliability.

## Install Dependency using
```
npm install sdk-tsc-main
```

## Gitbug repo to develop
```
https://github.com/poonam-hashira/sdk-box
```

## Usage
```
import { SDKApplication } from 'sdk-tsc-main';

const sdk = new SDKApplication({
  authToken: '123', // For this sdk no token required
});

sdk.photos.getAll().then((res: any) => console.log(`Photos are listed below: ${JSON.stringify(res)}`) );
sdk.comments.getAll().then((res: any) => console.log(`Comments are listed below: ${JSON.stringify(res)}`) );
```

Note: Make sure to add options in tsconfig.json file
  ```
  {
      "compilerOptions": {
          "esModuleInterop": true,
          "experimentalDecorators": true
      }
  }
  ```


#### Enjoy!
You would receive successful results in your terminal console. Happy coding!