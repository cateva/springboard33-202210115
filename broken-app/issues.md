# Broken App Issues

1) app.js ln 5:

app.post('/', function(req, res, next) {

should be
 
app.post('/:name', function(req, res, next) {

2)
users.js ln 7

redo app.js to users.js, so results can return NAME and BIO only, instead of the whole object

router.post("", function(req, res, next){
  try {
    if (!req.body.developers) throw new ExpressError("Developer Username is required", 400);


    let results = req.body.developers.map(async function(d){
      await axios.get(`https://api.github.com/users/${d}`);
    });

    let temp = res.json(results);
    console.log(temp);
  }