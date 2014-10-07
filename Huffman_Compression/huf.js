function frequency(st){
  var freq={}
  var len=st.length;
  for(i=0;i<len;i++){
   if (freq[st.charAt(i)]>=1)
     freq[st.charAt(i)]+=1
   else
     freq[st.charAt(i)]=1
  }
  return(freq)
}
function sortfreq(freq){
  var arr=new Array()
  c=0
  for (i in freq){
   arr[c]=new Array()
   arr[c][0]=freq[i]
   arr[c][1]=i
   c+=1
  } 
  arr.sort()
  console.log('arr',arr)
  return(arr)
}
function buildtree(arr){
  while(arr.length>1){
    fstTwo=arr.slice(0,2)
    rest=arr.slice(2)
    cmbFre=[fstTwo[0][0]+fstTwo[1][0]]
    arr=rest.concat([cmbFre.concat([fstTwo])])
    }
    return(arr[0])
}
function trimtree(tre){
  p=tre[1]
  if (typeof p==typeof ""){
    v=stak.pop()
    return p
  }
  else{
    stak.push(tre[1])
    return[trimtree(p[0]),trimtree(v[1])]
  }
}
function assigncode(nod,p){
  if (typeof nod==typeof ""){
    code[nod]=p
  }
  else{
    assigncode(nod[0],p+"0")
    assigncode(nod[1],p+"1")
  }
}
function encode(st){
  opt=""
  for (i=0;i<st.length;i++){
    opt+=code[st.charAt(i)]
  }
  return (opt)
}
function decode(tre,st){
  opt=""
  p=tre
  for(i=0;i<st.length;i++){
    if (st.charAt(i)=="0")
      p=p[0]
    else
      p=p[1]
    if(typeof p==typeof ""){
      opt+=p
      p=tre
    } 
  }
  return opt
}
st="kjgkkejgd"
freq=frequency(st);
fre=sortfreq(freq)
tre=buildtree(fre)
//console.log(tre)
stak=[]
t=trimtree(tre)
//console.log(t)
var code={}
assigncode(t,'')
op=encode(st)
console.log("encoded",op)
oo=decode(t,op)
console.log("decoded",oo)
