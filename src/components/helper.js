const API_URL = 'https://itunes.apple.com/search?term='
const fetchSearch = async (search) => {
    const response = await fetch(API_URL + search)
    const resData = await response.json()
    return resData.results
}

//fetchSearch returns a promise, we want wrapPromise to take than promise
//as an argument
const wrapPromise = (promise) => {
    //the default state of the promise is "pending"
    let status = 'pending'
    //result will store the data we get from the promise.
    let result = ''
    //suspender represents promise solution
    //an ideal resolution should flag the status to "success"
    //and our catch should set it to "error"
    let suspender = promise.then(response =>{
        status = 'success'
        result = response
    }, err => {
        status = 'error'
        result = err 
    })

    //return an objects which emits a different response
    //depending on our status
    return{
        read() {
            //if the promise hasn't triggered, run it
            if(status === 'pending'){
                throw result
            }
            else if (status === 'error'){
                throw result
            }
            //if status isn't pending or error, we should
            //send/accept result
            return result
        }
    }
}

export const createResource = (search) => {
    return{
        result : wrapPromise(fetchSearch(search))
    }
}