module.exports = function main(str) {
  var str,sum=0;
  for (var i=0;i<str.length;i++){
    sum=parseInt(str.charAt(i))+sum;
  }
  return sum;
};
