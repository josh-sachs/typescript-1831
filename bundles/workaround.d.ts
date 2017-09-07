declare module "resource-2" {
    export class Resource2 {
    }
}
declare module "index" {
    export * from "resource-2";
}
declare module "@bundles/workaround" {
    export * from "index";
}
