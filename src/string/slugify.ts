export function slugify(string:string , join?:string){
    return string.toLowerCase().replace(/\s+/g, join ? join:"-")
}

