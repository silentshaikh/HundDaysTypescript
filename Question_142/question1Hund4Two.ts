let promseTwo = (str: string): Promise<string> => {
  return new Promise((resolve: (value: string) => void, reject) => {
    setTimeout(() => {
      resolve(str);
    }, 2000);
  });
};
let promseThree = (): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Promise Rejected"));
    }, 2000);
  });
};
Promise.all([promseTwo("Hello World!"), promseThree()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err.message);
  });
// It  is used to execute multiple Promises concurrently and wait for all of them to either resolve or reject.