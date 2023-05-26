// Fonction pour lancer les dés
function rollDice(attributeValue, hasSkill, oppositionLevel) {
    var diceCount = attributeValue + (hasSkill ? 1 : 0);
    var diceResult = [];
    
    // Lancer les dés
    for (var i = 0; i < diceCount; i++) {
      var result = Math.floor(Math.random() * 4) + 1;
      diceResult.push(result);
    }
  
    // Trier les résultats de dés en ordre décroissant
    diceResult.sort(function(a, b) {
      return b - a;
    });
  
    // Déterminer le résultat du plus haut dé
    var highestResult = diceResult[0];
    
    // Déterminer le message en fonction du résultat du plus haut dé
    var message = "";
    if (highestResult === 1) {
      message = "Échec et...";
    } else if (highestResult === 2) {
      message = "Échec mais...";
    } else if (highestResult === 3) {
      message = "Réussite mais...";
    } else if (highestResult === 4) {
      message = "Réussite et...";
    }
  
    // Retourner le résultat du lancer de dés et le message
    return {
      diceResult: diceResult,
      message: message
    };
  }
  