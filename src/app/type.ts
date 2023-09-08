
export interface todoType{
    id?:string;
    title?:string;
    description?:string;
}

export interface fetchTodoData {
    data: Array<todoType>
}