# SDK using Typescript | NodeJS

#### Why you need SDKs?
SDKs help to simplify common development tasks – saving time and cutting costs. Choosing vendors that offer SDKs lets you integrate more quickly using an approach endorsed by the supplier. This shortens the development cycle and maximizes reliability.

## How to write an SDK
please follow DESIGN.md file


## Install Dependency using
```
npm install sdk-tsc-main
```

## Let's test sdk using npm dependancies in our application
- Clone using this [Github-Repo](https://github.com/poonam-hashira/sdk-box)

- Make sure your machine has npm, [node.js](https://nodejs.org/en/download) & typescript installed. You can check version using below commands:
  ```
  npm -v
  ```
  ```
  node -v
  ```
  ```
  tsc -v 
  
  // If not found, install using below command
  npm i -g typescript
  ```
- `consume-sdk` is used to test the sdk here. Inside `app.ts` file there are sample apis are being integrate to test.

- Run `consume-sdk` using below commands
  ```
  ..\consume-sdk> tsc // Compile typescript project
  ```
  ```
  ..\consume-sdk> node dist/run.js
  ```

## Usage in your independent project
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