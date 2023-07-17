export default interface Route {
    create(): boolean;
    read(): boolean;
    update(): boolean;
    delete(): boolean;
}