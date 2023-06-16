
export const GetAllRes = async (defValue) => {
    const APIUrl = process.env.REACT_APP_Base_URL_Backend;
    const Base_URL = process.env.Base_URL;

    console.log(process.env)
    const token = localStorage.getItem("jwt");
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'multipart/form-data')
    myHeaders.append("Authorization", token);
    let res = await fetch(
        `${APIUrl}/masters/collect_feedback`,
        {
            method: "get",
            headers: myHeaders
        }
    );
    let response = await res.json();
    const dataResult = response.data;
    return dataResult;
}