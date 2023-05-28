"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_tsc_main_1 = require("sdk-tsc-main");
const sdk = new sdk_tsc_main_1.SDKApplication({
    authToken: '123',
});
sdk.photos.getAll().then((res) => console.log(`Photos are listed below: ${JSON.stringify(res)}`));
sdk.comments.getAll().then((res) => console.log(`Comments are listed below: ${JSON.stringify(res)}`));
