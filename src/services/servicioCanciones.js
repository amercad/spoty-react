export const servicioCanciones = async() => {
    
    const URI = 'https://api.spotify.com/v1/artists/4npEfmQ6YuiwW1GpUmaq3F/top-tracks?market=US';
    const TOKEN = 'Bearer BQBh-yRTqKDC1T5_1S8H4Ev3K11EkbkiqezW5iddXzVzmezeB6hPAzt8Si0IYNSPVH65hoVGN3yYd3P1ZAR5xxYsQDKph0OdROeOdhVNooW8ba5a5HJhWMyMD2d1xPLzONrFSZxBjXRL3c1AzS0Sx-gqg8xyaDStPREqdX630z8KpvlwmrcJS7sa_U7Z1l5ZXLY';
    
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