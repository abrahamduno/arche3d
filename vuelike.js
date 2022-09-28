class jQueryTemplateView {
	constructor($container, options, data = null)
	{
		this.$container = $($container);

		this.options = Object.assign({
		}, options);

		this.data = Object.assign({
			people: [
				{
					name: "Deisy Esteban",
					job: "Directora <br/> Creativa",
					joblength: "5 Años",
					// stars: 4,
					skills: {
						Creatividad: 9,
						Curiosidad: 6,
						Diseno: 9,
						Liderazgo: 3,
					},
				},
				{
					name: "Pedro Perez",
					job: "Curador de <br/> Contenido",
					joblength: "2 Años",
					// stars: 5,
					skills: {
						Creatividad: 7,
						Curiosidad: 8,
						Diseno: 8,
						Liderazgo: 7,
					},
				},
				{
					name: "Ronnie McLovin",
					job: "Diseñador <br/> Grafico",
					joblength: "1 Años",
					// stars: 3,
					skills: {
						Creatividad: 7,
						Curiosidad: 6,
						Diseno: 2,
						Liderazgo: 6,
					},
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
					<img style="" class="w-100" src="res/img/${newKey}.jpg"/>
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
						${theList[j].name}
						<br/>
						<img style="width: 50px; height: 50px;" src="res/img/${j}.jpg"/>
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