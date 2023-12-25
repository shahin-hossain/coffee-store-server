/**
 * Server init
 * npm i express cors dotenv
 * run express server 
 * mongoDB add user coffeeMaster
 * mongoDB config add
 * express dotenv setup -> mongodb user /pass
 * 
 * POST data:
 * app.post('/coffee', (req, res) => {req.bod})
 * send data to database coffeeCollection = client.db('coffeeCollection').collection('coffee')
 * use const use = await coffeeCollection.insertOne(newCoffee);
 * 
 * Read Data: 
 * Read Data with app.get('/coffee', (req, res)=> {})
 * const cursor = coffeeCollection.find()
 * const result = await cursor.toArray();
 * res.send(result)
 * 
 * DELETE data :
 * app.delete('/coffee', async (req, res) => {
 *  const id = req.params.id;
 * const query = {_id: new ObjectId(id)}
 * const result = await coffeeCollection.deleteOne(query)
 * })
 * get data id wise 
 * 
 * UPDATE data:
 * app.put('/coffee', async(req, res) => {
 * const id = req.params.id;
 * const updatedCoffee = req.body;
 * const filter = {_id: new ObjectId(id)}
 * const options = {upsert: true};
 * const coffee = {
 *      $set: {name: updatedCoffee.name, ...}
 * }
 * const result = await coffeeCollection.updateOne(filter, coffee, options)
 * res.send(result)
 * })
 *
 *
 */


/**
 * Client Side
 * 
 * create a project with react router
 * install tailwind 
 * install daisy UI
 * create component addCoffee, UpdateCoffee
 * route setting 
 * create a form in add coffee comp with daisy UI
 * submit handle input field new, and make object
 * set post method to backend - fetch('http:/', {method: 'POST', header:{}, body: JSON.Stringify(coffee)})
 * fetch data and view in Card
 * 
 * handle delete button
 * sweet alert
 * fetch data fetch('http:/:${id},{method: DELETE}').then(res => res.json())
 * .then(data => {
 *  if(data.deleteCount > 0){
 *   use sweet alert for confirm delete
 * }
 * })
 * fetch data to updateCoffee component
 * 
 * handle update coffee
 * control form
 * send data to server 
 * fetch('http://', {
 *  method: 'PUT'
 *  headers: {
 *      'content-type':'application/json'
 * },
 *  body: JSON.Stringify(coffee)
 * }).then(res => res.json()).then(data => {if(updated){sweet Alert}})
 * 
 * 
 * 
 * 
 */