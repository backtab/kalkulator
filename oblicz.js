// Pobranie pól tekstowych dla walidacji danych
let ileOdlewowT = document.getElementById('ileOdlewow')
let ileOdlewowWRT = document.getElementById('ileOdlewowWR')
let ileWDT = document.getElementById('ileWD')
let gruboscScianki = document.getElementById('gruboscScianki')
let wspSprawnosci = document.getElementById('wspSprawnosci')
let paramCT = document.getElementById('paramC')
let cisMetal = document.getElementById('cisMetal')
let uzyskT = document.getElementById('uzysk')
let wspSdlaCZT = document.getElementById('wspSdlaCZ')
let objOdlewuT = document.getElementById('objOdlewu')
let gestStopuT = document.getElementById('gestStopu')
let fwdT = document.getElementById('fwd')
let fwrT = document.getElementById('fwr')
let fwgT = document.getElementById('fwg')

// Licznik dla walidacji danych
let count = 0

// Funkcja sprawdzająca poprawność danych
function test() {
	// Test pola ilości odlewów
	if (document.getElementById('ileOdlewow').value >= 1) {
		ileOdlewowT.setAttribute('class', 'poprawnie')
	} else {
		ileOdlewowT.setAttribute('class', 'blad')
	}

	// Test pola ilości odlewów zasilanych przez układ
	if (document.getElementById('ileOdlewowWR').value >= 1) {
		ileOdlewowWRT.setAttribute('class', 'poprawnie')
	} else {
		ileOdlewowWRT.setAttribute('class', 'blad')
	}

	// Test liczby wlewów doprowadzających
	if (document.getElementById('ileWD').value >= 1) {
		ileWDT.setAttribute('class', 'poprawnie')
	} else {
		ileWDT.setAttribute('class', 'blad')
	}


	//Test grubosci scianki
	if (document.getElementById('gruboscScianki').value > 0) {
		gruboscScianki.setAttribute('class', 'poprawnie')
	} else {
		gruboscScianki.setAttribute('class', 'blad')
	}
    //Test współczynnika sprawności 
	if (document.getElementById('wspSprawnosci').value > 0) {
		wspSprawnosci.setAttribute('class', 'poprawnie')
	} else {
		wspSprawnosci.setAttribute('class', 'blad')
	}

	// Test parametru C
	if (document.getElementById('paramC').value > 0) {
		paramCT.setAttribute('class', 'poprawnie')
	} else {
		paramCT.setAttribute('class', 'blad')
	}
    // Test ciśnienia metalostatycznego
	if (document.getElementById('cisMetal').value > 0) {
		cisMetal.setAttribute('class', 'poprawnie')
	} else {
		cisMetal.setAttribute('class', 'blad')
	}

	// Test współcznnika k (uzysk)
	if (document.getElementById('uzysk').value > 0) {
		uzyskT.setAttribute('class', 'poprawnie')
	} else {
		uzyskT.setAttribute('class', 'blad')
	}

	// Test współczynnika k1 (dla czasu zalewania)
	if (document.getElementById('wspSdlaCZ').value > 0) {
		wspSdlaCZT.setAttribute('class', 'poprawnie')
	} else {
		wspSdlaCZT.setAttribute('class', 'blad')
	}

	// Test objętości surowego odlewu
	if (document.getElementById('objOdlewu').value > 0) {
		objOdlewuT.setAttribute('class', 'poprawnie')
	} else {
		objOdlewuT.setAttribute('class', 'blad')
	}

	// Test gęstości właściwej stopu
	if (document.getElementById('gestStopu').value > 0) {
		gestStopuT.setAttribute('class', 'poprawnie')
	} else {
		gestStopuT.setAttribute('class', 'blad')
	}

	// Test stosunku powierzchni przekrojów elementów układu wlewowego
	// Fwd
	if (document.getElementById('fwd').value == 1) {
		fwdT.setAttribute('class', 'poprawnie')
	} else {
		fwdT.setAttribute('class', 'blad')
	}
	// Fwr
	if (document.getElementById('fwr').value >= 1.2 && document.getElementById('fwr').value <= 2) {
		fwrT.setAttribute('class', 'poprawnie')
	} else {
		fwrT.setAttribute('class', 'blad')
	}
	// Fwg
	if (document.getElementById('fwg').value >= 1 && document.getElementById('fwg').value <= 1.5) {
		fwgT.setAttribute('class', 'poprawnie')
	} else {
		fwgT.setAttribute('class', 'blad')
	}

	// Warunek poprawności danych
	if (
		ileOdlewowT.classList.contains('poprawnie') &&
		ileOdlewowWRT.classList.contains('poprawnie') &&
		ileWDT.classList.contains('poprawnie') &&
		gruboscScianki.classList.contains('poprawnie') &&
        wspSprawnosci.classList.contains('poprawnie')&&
		paramCT.classList.contains('poprawnie') &&
        cisMetal.classList.contains('poprawnie')&&
		uzyskT.classList.contains('poprawnie') &&
		wspSdlaCZT.classList.contains('poprawnie') &&
		objOdlewuT.classList.contains('poprawnie') &&
		gestStopuT.classList.contains('poprawnie') &&
		fwdT.classList.contains('poprawnie') &&
		fwrT.classList.contains('poprawnie') &&
		fwgT.classList.contains('poprawnie')
	) {
		oblicz()
	} else {
		alert('Uzupełnij poprawnie wszystkie dane.')
	}
}

function oblicz() {
	const zaok = 3
	console.log('funkcja oblicz')

	let ileOdlewow = document.getElementById('ileOdlewow').value
	let ileOdlewowWR = document.getElementById('ileOdlewowWR').value
	let ileWD = document.getElementById('ileWD').value
	let gruboscScianki = document.getElementById('gruboscScianki').value
    let wspSprawnosci = document.getElementById('wspSprawnosci').value
	let paramC = document.getElementById('paramC').value
    let cisMetal = document.getElementById('cisMetal').value
	let uzysk = document.getElementById('uzysk').value
	let wspSdlaCZ = document.getElementById('wspSdlaCZ').value
	let objOdlewu = document.getElementById('objOdlewu').value
	let gestStopu = document.getElementById('gestStopu').value
	let fwd = document.getElementById('fwd').value
	let fwr = document.getElementById('fwr').value
	let fwg = document.getElementById('fwg').value

	// Funkcja zaokrąglająca
	function roundTo(value, places) {
		let power = Math.pow(10, places)
		return Math.round(value * power) / power
	}

	/* Obliczenia */

	// Obliczenie masy surowego odlewu
	let masaOdlewu = document.getElementById('masaOdlewu')
	masaOdlewu.innerHTML = roundTo((gestStopu * objOdlewu) / 1000, zaok)

	// Obliczenie masy surowego odlewu z układem zasilającym i wlewowym
	let masaOdlewuZUW = document.getElementById('masaOdlewuZUW')
	masaOdlewuZUW.innerHTML = roundTo(masaOdlewu.innerHTML * uzysk, zaok)

	// Zalecany czas zalewania
	let czasZ = document.getElementById('czasZ')
	czasZ.innerHTML = roundTo(wspSdlaCZ * Math.pow(masaOdlewuZUW.innerHTML * gruboscScianki, 1 / 3), zaok)

	// Obliczenie sumy powierzchni przekrojów wlewów doprowadzających
    let sumaPrzWD = document.getElementById('sumaPrzWD')
	sumaPrzWD.innerHTML = roundTo((masaOdlewuZUW.innerHTML*1000) /
    (czasZ.innerHTML * Math.pow(2 * 981, 1 / 2) * gestStopu * wspSprawnosci * Math.pow(cisMetal, 1 / 2)), zaok)
		
	// Obliczanie przekrojów wlewów doprowadzających
	let przWD = document.getElementById('przWD')
	przWD.innerHTML = roundTo(sumaPrzWD.innerHTML / ileWD, zaok)

	// Obliczenie przekroju wlewu rozprowadzającego
	let przWR = document.getElementById('przWR')
	przWR.innerHTML = roundTo(fwr * ileOdlewowWR * sumaPrzWD.innerHTML, zaok)

	// Obliczenie przekroju wlewu głównego
	let przWG = document.getElementById('przWG')
	przWG.innerHTML = roundTo(fwg * ileOdlewow * sumaPrzWD.innerHTML, zaok)

	// Obliczenie pojemności zbiornika wlewowego
	let objZW = document.getElementById('objZW')
	objZW.innerHTML = roundTo((masaOdlewuZUW.innerHTML * ileOdlewow * 1000) / (gestStopu * czasZ.innerHTML), zaok)

	// Prędkość liniowa podnoszenia się metalu w formie
	let prLin = document.getElementById('prLin')
	prLin.innerHTML = roundTo(paramC / czasZ.innerHTML, zaok)

	// Ukrycie pierwszej strony
	let container = document.getElementById('container')
	container.style.display = 'none'

	// Pokazanie tabeli z wynikami
	let wynik = document.getElementById('wynik')
	wynik.style.display = 'block'
}
