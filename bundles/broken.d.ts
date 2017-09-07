declare module "resource-1" {
    export class Resource1 {
    }
}
declare module "index" {
    export * from "resource-1";
}
