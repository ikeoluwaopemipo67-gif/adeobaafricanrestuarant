
const DATA=[{"category": "Chef Special", "name": "Amala (House Signature)", "price": 25, "description": "Smooth amala served with a rich, deeply seasoned African stew and your choice of meat.", "image": "https://loremflickr.com/900/650/amala%20african%20food,food/all"}, {"category": "Chef Special", "name": "Ayamase Stew (Ofada Style)", "price": 25, "description": "Aromatic green pepper stew prepared in a traditional Nigerian style and served with a choice of protein.", "image": "https://loremflickr.com/900/650/ayamase%20ofada%20stew,food/all"}, {"category": "Chef Special", "name": "Pepper Snail (House Special)", "price": 30, "description": "Tender snails cooked in a bold pepper sauce with fresh aromatics.", "image": "https://loremflickr.com/900/650/pepper%20snail%20african%20food,food/all"}, {"category": "Chef Special", "name": "Ayamase Stew", "price": 25, "description": "Aromatic green pepper stew prepared with traditional seasonings.", "image": "https://loremflickr.com/900/650/ayamase%20stew,food/all"}, {"category": "Chef Special", "name": "Ewa Agoyin", "price": 25, "description": "Soft beans prepared in the classic West African style with a spicy pepper sauce.", "image": "https://loremflickr.com/900/650/ewa%20agoyin%20beans,food/all"}, {"category": "Chef Special", "name": "Asaro (Yam Porridge)", "price": 25, "description": "Slow-cooked yam porridge with a rich pepper and tomato base.", "image": "https://loremflickr.com/900/650/yam%20porridge%20asaro,food/all"}, {"category": "Chef Special", "name": "Goat Meat Pepper Soup", "price": 20, "description": "Spicy goat meat in a thin broth simmered with fresh herbs and Nigerian spices.", "image": "https://loremflickr.com/900/650/goat%20meat%20pepper%20soup,food/all"}, {"category": "Main African Dishes", "name": "Jollof Rice with Choice of Meat", "price": 25, "description": "Fragrant Nigerian jollof rice with your choice of chicken, beef, goat or fish.", "image": "https://loremflickr.com/900/650/nigerian%20jollof%20rice%20chicken,food/all"}, {"category": "Main African Dishes", "name": "Fish and Plantain", "price": 25, "description": "Seasoned grilled fish paired with sweet fried plantains and pepper sauce.", "image": "https://loremflickr.com/900/650/grilled%20fish%20plantain%20african,food/all"}, {"category": "Main African Dishes", "name": "Suya Rasta Pasta", "price": 30, "description": "Penne tossed with seasoned suya-style meat and a creamy, flavorful sauce.", "image": "https://loremflickr.com/900/650/suya%20pasta,food/all"}, {"category": "Main African Dishes", "name": "Jollof Rice with Whole Tilapia", "price": 30, "description": "Jollof rice topped with seasoned whole tilapia.", "image": "https://loremflickr.com/900/650/jollof%20rice%20tilapia,food/all"}, {"category": "Main African Dishes", "name": "Jollof Rice with Whole Red Snapper", "price": 35, "description": "Jollof rice topped with seasoned whole red snapper.", "image": "https://loremflickr.com/900/650/jollof%20rice%20red%20snapper,food/all"}, {"category": "Nigerian Stews / Soup", "name": "Efo Riro", "price": 25, "description": "Nigerian spinach stew cooked in a rich pepper blend and served with your choice of beef or croaker.", "image": "https://loremflickr.com/900/650/efo%20riro%20soup,food/all"}, {"category": "Nigerian Stews / Soup", "name": "Ila (Okra)", "price": 25, "description": "Chopped okra cooked and flavored with other ingredients, served with beef or croaker.", "image": "https://loremflickr.com/900/650/okra%20soup%20african,food/all"}, {"category": "Nigerian Stews / Soup", "name": "Efo Elegusi", "price": 25, "description": "Ground melon seeds mixed and cooked with spinach and aromatic ingredients for a rich, elegant stew.", "image": "https://loremflickr.com/900/650/egusi%20spinach%20soup,food/all"}, {"category": "Nigerian Stews / Soup", "name": "Ogbono", "price": 25, "description": "Draw soup made from African mango seeds, cooked and flavored for a hearty taste.", "image": "https://loremflickr.com/900/650/ogbono%20soup,food/all"}, {"category": "Nigerian Stews / Soup", "name": "Ewedu and Gbegiri", "price": 30, "description": "Jute leaves and bean soup served with assorted meat. Sundays only.", "image": "https://loremflickr.com/900/650/ewedu%20gbegiri%20soup,food/all"}, {"category": "Liberian Specials", "name": "Cassava Leaf", "price": 25, "description": "Liberian cassava leaf stew with peanut butter, palm oil, smoked chicken and smoked turkey neck. Served with white rice and plantains.", "image": "https://loremflickr.com/900/650/liberian%20cassava%20leaf,food/all"}, {"category": "Liberian Specials", "name": "Potato Greens", "price": 25, "description": "Liberian potato greens stew with smoked chicken and smoked turkey neck. Served with white rice and plantains.", "image": "https://loremflickr.com/900/650/liberian%20potato%20greens,food/all"}, {"category": "Liberian Specials", "name": "Peanut Butter Soup", "price": 25, "description": "Peanut butter blend with peppers and onions, smoked chicken and smoked turkey neck. Served with white rice and plantains.", "image": "https://loremflickr.com/900/650/peanut%20butter%20soup%20african,food/all"}, {"category": "Liberian Specials", "name": "Attieke with Croaker or Tilapia", "price": 30, "description": "Steamed cassava couscous with choice fish, cucumber salad and plantains.", "image": "https://loremflickr.com/900/650/attieke%20fish,food/all"}, {"category": "Liberian Specials", "name": "Attieke with Goat", "price": 35, "description": "Steamed cassava couscous with goat, cucumber salad and plantains.", "image": "https://loremflickr.com/900/650/attieke%20goat,food/all"}, {"category": "Grilled Dishes", "name": "Grilled Chicken", "price": 20, "description": "Grilled marinated chicken served over basmati rice with salad and homemade sauce.", "image": "https://loremflickr.com/900/650/grilled%20chicken%20rice,food/all"}, {"category": "Grilled Dishes", "name": "Grilled Chicken and Shrimp", "price": 30, "description": "Grilled marinated chicken and shrimp served over basmati rice with salad and homemade sauce.", "image": "https://loremflickr.com/900/650/chicken%20shrimp%20rice,food/all"}, {"category": "Grilled Dishes", "name": "Grilled Beef", "price": 25, "description": "Grilled marinated beef served over basmati rice with salad and homemade sauce.", "image": "https://loremflickr.com/900/650/grilled%20beef%20rice,food/all"}, {"category": "Grilled Dishes", "name": "Grilled Boneless Lamb", "price": 25, "description": "Grilled marinated lamb served over basmati rice with salad and homemade sauce.", "image": "https://loremflickr.com/900/650/grilled%20lamb%20rice,food/all"}, {"category": "Grilled Dishes", "name": "Grilled Lamb Chops", "price": 35, "description": "Grilled marinated lamb chops served with jollof rice and a choice of one side.", "image": "https://loremflickr.com/900/650/lamb%20chops%20rice,food/all"}, {"category": "Rice Dishes", "name": "Oxtails with Jollof Rice", "price": 35, "description": "Tender oxtails simmered in special seasoning and a hearty sauce, served with jollof rice and a choice of one side.", "image": "https://loremflickr.com/900/650/oxtail%20jollof%20rice,food/all"}, {"category": "Rice Dishes", "name": "Peppered Goat with Jollof Rice", "price": 30, "description": "Goat simmered in special seasoning and hearty sauce, served with jollof rice and plantains.", "image": "https://loremflickr.com/900/650/peppered%20goat%20jollof,food/all"}, {"category": "Rice Dishes", "name": "Quarter Dark Chicken with Jollof Rice", "price": 25, "description": "Chopped quarter-leg chicken marinated in seasonings and served with jollof rice and plantains.", "image": "https://loremflickr.com/900/650/chicken%20jollof%20plantain,food/all"}, {"category": "Rice Dishes", "name": "Salmon with Jollof Rice", "price": 30, "description": "Baked then saut\u00e9ed salmon served with jollof rice and a choice of one side.", "image": "https://loremflickr.com/900/650/salmon%20jollof%20rice,food/all"}, {"category": "Rice Dishes", "name": "Salmon and Shrimp with Jollof Rice", "price": 35, "description": "Baked then saut\u00e9ed salmon and shrimp served with jollof rice and a choice of one side.", "image": "https://loremflickr.com/900/650/salmon%20shrimp%20jollof,food/all"}, {"category": "Suya", "name": "Beef Suya", "price": 15, "description": "Thinly sliced beef marinated in Nigerian spices, grilled and served with onions, tomatoes and cucumber.", "image": "https://loremflickr.com/900/650/beef%20suya,food/all"}, {"category": "Suya", "name": "Chicken Suya", "price": 15, "description": "Grilled chicken marinated in Nigerian spices, served with onions, tomatoes and cucumber.", "image": "https://loremflickr.com/900/650/chicken%20suya,food/all"}, {"category": "Suya", "name": "Tilapia Fish Suya", "price": 20, "description": "Whole tilapia marinated and grilled in Nigerian seasonings, served with onions, tomatoes and cucumbers.", "image": "https://loremflickr.com/900/650/tilapia%20suya,food/all"}, {"category": "Suya", "name": "Lamb Suya", "price": 20, "description": "Thinly sliced slow-grilled lamb marinated in Nigerian seasonings, topped with onions, tomatoes and cucumbers.", "image": "https://loremflickr.com/900/650/lamb%20suya,food/all"}, {"category": "Suya", "name": "Goat Suya", "price": 20, "description": "Cubed goat meat marinated in Nigerian seasonings, grilled and served with onions, tomatoes and cucumbers.", "image": "https://loremflickr.com/900/650/goat%20suya,food/all"}, {"category": "Suya", "name": "Porridge", "price": 20, "description": "Traditional Nigerian porridge served with your choice of meat.", "image": "https://loremflickr.com/900/650/nigerian%20porridge,food/all"}, {"category": "Small Chops", "name": "Moin Moin", "price": 5, "description": "Steamed black-eyed pea pudding blended with onions, peppers and other ingredients.", "image": "https://loremflickr.com/900/650/moin%20moin,food/all"}, {"category": "Small Chops", "name": "Chicken Wings (8)", "price": 15, "description": "Choose from BBQ, Jerk, BBQ Jerk, Thai Chili, Garlic Parmesan, Lemon Pepper & Garlic, Buffalo or Suya Spice.", "image": "https://loremflickr.com/900/650/chicken%20wings,food/all"}, {"category": "Small Chops", "name": "Turkey Wings (3)", "price": 20, "description": "Fried turkey wings served in tomato sauce with habanero and native seasonings.", "image": "https://loremflickr.com/900/650/turkey%20wings%20tomato%20sauce,food/all"}, {"category": "Small Chops", "name": "Pomo (Cow Skin)", "price": 20, "description": "Soft, spicy peppered cow skin.", "image": "https://loremflickr.com/900/650/pomo%20cow%20skin,food/all"}, {"category": "Small Chops", "name": "Gizzdodo", "price": 15, "description": "Saut\u00e9ed gizzard and plantains infused with herbs and peppers.", "image": "https://loremflickr.com/900/650/gizzdodo,food/all"}, {"category": "Small Chops", "name": "Asun (Peppered Goat)", "price": 20, "description": "Spicy roasted goat chopped into bite-sized pieces.", "image": "https://loremflickr.com/900/650/asun%20peppered%20goat,food/all"}, {"category": "Small Chops", "name": "Dun Dun", "price": 15, "description": "Fried yam sticks with homemade tomato-based dipping sauce.", "image": "https://loremflickr.com/900/650/dun%20dun%20fried%20yam,food/all"}, {"category": "Small Chops", "name": "Pepper Snail", "price": 30, "description": "Spicy snails cooked in pepper sauce.", "image": "https://loremflickr.com/900/650/pepper%20snail,food/all"}, {"category": "Shawarma", "name": "Beef Shawarma", "price": 20, "description": "Marinated beef over fresh lettuce, tomatoes, onions and cucumbers in a wrap with homemade shawarma sauce.", "image": "https://loremflickr.com/900/650/beef%20shawarma,food/all"}, {"category": "Shawarma", "name": "Chicken Shawarma", "price": 15, "description": "Marinated chicken breast over fresh lettuce, tomatoes, onions and cucumbers in a wrap with homemade shawarma sauce.", "image": "https://loremflickr.com/900/650/chicken%20shawarma,food/all"}, {"category": "Shawarma", "name": "Lamb Shawarma", "price": 20, "description": "Marinated boneless lamb over fresh vegetables in a wrap with homemade shawarma sauce.", "image": "https://loremflickr.com/900/650/lamb%20shawarma,food/all"}, {"category": "Shawarma", "name": "Fish Shawarma", "price": 20, "description": "Grilled tilapia in a wrap with fresh vegetables and homemade shawarma sauce.", "image": "https://loremflickr.com/900/650/fish%20shawarma,food/all"}, {"category": "Sides", "name": "Candied Yams", "price": 8, "description": "Sweet, tender candied yams.", "image": "https://loremflickr.com/900/650/candied%20yams,food/all"}, {"category": "Sides", "name": "Jollof Rice", "price": 10, "description": "Fragrant Nigerian-style jollof rice.", "image": "https://loremflickr.com/900/650/jollof%20rice,food/all"}, {"category": "Sides", "name": "Basmati or White Rice", "price": 8, "description": "Steamed basmati or white rice.", "image": "https://loremflickr.com/900/650/basmati%20white%20rice,food/all"}, {"category": "Sides", "name": "Fried Plantains", "price": 5, "description": "Golden fried ripe plantains.", "image": "https://loremflickr.com/900/650/fried%20plantains,food/all"}, {"category": "Sides", "name": "Seasoned Fries", "price": 5, "description": "Crispy fries seasoned for extra flavor.", "image": "https://loremflickr.com/900/650/seasoned%20fries,food/all"}, {"category": "Sides", "name": "Pepper Sauce", "price": 5, "description": "House pepper sauce.", "image": "https://loremflickr.com/900/650/pepper%20sauce,food/all"}, {"category": "Sides", "name": "Fufu or Swallow (Okele)", "price": 5, "description": "Choice of Iyan (pounded yam), Eba or Amala.", "image": "https://loremflickr.com/900/650/pounded%20yam%20eba%20fufu,food/all"}, {"category": "Sides", "name": "Eba", "price": 5, "description": "Cassava-based swallow.", "image": "https://loremflickr.com/900/650/eba%20african%20food,food/all"}, {"category": "Sides", "name": "Iyan", "price": 5, "description": "Traditional pounded yam.", "image": "https://loremflickr.com/900/650/pounded%20yam,food/all"}, {"category": "Drinks", "name": "Coke, Pepsi, Ginger Ale, Sprite, Vimto", "price": 3, "description": "Choice of bottled or canned soft drink.", "image": "https://loremflickr.com/900/650/soft%20drinks,food/all"}, {"category": "Drinks", "name": "Coconut Water, Malta, Pineapple Ginger", "price": 5, "description": "Refreshing drink selection.", "image": "https://loremflickr.com/900/650/coconut%20water%20pineapple%20ginger,food/all"}, {"category": "Drinks", "name": "Sorrel / Zobo", "price": 5, "description": "Chilled hibiscus drink.", "image": "https://loremflickr.com/900/650/zobo%20drink,food/all"}, {"category": "Drinks", "name": "Water", "price": 2, "description": "Bottled water.", "image": "https://loremflickr.com/900/650/bottled%20water,food/all"}, {"category": "Pastries", "name": "Meatpie", "price": 7, "description": "Savory pastry filled with seasoned meat.", "image": "https://loremflickr.com/900/650/meat%20pie,food/all"}, {"category": "Pastries", "name": "Peanut", "price": 12, "description": "Peanut pastry/snack.", "image": "https://loremflickr.com/900/650/peanut%20pastry,food/all"}, {"category": "Pastries", "name": "House Bread", "price": 7.5, "description": "Fresh house bread.", "image": "https://loremflickr.com/900/650/fresh%20bread,food/all"}, {"category": "Pastries", "name": "Puff", "price": 10, "description": "Golden fried puff pastry.", "image": "https://loremflickr.com/900/650/puff%20puff%20african,food/all"}];
const cats=[...new Set(DATA.map(x=>x.category))];
const CATEGORY_BANNER_IMAGES={
  'Main African Dishes':'assets/Jollof rice jd.jpeg',
  'Chef Special':'assets/Asaro 11.png',
  'Nigerian Stews / Soup':'assets/Ayamatese stew.jpeg',
  'Liberian Specials':'assets/Attieke with Goat.png',
  'Grilled Dishes':'assets/grilled chicken.png',
  'Rice Dishes':'assets/Jollof rice jd.jpeg',
  'Suya':'assets/beef suya.png',
  'Small Chops':'assets/chicken wings 8.png',
  'Shawarma':'assets/beef shawarma.png',
  'Sides':'assets/seasoned fries.png',
  'Drinks':'assets/coke, Pepsi, ginger ale,sprite,Vimto.png',
  'Pastries':'assets/meat pie.png'
};
const DEFAULT_BANNER_IMAGE='assets/fish-menu.jpg';
const filters=document.getElementById('filters');
if(filters){filters.innerHTML=cats.map((c,i)=>`<button class="filter ${i===0?'active':''}" data-cat="${c}">${c}</button>`).join('');}
let cartItems=[];let active=cats[0];
const cards=[...document.querySelectorAll('.food-card')];
function updateCategoryBanner(){
  const banner=document.getElementById('categoryBanner');
  const img=document.getElementById('categoryBannerImg');
  const label=document.getElementById('categoryBannerLabel');
  if(!banner||!img)return;
  if(!active||active==='All'){banner.style.display='none';return;}
  img.src=CATEGORY_BANNER_IMAGES[active]||DEFAULT_BANNER_IMAGE;
  img.alt=active;
  if(label)label.textContent=active;
  banner.style.display='flex';
}
function renderFilter(){
  const q=(document.getElementById('search').value||'').toLowerCase();
  const emptyMsg=document.getElementById('foodGridEmpty');
  if(!active&&!q){
    cards.forEach(card=>card.style.display='none');
    if(emptyMsg)emptyMsg.style.display='block';
    return;
  }
  if(emptyMsg)emptyMsg.style.display='none';
  cards.forEach(card=>{const okCat=!active||active==='All'||card.dataset.category===active;const okQ=card.dataset.name.includes(q);card.style.display=okCat&&okQ?'flex':'none';});
}
if(filters)filters.addEventListener('click',e=>{if(!e.target.matches('.filter'))return;active=e.target.dataset.cat;document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));e.target.classList.add('active');renderFilter();updateCategoryBanner()});
const searchEl=document.getElementById('search'); if(searchEl)searchEl.addEventListener('input',renderFilter);
if(cards.length){renderFilter();updateCategoryBanner();}
function add(name,price){const x=cartItems.find(i=>i.name===name);if(x)x.qty++;else cartItems.push({name,price:+price,qty:1});renderCart();openCart()}
function renderCart(){document.getElementById('cartCount').textContent=cartItems.reduce((s,i)=>s+i.qty,0);document.getElementById('cartList').innerHTML=cartItems.length?cartItems.map((i,n)=>`<div class="cart-row"><div><strong>${i.name}</strong><br><small>$${i.price.toFixed(2)} × ${i.qty}</small></div><div class="qty"><button onclick="changeQty(${n},-1)">−</button> <b>${i.qty}</b> <button onclick="changeQty(${n},1)">+</button></div></div>`).join(''):'<p class="muted">Your order is empty.</p>';document.getElementById('cartTotal').textContent='$'+cartItems.reduce((s,i)=>s+i.price*i.qty,0).toFixed(2)}
window.changeQty=(n,d)=>{cartItems[n].qty+=d;if(cartItems[n].qty<=0)cartItems.splice(n,1);renderCart()};
function openCart(){document.getElementById('cart').classList.add('open');document.getElementById('backdrop').classList.add('show')}function closeCart(){document.getElementById('cart').classList.remove('open');document.getElementById('backdrop').classList.remove('show')}
document.addEventListener('click',e=>{if(e.target.matches('.add-btn'))add(e.target.dataset.name,e.target.dataset.price);});['openCart','heroOrder','menuCart','footerOrder'].forEach(id=>{const el=document.getElementById(id);if(el)el.onclick=openCart});['closeCart','backdrop'].forEach(id=>{const el=document.getElementById(id);if(el)el.onclick=closeCart});
const checkout=document.getElementById('checkout');if(checkout)checkout.onclick=()=>{if(!cartItems.length)return alert('Please add an item first.');closeCart();document.getElementById('modal').classList.add('show')};const modalClose=document.getElementById('modalClose');if(modalClose)modalClose.onclick=()=>document.getElementById('modal').classList.remove('show');
/* ---- EmailJS order notifications ---- */
const EMAILJS_PUBLIC_KEY='YOUR_EMAILJS_PUBLIC_KEY';
const EMAILJS_SERVICE_ID='YOUR_EMAILJS_SERVICE_ID';
const EMAILJS_TEMPLATE_ID='YOUR_EMAILJS_TEMPLATE_ID';
const EMAILJS_RECEIPT_TEMPLATE_ID='YOUR_EMAILJS_RECEIPT_TEMPLATE_ID';
if(typeof emailjs!=='undefined')emailjs.init({publicKey:EMAILJS_PUBLIC_KEY});
function notifyOrder(params){
  if(typeof emailjs==='undefined')return;
  emailjs.send(EMAILJS_SERVICE_ID,EMAILJS_TEMPLATE_ID,params)
    .catch(err=>console.error('EmailJS notification failed:',err));
}
function sendReceipt(params){
  if(typeof emailjs==='undefined')return;
  emailjs.send(EMAILJS_SERVICE_ID,EMAILJS_RECEIPT_TEMPLATE_ID,params)
    .catch(err=>console.error('EmailJS receipt failed:',err));
}
function itemsSummary(){
  return cartItems.map(i=>`${i.qty} x ${i.name} ($${(i.price*i.qty).toFixed(2)})`).join('\n');
}

const checkoutForm=document.getElementById('checkoutForm');if(checkoutForm)checkoutForm.addEventListener('submit',e=>{e.preventDefault();});

/* ---- PayPal online payment (card or PayPal) ---- */
(function(){
  const paypalSection=document.getElementById('paypalSection');
  const paypalHint=document.getElementById('paypalHint');
  const paypalContainer=document.getElementById('paypal-button-container');
  const deliveryFields=document.getElementById('deliveryFields');
  const dateLabel=document.getElementById('dateLabel');
  const timeLabel=document.getElementById('timeLabel');
  if(!checkoutForm||!paypalSection)return;
  let paypalRendered=false;
  const DELIVERY_FEE=0; // flat delivery fee in USD — change this number whenever you decide on one

  function fulfillment(){
    const r=checkoutForm.querySelector('input[name="fulfillment"]:checked');
    return r?r.value:'pickup';
  }

  function updateFulfillmentUI(){
    const isDelivery=fulfillment()==='delivery';
    deliveryFields.style.display=isDelivery?'block':'none';
    checkoutForm.address.required=isDelivery;
    checkoutForm.city.required=isDelivery;
    checkoutForm.zip.required=isDelivery;
    dateLabel.firstChild.textContent=isDelivery?'Delivery date':'Pickup date';
    timeLabel.firstChild.textContent=isDelivery?'Delivery time':'Pickup time';
    checkPaypalReady();
  }

  function orderFieldsValid(){
    const base=checkoutForm.name.value.trim()&&checkoutForm.phone.value.trim()&&checkoutForm.email.value.trim()&&checkoutForm.date.value&&checkoutForm.time.value;
    if(!base)return false;
    if(fulfillment()==='delivery'){
      return checkoutForm.address.value.trim()&&checkoutForm.city.value.trim()&&checkoutForm.zip.value.trim();
    }
    return true;
  }

  function orderTotal(){
    const subtotal=cartItems.reduce((s,i)=>s+i.price*i.qty,0);
    return subtotal+(fulfillment()==='delivery'?DELIVERY_FEE:0);
  }

  function checkPaypalReady(){
    if(!orderFieldsValid()){
      paypalHint.style.display='block';
      paypalHint.textContent=fulfillment()==='delivery'
        ?"Fill in your name, phone, email, delivery address, date & time above to continue."
        :"Fill in your name, phone, date & time above to continue.";
      paypalContainer.style.display='none';
      return;
    }
    if(typeof paypal==='undefined'){
      paypalHint.style.display='block';
      paypalHint.textContent='Online payment isn\'t available right now — please try again shortly or call us to order.';
      paypalContainer.style.display='none';
      return;
    }
    paypalHint.style.display='none';
    paypalContainer.style.display='block';
    renderPaypalButtons();
  }

  function renderPaypalButtons(){
    if(paypalRendered||typeof paypal==='undefined')return;
    paypalRendered=true;
    paypal.Buttons({
      style:{layout:'vertical',color:'gold',shape:'pill',label:'pay'},
      createOrder:(data,actions)=>{
        const total=orderTotal().toFixed(2);
        return actions.order.create({purchase_units:[{amount:{value:total,currency_code:'USD'}}]});
      },
      onApprove:(data,actions)=>actions.order.capture().then(details=>{
        const fd=new FormData(checkoutForm);
        const isDelivery=fulfillment()==='delivery';
        const orderNo='AD-'+Math.random().toString(36).slice(2,8).toUpperCase();
        const paid=(details.purchase_units&&details.purchase_units[0]&&details.purchase_units[0].payments&&details.purchase_units[0].payments.captures&&details.purchase_units[0].payments.captures[0])?details.purchase_units[0].payments.captures[0].amount.value:orderTotal().toFixed(2);
        const addressLine=isDelivery?`${fd.get('address')}${fd.get('apt')?', '+fd.get('apt'):''}, ${fd.get('city')} ${fd.get('zip')}`:'—';
        const fulfillmentLabel=isDelivery?'Delivery':'Pickup';
        document.getElementById('success').innerHTML=`<div class="success"><strong>Order ${orderNo} received — payment confirmed ✓</strong><br>${fulfillmentLabel} for <b>${fd.get('name')}</b> on <b>${fd.get('date')}</b> at <b>${fd.get('time')}</b>.${isDelivery?`<br>Deliver to: <b>${addressLine}</b>`:''}<br><br>Total paid: <b>$${paid}</b><br>PayPal transaction ID: <b>${details.id}</b><br><br>A receipt has been sent to <b>${fd.get('email')}</b>.</div>`;
        const emailParams={order_no:orderNo,customer_name:fd.get('name'),customer_email:fd.get('email'),phone:fd.get('phone'),date:fd.get('date'),time:fd.get('time'),notes:fd.get('notes')||'—',items:itemsSummary(),total:'$'+paid,payment_method:'Paid online (card/PayPal)',paypal_id:details.id,fulfillment:fulfillmentLabel,delivery_address:addressLine};
        notifyOrder(emailParams);
        sendReceipt(emailParams);
        cartItems=[];renderCart();
        checkoutForm.style.display='none';
        paypalSection.style.display='none';
      }),
      onError:(err)=>{
        console.error('PayPal error',err);
        paypalHint.style.display='block';
        paypalHint.textContent='Something went wrong processing your payment. Please try again.';
      }
    }).render('#paypal-button-container');
  }

  checkoutForm.querySelectorAll('input[name="fulfillment"]').forEach(r=>r.addEventListener('change',updateFulfillmentUI));
  checkoutForm.addEventListener('input',checkPaypalReady);
  updateFulfillmentUI();

  // Reset the payment UI whenever the modal is reopened for a fresh order
  const checkoutBtn=document.getElementById('checkout');
  if(checkoutBtn)checkoutBtn.addEventListener('click',()=>{
    checkoutForm.style.display='';
    document.getElementById('success').innerHTML='';
    checkoutForm.querySelectorAll('input[name="fulfillment"]').forEach(r=>{r.checked=(r.value==='pickup');});
    updateFulfillmentUI();
  });
})();

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href').slice(1);if(!id)return;e.preventDefault();document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));const p=document.getElementById(id);if(p)p.classList.add('active');window.scrollTo({top:0,behavior:'smooth'});document.getElementById('links').classList.remove('open');}));
document.getElementById('hamb').addEventListener('click',()=>document.querySelector('.nav').classList.toggle('mobile-open'));
renderCart();

/* === Motion enhancement only: no layout/content changes === */
(function(){
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const selectors = [
    '.hero-copy', '.hero-feature', '.strip-item', '.section-head',
    '.split-feature', '.experience-card', '.dish-tile', '.order-banner',
    '.visit-grid', '.info-card', '.footer-grid', '.food-card', '.banner'
  ];

  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('motion-reveal');
      el.style.setProperty('--motion-delay', `${Math.min(i * 55, 330)}ms`);
    });
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('motion-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08, rootMargin: '0px 0px -35px 0px' });
    document.querySelectorAll('.motion-reveal').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.motion-reveal').forEach(el => el.classList.add('motion-visible'));
  }

  // Gentle image movement on hover; disabled on touch-sized screens.
  if (window.matchMedia('(min-width: 901px)').matches) {
    document.querySelectorAll('.hero-card img, .hero-photo img, .split-image img, .about-image img').forEach(img => {
      img.addEventListener('pointermove', e => {
        const r = img.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        img.style.transform = `scale(1.025) translate(${x * 5}px, ${y * 5}px)`;
      });
      img.addEventListener('pointerleave', () => { img.style.transform = ''; });
    });
  }
})();
