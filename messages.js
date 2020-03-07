const welcome = `Welcome to the wonderfull api !
Be so kind and post new chores with:
curl -i 127.0.0.1:80 -H "Content-Type: application/json" -X POST -d '{"description":"some chore","done":false}'\n`

module.exports = welcome;
