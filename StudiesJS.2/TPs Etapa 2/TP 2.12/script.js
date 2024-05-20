let qntNum = parseInt(prompt('Quantos números você quer sortear?'))

for(let i = 0; i < qntNum; i++){
  let numSort = Math.ceil(Math.random() * 60) 
  console.log(numSort)
}