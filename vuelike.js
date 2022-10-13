class jQueryTemplateView {
	constructor($container, options, scene, data = null)
	{
		this.$container = $($container);

	  this.scene = scene
	  this.options = Object.assign({
		}, options);

		this.data = Object.assign({
			people: [
				{
					imgsrc: "ISMARVIN",
					name: "Ismarvin Romero",
					folder: "GERENCIA",
					job: "Ejecutiva de Cuentas",
					joblength: "5 años",
					unix: 1502133067,
					skills: {
						Creatividad:9,
						Diseno:9,
						Liderazgo:9,
						Curiosidad:9,
					},
					person: {"organizada":9, "comprensiva":9, "responsable":9, "honesta":9,},
				},
				{
					imgsrc: "DEISY",
					name: "Deisy Esteban",
					folder: "GERENCIA",
					job: "Directora creativa",
					joblength: "5 años",
					unix: 1502823971,
					skills: {
						Creatividad:9,
						Diseno:9,
						Liderazgo:9,
						Curiosidad:9,
					},
					person: {"Rigurosa":9, "profesional":9, "talentosa":9, "Dory":9,},
				},
				{
					imgsrc: "WILLIAM",
					name: "William Duque",
					folder: "GERENCIA",
					job: "Coordinador audiovisual",
					joblength: "5 años",
					unix: 1501009571,
					skills: {
						Creatividad:9,
						Diseno:9,
						Liderazgo:9,
						Curiosidad:9,
					},
					person: {"autodidacta":9, "metódico":9, "cuidadoso":9, "comiquia’o":9,},
				},





				{
					imgsrc: "LUIS",
					name: "Luis Salcedo",
					folder: "SENIORS",
					job: "Community Senior",
					joblength: "3 años",
					unix: 1541552827,
					skills: {
						Creatividad:9,
						Diseno:9,
						Liderazgo:9,
						Curiosidad:9,
					},
					person: {"Divertido":9, "proactivo":9, "pícaro":9, "responsable":9,},
				},
				{
					imgsrc: "GILIAN",
					name: "Gilian Oronoz",
					folder: "SENIORS",
					job: "Community Senior",
					joblength: "3 años",
					unix: 1547089927,
					skills: {
						Creatividad:9,
						Diseno:9,
						Liderazgo:9,
						Curiosidad:9,
					},
					person: {"Paciente":9, "versátil":9, "carismática":9, "simpática":9,},
				},
				{
					imgsrc: "GUZBENIA",
					name: "Guzbenia Marcano",
					folder: "JUNIORS",
					job: "Community Manager",
					joblength: "3 años",
					unix: 1550546174,
					skills: {
						Creatividad:9,
						Diseno:9,
						Liderazgo:9,
						Curiosidad:9,
					},
					person: {"Colaboradora":9, "dedicada":9, "creativa":9, "ocurrente":9,},
				},
				{
					imgsrc: "FOGLIA",
					name: "Gaby Foglia",
					folder: "GERENCIA",
					job: "Curadora de contenidos",
					joblength: "3 años",
					unix: 1549336879,
					skills: {
						Creatividad:9,
						Diseno:9,
						Liderazgo:9,
						Curiosidad:9,
					},
					person: {"Analítica":9, "estricta":9, "ordenada":9, "regañona":9,},
				},
				{
					imgsrc: "MACHADO",
					name: "Jesús Machado",
					folder: "SENIORS",
					job: "Diseñador Senior",
					joblength: "3 años",
					unix: 1554419779,
					skills: {
						Creatividad:9,
						Diseno:9,
						Liderazgo:9,
						Curiosidad:9,
					},
					person: {"Elocuente":9, "extrovertido":9, "ocurrente":9, "mil voces":9,},
				},
				{
					imgsrc: "SAMIL",
					name: "Samil Rivera",
					folder: "JUNIORS",
					job: "Diseñador Junior",
					joblength: "2 años",
					unix: 1594697431,
					skills: {
						Creatividad:9,
						Diseno:9,
						Liderazgo:9,
						Curiosidad:9,
					},
					person: {"Innovador":9, "Comunicativo":9, "pasional":9, "terco":9,},
				},
				{
					imgsrc: "FERNANDO",
					name: "Fernando Fernández",
					folder: "SENIORS",
					job: "Diseñador Senior",
					joblength: "2 años",
					unix: 1589246664,
					skills: {
						Creatividad:9,
						Diseno:9,
						Liderazgo:9,
						Curiosidad:9,
					},
					person: {"Innovador":9, "creativo":9, "perfeccionista":9, "resolutivo":9,},
				},




				
				{
					imgsrc: "ANDRES",
					name: "Andrés Marín",
					folder: "JUNIORS",
					job: "Community Manager",
					joblength: "1 años y 11 meses",
					unix: 1623525687,
					skills: {
						Creatividad:9,
						Diseno:9,
						Liderazgo:9,
						Curiosidad:9,
					},
					person: {"Crítico":9, "comunicativo":9, "intuitivo":9, "directo":9,},
				},
				{
					imgsrc: "NIETO",
					name: "Gustavo Nieto",
					folder: "JUNIORS",
					job: "Community Junior",
					joblength: "1 año y 6 meses.",
					unix: 1631827347,
					skills: {
						Creatividad:9,
						Diseno:9,
						Liderazgo:9,
						Curiosidad:9,
					},
					person: {"Proactivo":9, "estratégico":9, "empático":9, "organizado.":9,},
				},
				{
					imgsrc: "ROJAS",
					name: "Gabriela Rojas",
					folder: "JUNIORS",
					job: "Community Manager",
					joblength: "1 año y 6 meses",
					unix: 1632349044,
					skills: {
						Creatividad:9,
						Diseno:9,
						Liderazgo:9,
						Curiosidad:9,
					},
					person: {"Empática":9, "responsable":9, "dinámica":9, "versátil":9,},
				},
				{
					imgsrc: "FUENTES",
					name: "Gustavo Fuentes",
					folder: "SENIORS",
					job: "Community Senior",
					joblength: "1 año y seis meses",
					unix: 1616004924,
					skills: {
						Creatividad:9,
						Diseno:9,
						Liderazgo:9,
						Curiosidad:9,
					},
					person: {"Competitivo":9, "persuasivo":9, "realista":9, "sarcástico.":9,},
				},
				{
					imgsrc: "ORIANA",
					name: "Oriana Azócar",
					folder: "JUNIORS",
					job: "Community Manager",
					joblength: "10 meses",
					unix: 1639318524,
					skills: {
						Creatividad:9,
						Diseno:9,
						Liderazgo:9,
						Curiosidad:9,
					},
					person: {"Empática":9, "creativa":9, "resolutiva":9, "cuchi":9,},
				},
				{
					imgsrc: "MARIA-FERNANDA",
					name: "María Fernanda Anés",
					folder: "JUNIORS",
					job: "Diseñadora junior",
					joblength: "5 meses",
					unix: 1650125907,
					skills: {
						Creatividad:9,
						Diseno:9,
						Liderazgo:9,
						Curiosidad:9,
					},
					person: {"Resolutiva":9, "proactiva":9, "curiosa":9, "cuchi":9,},
				},
				{
					imgsrc: "SIERRA",
					name: "Jesús Sierra",
					folder: "JUNIORS",
					job: "Diseñador junior",
					joblength: "5 meses",
					unix: 1650651627,
					skills: {
						Creatividad:9,
						Diseno:9,
						Liderazgo:9,
						Curiosidad:9,
					},
					person: {"Comunicativo":9, "observador":9, "cooperativo":9, "introvertido":9,},
				},
				{
					imgsrc: "KARIM",
					name: "Karim Perdomo",
					folder: "JUNIORS",
					job: "Diseñadora",
					joblength: "10 meses",
					unix: 1642875627,
					skills: {
						Creatividad:9,
						Diseno:9,
						Liderazgo:9,
						Curiosidad:9,
					},
					person: {"vanguardista":9, "comprensiva":9, "ingeniosa":9, "elástica":9,},
				},
			],
		}, data);

		let self = this;

		this.requests =
		{
		};

		this.refs =
		{
		};

		this.updaters =
		{
		};

		this.watchers =
		{
			testfield: (value) =>
			{
				const newValue = value.currentTarget.value
				this.refs.reactivfield.innerHTML = newValue
			},
		};

		this.clickers =
		{
			updatePerson: (e) =>
			{
				const newKey = e.currentTarget.dataset.args
				if (!this.data.people[newKey]) return

				this.$container.find(`#person_name`)[0].innerHTML = this.data.people[newKey].name.toUpperCase()
				this.$container.find(`#person_job`)[0].innerHTML = this.data.people[newKey].job
				// this.$container.find(`#person_joblength`)[0].innerHTML = this.data.people[newKey].joblength
				// this.$container.find(`#person_joblength`)[0].innerHTML = this.data.people[newKey].unix*1000
				// this.$container.find(`#person_joblength`)[0].innerHTML = this.calculateAge(new Date(this.data.people[newKey].unix*1000)) 
				let monthsCount = this.getMonthDifference(new Date(this.data.people[newKey].unix*1000), new Date())
				let jobLengthString = ""
				let extraString = ""
				if (monthsCount > 11)
				{
					let yearSCharacter = ""
					if (monthsCount > 23) {
						yearSCharacter = "s"
					}

					let yearAmount = Math.floor(monthsCount / 12)
					// extraString
					if (monthsCount % 12 == 0)
					{
						jobLengthString = yearAmount + " Año" + yearSCharacter
					} else {
						let monthSCharacter = ""
						if (monthsCount-(yearAmount*12) > 1) {
							monthSCharacter = "es"
						}

						jobLengthString = yearAmount + " Año"+ yearSCharacter +", <small>" + (monthsCount-(yearAmount*12)) + " Mes" + monthSCharacter +" <small/>"
					}
				} else {
					let monthSCharacter = ""
					if (monthsCount > 1) {
						monthSCharacter = "es"
					}
					jobLengthString = monthsCount + " Mes" + monthSCharacter
				}
				this.$container.find(`#person_joblength`)[0].innerHTML = jobLengthString
				// this.$container.find(`#person_joblength`)[0].innerHTML = `${monthsCount} Meses`
				
				this.$container.find(`#person_img`)[0].innerHTML = `
					<img style="display: block" class=" w-100" src="res/img/${this.data.people[newKey].folder}/${this.data.people[newKey].imgsrc}-02.jpg"/>
				`
				

				const personArgs = Object.keys(this.data.people[newKey].person)
				const skillArgs = Object.keys(this.data.people[newKey].skills)
				for (var i = 0; i < skillArgs.length; i++)
				{
					if (!this.$container.find(`#person_${skillArgs[i]}`)[0]) return
					this.$container.find(`#person_${skillArgs[i]}`)[0].innerHTML = skillArgs[i] == "name" ? this.data.people[newKey].skills[skillArgs[i]] : `
						<div >
							<span class="tx-sm">${personArgs[i].toUpperCase()}</span>
							<div class="flex mb-4 mt-1">
								<div style="width:${(this.data.people[newKey].skills[skillArgs[i]]-1)*10}%; height: 10px; background: #94D048;"> </div>
								<div style="width:${(10-this.data.people[newKey].skills[skillArgs[i]])*10}%; height: 10px; background: #ffffff;"> </div>
							</div>
						</div>`
				}
			},
		};

		this.initDOM();
		this.initWatchers();
		this.initRefs();
	}

	initDOM()
	{
		let self = this;

		const references = this.$container.find("[data-for-click]")

		for (var i = 0; i < references.length; i++)
		{
			const callbackFunction = references[i].dataset.forClick
			console.log(callbackFunction)
			let theList = this.data[references[i].dataset['items']]
			let z = 0

			for (var j = 0; j < theList.length; j++)
			{
				z = j
				let newClone = references[i].children[0].cloneNode()
				newClone.innerHTML = theList[j].name
				newClone.innerHTML = `
					<div class="flex-column">
						<img style="width: 150px;" src="res/img/${theList[j].folder}/${theList[j].imgsrc}.png"/>
					</div>
				`
				newClone.dataset.args = j
				newClone.addEventListener('click', function(event)
				{
					self.clickers[callbackFunction](event);
				});
				references[i].append(newClone)
			}
			references[i].removeChild(references[i].children[0])
			references[i].children[0].click()
			// self.clickers[callbackFunction](z)
			// this.refs[references[i].dataset.ref] = references[i]

			// references[i].on('click', function(event)
			// {
			// 	self.clickers[references[i].data('click')](event);
			// 	<h6 data-args="0" class="clickable pa-3 opacity-hover-75">
			// 	  person 3
			// 	</h6>
			// });
		}
	}

	initRefs()
	{
		let self = this;

		const references = this.$container.find("[data-ref]")
		console.log(references)

		for (var i = 0; i < references.length; i++)
		{
			this.refs[references[i].dataset.ref] = references[i]
			console.log("****************************this.refs****************************")
			console.log(this.refs)
		}
		// console.log(this)
	}

	initWatchers()
	{
		let self = this;

		this.$container.on('keyup',"[data-watch]", function(event)
		{
			self.watchers[$(this).data('watch')](event);
		});

		this.$container.on('click',"[data-click]", function(event)
		{
			self.clickers[$(this).data('click')](event);
		});
	}
	calculateAge(birthday)
	{ // birthday is a date
		var ageDifMs = Date.now() - birthday;
		var ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
	getMonthDifference(startDate, endDate)
	{
		return (
		  endDate.getMonth() -
		  startDate.getMonth() +
		  12 * (endDate.getFullYear() - startDate.getFullYear())
		);
	}

}

export default jQueryTemplateView