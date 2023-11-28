
export default async function getFetch(url, token = undefined){

    try {
        const header = token ? {Authorization: `Bearer ${token}`} : {}
        const res = await fetch(url, {
            headers: header
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
        throw error
    }

}