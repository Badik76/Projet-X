var test = ['test', 'test2', 'test3'];
console.log(test);
delete test[1];
console.log(test);

$(function() {
  // Mehdi's part2

  // Déclaration des instances de Materialize
  $('.tap-target').tapTarget('open');
  $('.modal').modal({ onOpenStart : function() { $('#showShoppingCartModal').fadeOut();
  var totalPrice = getTotalCartPrice();
  $('#totalOnCart').text('Le total est de : ' + parseFloat(totalPrice).toFixed(2) + '€');
}, onCloseStart : function() { $('#showShoppingCartModal').fadeIn(); } });
$('.tooltipped').tooltip();
$('select').formSelect();
$('.sidenav').sidenav({ edge : 'right', onOpenStart : function() { $('#showShoppingCartModal').fadeOut();
}, onCloseStart : function() { $('#showShoppingCartModal').fadeIn(); } });

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if(prevScrollpos > currentScrollPos) {
    //$('#navbar').css('top', '0');
    $('#navbar').fadeIn();
  } else {
    //$('#navbar').css('top', '-64px');
    $('#navbar').fadeOut();
  }
  prevScrollpos = currentScrollPos;
}

// Déclaration du panier vide au démarrage.
var cart = [];

// Liste des catégories
var categories = [
  {name : 'Sites Vitrines', id : 'showcase'},
  {name : 'E-Commerce', id : 'eshop'},
  {name : 'Forums', id : 'forum'},
  {name : 'Frameworks', id : 'framework'},
  {name : 'Applications Mobile', id : 'mobile'},
];

// Liste des produits ( Si on en ajoute, l'HTML sera bien sûr aussi bien généré automatiquement <3)
var products = [
  {
    ref: 1,
    product: 'GeniusBazaar',
    image: 'assets/img/genius.png',
    link : 'https://geniusbazaar-shop.com/',
    description : 'GeniusBazaar est un site de vente en ligne d\'accessoires.',
    price: 500,
    montant : 1,
    category : 'eshop',
    categoryName : 'E-Commerce'
  },
  {
    ref: 2,
    product: 'MaBoutikBio',
    image: 'assets/img/maboutik.png',
    link : 'https://www.maboutikbio.com/',
    description : 'MaBoutikBio est un site de vente en ligne de produits bio.',
    price:140,
    montant : 1,
    category : 'eshop',
    categoryName : 'E-Commerce'
  },
  {
    ref: 3, product: 'MaDecoTendance',
    image: 'assets/img/madeco.png',
    link : 'http://madecotendance.com/',
    description : 'MaDecoTendance est un site de vente en ligne de décoration.',
    price: 99.99,
    montant : 1,
    category : 'eshop',
    categoryName : 'E-Commerce'
  },
  {
    ref: 4,
    product: 'L\'atelier du coteau',
    image: 'assets/img/atelier.png',
    link : 'https://www.latelierducoteau.com/',
    description : 'L\'Atelier du coteau propose des ateliers libre pour tous.',
    price: 500,
    montant : 1,
    category : 'showcase',
    categoryName : 'Site Vitrine'
  },
  {
    ref: 5,
    product: 'Jeff Bridges Sleeping Tapes',
    image: 'assets/img/jeff.png',
    link : 'http://www.dreamingwithjeff.com/',
    description : 'Jeff Bridges Sleeping Tapes propose une mise en page sobre.',
    price:140,
    montant : 1,
    category : 'showcase',
    categoryName : 'Site Vitrine'
  },
  {
    ref: 6,
    product: 'Seattle Cider',
    image: 'assets/img/seattle.png',
    link : 'https://www.seattlecidercompany.com/',
    description : 'Seattle Cider met en avant son cidre qui est vendu à Seattle.',
    price: 99.99,
    montant : 1,
    category : 'showcase',
    categoryName : 'Site Vitrine'
  },
  {
    ref: 7,
    product: 'CMS forum',
    image: 'assets/img/forum1.png',
    link : 'https://www.phpbb.com/customise/db/style/ne_blackgreen/?sid=b00140a910d4a99ca75f4781a5f3a389',
    description : 'Systèmes de gestion de contenu pour forums à personnaliser.',
    price: 376.45,
    montant : 1,
    category : 'forum',
    categoryName : 'Forum'
  },
  {
    ref: 8,
    product: 'CMS forum',
    image: 'assets/img/forum2.png',
    link : 'https://www.phpbb.com/customise/db/style/fth_tropic/?sid=b00140a910d4a99ca75f4781a5f3a389',
    description : 'Systèmes de gestion de contenu pour forums à personnaliser.',
    price:140,
    montant : 1,
    category : 'forum',
    categoryName : 'Forum'
  },
  {
    ref: 9,
    product: 'CMS forum',
    image: 'assets/img/forum3.png',
    link : 'https://www.phpbb.com/customise/db/style/we_universal/?sid=b00140a910d4a99ca75f4781a5f3a389',
    description : 'Systèmes de gestion de contenu pour forums à personnaliser.',
    price: 99.99,
    montant : 1,
    category : 'forum',
    categoryName : 'Forum'
  },
  {
    ref: 10,
    product: 'Netflix',
    image: 'assets/img/netflix.png',
    link : 'https://www.netflix.com/app',
    description : 'Leader mondial des films et séries en streaming.',
    price: 500,
    montant : 1,
    category : 'mobile',
    categoryName : 'Mobile'
  },
  {
    ref: 11,
    product: 'Blablacar',
    image: './assets/img/blablacar.png',
    link : 'https://www.blablacar.fr/apps-mobile',
    description : 'Marre des trains ? Pensez covoiturage, pensez "Blablacar".',
    price:140,
    montant : 1,
    category : 'mobile',
    categoryName : 'Mobile'
  },
  {
    ref: 12,
    product: 'Discord',
    image: './assets/img/discord.png',
    link : 'https://discordapp.com/',
    description : 'Rejoignez Discord pour discuter de tout avec vos amis.',
    price: 99.99,
    montant : 1,
    category : 'mobile',
    categoryName : 'Mobile'
  },
  {
    ref: 13,
    product: 'Symfony',
    image: './assets/img/symfony.png',
    link : 'https://symfony.com/',
    description : 'Symfony, framework PHP que nous utilisons sur nos sites.',
    price: 49.99,
    montant : 1,
    category : 'framework',
    categoryName : 'Frameworks'
  },
  {
    ref: 14,
    product: 'Bootstrap',
    image: './assets/img/bootstrap.png',
    link : 'https://screenshots.firefox.com/Qms4PtWitbgMNrgY/getbootstrap.com',
    description : 'Bootstrap propose une vaste librairie sympa à utiliser.',
    price: 49.99,
    montant : 1,
    category : 'framework',
    categoryName : 'Frameworks'
  },
  {
    ref: 15,
    product: 'Django',
    image: './assets/img/django.png',
    link : 'https://www.djangoproject.com/',
    description : 'Django, framework Python proposant pas mal de possibilités.',
    price: 49.99,
    montant : 1,
    category : 'framework',
    categoryName : 'Frameworks'
  },
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
      var totalPrice = getTotalCartPrice();
      $('#totalOnCart').text('Le total est de : ' + parseFloat(totalPrice).toFixed(2) + '€');
    } else {
      swal('Oops!', 'Impossible d\'ajouter plus de produits que 100.', 'error');
    }
  });

  // Ecouteur bouton moins pour un produit du panier
  $('#removeObjectMontant'+cart[id].id).on('click', function() {
    if(cart[id].montant > 1) {
      cart[id].montant -= 1;
      updateTexts(id);
      var totalPrice = getTotalCartPrice();
      $('#totalOnCart').text('Le total est de : ' + parseFloat(totalPrice).toFixed(2) + '€');
    } else {
      swal('Oops!', 'Pour supprimer une valeur, merci d\'appuyer sur le bouton supprimer. La valeur ne peut pas être en dessous de 1.', 'error');
    }
  });

  // Ecouteur bouton supprimer pour un produit du panier
  $('#deleteObject'+cart[id].id).on('click', function() {
    deleteOnCart(id);
    deleteObjects(id + 1);
    var totalPrice = getTotalCartPrice();
    $('#totalOnCart').text('Le total est de : ' + parseFloat(totalPrice).toFixed(2) + '€');
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
  cart[id].montant = 1;
  delete cart[id];
}

// Génération des catégories
for(var cats = 0; cats < categories.length; cats++) {
  $('#categoryList').append(`
    <a id="${categories[cats].id}" class="waves-effect waves-dark btn white dark-blue-text">${categories[cats].name}</a>
    `);
    $('#'+categories[cats].id).on('click', function() {
      var classProduct = document.getElementsByClassName('trObject');
      for(var i = 0; i < classProduct.length; i++) {
        var objectClass = classProduct[i].attributes.class.nodeValue.split(' ');
        if(objectClass[0] !== $(this)[0].id) {
          $('.'+objectClass[0]).slideUp();
        } else {
          $('.'+objectClass[0]).slideDown();
        }
      }
      deleteBubbles();
    });
  }

  function Shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

  // Génération des boutons ajouter au panier
  function generateProducts() {
    var shuffleProds = Shuffle(products);
    for(var prods = 0; prods < shuffleProds.length; prods++) {
      var prod = shuffleProds[prods];
      $('#productList').append(`
        <div class="${prod.category} trObject col s12 m6 l4 mb-10">
        <div class="card">
        <div class="card-image">
        <a class="himg" target="_blank" href="${prod.link}"><img class="responsive-img-products" src="${prod.image}" /></a>
        </div>
        <p class="center-align card-title truncate dark-blue-text rem13">${prod.product}</p>
        <div class="divider"></div>
        <div class="card-content">
        <p><span class="badge blue white-text">${prod.categoryName}</span></p><br /><br />
        <p class="truncate">${prod.description}</p>
        </div>
        <div class="divider"></div>
        <div class="card-content">
        <div class="row">
        <div class="col s6"
        <p>${parseFloat(prod.price).toFixed(2)}€</p>
        </div>
        <div class="col s6">
        <a class="btn addNewProductInCart right waves-effect waves-light dark-blue tooltipped btn-floating" data-position="top" data-tooltip="Ajouter au panier" data-item-name="${prod.product}"><i class="material-icons">add_shopping_cart</i></a>
        </div>
        </div>
        </div>
        </div>
        </div>`);
      }
    }
    generateProducts();
    // Ecouteur bouton ajouter dans le panier
    $('.addNewProductInCart').on('click', function() {
      var item = this.dataset.itemName;
      var failure = true;
      for(var i = 0; i < products.length; i++) {
        if(products[i].product === item) {
          failure = false;
        }
      }
      if(failure === false) {
        addItemOnCart(item, true);
        M.toast({html: 'Produit ajouté au panier!'})
        var totalPrice = getTotalCartPrice();
        $('#totalOnCart').text('Le total est de : ' + parseFloat(totalPrice).toFixed(2) + '€');
      } else {
        swal('Oops!', 'Erreur interne...', 'error');
      }
    });
    $('.tooltipped').tooltip();

    function getRealCartLength() {
      var cartLength = 0;
      for(var i = 0;i < cart.length; i++) {
        if(cart[i] !== undefined) {
          cartLength++;
        }
      }
      return cartLength;
    }

    function getTotalCartPrice() {
      var total = 0;
      for(var i = 0; i < cart.length; i++) {
        if(cart[i] !== undefined) {
          total += cart[i].montant * cart[i].price;
        }
      }
      return total;
    }

    var accountCreated = false;
    var session = {};

    $('#goToAccountCreation').on('click', function() {
      var totalPrice = getTotalCartPrice();
      $('#totalCartPrice').text('Le total est de : ' + totalPrice + '€');
      if(getRealCartLength() > 0) {
        if(accountCreated === false) {
          $('#cartModalContent').slideUp();
          $('#accountModalContent').slideDown();
        } else {
          $('#cartModalContent').slideUp();
          $('#paymentMethodsModalContent').slideDown();
        }
      } else {
        swal('Oops!', 'Le panier est vide!', 'error');
      }
    });

    $('#returnToCartModalContent').on('click', function() {
      //GoToAccountCreation
      $('#cartModalContent').slideDown();
      $('#accountModalContent').slideUp();
    });

    function parseChar(text){
      return text.substr(0,1).toUpperCase() + text.substr(1,text.length).toLowerCase();
    }

    $('#goToPaymentMethods').on('click', function() {
      //AccountValidator
      var $lastName = $('#lastName').val();
      var $firstName = $('#firstName').val();
      var $email = $('#email').val();
      var $phoneNumber = $('#phoneNumber').val();
      var $password = $('#password').val();
      var $rePassword = $('#rePassword').val();
      var regexBase = /^[A-Za-zÂ-ÿ-]+$/;
      var regexMail = /^[A-Za-z0-9-_.]+[@][A-Za-z0-9-_.]+[.][A-Za-z]+$/;
      var regexPhoneNumber = /^[\d]+$/
      if(regexBase.test($lastName) && regexBase.test($firstName) && regexMail.test($email) && regexPhoneNumber.test($phoneNumber) && $password !== "") {
        if($password.length > 6) {
          if($password === $rePassword) {
            if(accountCreated !== true) {
              accountCreated = true;
              session.lastName = $lastName;
              session.firstName = $firstName;
              session.email = $email;
              session.password = $password;
              session.phoneNumber = $phoneNumber;

              $('#contactLastName').attr('disabled', true).val('');
              $('#labelContactLastName').text(session.lastName).removeClass('active');
              $('#contactFirstName').attr('disabled', true).val('');
              $('#labelContactFirstName').text(session.firstName).removeClass('active');
              $('#contactMail').attr('disabled', true).val('');
              $('#labelContactMail').text(session.email).removeClass('active');
              $('#contactPhoneNumber').attr('disabled', true).val('');
              $('#labelContactPhoneNumber').text(session.phoneNumber).removeClass('active');
              $('#contactPasswordField').attr('hidden', false).val('');
              swal('Youpi!', 'Bienvenue sur AWP '+parseChar(session.firstName)+' '+parseChar(session.lastName)+'! Création du compte réussi!', 'success');
              $('#accountModalContent').slideUp();
              $('#paymentMethodsModalContent').slideDown();
            } else {
              swal('Oops!', 'Erreur interne...', 'error');
            }
          } else {
            swal('Oops!', 'Les 2 mots de passes ne correspondent pas!', 'error')
          }
        } else {
          swal('Oops!', 'Il est nécessaire d\'avoir un mot de passe supérieur à 6 caractères!', 'error')
        }
      } else {
        swal('Oops!', 'Merci de bien vouloir remplir correctement tous les champs!', 'error');
      }
    });

    $('#returnToAccount').on('click', function() {
      $('#cartModalContent').slideDown();
      $('#paymentMethodsModalContent').slideUp();
    });
    var essais = 0;
    $('#paymentValidator').on('click', function() {
      var $cardNumber = $('#cardNumber').val();
      var $cardTitular = $('#cardTitular').val();
      var $cardExpiration = $('#cardExpiration').val();
      var $cardType = $('#cardType').val();
      var $cardCVV = $('#cardCVV').val();
      var cardObject = new CreditCard();
      var cardExpirationSplitted = $cardExpiration.split('/');
      if(cardObject.isValid($cardNumber)) {
        if(cardObject.isExpirationDateValid(cardExpirationSplitted[0], cardExpirationSplitted[1])) {
          if($cardType === cardObject.getCreditCardNameByNumber($cardNumber)) {
            if(cardObject.isSecurityCodeValid($cardNumber, $cardCVV)) {
              if(essais < 4) {
                cart = [];
                $('#shoppingCart').html('');
                var totalPrice = getTotalCartPrice();
                $('#totalCartPrice').text('Le total est de : ' + totalPrice + '€');
                swal('Youpi!', 'Paiement accepté!', 'success');
                var totalPrice = getTotalCartPrice();
                $('#totalOnCart').text('Le total est de : ' + parseFloat(totalPrice).toFixed(2) + '€');
                $('#paymentMethodsModalContent').slideUp();
                $('#cartModalContent').slideDown();
              } else {
                swal('Oops', 'Vous êtes soupçonné de brute-force! Si ceci est une erreur, contactez un administrateur!', 'error');
              }
            } else {
              swal('Oops!', 'Le code de la carte est invalide!', 'error');
              essais++;
            }
          } else {
            swal('Oops!', 'Le type de carte est invalide!', 'error');
          }
        } else {
          swal('La date d\'expiration n\'est pas valide!', 'error');
        }
      } else {
        swal('Oops!', 'La carte bancaire entrée est invalide!', 'error');
      }
    });

    $('#contactSubmit').on('click', function() {
      var $content = $('#contactContent').val();
      var regexContent = /^[A-Za-zÂ-ÿ0-9-_./=()""]+$/;
      if(accountCreated) {
        var $password = $('#contactPassword').val();
        if($password === session.password) {
          if(regexContent.test($content)) {
            swal('Euh...', 'Le message ne peut pas être envoyé, désolé mais notre contrainte s\'élève jusqu\'au PHP!', 'warning');
          } else {
            swal('Oops!', 'Merci d\'utiliser uniquement des caractères autorisés dans le descriptif!', 'error');
          }
        } else {
          swal('Oops!', 'Le mot de passe ne correspond pas à celui de votre compte!', 'error');
        }
      } else {
        var $lastName = $('#contactLastName').val();
        var $firstName = $('#contactFirstName').val();
        var $email = $('#contactEmail').val();
        var $phoneNumber = $('#contactPhoneNumber').val();
        var regexBase = /^[A-Za-zÂ-ÿ-]+$/;
        var regexMail = /^[A-Za-z0-9-_.]+[@][A-Za-z0-9-_.]+[.][A-Za-z]+$/;
        var regexPhoneNumber = /^[\d]+$/
        if(regexBase.test($lastName) && regexBase.test($firstName) && regexMail.test($email) && regexPhoneNumber.test($phoneNumber)) {
          swal('Euh...', 'Le message ne peut pas être envoyé, désolé mais notre contrainte s\'élève jusqu\'au PHP!', 'warning');
        } else {
          swal('Oops!', 'Merci de revoir vos champs.', 'error');
        }
      }
    });

    // End Mehdi's part2

    // Karl's part
    $('.parallax').parallax(); //activation du parallax

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max + 1));
    }

    function updateBubbles() {

      // création d'un background animé
      var starcountsmall = 50;
      var starglowsmallc = 0;

      var starcountmedium = 50;
      var starglowmediumc = 0;

      var starcountlarge = 50;
      var starglowlargec = 0;

      var rheight;
      var rwidth;
      for(var i = 0; i < starcountsmall; i++) {
        starglowsmallc++;
        rheight = getRandomInt($(document).height());
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
        rheight = getRandomInt($(document).height());
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
        rheight = getRandomInt($(document).height());
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
    }

    function deleteBubbles() {
      var smallStars = document.getElementsByClassName('.stars__small');
      $('.star__small, .star__medium, .star__large').fadeOut();
    }

    updateBubbles();
    //End Karl's part

    // Manouel's part

    $('.carousel').carousel({
      indicators: true,
    });
    setInterval (function() {
      $('.carousel').carousel('next');
    }, 5000);

    // End of Manouel's

    // Magalie's part
    $labelMehdi = $('#labelMehdi').html()
    var $labelKarl = $('#labelKarl');
    var $labelMehdi = $('#labelMehdi');
    var $labelManu = $('#labelManu');
    var $labelKrevette = $('#labelKrevette');
    $("#img1").mouseover(function() {
      img1.src = "assets/img/karl2.jpg";
      $($labelKarl).html('Atout<br />Barbe');
    })
    $("#img1").mouseout(function() {
      img1.src = "assets/img/karl1.jpg";
      $($labelKarl).html('Karl LEVASSEUR<br />Chef de projet web')
    })

    $("#img2").mouseover(function() {
      img2.src = "assets/img/medhi2.jpg";
      $($labelMehdi).html('L\'atout<br />Wozniak')
    })
    $("#img2").mouseout(function() {
      img2.src = "assets/img/medhi1.jpg";
      $($labelMehdi).html('Mehdi ROUIS<br />Développeur web')
    })

    $("#img3").mouseover(function() {
      img3.src = "assets/img/manu2.jpg";
      $($labelManu).html('L\'atout<br />Charme');
    })
    $("#img3").mouseout(function() {
      img3.src = "assets/img/manu1.jpg";
      $($labelManu).html('Manuel ROMERO<br />Développeur web')
    })

    $("#img4").mouseover(function() {
      img4.src = "assets/img/krevette2.jpg";
      $($labelKrevette).html('L\'atout<br />Féminin');
    })
    $("#img4").mouseout(function() {
      img4.src = "assets/img/krevette1.jpg";
      $($labelKrevette).html('Magalie KABELAAN<br />Développeuse web')
    })
    // End Magalie's part
  });
