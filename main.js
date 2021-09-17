// JSON of all champions/characters to choose from
let champions = [
	{
		name: "CyberDrunk",
		avatarURL: "IMG/avatars/1.png",
		used: false,
		// used by player: null,
	},
	{
		name: "Mlíko!",
		avatarURL: "IMG/avatars/2.png",
		used: false,
	},
	{
		name: "Chaos",
		avatarURL: "IMG/avatars/3.png",
		used: false,
	},
	{
		name: "Vin Disel",
		avatarURL: "IMG/avatars/4.png",
		used: false,
	},
	{
		name: "Oběť inflace",
		avatarURL: "IMG/avatars/5.png",
		used: false,
	},
	{
		name: "Memeflower",
		avatarURL: "IMG/avatars/6.png",
		used: false,
	},
	{
		name: "Always keep it 69",
		avatarURL: "IMG/avatars/7.png",
		used: false,
	},
	{
		name: "The Old Fishman",
		avatarURL: "IMG/avatars/8.png",
		used: false,
	},
	{
		name: "BIGBOY",
		avatarURL: "IMG/avatars/9.png",
		used: false,
	},
	{
		name: "Mr. Aleš",
		avatarURL: "IMG/avatars/10.png",
		used: false,
	},
	{
		name: "Pavel Stašek",
		avatarURL: "IMG/avatars/11.png",
		used: false,
	},
	{
		name: "CONDOMHEAD",
		avatarURL: "IMG/avatars/12.png",
		used: false,
	},
	{
		name: "Happy David",
		avatarURL: "IMG/avatars/13.png",
		used: false,
	},
	{
		name: "BIG Ounce (PSN)",
		avatarURL: "IMG/avatars/14.png",
		used: false,
	},
	{
		name: "Gulag",
		avatarURL: "IMG/avatars/15.png",
		used: false,
	},
	{
		name: "Good Deal!",
		avatarURL: "IMG/avatars/16.png",
		used: false,
	},
	{
		name: "Sedy in Běchovice",
		avatarURL: "IMG/avatars/17.png",
		used: false,
	},
	{
		name: "I've got an APE-DATE!",
		avatarURL: "IMG/avatars/18.png",
		used: false,
	},
	{
		name: "Bro Love",
		avatarURL: "IMG/avatars/19.png",
		used: false,
	},
	{
		name: "rum/cola > 70/30",
		avatarURL: "IMG/avatars/20.png",
		used: false,
	},
	{
		name: "Double Trouble",
		avatarURL: "IMG/avatars/21.png",
		used: false,
	},
	{
		name: "Scary Man",
		avatarURL: "IMG/avatars/22.png",
		used: false,
	},
	{
		name: "BIGTHOR",
		avatarURL: "IMG/avatars/23.png",
		used: false,
	},
	{
		name: "Zuz",
		avatarURL: "IMG/avatars/24.png",
		used: false,
	},
	{
		name: "The Teacher",
		avatarURL: "IMG/avatars/25.png",
		used: false,
	},
	{
		name: "Kok The Cock",
		avatarURL: "IMG/avatars/26.png",
		used: false,
	},
	{
		name: "K.G.B.",
		avatarURL: "IMG/avatars/27.png",
		used: false,
	},
	{
		name: "Philosober",
		avatarURL: "IMG/avatars/28.png",
		used: false,
	},
	{
		name: "Charizard",
		avatarURL: "IMG/avatars/29.png",
		used: false,
	},
	{
		name: "Licky-toung",
		avatarURL: "IMG/avatars/30.png",
		used: false,
	},
	{
		name: "CowboyDad",
		avatarURL: "IMG/avatars/31.png",
		used: false,
	},
	{
		name: "Better safe than sry...",
		avatarURL: "IMG/avatars/32.png",
		used: false,
	},
	{
		name: "Handsome Mario",
		avatarURL: "IMG/avatars/33.png",
		used: false,
	},
	{
		name: "Futurama-ass fagot",
		avatarURL: "IMG/avatars/34.png",
		used: false,
	},
	{
		name: "Young Blood",
		avatarURL: "IMG/avatars/35.png",
		used: false,
	},
	{
		name: "kačí",
		avatarURL: "IMG/avatars/36.png",
		used: false,
	},
	{
		name: "Pilsner Lover",
		avatarURL: "IMG/avatars/37.png",
		used: false,
	},
	{
		name: "FA NY",
		avatarURL: "IMG/avatars/38.png",
		used: false,
	},
	{
		name: "Busy Guy",
		avatarURL: "IMG/avatars/39.png",
		used: false,
	},
	{
		name: "Ilonka <3 <3 <3",
		avatarURL: "IMG/avatars/40.png",
		used: false,
	},
]; let championsCount = champions.length


// JSON of all created players
let players = [
	// fist it'll be an empty array with no objects
]


// JSON of all effects
let bigEffects = [
	// here all the random effects to play every 10 mins or something
	{},
	{},
	{},
]

let soundEfects = [
	// here all the random sound effects
	{},
	{},
	{},
]


// Info side panel code (to open and close info)
let infoPanel = {
	panel: document.querySelector("#info-panel"),
	allSections: document.getElementsByClassName("info") 
}

infoPanel.panel.addEventListener("click", (e) => {
	let target = e.target
	let sibling = e.target.nextSibling.nextSibling
	let targetName = e.target.innerHTML.split(" ")[0]
	if (!target.classList.contains("content") && !target.classList.contains("sidebar-left--info")) {
		if (sibling.classList.contains("hide")) {
			sibling.classList.remove("hide")
			target.innerHTML = `${targetName} &#9660;`
			target.classList.add("margin-bottom--7")
		} else {
			sibling.classList.add("hide")
			target.classList.remove("margin-bottom--7")
			if (window.innerWidth < 760) {e.b = ""} else {e.b = "&#9658;"}
			target.innerHTML = `${targetName} ${e.b}`
		}
	}
})


// JSON Console motivator 
let theConsoleMotivator = {
	cheerUp: "'BRUH.. YOU'RE FUCKED.'",
	talkShit: "'Who is this cute little lesbian and how tight is her pussy?'"
}


// Audio code
let audio = document.querySelector(".audio")
audio.muted = false


// Timer Code
let timer = {
	startTime: null,

	// definition of inner values
	milsec: 0,
	sec: 0,
	min: 0,
	h: 0,
	overallMinutes: 0,

	// definition of timer second speed in milliseconds
	speed: 250,

	// Selectors in the DOM
	UI: document.getElementById("main-timer"),
	UImin: document.querySelector("#minutes"),
	UIsec: document.querySelector("#seconds"),
	UImilisec: document.querySelector("#milliseconds"),

	offhandTimer: document.querySelector("#offhand-timer-clock"),
	offhandMin: document.querySelector("#offhand-minutes"),
	offhandSec: document.querySelector("#offhand-seconds"),
	offhandNextRound: document.querySelector("#offhand-next-rounds"),

	currentRound: document.querySelector("#current-round"),
	currentRoundBig: document.querySelector("#current-round-big"),
	nextRoundBig: document.querySelector("#next-round-big"),

	overviewTimer: document.querySelector("#overview-timer"),

	startButton: document.querySelector(".start-button"),
	stopButton: document.querySelector(".stop-button"),

	loadingBar: document.querySelector("#loading-bar"),
	loadingBarText: document.querySelector("#loading-bar p"),
	loadingInner: document.querySelector("#loading-inner"),

	totalBeerAll: document.querySelector("#beer-drank span"),
	totalShotsAll: document.querySelector("#shots-drank span"),

	audio: document.querySelector(".audio"),

	// Timer method and boolean logic
	isTimerRunning: false,
	startUpMethod: function startTheFuckingBeerSlaughter() {
		if (!timer.startTime) {
			timer.startTime = Date.now()
			console.log(timer.startTime)
		}
		if (!timer.isTimerRunning) {
			// If The timer is not running, START IT UP BABY!
			timerStart()

			timer.startButton.removeEventListener("click", startCountdown)

			timer.startButton.innerHTML = `reset`
			timer.startButton.classList.remove("start-button--avalible")

			timer.stopButton.classList.add("stop-button--avalible")
			timer.stopButton.addEventListener("click", stopButtonEvent)

			timer.loadingBarText.innerHTML = `loading`
			timer.loadingBarText.classList.add("white")
			timer.loadingBar.classList.add("loading-bar-active")
		} else {
			console.log("timer is already running.")
		}
	}
}

let countdown = {
	overlay: document.querySelector(".countdown-overlay"),
	number: document.querySelector(".countdown-overlay p"),
	amount: 3,
	countdown: function() {
		countdown.countdownInterval = setInterval(() => {
			if (this.amount == 1) {
				clearInterval(countdown.countdownInterval)
				setTimeout(() => this.number.innerHTML = `GO!`, 1000)
				setTimeout(() => finishCountdown(), 2000)
			}
			this.number.innerHTML = this.amount
			this.amount--
		}, 1000)	
	}
}

timer.startButton.addEventListener("click", startCountdown)
function startCountdown() {
	countdown.overlay.classList.add("countdown-overlay---visible")
	countdown.number.classList.add("countdown-overlay--number-anim")
	countdown.countdown();	
}

function finishCountdown() {
	removeCountdownOverlay()
	timer.startUpMethod()
}

function cancelCountdown() {
	if (countdown.amount >= 1) {
		clearInterval(countdown.countdownInterval)
		removeCountdownOverlay()	
	} else {
		console.error("too late to cancel friend :)")
	}
}

function removeCountdownOverlay() {
	countdown.overlay.classList.remove("countdown-overlay---visible")
	countdown.amount = 3
	countdown.number.innerHTML = ""
}


window.addEventListener("resize", e => mobileVersionChange(e))


// total stats for all
let totalStats = {
	shotsAll: 0,
	beerAll: 0,
	beerPerPerson: 0,
	compile: function() {
		this.shotsAll = 0
		this.beerAll = 0
		for (let i = 0; i < players.length; i++) {
			this.shotsAll += players[i].totalShots
			this.beerAll += players[i].totalAmount / 500
		}
		this.beerPerPerson = totalStats.beerAll / players.length
		console.log(this)
	}
}



// Player Code
let playerSection = {
	playerList: document.querySelector("#players"),
	addPlayerButton: document.querySelector("#add-player"),
	overlay: {
		choose: document.querySelector("#choose"),
		overlayContainer: document.querySelector("#overlay-container"),
		closeBtn: document.querySelector("#close-overlay-btn"),
		cancelBtn: document.querySelector("#cancel-btn"),
		champGridBtn: document.querySelector("#open-champ-btn"),
		champGrid: document.querySelector("#champions-grid"),
		userInputs: {
			name: document.querySelector("div #name"),
			weight: document.querySelector("div #weight"),
			alc: document.querySelector("div #alc"),
			amount: document.querySelector("div #amount"),
			gender: document.querySelector("div #gender"),
			favBeer: document.querySelector("div #fav-beer"),
			img: ""
		},
		characterView: {
			name: document.querySelector(".name-value"),
			alias: document.querySelector(".alias-value"),
			weight: document.querySelector(".weight-value"),
			alc: document.querySelector(".alc-value"),
			amount: document.querySelector(".amount-value"),
			favBeer: document.querySelector(".fav-beer-value"),
			img: document.querySelector(".img-value"),
		}
	}	
}


playerSection.overlay.champGrid.addEventListener("click", chooseThisChamp)





// ||  F U N C T I O N S  || 

function openPlayerOverlay(e) {
	// console.log(e.target)
	setTimeout(e => playerSection.overlay.overlayContainer.style.overflow = `visible`, 800)
	// playerSection.overlay.overlayContainer.style.overflow = `visible`
	playerSection.overlay.choose.style.transform = `translate(0, 0)`
	playerSection.overlay.choose.style.opacity = `1`
	playerSection.overlay.overlayContainer.style.visibility = `visible`
	updateNewCharacterView()
}

function closeOverlay() {
	// setTimeout(e => playerSection.overlay.overlayContainer.style.overflow = `hidden`, 400)
	playerSection.overlay.overlayContainer.style.overflow = `hidden`
	playerSection.overlay.choose.style.transform = `translate(0, 100vh)`
	playerSection.overlay.choose.style.opacity = `0`
	playerSection.overlay.overlayContainer.style.visibility = `hidden`
}

function insertChampions() {
	let grid = playerSection.overlay.champGrid
	if (grid.dataset.state == "closed") {
		let loopVar = 0
		while (loopVar < championsCount) {
			let champ = champions[loopVar]
			if (!champ.used) {
				grid.insertAdjacentHTML("beforeend", `
					<img src="${champ.avatarURL}" 
					title="${champ.name}" 
					alt="picture of: ${champ.name}"
					data-index="${loopVar}">
				`)
				console.log(champ.name)
			} else {
				console.log(champ.name + " - this champion is already in use.")
			}
			loopVar++
		}
		grid.dataset.state = "open"
		grid.classList.add("margin-top-bottom")
		playerSection.overlay.champGridBtn.classList.add("grid-btn--avalible")
		playerSection.overlay.champGridBtn.innerHTML = `close dropdown`
	} else {
		removeChampGrid()
	}
	console.log(championsCount + " total champions")
}

function removeChampGrid() {
	let grid = playerSection.overlay.champGrid
	grid.innerHTML = ``
	grid.dataset.state = "closed"
	grid.classList.remove("margin-top-bottom")
	playerSection.overlay.champGridBtn.classList.remove("grid-btn--avalible")
	playerSection.overlay.champGridBtn.innerHTML = `open dropdown`
}

function chooseThisChamp(e) {
	if (e.target.tagName == "IMG") {
		playerSection.overlay.userInputs.img = e.target
		console.log(playerSection.overlay.userInputs.img)
		removeChampGrid()
	}
}

function createNewPlayer() {
	if (playerSection.overlay.userInputs.img.dataset == undefined) {alert("Bro, you need to choose one of the champions... You gotta have some face to represent yourself.")}
	let inputs = playerSection.overlay.userInputs
	let championIndex = playerSection.overlay.userInputs.img.dataset.index


	let newPlayer = {
		name: inputs.name.value,
		championID: championIndex,
		weight: inputs.weight.value,
		alc: inputs.alc.value,
		amount: inputs.amount.value,
		genderIndex: inputs.gender.value,
		favBeer: inputs.favBeer.value,
		playerArrayIndex: players.length,
		log: (e) => {console.log(this)},
		totalShots: 0,
		totalAmount: 0,
		BAC: 0,
		alcInBlood: 0,
		queue: 0,
		element: ``,
		updateHTML: function() {
			this.element = `
				<div class="player" id="player" data-index="${this.playerArrayIndex}">
					<div class="player-control">
						<button onclick="removeObligation(this.parentNode.parentNode)" title="Remove 1 missed shot">-1</button>
						<button class="add-obligation" onclick="addObligation(this.parentNode.parentNode)" title="Add 1 missed shot">+1 que</button>
						<img src="IMG/x-symbol.svg" class="delete-player" onclick="removePlayer(this.parentNode.parentNode)" title="Click to remove '${this.name}'">
					</div>
					<img src="${champions[this.championID].avatarURL}" title="${this.name}" alt="${champions[this.championID].name}">
					<p class="description">
					<span class="player-name">${this.name}</span><br>
					<span>"${champions[this.championID].name}"</span><br>
					total: <span>${this.totalShots} s /&nbsp;${Math.round(((this.totalAmount) * 100) / 100) / 1000}&nbsp;l</span><br>
					blood alc.: <span>${Math.round(this.BAC * 1000) / 1000}&nbsp;&percnt;</span><br>
					queue: <span  style="color: ${this.queue ? "red" : "black"}">${this.queue} shot${this.queue == 1 ? "" : "s"}</span>
					<br>
					</p>
				</div>`
		},
		pasteHTML: function() {
			playerSection.playerList.insertAdjacentHTML("afterbegin", this.element)
		},
		deleteSelf: function() {
			this.remove()
		},
		addObligation: function() {
			this.obligation++
		}
	}
	newPlayer.updateHTML()
	console.log(this.element)
	champions[championIndex].used = true
	players.push(newPlayer)
	console.log(players)
	closeOverlay()
	newPlayer.pasteHTML()
	clearNewCharacterViewAndInputs()
}


function removePlayer(playerDOM) {
	let id = playerDOM.dataset.index
	let p = players[id]
	
	playerDOM.parentNode.childNodes.forEach(x => {
		if (x.dataset) {
			if (x.dataset.index > id + 3) x.dataset.index -= 1
		}
	})
	console.log(`removed player: #${id}`)
	playerDOM.remove()
	players.splice(id, 1)
	champions[p.championID].used = false
	console.log(players)
}

function addObligation(playerDOM) {
	let id = playerDOM.dataset.index

	playerDOM.remove()
	players[id].queue += 1
	players[id].updateHTML()
	players[id].pasteHTML()
	console.log(`adding 1 missed shot to player #${id}`)
	console.log(players[id])
}

function removeObligation(playerDOM) {
	let id = playerDOM.dataset.index

	playerDOM.remove()
	players[id].queue -= 1
	players[id].updateHTML()
	players[id].pasteHTML()
	console.log(`removing 1 missed shot from player #${id}`)
	console.log(players[id])
	if (players[id].queue < 0) alert(`Player #${id}, '${players[id].name}' has negative amout of 'shots in queue'. If by mistake, please set the 'in queue' to the right amount. Else... Don't drink next round and set the right amount aswell.`)	
}



function clearNewCharacterViewAndInputs() {
	let inputs = playerSection.overlay.userInputs
	let view = playerSection.overlay.characterView

	inputs.name.value = ``
	inputs.weight.value = ``
	inputs.alc.value = ``
	inputs.amount.value = ``
	inputs.favBeer.value = `(All)`
	inputs.img = ``

	view.img.src = ``
	view.alias.innerHTML = ``
	view.weight.innerHTML = ``
	view.alc.innerHTML = ``
	view.amount.innerHTML = ``
	view.favBeer.innerHTML = ``
}


function updateNewCharacterView() {
	let inputs = playerSection.overlay.userInputs
	let view = playerSection.overlay.characterView
	view.name.innerHTML = `${inputs.name.value}`
	if (inputs.img.src) view.img.src = `${inputs.img.src}`
	view.alias.innerHTML = `"${inputs.img.title}"`
	view.weight.innerHTML = `${inputs.weight.value}`
	view.alc.innerHTML = `${inputs.alc.value}`
	view.amount.innerHTML = `${inputs.amount.value}`
	view.favBeer.innerHTML = `${inputs.favBeer.value}`
}


function updatePlayers() {
	playerSection.playerList.innerHTML = `<div id="add-player" onclick="openPlayerOverlay()"><img src="IMG/plus.svg" title="Add new player!">`
	
	let i = 0
	while (players.length > i) {
		updatePlayer(players[i], i)
		i++
	}
}

function updatePlayer(p, i) {
	p.totalShots++
	p.totalAmount = p.totalShots * p.amount 

	// Here's the formula to count the level of alcohol in blood
	p.totalGramsConsumed = ((p.totalAmount / 100) * p.alc) * .789
	p.totalBAC = (p.totalGramsConsumed / ((p.weight * 1000) * p.genderIndex)) * 100
	// here im showing 75% of the "real" BAC, because the Widmark Formula tends to overestimate
	p.BAC = ((p.totalBAC - ((timer.min / 60) * .015)) / 4) * 3
	
	p.updateHTML()
	p.pasteHTML()
	console.log(p)
}


function updateTimer() {
	// The timer is based on the previous interval so it can resoult in some error.
	// Especially the longer it goes on, the more it will fuck up.
	// It's based on seconds not on milliseconds (for more long term accouracy)
	// The millisecond timer is running on it's own, it's basicaly fake :)
	
	timer.sec++
	if (timer.sec >= 60) {
		timer.overallMinutes++
		if (timer.overallMinutes >= 60) {
			timer.h++
			timer.overallMinutes = 0
		}
		timer.min++
		timer.sec = 0
	}
	changeTimer()
}

function millisecondsTimer() {
	timer.milsec++
	if (timer.milsec >= 100) {timer.milsec = 0}
	changeTimer("x")
}

function changeTimer(e) {
	if (e == "x") {
		timer.UImilisec.innerHTML = `${timer.milsec < 10 ? "0" : ""}${timer.milsec}`
	} else {
		// Change the offhand timer
		timer.offhandMin.innerHTML = `${timer.min < 10 ? "0" : ""}${timer.min}`
		timer.offhandSec.innerHTML = `${timer.sec < 10 ? "0" : ""}${timer.sec}`

		// Change the main timer
		timer.UImin.innerHTML = `${timer.min < 10 ? "0" : ""}${timer.min}`
		timer.UIsec.innerHTML = `${timer.sec < 10 ? "0" : ""}${timer.sec}`
		timer.UImilisec.innerHTML = `${timer.milsec < 10 ? "0" : ""}${timer.milsec}`

		// Change the overview timer
		timer.overviewTimer.innerHTML = `
			${timer.h ? timer.h + "h, " : ""}${timer.overallMinutes ? timer.overallMinutes + "min & " : ""}${timer.sec}s!`

		// Change the round counts
		let currRound = timer.min 
		let nxtRound = timer.min + 1
		timer.offhandNextRound.innerHTML = `${nxtRound}`
		timer.currentRound.innerHTML = `${currRound}`
		timer.currentRoundBig.innerHTML = `${currRound}`
		timer.nextRoundBig.innerHTML = `${nxtRound}`

		// Update the loading bar
		timer.loadingInner.style.width = `${(100 / 60) * (timer.sec + 1)}%`

		// Add css onto the timer
		if (timer.sec == 50) timer.UI.classList.add("animation-flash")
		if (timer.sec == 0)	timer.UI.classList.remove("animation-flash")
		if (timer.min && timer.sec == 0) timer.UI.classList.add("animation-fade-out-timer")
		if (timer.min && timer.sec == 2) timer.UI.classList.remove("animation-fade-out-timer")
		// Add css onto the offhand timer	
		if (timer.sec == 50) timer.offhandTimer.classList.add("animation-flash")
		if (timer.sec == 0)	timer.offhandTimer.classList.remove("animation-flash")
		if (timer.min && timer.sec == 0) timer.offhandTimer.classList.add("animation-fade-out-timer")
		if (timer.min && timer.sec == 2) timer.offhandTimer.classList.remove("animation-fade-out-timer")

		// Update The Players
		if (timer.min && timer.sec == 0) {updatePlayers()}

		// Update the group stats
		if (timer.sec == 0) totalStats.compile()
		if (timer.sec == 1) timer.totalShotsAll.innerHTML = `${totalStats.shotsAll}!`
		if (timer.sec == 1) timer.totalBeerAll.innerHTML = `${Math.round(totalStats.beerPerPerson * 100) / 100}&nbsp;/&nbsp;${Math.round(totalStats.beerAll * 100) / 100}!`

		// Play random audio
		if (timer.min && timer.sec == 0) {playRandomAudioSample()}
		if (timer.min == 2 && timer.sec == 0) {
			audio.innerHTML = ``
			audio.innerHTML = `<source src="AUDIO/test-audio2.mp3" type="audio/mpeg">`
			console.log(audio)
		}
		
	}
} 

let usedAudioIDs = []

function playRandomAudioSample() {
	let index = Math.floor(Math.random() * /*insert number of audio files*/ 3) + 1
	while (usedAudioIDs.includes(index)) {
		index = Math.floor(Math.random() * /*insert number of audio files*/ 3) + 1 
	}
	audio.src = `AUDIO/${index}.mp3`
	usedAudioIDs.push(index)
}

function stopButtonEvent() {
	if (!timer.isTimerRunning) {
		// Resume the timer
		timerStart()

		timer.stopButton.innerHTML = `emergency stop!`
		timer.stopButton.classList.remove("stop-button--active")
		timer.stopButton.classList.add("stop-button--avalible")

		timer.startButton.classList.remove("start-button--active")
		timer.startButton.removeEventListener("click", resetEvent)
		timer.UI.classList.remove("animation-pulsate")
		timer.offhandTimer.classList.remove("animation-pulsate")

		
		timer.loadingBarText.innerHTML = `loading`
		timer.loadingBarText.classList.add("white")
		timer.loadingBar.classList.add("loading-bar-active")
		timer.loadingBar.classList.remove("animation-pulsate")
		timer.loadingInner.style.background = "#00F"

		timer.UI.style.animationPlayState = "running, running"
		timer.offhandTimer.style.animationPlayState = "running, running"
	} else {
		// Pause the timer
		timer.stopButton.innerHTML = `resume...`
		timer.isTimerRunning = false
		timer.milsec = 0
		console.log(theConsoleMotivator.talkShit)

		emergencyStop()

		timer.stopButton.classList.remove("stop-button--avalible")
		timer.stopButton.classList.add("stop-button--active")

		timer.startButton.innerHTML = `reset`
		timer.startButton.classList.add("start-button--active")

		timer.startButton.addEventListener("click", resetEvent)
		timer.UI.classList.add("animation-pulsate")
		timer.offhandTimer.classList.add("animation-pulsate")

		timer.loadingBarText.innerHTML = `stopped`
		timer.loadingBarText.classList.remove("white")
		timer.loadingBar.classList.remove("loading-bar-active")
		timer.loadingBar.classList.add("animation-pulsate")
		timer.loadingInner.style.background = "#AAA"

		timer.UI.style.animationPlayState = "running, paused"
		timer.offhandTimer.style.animationPlayState = "running, paused"
	}
}

function resetEvent() {
	timer.milsec = 0
	timer.sec = 0
	timer.min = 0
	timer.h = 0
	timer.overallMinutes = 0

	changeTimer()
	timer.startButton.innerHTML = `start`
	timer.startButton.classList.remove("start-button--active")
	timer.startButton.classList.add("start-button--avalible")
	timer.startButton.addEventListener("click", startCountdown)

	timer.stopButton.innerHTML = `emergency stop!`
	timer.stopButton.classList.remove("stop-button--active")
	timer.UI.classList.remove("animation-pulsate")
	timer.offhandTimer.classList.remove("animation-pulsate")

	timer.loadingBar.classList.remove("animation-pulsate")
	timer.loadingInner.style.width = `${(100 / 60) * (timer.sec)}%`
	timer.loadingInner.style.background = "#00F"
}

function timerStart() {
	changeTimer()
	timer.milsecSpeed = timer.speed / 100
	timer.timerInterval = setInterval(updateTimer, timer.speed)
	timer.timerMilliseconds = setInterval(millisecondsTimer, timer.milsecSpeed)
	timer.isTimerRunning = true
	console.log(theConsoleMotivator.cheerUp)
} 

function emergencyStop() {
	clearInterval(timer.timerInterval)
	clearInterval(timer.timerMilliseconds)
} 

function selfHarmFunction() {
	timer.speed /= 2
	document.querySelector("*").style.textShadow = `0 0 35px #FFF`
	document.querySelector("#hardcore-background").classList.add("hardcore-background-visible")
	document.querySelector("#logo img:last-child").src = `IMG/logo/logo_pixelated_aplha.png`
	document.querySelector("header").style.background = `rgba(0,0,0,0)`
	document.querySelector(".mobile-footer").style.background = `rgba(0,0,0,0)`
	alert(`Congratulations!! The timer speed is now reduced by 50 % -> one tick per ${timer.speed} ms`)
} 


function checkForDivision(number, divider) {
	let dividedNumber = number / divider 
	if (Number.isInteger(dividedNumber) && dividedNumber !== 0) {
		console.log(dividedNumber)
		return true
	}
}

function mobileVersionChange(e) {
	let t = timer
	if (window.innerWidth < 760) {
		t.offhandTimer = document.querySelector(".mobile-footer #offhand-timer-clock")
		t.offhandMin = document.querySelector(".mobile-footer #offhand-minutes")
		t.offhandSec = document.querySelector(".mobile-footer #offhand-seconds")
		t.offhandNextRound = document.querySelector(".mobile-footer #offhand-next-rounds")
		t.loadingBar = document.querySelector("#loading-bar-mobile")
		t.loadingBarText = document.querySelector("#loading-bar-text-mobile")
		t.loadingInner = document.querySelector("#loading-inner-mobile")
		t.currentRound = document.querySelector("#current-round-mobile")
		infoPanel.panel.childNodes.forEach(e => {
			if (e.tagName == "P") {
				let name = e.innerHTML.split(" ")[0]
				if (e.classList.contains("info")) {e.innerHTML = name}
			}
			
		})
	} else {
		t.offhandTimer = document.querySelector("#offhand-timer-clock")
		t.offhandMin = document.querySelector("#offhand-minutes")
		t.offhandSec = document.querySelector("#offhand-seconds")
		t.offhandNextRound = document.querySelector("#offhand-next-rounds")
		t.loadingBar = document.querySelector("#loading-bar")
		t.loadingBarText = document.querySelector("#loading-bar p")
		t.loadingInner = document.querySelector("#loading-inner")
		t.currentRound = document.querySelector("#current-round-big")
		infoPanel.panel.childNodes.forEach(e => {
			if (e.tagName == "P") {
				let name = e.innerHTML.split(" ")[0]
				if (e.classList.contains("info")) {e.innerHTML = `${name} &#9658;`}
			}
			
		})
	}
}


// things to definetly write after all the declarations
mobileVersionChange()
