export default interface Controller {
    create(request: any): any;
    findById(request: any): any;
    findAll(): any;
    update(request: any): any;
    delete(request: any): any;
}
