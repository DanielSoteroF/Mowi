// let navegador = navigator.userAgent;
// function redirecionar(){
//     if(navigator.userAgent.match(/Android/i)){
//         window.open("https://play.google.com/store/apps/details?id=com.mowitunigperu.mowitaxi.mowiconductor&hl=es");
//     }

//     if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)){
//         window.open("https://apps.apple.com/uy/app/mowi-conductor");
//     }
// }

// function redireccionPasajero(){
//     if(navigator.userAgent.match(/Android/i)){
//         window.open("https://play.google.com/store/apps/details?id=com.mowitunigperu.mowitaxi.mowicliente&hl=es");
//     }

//     if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)){
//         window.open("https://play.google.com/store/apps/details?id=com.mowitunigperu.mowitaxi.mowicliente&hl=es");
//     }
// }


        document.getElementById("redireccionConductor").addEventListener("click", function() {
            var plataforma = detectarPlataforma();
            if (plataforma === "android") {
                // Redirige a la Play Store de Android
                window.location.href = "https://play.google.com/store/apps/details?id=com.mowitunigperu.mowitaxi.mowiconductor&hl=es";
            } else if (plataforma === "ios") {
                // Redirige a la App Store de iOS
                window.location.href = "https://apps.apple.com/pe/app/mi-entel-per%C3%BA/id925872656";
            } else {
                // Manejo de otras plataformas o errores
                alert("No se puede determinar la plataforma.");
            }
        });

        document.getElementById("redireccionPasajero").addEventListener("click", function() {
            var plataforma = detectarPlataforma();
            if (plataforma === "android") {
                // Redirige a la Play Store de Android
                window.location.href = "https://play.google.com/store/apps/details?id=com.mowitunigperu.mowitaxi.mowiconductor&hl=es";
            } else if (plataforma === "ios") {
                // Redirige a la App Store de iOS
                window.location.href = "https://apps.apple.com/pe/app/mi-entel-per%C3%BA/id925872656";
            } else {
                // Manejo de otras plataformas o errores
                alert("No se puede determinar la plataforma.");
            }
        });

        function detectarPlataforma() {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            
            // Detectar Android
            if (/android/i.test(userAgent)) {
                return "android";
            }
            
            // Detectar iOS
            if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                return "ios";
            }
            
            // Por defecto, no se puede determinar la plataforma
            return "desconocida";
        }

