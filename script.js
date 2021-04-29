const scheduler = (task, duration, callback) => {
	setTimeout(() => {
		callback(task)
	}, 1000*length)
}

scheduler("Getting up", 5, (task) => {
	console.log(`Current task: ${task}.`)
	scheduler("Doing bed", 5, (task) => {
		console.log(`Current task: ${task}.`)
		scheduler("Taking shower", 3, (task) => {
			console.log(`Current task: ${task}.`)
			scheduler("Programming paradigms class", 3, (task) => {
				console.log(`Current task: ${task}.`)
				scheduler("Having breakfast", 8, (task) => {
					console.log(`Current task: ${task}.`)
					scheduler("Playing videogames", 10, (task) => {
						console.log(`Current task: ${task}.`)
					})
				})
			})
		})
	})
})