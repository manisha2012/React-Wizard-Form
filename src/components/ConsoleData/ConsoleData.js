const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function consoleData(values) {
  await sleep(500); // simulate server latency
  console.log(values);
});
