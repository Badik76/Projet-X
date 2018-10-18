$(function() {
  // Mehdi's part2
  $('.tap-target').tapTarget('open');
  $('.modal').modal();
  var products = [
    {product: 'AliveCMS', price: 500, montant : 1},
    {product: 'WordPress', price:0, montant : 1},
    {product: 'PHPBB', price: 0, montant : 1},
    {product: 'CMS', price: 0, montant : 1}
  ];
  var cart = [];
  function addItemOnCart(productName) {
    var itemOnList = false;
    var itemOnCart = false;
    for(var i = 0; i < products.length; i++) {
      if(productName === products[i].product) {
        itemOnList = true;
        var productItem = i;
      }
    }
    for(var i = 0; i < cart.length; i++) {
      if(products[productItem].product === cart[i].product) {
        itemOnCart = true;
        cart[i].montant += 1;
      }
    }
    if(itemOnList) {
      if(!itemOnCart) {
        itemObject = products[productItem];
        cart.push(itemObject);
      }
    } else {
      swal('Oops!', 'Erreur interne...', 'error');
    }
  }
  function deleteOnCart(id) {
    console.log(cart);
    cart.splice(id, 1);
    console.log(cart);
  }
  $('.addOnCart').on('click', function() {
    var itemName = this.dataset.itemName;
    addItemOnCart(itemName);
  });
  addItemOnCart('AliveCMS');
  addItemOnCart('PHPBB');

  //deleteOnCart(1)
  $('.add').on('click', function() {
    var addOn = this.dataset.addOnCart;
    var numberRegex = /^[\d]+$/;
    if(numberRegex.test(addOn)) {
      addOn = parseInt(addOn);
      if(addOn >= 0 && addOn <= cart.length) {
        cart[addOn];
      } else {
        swal('Oops!', 'Erreur interne...', 'error');
      }
    } else {
      swal('Oops!', 'Erreur interne...', 'error');
    }
  });
  $('.remove').on('click', function() {

  });
  for(var i = 0;i < cart.length; i++) {
    var cartObject = cart[i];
    $('#shoppingCart').append(`
      <tr>
        <td data-label="Réf.">${i}</td>
        <td class="product-name" data-label="Produit">${cartObject.product}</td>
        <td data-label="Prix">${cartObject.price * cartObject.montant}</td>
        <td data-label="Ajouter"><button id="add" data-add-on-cart="${i}" class="waves-effect waves-light btn modal-trigger btn-floating green">
          <i class="material-icons">add_box</i>
        </button></td>
        <td data-label="Montant">${cartObject.montant}</td>
        <td data-label="Réduire"><button id="remove" data-remove-on-cart="${i}" class="waves-effect waves-light btn modal-trigger btn-floating orange">
          <i class="material-icons">indeterminate_check_box</i>
        </button></td>
        <td data-label="Supprimer"><button id="delete" data-delete-on-cart="${i}" class="waves-effect waves-light btn modal-trigger btn-floating red">
          <i class="material-icons">delete</i>
        </button></td>
      </tr>
      `
    );
  }
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
