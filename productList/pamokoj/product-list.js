console.log(data.products);

const calculateWidth = (rating, width, max) => {
  return (rating * width) / max;
};

const result = data.products.map((value) => {
  const discountPrice = (
    value.price -
    (value.price / 100) * value.discountPercentage
  ).toFixed(2);

  return `<div class="row">
                <div class="col-auto image">
                    <img src="${value.thumbnail}">
                </div>
                <div class="col info">
                    <h3>${value.title}</h3>
                    <div class="rating">
                        <div class="gray-stars">
                            ${`<i class="bi bi-star-fill"></i>`.repeat(5)}
                        </div>
                        <div class="yellow-stars" style="width: ${calculateWidth(
                          value.rating,
                          80,
                          5
                        )}px">
                            <div class="stars-container">
                                ${`<i class="bi bi-star-fill"></i>`.repeat(5)}
                            </div>
                        </div>
                    </div>
                    <div class="description pt-5">${value.description}</div>
                </div>
                <div class="col-auto checkout">
                    <div class="price mb-3">
                        ${
                          value.discountPercentage === 0
                            ? `
                            <span class="original-price">&dollar;${value.price}</span>
                        `
                            : `
                            <span class="discount-price">&dollar;${discountPrice}</span>
                            <span class="regular-price">&dollar;${value.price}</span>
                        `
                        }
                    </div>
                    <a class="btn btn-warning" id="${
                      value.id
                    }" onclick=goToCart(event)>Add to Cart</a>
                </div>
            </div>`;
});

document.querySelector('.result').innerHTML = result.join('');

const cartArray = [];
function goToCart(e) {
  const productID = e.target.getAttribute('id');
  const productInfo = data.products[productID - 1];
  console.log(data.products[productID - 1]);
  cartArray.push({
    id: productInfo.id,
    title: productInfo.title,
    categoty: productInfo.categoty,
    thumbnail: productInfo.thumbnail,
    price: productInfo.price,
  })`<div class="row">
  <div class="col-auto image">
    <img
      src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      alt=""
    />
  </div>
  <div class="col">
    <div>Shirt</div>
    <div>Cotton T-shirt</div>
  </div>
  <div class="col-auto">
    <a href="#"><i class="bi bi-plus"></i></a>
    <input type="number" value="1" />
    <a href="#"><i class="bi bi-dash"></i></a>
  </div>
  <div class="col-auto">
    <div>$<span class="cart-price">44.00</span></div>
  </div>
  <div class="col-auto">
    <button onsubmit="removeProduct()">x</button>
  </div>`;
}

// per prekiu arėju -> tikrinu ar sutampa su e.target id? quoantity+1: push
