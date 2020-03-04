const welcome = `Welcome to the wonderfull api !
Be so kind and post new chores with:
curl -i localhost:3000 -H "Content-Type: application/json" -X POST -d '{"description":"some chore","done":false}'\n`

module.exports = welcome;