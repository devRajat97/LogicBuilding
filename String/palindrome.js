const checkString = (str) => {
  let rev = "";
  console.log(str.length - 1);
  for (let i = str.length - 1; i >= 0; i--) {
    rev +=  str[i];
  }
  console.log(rev)
  if (rev === str) console.log("string is palindrom");
};

checkString("madamohf");
