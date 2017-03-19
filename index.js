var receivesAFunction = (callback) => {
  callback();
}

var returnsANamedFunction = () => {
  return funkyFunction = () => {
    console.log("funkytown");
  }
}

var returnsAnAnonymousFunction = () => {
  return () => {
    console.log("anon");
  }
}
