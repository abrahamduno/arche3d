import EmployeeList from "./res/js/employees.js";

class jQueryTemplateView {
	constructor($container, options, scene, data = null)
	{
		this.$container = $($container);

	  this.scene = scene
	  this.options = Object.assign({
		}, options);

		this.data = Object.assign({
			people: EmployeeList,
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

				// if (this.data.people[newKey].folder == "JUNIORS")
				// {
					this.$container.find(`#person_group`)[0].innerHTML = `
						<img style="display: block; width: 200px" class=" " src="res/img/${this.data.people[newKey].folder}/stars.png"/>
					`
				// }

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