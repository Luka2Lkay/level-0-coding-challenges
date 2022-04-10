

function vowelsInString (str1,str2){

    let empty = []

    let newStr1 = str1.toLowerCase()
    let newStr2 = str2.toLowerCase()

    for (let alphabet of newStr1){
        if (newStr2.includes(alphabet)){
            if(!empty.includes(alphabet) ){
                empty.push(alphabet)
            }
        }
    }

let x = empty.toString()
console.log(`Letters: ${x}`)
}
