function urutkanAbjad(str) {
    let abjad = 'abcdefghijklmnopqrstuvwxyz';
    let arr = str.split('');

    for (let i = 0; i < str.length -1; i++){
        for (let j = 0; j < str.length -1 -i; j++){
            if (abjad.indexOf(arr[j]) > abjad.indexOf(arr[j + 1])){
                let faktor = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = faktor
            }
        }
    }
    return arr.join('')

}

  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'