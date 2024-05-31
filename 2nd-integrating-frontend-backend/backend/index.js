import express from 'express';

const app = express();
const PORT = 3000;
app.get('/api/jokes', (req, res) => {
  res.send([
    {
      "joke": "Who is the only superhuman Frozone can't deal with? Thor."
    },
    {
      "joke": "What do you do if you see a spaceman? You park in it, man."
    },
    {
      "joke": "What did the plate say to the other plate? Dinners on me."
    },
    {
      "joke": "What do you call a white supremacist who doesn't eat meat? A vegitaryan"
    },
    {
      "joke": "What's the difference between a Jew and a pizza? The pizza can have ham and cheese together."
    },
    {
      "joke": "I met Phil Spector's brother Crispin the other day. He's head of quality control at Lays."
    }
  ]);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });