export default interface Route {
    create(): boolean;
    find(): boolean;
    findAll(): boolean;
    update(): boolean;
    delete(): boolean;
}