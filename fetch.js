const url = 'https://www.course-api.com/react-tours-project'


const getData = async () => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error)
    }
}

console.log(getData());
getData().then((data)=> console.log(data));

//......................
/* 
const getData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

getData(); */

//.................................
/* 
fetch(url)
.then((response)=> response.json())
.then((data)=> console.log(data))
.catch((err)=> console.log(err)); */

//................................
/* 
fetch(url)
.then((response)=> console.log(response))
.catch((err)=> console.log(err));
 */
//..............................

/* console.log(fetch(url)); */