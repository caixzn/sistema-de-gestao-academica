import Route from "./route.js";

class DisciplinaRoute implements Route {
    create(): boolean {
        return true;
    }
    read(): boolean {
        return true;
    }
    update(): boolean {
        return true;
    }
    delete(): boolean {
        return true;
    }
}
