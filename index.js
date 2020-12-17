function mergeTypedArraysUnsafe(a, b) {
  var c = new a.constructor(a.length + b.length);
  c.set(a);
  c.set(b, a.length);
  return c;
}

let binary = null;
let fileInput = document.getElementById('file');
let passwordInput = document.getElementById("password");
let digitsInput = document.getElementById("digits");
let fileReader = new FileReader();

function generate() {
  fileReader.readAsArrayBuffer(fileInput.files[0]);
}
fileReader.onload = () => {
  binary = new Uint8Array(fileReader.result)
  let pw = (new TextEncoder("utf-8").encode(passwordInput.value));
  let digits = parseInt(digitsInput.value);
  
  var hash = md5(mergeTypedArraysUnsafe(binary, pw));
  console.log(binary)
  document.getElementById("result").innerHTML = window.btoa(hash).slice(0, digits);

}
