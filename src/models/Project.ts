export interface Project {
    id:number;
    name:string;
    thumbnail:string;
    description:string;
    numberOfMember:number;
    src:string;
    url?:string;
    tech:string[];
    imgs:string[];
}