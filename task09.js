

const vowels = ['a', 'e', 'i','o','u']

function vowelsInString (str){

    let empty = []

    let newStr = str.toLowerCase()

    for (let alphabet of newStr){
        if (vowels.includes(alphabet)){
            if(!empty.includes(alphabet) ){
                empty.push(alphabet)
            }
        }
    }

let x = empty.toString()
console.log(`Vowels: ${x}`)
}

