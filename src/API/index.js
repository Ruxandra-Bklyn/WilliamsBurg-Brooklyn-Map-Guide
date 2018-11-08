class Helper {
    
    static baseURL(){
        //this url never changes, only the venue does
        return "https://api.foursquare.com/v2"
    } 
    static auth(){
        
        const keys = {
            client_id: "V04AOMKZDTEANRKBVGOKDLEDTRV4WPGE54SIC0YAVYHPMPYF",
            client_secret: "RJ3K1JPYIYPMK3DG3EBRXPDUNBBJEI405QASX3MWA15WNYPV",
            v:"20181107"
        };
        
        return Object.keys(keys)
            .map(key => `${key}=${keys[key]}`)
            .join("&");
    }
    static urlBuilder(urlParameters){
        if(!urlParameters){
            return""
        }
        return Object.keys(urlParameters)
        .map(key =>`${key}=${urlParameters[key]}`)
        .join("&");
    }
static headers() {
    return {
        Accept:"application/Json"
      };
    }
    
    static simpleFetch(endPoint,method,urlParameters){
        let requestData ={
            method,
            headers: Helper.headers()
        };
        return fetch(`${Helper.baseURL()}${endPoint}?${Helper.auth()}${Helper.urlBuilder(
            urlParameters
        )}`,
           requestData
     ).then(res => res.json());
 }
}
export default class squareAPI {
    static search(urlParameters){
        return Helper.simpleFetch("/venues/search", "GET", urlParameters);
    }
    static getVenueDetails(VENUE_ID){
        return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
    }
    static getVenuePhotos(VENUE_ID) {
        return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET");  
    }
}
  
    
    /* 
    GET https://api.foursquare.com/v2/venues/VENUE_ID 
    Better to use GET https://api.foursquare.com/v2/venues/VENUE_ID/similar ?
 FOURSQUARE: 
Client ID
V04AOMKZDTEANRKBVGOKDLEDTRV4WPGE54SIC0YAVYHPMPYF
Client Secret
RJ3K1JPYIYPMK3DG3EBRXPDUNBBJEI405QASX3MWA15WNYPV
    */

