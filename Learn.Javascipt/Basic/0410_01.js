function f(x) {
    alert (arguments.length ? 1 : 0);
}
  
f(undefined); // 1
f(); // 0