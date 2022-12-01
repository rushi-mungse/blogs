export const dateFormate = (date : string) : string => {
    const result = new Date(date).toLocaleDateString('en-Us',{
        "year" : "numeric",
        "month" : "long",
        "day" : "numeric",
        "weekday" : "long",
    })

    return result;
}


export const handleTitle = (query : string):string => {
    return formateTitle(query);
}


export const formateTitle = (title : string):string => {
    const formatedTitle = title.split('-').join(' ');
    return formatedTitle.slice(0,1).toUpperCase() + formatedTitle.slice(1);
}