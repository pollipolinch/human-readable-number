module.exports = function toReadable (number) {
    let newNumber = number.toString().split('')
    console.log(newNumber)
    let zero = 'zero'
    let single = ['one','two','three','four','five','six','seven','eight','nine','ten']
    let double = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    let decimal = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    let result = ''
    if(number == 0){
        result = zero
    }else if (number<=10){
  result = single[number-1]
      }else if(number<=19){
          result = double[newNumber[1]-1]
      }else if(number%100==0){
              result = `${single[newNumber[0]-1]+' hundred'}`
       }else if(number<100 && number%10==0){
          result = decimal[newNumber[0]-1]
      }else if(number<=99){
        result =`${decimal[newNumber[0]-1]+" "+single[newNumber[1]-1]}`
          }else if(number>100 && number%10==0){
              result = `${single[newNumber[0]-1]+' hundred '+decimal[newNumber[1]-1]}`
          }else if(number>100 && newNumber[1]== 0){
              result = `${single[newNumber[0]-1]+' hundred '+single[newNumber[2]-1]}`
          }else if(number>100 && newNumber[1]== 1){
              result = `${single[newNumber[0]-1]+' hundred '+double[newNumber[2]-1]}`
          }else if(number<1000){
              result = `${single[newNumber[0]-1]+' hundred '+decimal[newNumber[1]-1]+" "+single[newNumber[2]-1]}`
          }
          return result
}
