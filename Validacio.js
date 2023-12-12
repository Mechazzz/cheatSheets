fs.readFile("data.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the JSON file:", err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    console.log(professionals(jsonData));
    //console.log(jsonData);
  } catch (err) {
    console.error("Error parsing the JSON data:", err);
  }
});

const professionals = (data) => {};
