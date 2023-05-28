import { SDKApplication } from 'sdk-tsc-main';

const sdk = new SDKApplication({
  authToken: '123', // For this sdk no token required
});

sdk.photos.getAll().then((res: any) => console.log(`Photos are listed below: ${JSON.stringify(res)}`) );
sdk.comments.getAll().then((res: any) => console.log(`Comments are listed below: ${JSON.stringify(res)}`) );
