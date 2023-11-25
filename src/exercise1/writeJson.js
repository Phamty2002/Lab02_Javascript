// Task 4: Endpoint to write a JSON object to a file
app.post('/write-json', (req, res) => {
    const jsonContent = req.body;
    fs.writeFile('output.json', JSON.stringify(jsonContent, null, 2), err => {
      if (err) {
        res.status(500).send('Error writing to file');
      } else {
        res.send('JSON saved to output.json');
      }
    });
  });
  