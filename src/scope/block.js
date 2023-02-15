function fruits() {
    
    const fruit3 = 'Banana'; // block scope
    if (true) {
      var fruit1 = 'Apple'; // function scope
      
      let fruit2 = 'Kiwi'; // block scope
      console.log(fruit2);
    }
    console.log(fruit1);
    console.log(fruit3);
    
    
    
  }
  
  fruits();