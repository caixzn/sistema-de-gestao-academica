export default interface Controller {
    create(): boolean;
    findById(): boolean;
    findAll(): boolean;
    update(): boolean;
    delete(): boolean;
}
