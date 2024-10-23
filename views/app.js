const graphRef = document.getElementById("graph");

const chart = new Chart(graphRef, {
  type: "bar",
  data: {
    labels: ["Green", "Red"],
    datasets: [{ labels: "Buttons", data: [2, 7] }],
  },
});

async function getData() {
  // chart.destroy();

  const buttonReq = await fetch(`/api/buttons/data`);
  const buttonData = await buttonReq.json();

  const colors = {};
  // {"red": 2, "green": 1}

  for (let i = 0; i < buttonData / length; i++) {
    const buttonColor = buttonData[i];
    colors[buttonColor] ||= 0;
    colors[buttonColor]++;
  }

  chart.data = {
    labels: Object.keys(colors),
    datasets: [{ label: "Buttons", data: Object.values(colors) }],
  };
  chart.updates();
}

getData();
