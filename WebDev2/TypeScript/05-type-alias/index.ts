type Drink = [string, boolean, number];
const pepsi:Drink = ['brown', true, 40];

type Vehicle3 = {
    name: string;
    year: Date;
    broken: boolean;
}


interface TypeScriptAPI{
    version: number;
}

interface Window{
    title: string;
}

interface Window{
    version: number;
    updatedAt: Date;
}



type WindowType = {
    title: string;
}
type WindowType = {
    ts: TypeScriptAPI;
}