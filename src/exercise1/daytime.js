// Task 1: Endpoint to get current day and time
app.get('/daytime', (req, res) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayName = days[now.getDay()];
    const hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    res.send(`Today is: ${dayName}. Current time is: ${hours} ${ampm} : ${minutes} : ${seconds}`);
  });
  