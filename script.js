const scheduler = (task, duration, callback) => {
	setTimeout(() => {
		callback(task)
	}, 1000*duration)
}

const update = (message) => {
	console.log(message);
	document.getElementById("update").innerHTML = message;
}

let finish = "All tasks have been finished."

scheduler("Get up", 5, (task) => {
	update(`Current task: ${task}`)
	scheduler("Make bed", 5, (task) => {
		update(`Current task: ${task}`)
		scheduler("Take shower", 3, (task) => {
			update(`Current task: ${task}`)
			scheduler("Attend class", 3, (task) => {
				update(`Current task: ${task}`)
				scheduler("Have breakfast", 8, (task) => {
					update(`Current task: ${task}`)
					scheduler("Play videogames", 10, (task) => {
						update(`Current task: ${task}`)
						scheduler(finish, 5, (task) => {
							update(finish);
						})
					})
				})
			})
		})
	})
})