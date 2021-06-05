export const isValidResponse = (response:any) => {
    if(!response || !response.data || !response.data.token || !(response.status==200)) return false
    return true
}


export const issetResponse = (response:any) => {
    if(!response || !response.data || !(response.status ==200)) return false
    return true
}
