function numPlay() {
  let a = 1;
  console.log(a);
  function numPlay2() {
    let b = 2;
    console.log(a);
    console.log(b);
    function numPlay3() {
      let c = 3;
      console.log(a);
      console.log(b);
      console.log(c);
    }
    numPlay3();
    console.log(a);
    console.log(b);
    console.log(c);
  }
  numPlay2();
}

numPlay();