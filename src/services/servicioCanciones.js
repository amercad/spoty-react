export const servicioCanciones = async() => {
    
    const URI = 'https://api.spotify.com/v1/artists/0LcJLqbBmaGUft1e9Mm8HV/top-tracks?market=US';
    const TOKEN = 'Bearer BQCU3hNhSF_5zqJ0rxw4YPEuNWD3ANvSHgJTLFAyQUnusxXQjxm0KC4ga0E7VnUYg3-_VJk_UgB7da6eD4WgOIrBDEeqH3pz3XEdK8jQp6EHRyfKgyFT2w2KbM_PehnpdAlQjAOdm5SMoSyU6zkFraOPWCWNcNEGhx971_xX1ueAZnZWt4Qvy2VukZQGQMRZRTE';
    
    const PETICION = {
        method: 'GET',
        headers: {
            Authorization: TOKEN
        } 
    };
    
    const resp = await fetch(URI, PETICION);
    
    const { tracks } = await resp.json();
    
    return tracks;
    
}