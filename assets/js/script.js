
const STORE = {
  get(key, fallback=[]){try{return JSON.parse(localStorage.getItem(key)) ?? fallback}catch{return fallback}},
  set(key,value){localStorage.setItem(key,JSON.stringify(value))},
  money(n){return new Intl.NumberFormat('en-PH',{style:'currency',currency:'PHP',maximumFractionDigits:2}).format(n)},
  product(id){return (window.PRODUCTS||[]).find(p=>p.id===id)},
  toast(message){const el=document.getElementById('liveToast');if(!el){alert(message);return}document.getElementById('toastMessage').textContent=message;bootstrap.Toast.getOrCreateInstance(el,{delay:2600}).show()},
  cart(){return this.get('tdh_cart',[])},
  wishlist(){return this.get('tdh_wishlist',[])},
  updateCounts(){const c=this.cart().reduce((s,i)=>s+i.qty,0),w=this.wishlist().length;document.querySelectorAll('[data-cart-count]').forEach(e=>e.textContent=c);document.querySelectorAll('[data-wish-count]').forEach(e=>e.textContent=w)}
};
function addToCart(id,qty=1){const p=STORE.product(id);if(!p)return;let cart=STORE.cart(),item=cart.find(x=>x.id===id);if(item)item.qty+=qty;else cart.push({id,qty});STORE.set('tdh_cart',cart);STORE.updateCounts();STORE.toast(`${p.name} added to your cart.`)}
function toggleWishlist(id){let list=STORE.wishlist();if(list.includes(id)){list=list.filter(x=>x!==id);STORE.toast('Removed from wishlist.')}else{list.push(id);STORE.toast('Added to your wishlist.')}STORE.set('tdh_wishlist',list);STORE.updateCounts();if(document.getElementById('wishlistGrid'))renderWishlist()}
function productCard(p){const nested=location.pathname.includes('/pages/'),pagePrefix=nested?'':'pages/',assetPrefix=nested?'../':'';return `<div class="col"><article class="product-card"><a href="${pagePrefix}product.html?id=${encodeURIComponent(p.id)}" aria-label="View ${p.name}"><img src="${assetPrefix}${p.image}" alt="${p.name}"></a><div class="card-body"><div class="d-flex justify-content-between align-items-center mb-2"><span class="small muted">${p.category}</span>${p.tag?`<span class="tag">${p.tag}</span>`:''}</div><h3><a class="text-light" href="${pagePrefix}product.html?id=${encodeURIComponent(p.id)}">${p.name}</a></h3><div class="rating mb-2">★ ${p.rating.toFixed(1)} <span class="muted">(${p.stock} in stock)</span></div><div class="d-flex justify-content-between align-items-center"><span class="price">${STORE.money(p.price)}</span><button class="btn btn-sm btn-outline-gold" onclick="toggleWishlist('${p.id}')" aria-label="Toggle wishlist"><i class="bi bi-heart"></i></button></div><button class="btn btn-gold w-100 mt-3" onclick="addToCart('${p.id}')">Add to Cart</button></div></article></div>`}
document.addEventListener('DOMContentLoaded',()=>{STORE.updateCounts();document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());});
