let result = []
let lat = 0
let lng = 0
let name = ""
let speed = 0
let time = ""

fetch("http://31.207.34.171/api/get_devices?&lang=fr&user_api_hash=$2y$10$FbpbQMzKNaJVnv0H2RbAfel1NMjXRUoCy8pZUogiA/bvNNj1kdcY.")
.then(response => response.json())
.then(data => {
  let data2 = data;
  for (let i = 0; i < 1; i++) {
        for (let k = 0; k < data2[0]["items"].length; k++) {
          lat = data2[i]["items"][k]["lat"] 
          lng = data2[i]["items"][k]["lng"]
          name = data2[i]["items"][k]["name"]
          time = data2[i]["items"][k]["time"] 
          speed = data2[i]["items"][k]["speed"]

          result[k] = {
            "latitude":lat,
            "longitude": lng,
            "name":name,
            "time":time,
            "speed":speed
          }
        }
        
        let resultat  = JSON.stringify(result);
        document.getElementById("affichage").innerHTML = resultat;
      }
})
    