export function truncate(text:string , length:number):string{
    return text.length > length ? text.slice(0, length ? length :3 ):text
}
///truncate("Aditya is learning JavaScript", 10) => Aditya is...

