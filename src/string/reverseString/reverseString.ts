export function reverseString(text:string):string{
    if(text.length == 0){
        return ""
    }
    return reverseString(text.slice(1)) + text[0];
}