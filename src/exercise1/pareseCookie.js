// Task 3: Endpoint to parse cookie string
app.get('/parse-cookie', (req, res) => {
    const header = req.headers.cookie;
    const cookies = header.split(';').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=').map(c => c.trim());
      acc[name] = value;
      return acc;
    }, {});
    res.json(cookies)
});