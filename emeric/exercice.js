
// trouver l'aire d'un cercle avec le rayon en param 
export function circleArea(r) {
    console.log('L\'aire du cercle est égale à : ' + r * r * 3.14159)  
}

// definir si le 1er janvier est un dimanche entre 2014 et 2050
export function isFirstOfJanuaryASunday(year1, year2) {
    // itere entre année 1 et année 2
    for (let i = year1; i <= year2; i++)
    {
    // Crée une variable date qui recupere le 1er Janvier
    let date = new Date(i, 0, 1);
    // Ici on vérifie si le &er Janvier est bien un dimanche
    // En JS, les jours de la semaine vont de 0 à 6
    if ( date.getDay() === 0 )
        console.log("En " + i + ", le premier Janvier tombe un dimanche !");
    }
}

// n premiers de la suite de Fibonacci

export function fibonacci(n) {
	// On crée les trois variables nécessaires au calcul
    let n1 = 0,
		n2 = 1,
		nSum;
    // On itère jusqu'au nombre n entré en param
	for (let i = 1; i <= n; i++) {
		console.log(n1);
		nSum = n1 + n2;
		n1 = n2;
		n2 = nSum;
	}
}

// bruteforce un code de CAESAR
 
// pour chaque index, on décalle sa valeur de 1 (a -> b, b-> c etc etc)

export function caesar(hash) {
    // ici on declare deux variables, une const ALPHABET et une variable contenant un array de nos caracteres 
    const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let hashArray = hash.split('');
    let j = 0;
    // ici je boucle dans mon alphabet jusqu'a ce que l'index de l'alphabet soit egal a l'index du hashArray
    for (let i = 0; i < ALPHABET.length - 1; i++) {
        if (hashArray[j] === ALPHABET[i]) {
            console.log('Matching indexs : ' + hashArray[j] + ' ' + ALPHABET[i]);
            // ici on remplace la valeur de l'index de hashArray par la valeur de l'index d'ALPHABET +1
            hashArray[j] = ALPHABET[i+1];
            console.log('New index : ' + hashArray[j]);
            console.log('New array : ' + hashArray);
        } else {
            // ici on log toutes les lettres de ALPHABET qui ne matchent pas notre index actuel de hashArray
            console.log(ALPHABET[i]);
        }
    }
}
