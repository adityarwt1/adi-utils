export function slugify(string:string , join?:string):string{
    return string.toLowerCase().replace(/\s+/g, join ? join:"-")
}

