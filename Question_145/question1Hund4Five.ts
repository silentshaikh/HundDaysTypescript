const readData = (
  data: string,
  callbck: (error: Error | null, dtaCall: string) => void
) => {
    setTimeout(() => {
        const ourErr = new Error('Data not Found');
    callbck(ourErr,data);
    }, 3000);
};
readData('',(err,data) => {
    if(data === ''){
        console.error(err?.message)
    }else{
        console.log(data)
    }
});
