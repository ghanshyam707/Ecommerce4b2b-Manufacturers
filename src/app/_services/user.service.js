import handleError from "./errorhandling.service";

export async function getBasicDetails() {
    try {
        const res = await fetch('/api/user/profile')
        if (res.ok) {
            const data = await res.json();
            return data.res[0]
        } else {
            throw Error('Data not found')
        }
        
    } catch (err) {
        handleError(err)
    }

}