export const getImagen = async () => {
  const apiKey = "8QFvmsmywYM0THHUntY50xaLHvrJ47G4";

  try {
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    return "No existe";
  }
};

getImagen();
