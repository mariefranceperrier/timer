const delay = process.argv.slice(2).sort(); 

delay.forEach((time) => {
  const parsedTime = parseInt(time);

  if (delay.length > 0 && parsedTime >= 0 && !isNaN(parsedTime)) {
    
    setTimeout(() => {
      process.stdout.write('.');
    }, parsedTime * 1000);
  }
});

setTimeout(() => {
  console.log();
}, parseInt(delay[delay.length -1]) * 2000);









