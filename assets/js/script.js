var cart = [];
$(function() {
  // Mehdi's part2
  $('.tap-target').tapTarget('open');
  $('.modal').modal();

  var categories = [
    'eshop',
    'forum',
    'showcase',
    'project'
  ]

  var products = [
    {ref: 1, product: 'AliveCMS', price: 500, montant : 1, category : 'eshop'},
    {ref: 2, product: 'WordPress', price:0, montant : 1, category : 'showcase'},
    {ref: 3, product: 'PHPBB', price: 0, montant : 1, category : 'forum'},
    {ref: 4, product: 'CMS', price: 0, montant : 1, category : 'project'},
    {ref: 5, product: 'Test', price: 0, montant : 1, category : 'project'},
    {ref: 5, product: 'Test2', price: 0, montant : 1, category : 'project'}
  ];
  function addItemOnCart(productName, force) {
    var itemOnList = false;
    var itemOnCart = false;
    var productItem, itemObject;
    force = (typeof force !== undefined) ? force : false;
    for(var i = 0; i < products.length; i++) {
      if(productName === products[i].product) {
        itemOnList = true;
        productItem = i;
      }
    }
    for(var i = 0; i < cart.length; i++) {
      if(cart[i] !== undefined) {
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

  function addOnCartInHTML(id) {
    $('#shoppingCart').append(`
      <tr id="line${cart[id].id}">
      <td data-label="Réf.">${cart[id].ref}</td>
      <td class="product-name" data-label="Produit">${cart[id].product}</td>
      <td id="price${cart[id].id}" data-label="Prix">${cart[id].price * cart[id].montant}€</td>
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

    $('#addObjectMontant'+cart[id].id).on('click', function() {
      if(cart[id].montant < 100) {
        cart[id].montant += 1;
        updateTexts(id);
      } else {
        swal('Oops!', 'Impossible d\'ajouter plus de produits que 100.');
      }
    });
    $('#removeObjectMontant'+cart[id].id).on('click', function() {
      if(cart[id].montant > 1) {
        cart[id].montant -= 1;
        updateTexts(id);
      } else {
        swal('Oops!', 'Pour supprimer une valeur, merci d\'appuyer sur le bouton supprimer. La valeur ne peut pas être en dessous de 1.');
      }
    });

    $('#deleteObject'+cart[id].id).on('click', function() {
      deleteOnCart(id);
      deleteObjects(id + 1);
    });

  }

  function updateTexts(id) {
    $('#price'+ (id + 1)).html((cart[id].price * cart[id].montant) + '€');
    $('#montant'+ (id + 1)).html(cart[id].montant);
  }

  function updateCartList() {
    for(var i = 0;i < cart.length; i++) {
      var cartObject = cart[i];
      $('#shoppingCart').append(`
        <tr id="line${cartObject.id}" class="cartlist">
        <td data-label="Réf.">${cartObject.id}</td>
        <td class="product-name" data-label="Produit">${cartObject.product}</td>
        <td id="price${cartObject.id}" data-label="Prix">${cartObject.price * cartObject.montant}€</td>
        <td data-label="Ajouter"><button data-add-on-cart="${cartObject.id}" class="addOne waves-effect waves-light btn btn-floating green">
        <i class="material-icons">add_box</i>
        </button></td>
        <td id="montant${cartObject.id}" data-label="Montant">${cartObject.montant}</td>
        <td data-label="Réduire"><button data-remove-on-cart="${cartObject.id}" class="removeOne waves-effect waves-light btn btn-floating orange">
        <i class="material-icons">indeterminate_check_box</i>
        </button></td>
        <td data-label="Supprimer"><button data-delete-on-cart="${cartObject.id}" class="deleteOne waves-effect waves-light btn btn-floating red">
        <i class="material-icons">delete</i>
        </button></td>
        </tr>
        `
      );
    }
  }
  updateCartList();



  function deleteObjects(id) {
    $('#line'+id).fadeOut().delay(2000).queue(function() { $(this).remove(); });;
  }

  function deleteOnCart(id) {
    delete cart[id];
  }

  for(var prods = 0; prods < products.length; prods++) {
    prod = products[prods];
    $('#productList').append(`
      <a class="addNewProductInCart waves-effect waves-light btn btn-large white dark-blue-text" data-item-name="${prod.product}"><i class="material-icons icon-dark-blue">shopping_cart</i> ${prod.product} à ${prod.price}€</a>
      `);
  }

  $('.addNewProductInCart').on('click', function() {
    var item = this.dataset.itemName;
    addItemOnCart(item, true);
    M.toast({html: 'Produit ajouté au panier!'})
  });


  // End Mehdi's part2

  // Manouel's part




  // End Manouel's part

  // Karl's part




  // End Karl's part

  // Mehdi's part




  // End Mehdi's part

  // Magalie's part




  // End Magalie's part
});
