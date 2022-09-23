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
					// stars: 4,
					creativity: 9,
					curiosity: 6,
					design: 9,
					leadership: 3,
				},
				{
					name: "Pedro Perez",
					// stars: 5,
					creativity: 7,
					curiosity: 8,
					design: 8,
					leadership: 7,
				},
				{
					name: "Linda McLovin",
					// stars: 3,
					creativity: 7,
					curiosity: 6,
					design: 2,
					leadership: 6,
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

				const personArgs = Object.keys(this.data.people[newKey])
				for (var i = 0; i < personArgs.length; i++)
				{
					this.refs.selectedperson.children[i].innerHTML = `${personArgs[i]}: ${this.data.people[newKey][personArgs[i]]}`
				}
			},
		};

		this.initWatchers();
		this.initRefs();
	}

	initRefs()
	{
		let self = this;

		const references = $("[data-ref]")

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