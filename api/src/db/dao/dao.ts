export default interface DAO {
    create(request: any): any;
    findById(request: any): any;
    findAll(request: any): any;
    update(request: any): any;
    delete(request: any): any;
}
