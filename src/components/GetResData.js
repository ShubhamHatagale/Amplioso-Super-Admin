export default async function GetResData(k) {
    const token = localStorage.getItem("jwt");
    const APIUrl = process.env.REACT_APP_Base_URL;
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append("Authorization", token);
    console.log(token)
    let res = await fetch(`${APIUrl}/users`,{
        method:"get",
        headers:myHeaders
    })
    let response = res.json()
    let result = response.data;
    return result
}
