function pairElement(str) {
    let newv=[];
    str=str.split('')
    for(let i in str){
        if(str[i]=="C"){
            newv.push(["C","G"])
        }
        if(str[i]=="G"){
            newv.push(["G","C"])
        }
        if(str[i]=="T"){
            newv.push(["T","A"])
        }
        if(str[i]=="A"){
            newv.push(["A","T"])
        }
    }
    return newv;
  }
  
console.log(pairElement("CTCTA"))


// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

// pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

// pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].