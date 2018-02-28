

document.addEventListener('click', async () => {
  try {
    const { Horloge } = await import('./horloge');
    const divElt = document.querySelector('.horloge');
    const clock = new Horloge(divElt);
    clock.start();
  }
  catch (err) {
    console.log(err);
  }
});
