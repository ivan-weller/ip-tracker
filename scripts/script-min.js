var api_key="at_C4SDN7bt74w5infGoMPMzdtIIJd2w",lat="",lng="";function update(e){$.ajax({url:"https://geo.ipify.org/api/v1",data:{apiKey:api_key,ipAddress:e},success:function(e){document.getElementById("ip-address").innerHTML=e.ip,document.getElementById("location").innerHTML=e.location.city+", "+e.location.region+" "+e.location.postalCode,document.getElementById("timezone").innerHTML=e.location.timezone+" UTC",document.getElementById("isp").innerHTML=e.isp,lat=e.location.lat,lng=e.location.lng;var t=lat+.005;mapboxgl.accessToken="pk.eyJ1Ijoid2VsbGVyaW5kZXAiLCJhIjoiY2toNHhsbmgzMGczdDMwcWJqODVyd2FyeSJ9.io83u9yMFfuKLtBMrsaGNA";var n=new mapboxgl.Map({container:"mapid",style:"mapbox://styles/mapbox/streets-v11",center:[lng,t],zoom:14,interactive:!1});new mapboxgl.Marker({color:"#000000"}).setLngLat([lng,lat]).addTo(n)}})}document.getElementById("ip-form").onsubmit=function(){return update(document.getElementById("search").value),!1},$((function(){update()}));