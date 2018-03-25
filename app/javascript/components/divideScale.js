
 function divideScale ( min , max , n ){
   
   
    if(n <= 5){
      
     return scaleFive(n);
      
    }

                function scaleFive(n){
                    let colors= {red:[237,87,87], orange:[237,141,86] , yellow:[237,237,87] , green:[87,237,87] , blue:[87,87,237] }
                    let color_array=[];
                
                    switch(n) {
                    
                    case 1:
                        color_array= [colors.blue];	     
                    break;
                    case 2:
                        color_array= [colors.red, colors.green];	     
                    break;
                    case 3:
                        color_array= [colors.red, colors.yellow, colors.green];	     
                    break;
                    case 4:
                        color_array= [colors.red, colors.orange, colors.green, colors.blue];	     
                    break;
                    case 5:
                        color_array=  [colors.red, colors.orange, colors.yellow, colors.green, colors.blue];
                    break;

                    default:
                        color_array=[colors.blue];
                }


                        return color_array;
                }




    
    let pattern= [1,0,2]
              //237 87 87
    let rgb = [max , min , min]
    let scale = (max-min) * 3; // 450
    let increment = scale / (n-1); // 75
    let i=0;
    let increase = true;
    let leftover= 0;
    let rgb_array=[[max,min,min]];
    
     while( i !== pattern.length ){
            
       let slot = rgb[pattern[i]]  // 87   //2. 162 // 3. 237 
   
       
               if(increase){
                                  // 0 + 87 + 75  = 162  //2. 237
                                  
                 let new_number = leftover + slot + increment;
                 // 
                                 scale = scale - increment; // 450-75 
                  
                
              
                   if(new_number >= max ){   
                                                                    
                       leftover = new_number-max; //2. 0
                       new_number = max;        //237
                       rgb[pattern[i]] = new_number;  //237
                       
                       
                       rgb_array.push([...rgb]);
                       
                    } else {
                    
                            if(scale === 0 ){  break }// this is when the whole thing should stop	
                       
                       leftover = 0;
                       rgb[pattern[i]] = new_number;
                       
                       rgb_array.push([...rgb]);
                      
                         
                    
                         // make sure that this is not the last one
                       continue; // we need to continue so that it wont increment 
                    }  
 
               } else {
                  
                  let new_number = slot - increment - leftover;
                  scale = scale - increment;
              
                
                  
                  if(new_number <= min ){
                      
                     leftover = min - (new_number); 
                     new_number = min; 
                          rgb[pattern[i]]= new_number; 
                        rgb_array.push([...rgb]);
                     
                  } else{
                            
                       if (scale===0){ break }
                         leftover = 0; 
                              rgb[pattern[i]] = new_number;
                         rgb_array.push([...rgb]);
                       continue; 
                  }         
               }
 
         increase = (increase) ? false : true;
       
       i++;
               }
   
   return rgb_array
    
  }
 
 
  export default divideScale

  