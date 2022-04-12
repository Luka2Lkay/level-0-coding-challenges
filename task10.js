

function vowelsInString (str1,str2){

    const empty = []

    const newStr1 = str1.toLowerCase()
    const newStr2 = str2.toLowerCase()

    for (let alphabet of newStr1){
        if (newStr2.includes(alphabet)){
            if(!empty.includes(alphabet) ){
                empty.push(alphabet)
            }
        }
    }

const convertedList = empty.toString()
console.log(`Letters: ${convertedList}`)
}

