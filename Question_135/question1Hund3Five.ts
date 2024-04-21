interface ApiType{
        albumId:number,
        id:number,
        title:string,
        url:string,
        thumbnailUrl:string,
}
const checkApi = async ():Promise<void> => {
    try {
        let ourApi:Response = await fetch('https://jsonplaceholder.typicode.com/photos');
    let ourApiData:ApiType[] = await ourApi.json();
        ourApiData.forEach((e) => {
            console.log(`ID: ${e.id}, TITLE: ${e.title}.`);
        });
    } catch (error) {
        console.log(error)
    }
};
checkApi();