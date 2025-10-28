/********************* Display Products *************************************/
//variables
const productsDOM = document.querySelector(".displaying_products");

// //getting the products
// class Products {
//     async getProducts() {
//         try {
//             let result = await fetch("js/buyBackProducts.json");
//             let data = await result.json();
//             let products = data.items;
//             products = products.map(item => {
//                 const Name = item.fields.Name;
//                 const ID = item.id;
//                 // const Image = item.fields.Image.fields.file.url;
//                 //const Imagexmlns = item.fields.Image.fields.file.xmlns;
//                 const Imagewidth = item.fields.Image.fields.file.width;
//                 const Imageheight = item.fields.Image.fields.file.height;
//                 const ImageviewBox = item.fields.Image.fields.file.viewBox;
//                 const ImagePathes = item.fields.Image.fields.file.pathes;

//                 return { Name, ID, Imagewidth, Imageheight, ImageviewBox, ImagePathes };
//             });
//             return products;
//         } catch (error) {
//             console.log(err);
//         }
//     }
// }

// // display products
// class UI {
//     displayProducts(products) {
//         //console.log("doaa");
//         //console.log(products);
//         let result = "";
//         products.forEach(product => {
//             let pathResult = "";
//             function displayPathes() {
//                 product.ImagePathes.forEach(ImgPath => {
//                     pathResult += `<path d="${ImgPath.path.d}" fill-rule="evenodd" clip-rule="evenodd"></path>`
//                 });
//                 //console.log(product.ID);
//                 return pathResult;
//             };
//             result += `
//       <div class="col-lg-auto col-md-4 testing col-12 d-flex justify-content-center" onclick="addingSwitch('B1');">
//         <a id="${product.ID}" href="#BuyBackSection" class="buying-device" onclick="sendProId('${product.ID}');">
//             <svg width="${product.Imagewidth}" height="${product.Imageheight}" viewBox="${product.ImageviewBox}" fill="none"
//               xmlns="https://www.w3.org/2000/svg" class="buy-Back-icon">
//               ${displayPathes()}
//             </svg>
//           <h4 class="start-repair_services-text">${product.Name}</h4>
//         </a>
//       </div>
//       `;
//         });
//         productsDOM.innerHTML = result;
//     }
// }

// let PATH = 'js/buyBackProducts.json';
// // Fetch data from products.json and store to local storage
// function loadJSON(PATH) {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 let data = JSON.parse(xhr.responseText);
//                 localStorage.setItem('products', JSON.stringify(data));
//             } else {
//                 window.alert('Something went wrong, fetching!!');
//             }
//         }
//     };
//     xhr.open('GET', PATH, true);
//     xhr.send();
// }

// /*
// //local storage
// class Storage { }
// */

// document.addEventListener("DOMContentLoaded", () => {
//     const ui = new UI();
//     const products = new Products();

//     //get all products
//     products.getProducts().then(products => ui.displayProducts(products));
//     //send all
//     loadJSON(PATH);
// });


//// sending Product ID function 
 const device_type = document.querySelector(".device-models"),
BuyBack_ProdName = document.querySelectorAll(".buyBack_page .product_title"),
BuyBack_stepProdData = document.querySelectorAll(".device_details"),
ProdNameDOM1 = BuyBack_ProdName[1],
stepProdDataDOM1 = BuyBack_stepProdData[0];

// function sendProId(proID) {
//     let modelResult = "";
//     let modConR = "";
//     let data = JSON.parse(localStorage.getItem('products'));
//     for (let i = 0; i < data.items.length; i++) {
//         if (data.items[i].id === proID) {
//             data.items[i].fields.Models.forEach(model => {
//                 modelResult += `
//         <div class="col-lg-auto col-md-4 col-12 d-flex justify-content-center buy-back-items" onclick="addingSwitch('B2');">
//             <a href="#" class="device-type" onclick="sendModId('${data.items[i].id}','${model.Model_id}');">
//                  <img src="${model.imgUrl}" alt="">
//                  <h4 class="start-repair_services-text">${model.Name}</h4>                
//             </a>
//         </div>
//             `
//             });
//             device_type.innerHTML = modelResult;
//             ProdNameDOM1.textContent = stepProdDataDOM1.textContent = data.items[i].fields.Name;
//             //stepProdDataDOM1.textContent = data.item[i].fields.Name;
//         }
//         else {
//             console.log("no");
//         }
//     }
// }
/////// sending model id function to condition
 const item_condition = document.querySelector(".item_condition"),
    ProdNameDOM2 = BuyBack_ProdName[2],
   stepProdDataDOM2 = BuyBack_stepProdData[1];
var colorDiv = `<div class="accordion-item current">
                    <div class="accordion-header " id="faq-head_0">
                        <button class="accordion-button" type="button"
                            data-bs-toggle="collapse" data-bs-target="#faq_0" aria-expanded="true"
                            aria-controls="faq_0">
                            Color
                        </button>
                    </div>
                    <div id="faq_0" class="accordion-collapse" aria-labelledby="faq-head_0"
                        data-bs-parent="#faq-accordion">
                        <div class="accordion-body">
                            <p>Please select the color of your device:</p>
                            <input type=color value="black">
                            <div class="col-lg-auto d-flex buy-back-items"
                                 >
                                 <a class="device_item" style="padding:0rem 1rem;" onclick="addCurrent(0);">
                                 Ok
                                 </a>
                             </div>
                        </div>
                    </div>
                </div>`;
var staticDivs = `<div class="accordion-item">
                        <div class="accordion-header" id="faq-head_7">
                            <button class="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#faq_7" aria-expanded="false"
                                aria-controls="faq_7">
                                Original accessories and box included?
                            </button>
                        </div>
                        <div id="faq_7" class="accordion-collapse collapse" aria-labelledby="faq-head_7"
                            data-bs-parent="#faq-accordion">
                            <div class="accordion-body">
                                <div class="d-flex ">
                                    <div class="d-flex buy-back-items justify-content-center">
                                        <a href="#" class="have_accessories">
                                            Yes
                                        </a>
                                    </div>
                                    <div class="d-flex buy-back-items  justify-content-center mx-2">
                                        <a href="#" class="have_accessories">
                                            No
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
                  <div class="accordion-item">
                        <div class="accordion-header" id="faq-head_8">
                            <button class="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#faq_8" aria-expanded="false"
                                aria-controls="faq_8">
                                The Condition of your device
                            </button>
                        </div>
                        <div id="faq_8" class="accordion-collapse collapse" aria-labelledby="faq-head_8"
                            data-bs-parent="#faq-accordion">
                            <div class="accordion-body">
                  <div class="row">
                  <div class="col-lg-12 col-md-12">
                      <div class="row start-repair_services-wrap d-flex">
                          <div class="col-lg-auto col-md-4 col-12 d-flex justify-content-center">
                              <a class="device-speed processor">
                                  <h4 class="start-repair_services-text">Broken</h4>
                                  <h5>$600.00</h5>
                              </a>
                          </div>
                          <div class="col-lg-auto col-md-4 col-12 d-flex justify-content-center">
                              <a class="device-speed processor">
                                  <h4 class="start-repair_services-text">Damaged</h4>
                                  <h5>$800.00</h5>
                              </a>
                          </div>
                          <div class="col-lg-auto col-md-4 col-12 d-flex justify-content-center">
                              <a class="device-speed processor">
                                  <h4 class="start-repair_services-text">Fair</h4>
                                  <h5>$3,400.00</h5>
                              </a>
                          </div>
                          <div class="col-lg-auto col-md-4 col-12 d-flex justify-content-center">
                              <a class="device-speed processor">
                                  <h4 class="start-repair_services-text">Normal</h4>
                                  <h5>$4,000.00</h5>
                              </a>
                          </div>
                          <div class="col-lg-auto col-md-4 col-12 d-flex justify-content-center">
                              <a class="device-speed processor">
                                  <h4 class="start-repair_services-text">New</h4>
                                  <h5>$4,200.00</h5>
                              </a>
                          </div>
                          <hr class="my-4" />
                          <div class="row d-flex justify-content-between">
                              <div class="col-8">
                                  <ul class="check-box-list verification">
                                      <li>
                                          <label class="checkbox-inline" for="1"><input name="news" id="1"
                                                  type="checkbox">100% Full Functional with no operational
                                              defects.</label>
                                      </li>
                                      <li>
                                          <label class="checkbox-inline" for="2"><input name="news" id="2"
                                                  type="checkbox">Normal wear and tear but no heavy cosmetic
                                              damage.</label>
                                      </li>
                                      <li>
                                          <label class="checkbox-inline" for="4"><input name="news" id="4"
                                                  type="checkbox">Use
                                              keyboard layout.</label>
                                      </li>
                                  </ul>
                              </div>
                              <div class="col-4 my-4 verifyToCheckOut">
                                  <h3>The current value is:</h3>
                                  <h4>$4,000.00</h4>
                              </div>
                          </div>
                          <div class="d-flex justify-content-center">
                              <button
                                  class="btn btn-primary w-50 head-btn wow animate__animated animate__fadeInUp py-3" onclick="addingSwitch('B3');"
                                  id="GetPaid" data-wow-duration="1000ms" data-wow-delay="800ms" type="submit"
                                  value="Submit"><i class="fa fa-angle-right"></i> <i
                                      class="fa fa-angle-right"></i>
                                  &nbsp; Get
                                  Paid</button>
                          </div>
                      </div>
                  </div>
              </div>
              </div>
              </div>
              <div>`;
// function sendModId(prodID, modelID) {
//     let ConResult = "";
//     let data = JSON.parse(localStorage.getItem('products'));
//     for (let i = 0; i < data.items.length; i++) {
//         if (data.items[i].id === prodID) {
//             data.items[i].fields.Models.forEach(model => {
//                 if (model.Model_id === modelID) {
//                     for (let j = 1; j <= model.conditions.length; j++) {
//                         model.conditions.forEach(cond => {
//                             if (cond.id === j) {
//                                 function displayConItems() {
//                                     let R = '';
//                                     cond.items.forEach(item => {
//                                         if (cond.name === "Connectivity") {
//                                             console.log(item);
//                                             R += `<div class="col-lg-auto d-flex buy-back-items  justify-content-center"
//                                                       >
//                                                       <a class="device_item" style="padding:0rem 1rem;" onclick="addCurrent(${cond.id});">
//                                                       <img src="${item}" >
//                                                       </a>
//                                                   </div>`
//                                         } else {
                                            // R += `<div class="col-lg-auto d-flex buy-back-items  justify-content-center"
                                            //           >
                                            //           <a class="device_item" onclick="addCurrent(${cond.id});">
                                            //           ${item}
                                            //           </a>
                                            //       </div>`
//                                         }
//                                     })
//                                     return R;
//                                 };
//                                 ConResult += `
                                //     <div class="accordion-item">
                                // <div class="accordion-header" id="faq-head_${j}">
                                //     <button class="accordion-button collapsed" type="button"
                                //         data-bs-toggle="collapse" data-bs-target="#faq_${j}" aria-expanded="false"
                                //         aria-controls="faq_${j}">
                                //         ${cond.name}
                                //     </button>
                                // </div>
                                // <div id="faq_${j}" class="accordion-collapse collapse" aria-labelledby="faq-head_${j}"
                                //     data-bs-parent="#faq-accordion">
                                //     <div class="accordion-body">
                                //         <div class="row d-flex">
                                //             ${displayConItems()}
                                //         </div>
                                //     </div>
                                // </div>
                                // </div>`

//                             }
//                         })
//                     }
//                     item_condition.innerHTML = colorDiv + ConResult + staticDivs;

//                 }
//                 ProdNameDOM2.textContent = stepProdDataDOM2.textContent = model.Name;

//             });
//             //stepProdDataDOM1.textContent = data.item[i].fields.Name;

//         }
//     }
// }

/////////////////////////////////////////////////////
const buy_back = document.querySelectorAll(".buy-back-section"),
    buyBack_stepTitles = document.querySelectorAll(".buyBack_page .step-title"),
    progress_items = document.querySelectorAll(".progress-item"),
    buyBack_backArrow = document.querySelector(".buyBack_page .arrowBackSteps_img");

// Switch Sections Function
function addingSwitch(par) {
    buy_back.forEach(element => {
        element.classList.remove("active");
    });
    buyBack_stepTitles.forEach(element => {
        element.classList.remove("active");
    });
    progress_items.forEach(element => {
        element.classList.remove("done");
        element.classList.remove("status");
    });
    switch (par) {
        case "B1":
            buy_back[1].classList.add("active");
            buyBack_stepTitles[1].classList.add("active");
            BuyBack_stepProdData[0].classList.add("active");
            buyBack_backArrow.classList.add("active");
            progress_items[0].classList.add("done");
            progress_items[1].classList.add("status");
            document.querySelector(".progress-bar").style.width = "35%";
            //console.log("works");
            break;
        case "B2":
            buy_back[2].classList.add("active");
            buyBack_stepTitles[2].classList.add("active");
            BuyBack_stepProdData[1].classList.add("active");
            buyBack_backArrow.classList.add("active");
            progress_items[0].classList.add("done");
            progress_items[1].classList.add("done");
            progress_items[2].classList.add("status");
            document.querySelector(".progress-bar").style.width = "65%";
            //console.log("works2");
            break;
        case "B3":
            buy_back[3].classList.add("active");
            buyBack_stepTitles[3].classList.add("active");
            BuyBack_stepProdData[2].classList.add("active");
            buyBack_backArrow.classList.add("active");
            progress_items[0].classList.add("done");
            progress_items[1].classList.add("done");
            progress_items[2].classList.add("done");
            progress_items[3].classList.add("status");
            document.querySelector(".progress-bar").style.width = "100%";
            break;
    }
}

buyBack_backArrow.addEventListener("click", () => {

    for (let i = 0; i < buy_back.length; i++) {
        if (buy_back[i].classList.contains("active"))
            switch (i) {
                case 1:
                    buy_back[1].classList.remove("active");
                    buy_back[0].classList.add("active");
                    buyBack_stepTitles[1].classList.remove("active");
                    buyBack_stepTitles[0].classList.add("active");
                    BuyBack_stepProdData[0].classList.remove("active");
                    progress_items[0].classList.remove("done");
                    progress_items[0].classList.add("status");
                    progress_items[1].classList.remove("status");
                    document.querySelector(".progress-bar").style.width = "0%";
                    buyBack_backArrow.classList.remove("active");
                    break;
                case 2:
                    buy_back[2].classList.remove("active");
                    buy_back[1].classList.add("active");
                    buyBack_stepTitles[2].classList.remove("active");
                    buyBack_stepTitles[1].classList.add("active");
                    BuyBack_stepProdData[1].classList.remove("active");
                    progress_items[1].classList.remove("done");
                    progress_items[1].classList.add("status");
                    progress_items[2].classList.remove("status");
                    document.querySelector(".progress-bar").style.width = "35%";
                    break;
                case 3:
                    buy_back[3].classList.remove("active");
                    buy_back[2].classList.add("active");
                    document.querySelector(".floatCart").classList.add("active");
                    buyBack_stepTitles[3].classList.remove("active");
                    buyBack_stepTitles[2].classList.add("active");
                    BuyBack_stepProdData[2].classList.remove("active");
                    progress_items[1].classList.add("done");
                    progress_items[1].classList.remove("status");
                    progress_items[2].classList.add("status");
                    progress_items[2].classList.remove("done");
                    document.querySelector(".progress-bar").style.width = "65%";
                    break;
            }
    }
});
const Curritem_condition = document.querySelectorAll(".buy-back-section .product_conditions .accordion-item");

function addCurrent(par){
    switch(par){
      case 0:
      Curritem_condition[0].classList.remove("current");
      Curritem_condition[1].classList.add("current");
      break;
      case 1:
        Curritem_condition[1].classList.remove("current");
        Curritem_condition[2].classList.add("current");
        break;
      case 2:
      Curritem_condition[2].classList.remove("current");
      Curritem_condition[3].classList.add("current");
      break;  
      case 3:
        Curritem_condition[3].classList.remove("current");
        Curritem_condition[4].classList.add("current");
        break;
        case 4:
        Curritem_condition[4].classList.remove("current");
        Curritem_condition[5].classList.add("current");
        break;
        case 5:
        Curritem_condition[5].classList.remove("current");
        Curritem_condition[6].classList.add("current");
        break;
        case 6:
        Curritem_condition[6].classList.remove("current");
        Curritem_condition[7].classList.add("current");
        break;
        case 7:
        Curritem_condition[7].classList.remove("current");
        Curritem_condition[8].classList.add("current");
        break;
    }
}
///**** Submit added device ****///
$("#GetPaid").on('click', function () {
    $('#popup-AddedDevice-modal').modal('show');
})
$("#continueToPayment").on('click', function () {
    $('#popup-AddedDevice-modal').modal('hide');
})
$("#addAnotherDevice").on('click', function () {
    $('#popup-AddedDevice-modal').modal('hide');
})


$('.viewMore_buyingDeviceDetails').click(function () {
    $('.buying-device').removeClass('active');
    $('.buy-back-brands-section').addClass('active');
    $(this).addClass('active');
});
$('.viewMore_buyingBrandDevice').click(function () {
    $('.buy-back-brand-items .start-repair_brand-item').removeClass('active');
    $('.buy-back-tools-section').addClass('active');
    $(this).addClass('active');
});

$('.buying-device-tool').click(function () {
    $('.buying-device-tool').removeClass('active');
    $(this).addClass('active');
});
$('.device-speed').click(function () {
    $('.device-speed').removeClass('active');
    $(this).addClass('active');
});

$('.device_item').click(function () {
    $('.device_item').removeClass('clicked');
    $(this).addClass('clicked');
});
$('.have_accessories').click(function () {
    $('.have_accessories').removeClass('clicked');
    $(this).addClass('clicked');
});
////////////////////////////////////////////////////
