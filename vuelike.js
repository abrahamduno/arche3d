class jQueryTemplateView {
	constructor($container, options, data = null)
	{
		this.$container = $($container);

		this.options = Object.assign({
		}, options);

		this.data = Object.assign({
			people: [
				{
					imgsrc: "LUIS.jpg",
					name: "Luis Salcedo",
					job: "Community Manager Senior",
					joblength: "3 años",
					skils: {"Divertido":9, "proactivo":9, "pícaro":9, "responsable":9,}
				},
				
				{
					imgsrc: "GIL.jpg",
					name: "Gilian Oronoz",
					job: "Community Manager Senior",
					joblength: "3 años",
					skils: {"Paciente":9, "versátil":9, "carismática":9, "simpática":9,}
				},
				
				{
					imgsrc: "ANDRES.jpg",
					name: "Andrés Marín",
					job: "Community Manager",
					joblength: "1 años y 11 meses",
					skils: {"Crítico":9, "comunicativo":9, "intuitivo":9, "directo":9,}
				},
				
				{
					imgsrc: "TAVITO.jpg",
					name: "Gustavo Nieto",
					job: "Community Manager Junior",
					joblength: "1 año y 6 meses.",
					skils: {"Proactivo":9, "estratégico":9, "empático":9, "organizado.":9,}
				},
				
				{
					imgsrc: "GUZ.jpg",
					name: "Guzbenia Marcano",
					job: "Community Manager",
					joblength: "3 años",
					skils: {"Colaboradora":9, "dedicada":9, "creativa":9, "ocurrente":9,}
				},
				
				{
					imgsrc: "GABY.jpg",
					name: "Gabriela Rojas",
					job: "Community Manager",
					joblength: "1 año y 6 meses",
					skils: {"Empática":9, "responsable":9, "dinámica":9, "versátil":9,}
				},
				
				{
					imgsrc: "TAVO.jpg",
					name: "Gustavo Fuentes",
					job: "Community Senior",
					joblength: "1 año y seis meses",
					skils: {"Competitivo":9, "persuasivo":9, "realista":9, "sarcástico.":9,}
				},
				
				{
					imgsrc: "ISMA.jpg",
					name: "Ismarvin Romero",
					job: "Ejecutiva de Cuentas",
					joblength: "5 años",
					skils: {"organizada":9, "comprensiva":9, "responsable":9, "honesta":9,}
				},
				
				{
					imgsrc: "GABY 2.jpg",
					name: "Gaby Foglia",
					job: "Curadora de contenidos",
					joblength: "3 años",
					skils: {"Analítica":9, "estricta":9, "ordenada":9, "regañona":9,}
				},
				{
					imgsrc: "ORI.jpg",
					name: "Oriana Azócar",
					job: "Community Manager",
					joblength: "10 años",
					skils: {"Empática":9, "creativa":9, "resolutiva":9, "cuchi":9,}
				},
				
				{
					imgsrc: "JESUS.jpg",
					name: "Jesús Machado",
					job: "Diseñador Senior",
					joblength: "3 años",
					skils: {"Elocuente":9, "extrovertido":9, "ocurrente":9, "mil voces":9,}
				},
				
				{
					imgsrc: "MAFER.jpg",
					name: "María Fernanda Anés",
					job: "Diseñadora junior",
					joblength: "5 meses",
					skils: {"Resolutiva":9, "proactiva":9, "curiosa":9, "cuchi":9,}
				},
				
				{
					imgsrc: "JESUS.jpg",
					name: "Jesús Sierra",
					job: "Diseñador junior",
					joblength: "5 meses",
					skils: {"Comunicativo":9, "observador":9, "cooperativo":9, "introvertido":9,}
				},
				
				{
					imgsrc: "SAMIL.jpg",
					name: "Samil Rivera",
					job: "Diseñador Junior",
					joblength: "2 años",
					skils: {"Innovador":9, "Comunicativo":9, "pasional":9, "terco":9,}
				},
				
				{
					imgsrc: "FERNANDO.jpg",
					name: "Fernando Fernández",
					job: "diseñador Senior",
					joblength: "2 años",
					skils: {"Innovador":9, "creativo":9, "perfeccionista":9, "resolutivo":9,}
				},
				
				{
					imgsrc: "KARIM.jpg",
					name: "Karim Perdomo",
					job: "Diseñadora",
					joblength: "10 meses",
					skils: {"vanguardista":9, "comprensiva":9, "ingeniosa":9, "elástica":9,}
				},
				
				{
					imgsrc: "DEY.jpg",
					name: "Deisy Esteban",
					job: "Directora creativa",
					joblength: "5 años",
					skils: {"Rigurosa":9, "profesional":9, "talentosa":9, "Dory":9,}
				},
				
				{
					imgsrc: "WILLIAM.jpg",
					name: "William Duque",
					job: "Coordinador audiovisual",
					joblength: "5 años",
					skils: {"autodidacta":9, "metódico":9, "cuidadoso":9, "comiquia’o":9,}
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
				this.$container.find(`#person_joblength`)[0].innerHTML = this.data.people[newKey].joblength
				this.$container.find(`#person_img`)[0].innerHTML = `
					<img style="" class="w-100" src="res/img/creativas/${this.data.people[newKey].imgsrc}"/>
				`
				

				const personArgs = Object.keys(this.data.people[newKey].skills)
				for (var i = 0; i < personArgs.length; i++)
				{
					if (!this.$container.find(`#person_${personArgs[i]}`)[0]) return
					this.$container.find(`#person_${personArgs[i]}`)[0].innerHTML = personArgs[i] == "name" ? this.data.people[newKey].skills[personArgs[i]] : `
						<div >
							<span class="tx-sm">${personArgs[i].toUpperCase()}</span>
							<div class="flex mb-4 mt-1">
								<div style="width:${(this.data.people[newKey].skills[personArgs[i]]-1)*10}%; height: 10px; background: #94D048;"> </div>
								<div style="width:${(10-this.data.people[newKey].skills[personArgs[i]])*10}%; height: 10px; background: #ffffff;"> </div>
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
						<img style="width: 100px;" src="res/img/serias/${theList[j].imgsrc}"/>
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

		for (var i = 0; i < references.length; i++)
		{
			this.refs[references[i].dataset.ref] = references[i]
		}
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
}

$(document).ready(function(){

	let newjQueryTemplateView = new jQueryTemplateView('#templateViewId', {
	});

});