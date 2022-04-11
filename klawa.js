let outP
let outDiv = document.getElementById('out-div')
let CL = true
let h3 = document.querySelectorAll('h3')


function capsLock() {
  CL = !CL
  if(CL === false){
    for (let i = 13; i < h3.length; i++) {
      h3[i].textContent = h3[i].textContent.toLowerCase()
      h3[0].textContent = '~'
      h3[1].textContent = '!'
      h3[2].textContent = '@'
      h3[3].textContent = '#'
      h3[4].textContent = '$'
      h3[5].textContent = '%'
      h3[6].textContent = '^'
      h3[7].textContent = '&'
      h3[8].textContent = '*'
      h3[9].textContent = '('
      h3[10].textContent = ')'
      h3[11].textContent = '_'
      h3[12].textContent = '+'
      h3[23].textContent = '{'
      h3[24].textContent = '}'
      h3[25].textContent = '|'
      h3[35].textContent = ':'
      h3[36].textContent = '"'
      h3[44].textContent = '<'
      h3[45].textContent = '>'
      h3[46].textContent = '?'
    }}else {
      for (let i = 13; i < h3.length; i++) {
        h3[i].textContent = h3[i].textContent.toUpperCase()
        h3[0].textContent = '`'
        h3[1].textContent = '1'
        h3[2].textContent = '2'
        h3[3].textContent = '3'
        h3[4].textContent = '4'
        h3[5].textContent = '5'
        h3[6].textContent = '6'
        h3[7].textContent = '7'
        h3[8].textContent = '8'
        h3[9].textContent = '9'
        h3[10].textContent = '0'
        h3[11].textContent = '-'
        h3[12].textContent = '='
        h3[23].textContent = '['
        h3[24].textContent = ']'
        h3[25].textContent = '\\'
        h3[35].textContent = ';'
        h3[36].textContent = "'"
        h3[44].textContent = ','
        h3[45].textContent = '.'
        h3[46].textContent = '/'
    }}
  }


// function outHTML() {
//   let val = event.target.textContent
//   console.log(val);
// }
// let rows = document.getElementsByClassName('.rows')
// for (let i = 0; i < rows.length; i++) {
//   rows[i].onclick = function(){
//     let val = document.querySelector('.keys').value
//     console.log(val);
//   }
// }

let keys = document.querySelectorAll('.keys')
let rows = document.querySelector('.rows')
let klawa = document.querySelector('.klawa')
let back = document.querySelector('.keys-back')

  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function (){
      if(keys[i] !== back){
      fifthyNine()
      outP.innerHTML += keys[i].textContent.split('').filter(elem =>  elem !== 'BckSpc' && elem !== ' '  && elem !== '\n').join('')

    }})
  }


function fifthyNine() {
  if(outP.textContent.length%60 == 0) {
    outP.innerHTML += '\n'
  }
}
// for (let i = 0; i < keys.length; i++) {
//   keys[i].addEventListener('click', function (){
//     out.innerHTML += keys[i].getAttribute('value')
//     console.log(out);
//   })
// a = outP.textContent.slice(0, (qwerty.textContent.length-1))





function spacer() {
  outP.innerHTML += ' '
}

let p = document.createElement('p')
p.classList.add('out-p')
outP = p
outDiv.appendChild(p)
let ps


function backspacer() {
  ps = document.querySelectorAll('p')
  let l = ps.length
   // let accum = out.textContent.split('')
   // console.log(accum)
   // accum.pop()
   // console.log(accum)
   // out.innerHTML = ''
   // console.log(out.textContent)
   // out.innerText = (accum.join(''))
   if (outP.textContent == '') {
     if(outP == ps[0]){
       console.log('ne');
     }else {
       // ps[length - 1].classList.add('out-p')
       outP.remove()
       ps[l-2].classList.add('out-p')
       outP = ps[l-2]
     }
   }
   let b = outP.textContent.slice(0, (outP.textContent.length-1))
   outP.textContent = b
}
function enter() {
  let p = document.createElement('p')
  outP.classList.remove('out-p')
  // outDiv.innerHTML += '<br>'
  p.classList.add('out-p')
  outP = p
  outDiv.appendChild(p)
  // p.classList.add('out-p')
  // outDiv.innerHTML = p
  // outP.innerHTML += '\n<br/>'
  // console.log(outP.textContent)
  // outP = outP.textContent.slice(0, (outP.textContent.length))
}

function taber() {
  outP.innerHTML += '  '
}



// function capsLock() {
//   console.log(rows);
//   rows.remove()
//   klawa.innerHTML = `
//   <div class="rows" >
//
//     <div class="first line">
//       <div value="~" class="keys k1">
//         <h3>~</h3>
//       </div>
//       <div value="!" class="keys k1">
//         <h3>!</h3>
//       </div>
//       <div value="@" class="keys k1">
//         <h3>@</h3>
//       </div>
//       <div value="#" class="keys k1">
//         <h3>#</h3>
//       </div>
//       <div value="$" class="keys k1">
//         <h3>$</h3>
//       </div>
//       <div value="%" class="keys k1">
//         <h3>%</h3>
//       </div>
//       <div value="^" class="keys k1">
//         <h3>^</h3>
//       </div>
//       <div value="&" class="keys k1">
//         <h3>&</h3>
//       </div>
//       <div value="*" class="keys k1">
//         <h3>*</h3>
//       </div>
//       <div value="(" class="keys k1">
//         <h3>(</h3>
//       </div>
//       <div value=")" class="keys k1">
//         <h3>)</h3>
//       </div>
//       <div value="_" class="keys k1">
//         <h3>_</h3>
//       </div>
//       <div value="+" class="keys k1">
//         <h3>+</h3>
//       </div>
//       <div value="" class="keys k1">
//         <h3>BckSpc</h3>
//       </div>
//
//
//     </div>
//
// <!-- new line-->
//
//     <div class="second line">
//
//       <div value="  " class="keys k2">
//         <h3>Tab</h3>
//       </div>
//       <div class="keys k2" value="Q">
//         <h3>Q</h3>
//       </div>
//       <div value="W" class="keys k2">
//         <h3>W</h3>
//       </div>
//       <div value="E" class="keys k2">
//         <h3>E</h3>
//       </div>
//       <div value="R" class="keys k2">
//         <h3>R</h3>
//       </div>
//       <div value="T" class="keys k2">
//         <h3>T</h3>
//       </div>
//       <div value="Y" class="keys k2">
//         <h3>Y</h3>
//       </div>
//       <div value="U" class="keys k2">
//         <h3>U</h3>
//       </div>
//       <div value="I" class="keys k2">
//         <h3>I</h3>
//       </div>
//       <div value="O" class="keys k2">
//         <h3>O</h3>
//       </div>
//       <div value="P" class="keys k2">
//         <h3>P</h3>
//       </div>
//       <div value="{" class="keys k2">
//         <h3>{</h3>
//       </div>
//       <div value="}" class="keys k2">
//         <h3>}</h3>
//       </div>
//       <div value="|" class="keys k2">
//         <h3>|</h3>
//       </div>
//     </div>
// <!-- new line --->
//     <div class="third line">
//       <div value="" class="keys bigKeys3 k3" onclick="capsLock()">
//         <h3>Cps Lck</h3>
//       </div>
//       <div value="A" class="keys k3">
//         <h3>A</h3>
//       </div>
//       <div value="S" class="keys k3">
//         <h3>S</h3>
//       </div>
//       <div value="D" class="keys k3">
//         <h3>D</h3>
//       </div>
//       <div value="F" class="keys k3">
//         <h3>F</h3>
//       </div>
//       <div value="G" class="keys k3">
//         <h3>G</h3>
//       </div>
//       <div value="H" class="keys k3">
//         <h3>H</h3>
//       </div>
//       <div value="J" class="keys k3">
//         <h3>J</h3>
//       </div>
//       <div value="K" class="keys k3">
//         <h3>K</h3>
//       </div>
//       <div value="L" class="keys k3">
//         <h3>L</h3>
//       </div>
//       <div value=";" class="keys k3">
//         <h3>;</h3>
//       </div>
//       <div value="'" class="keys k3">
//         <h3>'</h3>
//       </div>
//       <div value="<br>" class="keys k3 bigKeys3">
//         <h3>Enter</h3>
//       </div>
//     </div>
// <!---new lin------>
//     <div class="fourth line">
//       <div value="" class="keys bigKeys4 k4">
//         <h3>Shft</h3>
//       </div>
//       <div value="Z" class="keys k4">
//         <h3>Z</h3>
//       </div>
//       <div value="X" class="keys k4">
//         <h3>X</h3>
//       </div>
//       <div value="C" class="keys k4">
//         <h3>C</h3>
//       </div>
//       <div value="V" class="keys k4">
//         <h3>V</h3>
//       </div>
//       <div value="B" class="keys k4">
//         <h3>B</h3>
//       </div>
//       <div value="N" class="keys k4">
//         <h3>N</h3>
//       </div>
//       <div value="M" class="keys k4">
//         <h3>M</h3>
//       </div>
//       <div value="," class="keys k4">
//         <h3>,</h3>
//       </div>
//       <div value="." class="keys k4">
//         <h3>.</h3>
//       </div>
//       <div value="/" class="keys k4">
//         <h3>/</h3>
//       </div>
//       <div value="" class="keys bigKeys4 k4">
//         <h3>Shft</h3>
//       </div>
//
//     </div>
//     <div class="sixth line">
//         <div value=" " class="keys space">
//           <h3>Space</h3>
//         </div>
//
//     </div>
//     <img src="data:image/jpeg;base64,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" alt="">
//
//   </div>
//   `
// }
