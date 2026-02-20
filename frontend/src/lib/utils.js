export function formatData(data){
    return data.toLocaleDateString('en-us', {
        month:'short',
        day: 'numeric',
        year: 'numeric',
    })
}