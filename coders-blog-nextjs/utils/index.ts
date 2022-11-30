export const dateFormate = (date : string) : string => {
    const result = new Date(date).toLocaleDateString('en-Us',{
        "year" : "numeric",
        "month" : "long",
        "day" : "numeric",
        "weekday" : "long",
    })

    return result;
}