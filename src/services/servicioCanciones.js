export const servicioCanciones = async() => {
    
    const URI = 'https://api.spotify.com/v1/artists/4npEfmQ6YuiwW1GpUmaq3F/top-tracks?market=US';
    const TOKEN = 'Bearer BQCUMgoranMA7moCSZ-Xz0UNqytY2ihdQsH6-TRnxD25IDDItVk3UH6tpwYxWO95zW9T_w6RjFV9JjyXV9Hla7qx2s2uNPDnIJoMqEJeMjwalwxgWImuEr5Z-5w8iM8lIroN5jsap8eqpnd-kw6Ud_mp8NmaSS4PfaSIIai_8aC0on0AlHJQt71VtcnkNgXLTqs';
    
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