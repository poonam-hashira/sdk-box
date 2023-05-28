# HOW TO WRITE AN SDK

## Create folders and files as per the below structure
```
.
└── sdk-tsc-main/
    ├── src/
    │   ├── resources/
    │   │   ├── base.ts
    │   │   ├── comments/
    │   │   │   ├── index.ts
    │   │   │   └── types.ts
    │   │   └── photos/
    │   │       ├── index.ts
    │   │       └── types.ts
    │   └── index.ts
    ├── tsconfig.json
    └── package.json
```
#### Customized as per your needs
- Under `resources` folder you can create your own resource for which you need an endpoints are to be called along with two major files (`index.ts` & `types.ts`)

#### Setting up Repository and Configuration
- As we are using npm, nodejs & typescript, please check all are available in your machine using below commands:
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
- Create a directory with <sdk-name> and perform below commands
  ```
  npm init -y
  npm install microbundle --save-dev
  npm install isomorphic-unfetch
  ```

  #### Read more about `microbundle`
  [microbundle](`https://github.com/developit/microbundle)

  #### Read more about `isomorphic-unfetch`
  [isomorphic-unfetch](https://github.com/developit/unfetch/tree/main/packages/isomorphic-unfetch)

## Create an abstract class `base.ts`
```base.ts
import fetch from 'isomorphic-unfetch';

type Config = {
  authToken: string;
  baseUrl?: string;
};

export abstract class Base {
  private authToken: string;
  private baseUrl: string;

  constructor(config: Config) {
    this.authToken = config.authToken;
    this.baseUrl = config.baseUrl || 'https://jsonplaceholder.typicode.com'; // Passing default URL
  }

  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'api-key': this.authToken // Authorization: 'Bearer <authToken>'
    };
    const config = {
      ...options,
      headers,
    };

    return fetch(url, config).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    });
  }
}
```
## Create types
- Here you can consider types for photos `types.ts`
```
export declare type Photo = {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export declare type NewPhoto = {
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
```
## Create API methods
- Create `index.ts` as photo class in which create nessecery methods such as getAll, getById and save etc...
    ```
    import { Base } from "../base";
    import { NewPhoto, Photo } from "./types";

    const resourceName = "photos";

    export class Photos extends Base {
    getById(id: number): Promise<Photo> {
        return this.request(`/${resourceName}/${id}`);
    }

    getAll(): Promise<Photo[]> {
        return this.request(`/${resourceName}`);
    }

    save(newPost: NewPhoto): Promise<Photo> {
        return this.request(`/${resourceName}`, {
        method: "POST",
        body: JSON.stringify(newPost),
        });
    }
    }
    ```
## Create container class
- Here we are considering `index.ts` under src folder where we are combining all our resources.
    ```
    import { Photos } from './resources/photos';
    import { Comments } from './resources/comments';

    export class SDKApplication {
    photos: Photos;
    comments: Comments;

    constructor(config: { authToken: string; baseUrl?: string }) {
        this.photos = new Photos(config);
        this.comments = new Comments(config);
    }
    }
    ```

## Publish SDK to NPM Registry
- Create an account on [NPM Registry](https://www.npmjs.com/)

- Login to your account using `npm login`

- In the `package.json`, add the below fields
  ```
  {
  ...
      "exports": {
          "require": "./dist/index.js",
          "default": "./dist/index.modern.js"
      },
      "files": [
          "dist"
      ]
  }
  ```
- To publish to NPM Registry, run `npm publish` command

## Test SDK

- Create local or Use existing typescript|node.js project.

- Make sure to add options in tsconfig.json file
    ```
    {
        "compilerOptions": {
            "esModuleInterop": true,
            "experimentalDecorators": true
        }
    }
    ```
- When SDK is not published to NPM Registry

  > Link your SDK locally using npm command

    `Note: Delete existing sdk dependeny from node_modules & pacakge.json file`
    ```
    npm link ../<sdk-name>
    ```

  > Once linked, you are able to see a pointer under node_modules for 'sdk'

- When SDK is published

  > Install SDK as dependency using `npm i <npm-repo>`

- In main app.ts class, you can import sdk dependacy as mentioned below
    ```
  import { SDKApplication } from 'sdk-tsc-main';

  const sdk = new SDKApplication({
    authToken: '123', // For this sdk no token required
  });

  sdk.photos.getAll().then((res: any) => console.log(`Photos are listed below: ${JSON.stringify(res)}`) );
  sdk.comments.getAll().then((res: any) => console.log(`Comments are listed below: ${JSON.stringify(res)}`) );
    ```
- Compile local app
  ```
  tsc
  node dist/run.js
  ```

- You would receive successful results in your terminal console. Enjoy! 