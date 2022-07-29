const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let result = "";
    let x;
    let y;
    let z;
    for (x = 0, y = 10; x < expr.length, y <= expr.length;x += 10, y += 10){ 
     z = expr.slice(x,y);   
    if (z === '0'+'0'+'0'+'0'+'0'+'0'+'1'+'0'+'1'+'1') {
    z = 'a';   
    }
    if (z === '0'+'0'+'1'+'1'+'1'+'0'+'1'+'0'+'1'+'0') {
    z = 'b';   
    }
    if (z === '0'+'0'+'1'+'1'+'1'+'0'+'1'+'1'+'1'+'0') {
    z = 'c';   
    }
    if (z === '0'+'0'+'0'+'0'+'1'+'1'+'1'+'0'+'1'+'0') { 
    z = 'd';     
    }
    if (z === '0'+'0'+'0'+'0'+'0'+'0'+'0'+'0'+'1'+'0') { 
    z = 'e';    
    }
    if (z === '0'+'0'+'1'+'0'+'1'+'0'+'1'+'1'+'1'+'0') { 
    z = 'f';    
    }
    if (z === '0'+'0'+'0'+'0'+'1'+'1'+'1'+'1'+'1'+'0') { 
    z = 'g';    
    }   
    if (z === '0'+'0'+'1'+'0'+'1'+'0'+'1'+'0'+'1'+'0') {
    z = 'h';   
    }   
    if (z === '0'+'0'+'0'+'0'+'0'+'0'+'1'+'0'+'1'+'0') { 
    z = 'i';    
    }
    if (z === '0'+'0'+'1'+'0'+'1'+'1'+'1'+'1'+'1'+'1') { 
    z = 'j';    
    }
    if (z === '0'+'0'+'0'+'0'+'1'+'1'+'1'+'0'+'1'+'1') { 
    z = 'k';    
    }   
    if (z === '0'+'0'+'1'+'0'+'1'+'1'+'1'+'0'+'1'+'0') { 
    z = 'l';     
    }
    if (z === '0'+'0'+'0'+'0'+'0'+'0'+'1'+'1'+'1'+'1') { 
    z = 'm';    
    }
    if (z === '0'+'0'+'0'+'0'+'0'+'0'+'1'+'1'+'1'+'0') { 
    z = 'n';    
    }   
    if (z === '0'+'0'+'0'+'0'+'1'+'1'+'1'+'1'+'1'+'1') { 
    z = 'o';     
    }
    if (z === '0'+'0'+'1'+'0'+'1'+'1'+'1'+'1'+'1'+'0') { 
    z = 'p';    
    }
    if (z === '0'+'0'+'1'+'1'+'1'+'1'+'1'+'0'+'1'+'1') { 
    z = 'q';    
    }
    if (z === '0'+'0'+'0'+'0'+'1'+'0'+'1'+'1'+'1'+'0') { 
    z = 'r';     
    }
    if (z === '0'+'0'+'0'+'0'+'1'+'0'+'1'+'0'+'1'+'0') { 
    z = 's';     
    }
    if (z === '0'+'0'+'0'+'0'+'0'+'0'+'0'+'0'+'1'+'1') { 
    z = 't';     
    }
    if (z === '0'+'0'+'0'+'0'+'1'+'0'+'1'+'0'+'1'+'1') { 
    z = 'u';     
    }
    if (z === '0'+'0'+'1'+'0'+'1'+'0'+'1'+'0'+'1'+'1') { 
    z = 'v';     
    }  
    if (z === '0'+'0'+'0'+'0'+'1'+'0'+'1'+'1'+'1'+'1') { 
    z = 'w';     
    }
    if (z === '0'+'0'+'1'+'1'+'1'+'0'+'1'+'0'+'1'+'1') { 
    z = 'x';     
    }
    if (z === '0'+'0'+'1'+'1'+'1'+'0'+'1'+'1'+'1'+'1') { 
    z = 'y';     
    }
    if (z === '0'+'0'+'1'+'1'+'1'+'1'+'1'+'0'+'1'+'0') { 
    z = 'z';     
    }
    if (z === '1'+'0'+'1'+'1'+'1'+'1'+'1'+'1'+'1'+'1') { 
    z = '1';     
    }
    if (z === '1'+'0'+'1'+'0'+'1'+'1'+'1'+'1'+'1'+'1') { 
    z = '2';     
    }
    if (z === '1'+'0'+'1'+'0'+'1'+'0'+'1'+'1'+'1'+'1') { 
    z = '3';     
    }
    if (z === '1'+'0'+'1'+'0'+'1'+'0'+'1'+'0'+'1'+'1') { 
    z = '4';     
    }
    if (z === '1'+'0'+'1'+'0'+'1'+'0'+'1'+'0'+'1'+'0') { 
    z = '5';     
    }
    if (z === '1'+'1'+'1'+'0'+'1'+'0'+'1'+'0'+'1'+'0') { 
    z = '6';     
    }
    if (z === '1'+'1'+'1'+'1'+'1'+'0'+'1'+'0'+'1'+'0') { 
    z = '7';     
    }
    if (z === '1'+'1'+'1'+'1'+'1'+'1'+'1'+'0'+'1'+'0') { 
    z = '8';     
    }
    if (z === '1'+'1'+'1'+'1'+'1'+'1'+'1'+'1'+'1'+'0') { 
    z = '9';     
    }
    if (z === '1'+'1'+'1'+'1'+'1'+'1'+'1'+'1'+'1'+'1') { 
    z = '0';     
    }   
    if (z === '**********') { 
    z = ' ';     
    }  
    result += z;  
    }  
    return result
    };    


module.exports = {
    decode
}