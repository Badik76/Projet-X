$(function() {
  // Mehdi's part2

  // Déclaration des instances de Materialize
  $('.tap-target').tapTarget('open');
  $('.modal').modal();
  $('.tooltipped').tooltip();


  // Déclaration du panier vide au démarrage.
  var cart = [];

  // Liste des catégories
  var categories = [
    {name : 'E-Commerce', id : 'eshop'},
    {name : 'Forum', id : 'forum'},
    {name : 'Sites Vitrines', id : 'showcase'},
    {name : 'Applications Mobile', id : 'mobile'},
  ];

  // Liste des produits ( Si on en ajoute, l'HTML sera bien sûr aussi bien généré automatiquement <3)
  var products = [
    {ref: 1, product: 'GeniusBazaar', image: 'https://cdn.discordapp.com/attachments/502377233143562252/502782564956766209/Capture_decran_de_2018-10-19_11-55-18.png', description : 'GeniusBazaar est un site de vente en ligne d\'accessoires.', price: 500, montant : 1, category : 'eshop'},
    {ref: 2, product: 'MaBoutikBio', image: 'https://cdn.discordapp.com/attachments/502377233143562252/502782851620667393/Capture_decran_de_2018-10-19_11-50-11.png', description : 'MaBoutikBio est un site de vente en ligne de produits bio.', price:140, montant : 1, category : 'eshop'},
    {ref: 3, product: 'MaDecoTendance', image: 'https://cdn.discordapp.com/attachments/502377233143562252/502783602631770123/Capture_decran_de_2018-10-19_12-00-09.png', description : 'MaDecoTendance est un site de vente en ligne de décoration.', price: 99.99, montant : 1, category : 'eshop'},
    {ref: 1, product: 'GeniusBazaar', image: 'https://cdn.discordapp.com/attachments/502377233143562252/502782564956766209/Capture_decran_de_2018-10-19_11-55-18.png', description : 'GeniusBazaar est un site de vente en ligne d\'accessoires.', price: 500, montant : 1, category : 'forum'},
    {ref: 2, product: 'MaBoutikBio', image: 'https://cdn.discordapp.com/attachments/502377233143562252/502782851620667393/Capture_decran_de_2018-10-19_11-50-11.png', description : 'MaBoutikBio est un site de vente en ligne de produits bio.', price:140, montant : 1, category : 'forum'},
    {ref: 3, product: 'MaDecoTendance', image: 'https://cdn.discordapp.com/attachments/502377233143562252/502783602631770123/Capture_decran_de_2018-10-19_12-00-09.png', description : 'MaDecoTendance est un site de vente en ligne de décoration.', price: 99.99, montant : 1, category : 'forum'},
    {ref: 1, product: 'GeniusBazaar', image: 'https://cdn.discordapp.com/attachments/502377233143562252/502782564956766209/Capture_decran_de_2018-10-19_11-55-18.png', description : 'GeniusBazaar est un site de vente en ligne d\'accessoires.', price: 500, montant : 1, category : 'showcase'},
    {ref: 2, product: 'MaBoutikBio', image: 'https://cdn.discordapp.com/attachments/502377233143562252/502782851620667393/Capture_decran_de_2018-10-19_11-50-11.png', description : 'MaBoutikBio est un site de vente en ligne de produits bio.', price:140, montant : 1, category : 'showcase'},
    {ref: 3, product: 'MaDecoTendance', image: 'https://cdn.discordapp.com/attachments/502377233143562252/502783602631770123/Capture_decran_de_2018-10-19_12-00-09.png', description : 'MaDecoTendance est un site de vente en ligne de décoration.', price: 99.99, montant : 1, category : 'showcase'},
    {ref: 1, product: 'GeniusBazaar', image: 'https://cdn.discordapp.com/attachments/502377233143562252/502782564956766209/Capture_decran_de_2018-10-19_11-55-18.png', description : 'GeniusBazaar est un site de vente en ligne d\'accessoires.', price: 500, montant : 1, category : 'mobile'},
    {ref: 2, product: 'MaBoutikBio', image: 'https://cdn.discordapp.com/attachments/502377233143562252/502782851620667393/Capture_decran_de_2018-10-19_11-50-11.png', description : 'MaBoutikBio est un site de vente en ligne de produits bio.', price:140, montant : 1, category : 'mobile'},
    {ref: 3, product: 'MaDecoTendance', image: 'https://cdn.discordapp.com/attachments/502377233143562252/502783602631770123/Capture_decran_de_2018-10-19_12-00-09.png', description : 'MaDecoTendance est un site de vente en ligne de décoration.', price: 99.99, montant : 1, category : 'mobile'},
  ];

  // Fonction ajout du produit dans le panier
  function addItemOnCart(productName, force) {
    var itemOnList = false;
    var itemOnCart = false;
    var productItem, itemObject;
    force = (typeof force !== undefined) ? force : false;
    // Savoir si le produit demandé existe dans la liste des produits
    for(var i = 0; i < products.length; i++) {
      if(productName === products[i].product) {
        itemOnList = true;
        productItem = i;
      }
    }
    // Voir si le produit demandé est dans la liste du panier
    for(var i = 0; i < cart.length; i++) {
      if(cart[i] !== undefined) {
        // Si le produit existe dans le panier, on augmente le montant.
        if(products[productItem].product === cart[i].product) {
          itemOnCart = true;
          cart[i].montant += 1;
          updateTexts(i);
        }
      }
    }
    if(itemOnList) {
      if(!itemOnCart) {
        itemObject = products[productItem];
        cart.push(itemObject);
        cart[cart.length - 1].id = cart.length;
      }
    } else {
      swal('Oops!', 'Erreur interne...', 'error');
    }
    if(force === true && itemOnList && !itemOnCart) {
      addOnCartInHTML(cart.length - 1);
    }
  }

  // Fonction créer un contenu html à la suite du panier
  function addOnCartInHTML(id) {
    $('#shoppingCart').append(`
      <tr id="line${cart[id].id}">
      <td data-label="Réf.">${cart[id].ref}</td>
      <td class="product-name" data-label="Produit">${cart[id].product}</td>
      <td id="price${cart[id].id}" data-label="Prix">${parseFloat(cart[id].price * cart[id].montant).toFixed(2)}€</td>
      <td data-label="Ajouter"><button id="addObjectMontant${cart[id].id}" class="waves-effect waves-light btn btn-floating green">
      <i class="material-icons">add_box</i>
      </button></td>
      <td id="montant${cart[id].id}" data-label="Montant">${cart[id].montant}</td>
      <td data-label="Réduire"><button id="removeObjectMontant${cart[id].id}" class="waves-effect waves-light btn btn-floating orange">
      <i class="material-icons">indeterminate_check_box</i>
      </button></td>
      <td data-label="Supprimer"><button id="deleteObject${cart[id].id}" class="waves-effect waves-light btn btn-floating red">
      <i class="material-icons">delete</i>
      </button></td>
      </tr>
      `
    );

    // Ecouteur bouton ajouter pour un produit du panier
    $('#addObjectMontant'+cart[id].id).on('click', function() {
      if(cart[id].montant < 100) {
        cart[id].montant += 1;
        updateTexts(id);
      } else {
        swal('Oops!', 'Impossible d\'ajouter plus de produits que 100.');
      }
    });

    // Ecouteur bouton moins pour un produit du panier
    $('#removeObjectMontant'+cart[id].id).on('click', function() {
      if(cart[id].montant > 1) {
        cart[id].montant -= 1;
        updateTexts(id);
      } else {
        swal('Oops!', 'Pour supprimer une valeur, merci d\'appuyer sur le bouton supprimer. La valeur ne peut pas être en dessous de 1.');
      }
    });

    // Ecouteur bouton supprimer pour un produit du panier
    $('#deleteObject'+cart[id].id).on('click', function() {
      deleteOnCart(id);
      deleteObjects(id + 1);
    });
  }

  // Mettre à jour le contenu du montant et du prix en fonction de l'id de la ligne
  function updateTexts(id) {
    var calcul = parseFloat(cart[id].price * cart[id].montant).toFixed(2);
    $('#price'+ (id + 1)).html(calcul + "€");
    $('#montant'+ (id + 1)).html(cart[id].montant);
  }

  // Supprimer un contenu du panier au niveau html
  function deleteObjects(id) {
    $('#line'+id).fadeOut().delay(2000).queue(function() { $(this).remove(); });;
  }

  // Fonction supprimer du tableau dans le panier
  function deleteOnCart(id) {
    delete cart[id];
  }

  // Génération des catégories
  for(var cats = 0; cats < categories.length; cats++) {
    $('#categoryList').append(`
      <a id="${categories[cats].id}" class="waves-effect waves-dark btn white dark-blue-text">${categories[cats].name}</a>
    `);
    $('#'+categories[cats].id).click(createCategoriesButtons(cats));
  }

  function createCategoriesButtons(id) {
    console.log(id);
    $('tr.productObjects').filter(document.getElementsByClassName(categories[id].id)).fadeOut();
  }

  // Génération des boutons ajouter au panier
  for(var prods = 0; prods < products.length; prods++) {
    prod = products[prods];
    $('#productList').append(`
      <div class="col s12 m4" class="${prod.category}">
      <div class="card">
      <div class="card-image">
      <img class="responsive-img-products" src="${prod.image}">
      </div>
      <p class="center-align card-title truncate dark-blue-text rem13">${prod.product}</p>
      <div class="divider"></div>
      <div class="card-content">
      <p>${prod.description}</p>
      </div>
      <div class="divider"></div>
      <div class="card-content">
      <div class="row">
      <div class="col s6"
      <p>${parseFloat(prod.price).toFixed(2)}€</p>
      </div>
      <div class="col s6">
      <a class="btn addNewProductInCart right waves-effect waves-light dark-blue" data-item-name="${prod.product}"><i class="material-icons">shopping_cart</i> Ajouter au panier</a>
      </div>
      </div>
      </div>
      </div>
      </div>`);
    }
    // Ecouteur bouton ajouter dans le panier
    $('.addNewProductInCart').on('click', function() {
      var item = this.dataset.itemName;
      addItemOnCart(item, true);
      M.toast({html: 'Produit ajouté au panier!'})
    });
    // End Mehdi's part2

    // Karl's part
    $('.parallax').parallax(); //activation du parallax

    // création d'un background animé
    var starcountsmall = 100;
    var starglowsmallc = 0;

    var starcountmedium = 50;
    var starglowmediumc = 0;

    var starcountlarge = 20;
    var starglowlargec = 0;

    var rheight;
    var rwidth;
    for(var i = 0; i < starcountsmall; i++) {
      starglowsmallc++;
      rheight = Math.floor(Math.random() * 5998) + 1;
      rwidth = Math.floor(Math.random() * 90) + 1;
      if(starglowsmallc == 10)
      {
        $(".stars__control--small").append('<span class="star__small star__glow" style="top:'+ rheight +'px;left:' + rwidth +'vw;"></span>');
        starglowsmallc = 0;
      }
      else
      {
        $(".stars__control--small").append('<span class="star__small" style="top:'+ rheight +'px;left:' + rwidth +'vw;"></span>');
      }
    }

    for(var i = 0; i < starcountmedium; i++) {
      starglowmediumc++;
      rheight = Math.floor(Math.random() * 5998) + 1;
      rwidth = Math.floor(Math.random() * 90) + 1;
      if(starglowmediumc == 7)
      {
        $(".stars__control--medium").append('<span class="star__medium star__glow" style="top:'+ rheight +'px;left:' + rwidth +'vw;"></span>');
        starglowmediumc = 0;
      }
      else
      {
        $(".stars__control--medium").append('<span class="star__medium" style="top:'+ rheight +'px;left:' + rwidth +'vw;"></span>');
      }
    }

    for(var i = 0; i < starcountlarge; i++) {
      starglowlargec++;
      rheight = Math.floor(Math.random() * 5998) + 1;
      rwidth = Math.floor(Math.random() * 90) + 1;
      if(starglowlargec == 3)
      {
        $(".stars__control--large").append('<span class="star__large star__glow" style="top:'+ rheight +'px;left:' + rwidth +'vw;"></span>');
        starglowlargec = 0;
      }
      else
      {
        $(".stars__control--large").append('<span class="star__large" style="top:'+ rheight +'px;left:' + rwidth +'vw;"></span>');
      }
    } // fin de la fonction pour le background
    //End Karl's part

    // Manouel's part

    $('.carousel').carousel({
      indicators: true,
    });
    setInterval (function() {
      $('.carousel').carousel('next');
    }, 4000);

    // End of Manouel's


    // Magalie's part
    $("#img1").mouseover(function() {
      img1.src = "assets/img/avatar2.jpg";
    })
    $("#img1").mouseout(function() {
      img1.src = "assets/img/avatar.jpg";
    })

    $("#img2").mouseover(function() {
      img2.src = "assets/img/avatar2.jpg";
    })
    $("#img2").mouseout(function() {
      img2.src = "assets/img/avatar.jpg";
    })

    $("#img3").mouseover(function() {
      img3.src = "assets/img/avatar2.jpg";
    })
    $("#img3").mouseout(function() {
      img3.src = "assets/img/avatar.jpg";
    })

    $("#img4").mouseover(function() {
      img4.src = "assets/img/avatar2.jpg";
    })
    $("#img4").mouseout(function() {
      img4.src = "assets/img/avatar.jpg";
    })
    // End Magalie's part
  });
