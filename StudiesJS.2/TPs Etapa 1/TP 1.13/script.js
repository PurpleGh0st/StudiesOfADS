let fibonacci = [0, 1]
let i = 2

while (fibonacci[i - 1] + fibonacci[i - 2] <= 55){
  fibonacci[i] = fibonacci[i -1] + fibonacci[i - 2]
  i++
}

console.log(fibonacci)