/* Asal olan ve olmayan sayılar */
function prime(...sayilar) {
    let sayi
    for (let a = 0; a < sayilar.length; a++) {
       sayi = 0;
        for (let b = 1; b <=sayilar[a] ; b++) {
            if (sayilar[a] % b == 0) {
                sayi++
            }
            
        }
        if(sayi == 2){
            console.log(sayilar[a]+"Asal")
        }else{
            console.log(sayilar[a]+"Asal Değil")
        }
        
    }
  }
  prime(2, 3,4, 5,6, 7,8, 11, 13, 17, 19, 23, 29, 31, 37, 
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 , 97)
  
  /* Arkadaş sayılar */
  
  let num1 = 220
  let num2 = 284
  
  let toplam1 = 0
  let toplam2 = 0
  
  let arkadas = function(s1,s2){
      for (let index = 0; index < s1; index++) {
          if (num1 % index == 0) {
              toplam1 += index
          }
      }
      for (let index = 0; index < s2; index++) {
          if (num2 % index == 0) {
              toplam2 += index
          }     
  }
  if(toplam1 == s2 && toplam2 == s1 ){
      console.log("Arkadaş sayılar")
  }else{
      console.log("Arkadaş sayı olmayanlar")
  }
      
  }
  arkadas(220,284)
  
  /* 1000 e kadarki tüm mükemmel sayıların listesi */
  
  function perfectNumbers(){
      for(let c = 1; c < 1000; c++){
          let n1 = 0
          for(let d=1; d<c; d++){
              if(c%d == 0){
                  n1+=d;
              }
          }
      }
      if(n1 == d){
          console.log(d)
      }
  }
  perfectNumbers()
  
  /* 1000 e kadar ki tüm asal sayıların listesi */
  
  function prime(sayilar) {
      let sayi
      for (let a = 0; a < sayilar.length; a++) {
         sayi = 0;
          for (let b = 1; b <=sayilar[a] ; b++) {
              if (sayilar[a] % b == 0) {
                  sayi++
              }
              
          }
          if(sayi == 2){
              console.log(sayilar[a]+"Asal")
          }else{
              console.log(sayilar[a]+"Asal Değil")
          }
          
      }
    }
    prime(1000)