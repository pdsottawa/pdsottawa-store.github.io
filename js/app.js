const products = [
  {id:1,category:'men',type:'shoes',brand:'Nike',name:"Air Force 1 '07 Men's Shoes",price:115,badge:'Icon',image:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/8861a585-43b0-491a-9229-14f9d1ebfb35/AIR%2BFORCE%2B1%2B%2707.png",source:'https://www.nike.com/t/air-force-1-07-mens-shoes-XVPIszaq/FJ4146-129',desc:'White/Black classic leather lifestyle shoe. Nike style FJ4146-129.'},
  {id:2,category:'men',type:'denim',brand:"Levi's",name:"501® Original Men's Jeans",price:74.99,badge:'Best seller',image:'https://lscoglobal.scene7.com/is/image/lscoglobal/MB_00501-0193_GLO_CM_DA?fit=crop%2C1&fmt=jpeg&hei=1200&op_usm=0.6%2C0.6%2C8&qlt=78&resMode=sharp2&wid=960',source:'https://www.levi.com/US/en_US/clothing/men/jeans/straight/501-original-mens-jeans/p/005010193',desc:'Medium Stonewash straight-leg 501® Originals in classic non-stretch denim.'},
  {id:3,category:'men',type:'outerwear',brand:'H&M',name:'Four-Way Stretch Overshirt',price:59.99,badge:'New',image:'https://image.hm.com/assets/hm/b5/61/b561eaa7f555e89aa5d2b2a8eca188573650d720.jpg?imwidth=1200',source:'https://www2.hm.com/en_us/productpage.1303300001.html',desc:'Black relaxed-fit overshirt in quick-dry, moisture-wicking four-way stretch fabric.'},
  {id:4,category:'women',type:'shoes',brand:'Nike',name:"Air Max 270 Women's Shoes",price:170,badge:'Highly rated',image:'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/pyyixbczj6u5kiwhpjik/W%2BAIR%2BMAX%2B270.png',source:'https://www.nike.com/t/air-max-270-womens-shoes-Pgb94t/AH6789-100',desc:'White/White/Black lifestyle sneaker with a large Max Air 270 unit. Style AH6789-100.'},
  {id:5,category:'women',type:'denim',brand:"Levi's",name:"501® Original Fit Women's Jeans",price:99.98,badge:'Denim',image:'https://lsco.scene7.com/is/image/lsco/125010476-dynamic1-pdp?fit=crop%2C1&fmt=jpeg&hei=1200&op_usm=0.6%2C0.6%2C8&qlt=78&resMode=sharp2&wid=960',source:'https://www.levi.com/US/en_US/clothing/women/jeans/straight/501-original-fit-womens-jeans/p/125010476',desc:'Dark-wash straight 501® jeans in 100% cotton denim.'},
  {id:6,category:'women',type:'clothing',brand:'PRETTYGARDEN',name:'V-Neck Wrap Lace-Trim Blouse',price:19.99,badge:'Value',image:'https://i5.walmartimages.com/seo/PRETTYGARDEN-Women-s-Business-Casual-V-Neck-Wrap-Blouse-Lace-Trim-Soft-Crop-Tops-Smocked-Waist-Long-Sleeve-Shirts-Dressy-Casual-Office-Work-Going-Out_3865b236-460e-4111-99f3-13919c606312.03deafab5c6fbdd67ad3e365cc25a71b.jpeg?odnBg=FFFFFF&odnHeight=900&odnWidth=900',source:'https://www.walmart.com/ip/20885910738',desc:'Business-casual V-neck blouse with lace trim, long sleeves and smocked waist.'},
  {id:7,category:'kids',type:'outerwear',brand:"Levi's",name:"Girls' Denim Trucker Jacket",price:32.99,badge:'Classic',image:'https://i5.walmartimages.com/seo/Levi-s-Girls-Denim-Trucker-Jacket-Sizes-4-16_34e3cace-25ce-4b66-81a0-01c861c71d31.0b12316e0675838e6666ef7ce50af7de.jpeg?odnBg=FFFFFF&odnHeight=900&odnWidth=900',source:'https://www.walmart.com/ip/533854151',desc:"Classic Levi's trucker silhouette for girls, with collar, chest pockets and durable denim."},
  {id:8,category:'kids',type:'clothing',brand:'Cat & Jack',name:"Girls' Heather Gray Leggings",price:6,badge:'Everyday',image:'https://target.scene7.com/is/image/Target/GUEST_38fe0481-a1a8-43a2-854d-57c29ee83263?fmt=pjpeg&hei=900&wid=900',source:'https://www.target.com/p/girls-39-leggings-cat-38-jack-8482-heather-gray-l/-/A-88246535',desc:'Heather-gray cotton/spandex leggings with an elastic waistband and skinny-leg fit.'},
  {id:9,category:'kids',type:'shoes',brand:'Nike',name:'Flex Runner 4 Baby/Toddler Shoes',price:40,badge:'Easy on',image:'https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/0d03f657-db65-4f94-be19-283d9e99e6fd/FLEX%2BRUNNER%2B4%2B%28TD%29.png',source:'https://www.nike.com/t/flex-runner-4-baby-toddler-shoes-fhDFuBSM',desc:'Flexible pull-on kids shoe with stretchy straps, cushioned foam and multisurface traction.'},
  {id:10,category:'kids',type:'clothing',brand:'Nike',name:"Sportswear Club Fleece Big Kids' Hoodie",price:45,badge:'Fleece',image:'https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwbc64fd1f/nk/b04/0/8/e/1/1/b0408e11_2414_4378_81a1_efbb96ab4703.jpg',source:'https://www.nike.com/t/sportswear-club-fleece-big-kids-pullover-hoodie-cPR5dZJY/FD3000-316',desc:'Soft Club Fleece pullover hoodie for big kids with classic kangaroo pocket styling.'},
  {id:11,category:'women',type:'clothing',brand:'PRETTYGARDEN',name:'Long-Sleeve Waffle Knit Henley',price:27.99,badge:'Fall pick',image:'https://i5.walmartimages.com/asr/79c4ab15-f866-4002-afc0-b4f0695b70e0.bfd7a0c706c762a61bb712ac8abdc42a.jpeg?odnBg=FFFFFF&odnHeight=900&odnWidth=900',source:'https://www.walmart.com/ip/PRETTYGARDEN-Women-s-Long-Sleeve-Waffle-Knit-Shirts-Fall-Casual-Button-Up-Henley-V-Neck-Tunic-Tops-Loose-Fit-Basic-Tees/17921520800',desc:'Casual long-sleeve waffle-knit henley tunic with a relaxed everyday fit.'},
  {id:12,category:'women',type:'clothing',brand:'Fantaslook',name:"Women's Short-Sleeve Button-Down Shirt",price:12.59,badge:'Deal',image:'https://i5.walmartimages.com/seo/Fantaslook-Womens-Button-Down-Shirts-Lapel-Short-Sleeve-Shirt-Collared-Pocketed-Casual-Blouses-Summer-Tops_3f61244d-74a3-478f-ad37-b56c4a7b8568.84fedf02ff70c4910764b4f3ac7ba42d.png?odnBg=FFFFFF&odnHeight=900&odnWidth=900',source:'https://www.walmart.com/ip/Fantaslook-Womens-Button-Down-Shirts-Lapel-Short-Sleeve-Shirt-Collared-Pocketed-Casual-Blouses-Summer-Tops/15020224675',desc:'Collared short-sleeve button-down blouse with a chest pocket for casual summer outfits.'},

  {id:13,category:'men',type:'denim',brand:"Levi's",name:"511™ Slim Men's Jeans",price:74.95,badge:'Best seller',image:'https://lscoglobal.scene7.com/is/image/lscoglobal/MB_04511-6366_GLO_CM_DA?fit=crop%2C1&fmt=jpeg&hei=1200&op_usm=0.6%2C0.6%2C8&qlt=78&resMode=sharp2&wid=960',source:'https://www.levi.com/US/en_US/clothing/men/jeans/slim/511TM-slim-mens-jeans/p/045116366',desc:'Slim-through-the-seat-and-thigh denim with a streamlined leg and stretch comfort.'},
  {id:14,category:'men',type:'outerwear',brand:'H&M',name:'Slim Fit Lightweight Puffer Jacket',price:39.99,badge:'Outerwear',image:'https://image.hm.com/assets/hm/55/e2/55e2df88a00a8871d42820d7234eb0aab04a1aa4.jpg?imwidth=2160',source:'https://www2.hm.com/en_us/productpage.1227233002.html',desc:'Black slim-fit lightweight quilted puffer jacket with a stand collar and zip pockets.'},
  {id:15,category:'men',type:'clothing',brand:'H&M',name:'Regular-Fit Printed Sweatshirt',price:39.99,badge:'Graphic',image:'https://image.hm.com/assets/hm/4d/c0/4dc0c4fd43ab21b82a97dabacc965ffde5441317.jpg?imwidth=2160',source:'https://www2.hm.com/en_us/productpage.1289808001.html',desc:'Heavyweight, boxy regular-fit sweatshirt with a brushed inside and printed design.'},
  {id:16,category:'women',type:'clothing',brand:'H&M',name:'Fine-Knit Cardigan',price:17.99,badge:'Essential',image:'https://image.hm.com/assets/hm/ad/0c/ad0c41fae24485c07beb08a76e41fd4242eb25ab.jpg?imwidth=2160',source:'https://www2.hm.com/en_us/productpage.0579541072.html',desc:'Cream fine-knit cardigan with a round neckline, front buttons and ribbed trim.'},
  {id:17,category:'women',type:'dress',brand:'H&M',name:'Draped Bandeau Dress',price:99,badge:'Edition',image:'https://image.hm.com/assets/hm/78/83/788327aad8d3b14e79a5209a2332f00cb293c388.jpg?imwidth=2160',source:'https://www2.hm.com/en_us/productpage.1351195001.html',desc:'Cream calf-length bandeau dress with a draped bodice and asymmetric hem.'},
  {id:18,category:'kids',type:'dress',brand:'H&M',name:'Long-Sleeved Dress with Tulle Skirt',price:19.99,badge:'New arrival',image:'https://image.hm.com/assets/hm/00/f2/00f248786678a606b62b01a05d9a39140f405d3f.jpg?imwidth=2160',source:'https://www2.hm.com/en_us/productpage.1343736004.html',desc:'Dark-red long-sleeved dress with a ribbed jersey bodice and flared tulle skirt.'},
  {id:19,category:'men',type:'shoes',brand:'Nike',name:"Dunk Low Retro SE Men's Shoes",price:120,badge:'Highly rated',image:'https://static.nike.com/a/images/t_PDP_144_v1/f_auto%2Cq_auto%3Aeco%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/e75f552f-b4d0-4991-9a5a-4f0930aaf8ba/NIKE%2BDUNK%2BLOW%2BRETRO%2BSE.png',source:'https://www.nike.com/t/dunk-low-retro-se-mens-shoes-wlaYvsTw',desc:'Retro low-profile sneaker with premium materials, plush padding and classic Dunk traction.'},
  {id:20,category:'women',type:'shoes',brand:'Nike',name:"Dunk Low Women's Shoes",price:91.97,originalPrice:130,badge:'Sale',image:'https://static.nike.com/a/images/t_PDP_144_v1/f_auto%2Cq_auto%3Aeco%2Cu_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/6af2fd60-3b6e-438e-81c7-9ffb0ef9c2a0/WMNS%2BNIKE%2BDUNK%2BLOW.png',source:'https://www.nike.com/t/dunk-low-womens-shoes-ktc1HMbt/IF3944-100',desc:'Premium textured Dunk Low in Sail and Fauna Brown with cushioned foam and a padded collar.'},
  {id:21,category:'women',type:'outerwear',brand:"Levi's",name:"Original Trucker Jacket",price:62.98,originalPrice:89.50,badge:'Denim icon',image:'https://lsco.scene7.com/is/image/lsco/299450131-front-pdp?fit=crop%2C1&fmt=jpeg&hei=2500&op_usm=0.6%2C0.6%2C8&qlt=70&resMode=sharp2&wid=2000',source:'https://www.levi.com/US/en_US/clothing/women/outerwear/original-trucker-jacket/p/299450131',desc:'Light-wash 100% cotton denim Trucker Jacket with a standard fit and classic chest pockets.'}
];

const PRICE_CHECKED = 'Oct. 1, 2026';
let state={filter:'all',sort:'featured',query:'',cart:JSON.parse(localStorage.getItem('pdsottawa-cart')||'{}')};
const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];
const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n);

function filtered(){
  let arr=products
    .filter(p=>state.filter==='all'||p.category===state.filter||(state.filter==='shoes'&&p.type==='shoes'))
    .filter(p=>(p.name+' '+p.brand+' '+p.type).toLowerCase().includes(state.query.toLowerCase()));
  if(state.sort==='low')arr.sort((a,b)=>a.price-b.price);
  if(state.sort==='high')arr.sort((a,b)=>b.price-a.price);
  if(state.sort==='name')arr.sort((a,b)=>a.name.localeCompare(b.name));
  return arr;
}
function imgFallback(e){e.currentTarget.onerror=null;e.currentTarget.src='assets/images/logo.png';e.currentTarget.classList.add('fallback-image')}
function priceHTML(p){return `<span class="price">${money(p.price)}</span>${p.originalPrice?`<span class="old-price">${money(p.originalPrice)}</span>`:''}`}
function renderProducts(){
  const arr=filtered();
  $('#resultCount').textContent=`${arr.length} product${arr.length===1?'':'s'}`;
  $('#productGrid').innerHTML=arr.map(p=>`<article class="product-card">
    <div class="product-image-wrap" data-open="${p.id}">
      <img loading="lazy" src="${p.image}" alt="${p.name}" onerror="imgFallback(event)">
      <span class="badge">${p.badge}</span>
      <button class="quick-btn" data-open="${p.id}" aria-label="Quick view ${p.name}">＋</button>
    </div>
    <div class="product-info">
      <div class="product-kicker"><span>${p.brand}</span><span>${p.category}</span></div>
      <h3>${p.name}</h3>
      <div class="product-bottom"><div class="price-line">${priceHTML(p)}</div><a class="source" href="${p.source}" target="_blank" rel="noopener">Retail source ↗</a></div>
      <button class="add-btn" data-add="${p.id}">Add to bag</button>
    </div>
  </article>`).join('')||'<p class="no-results">No products match your search.</p>';
  bindProductActions();
}
function bindProductActions(){
  $$('[data-add]').forEach(b=>b.onclick=e=>{e.stopPropagation();addToCart(+b.dataset.add)});
  $$('[data-open]').forEach(b=>b.onclick=e=>{if(e.target.closest('[data-add]'))return;openProduct(+b.dataset.open)});
}
function saveCart(){localStorage.setItem('pdsottawa-cart',JSON.stringify(state.cart));renderCart()}
function addToCart(id){state.cart[id]=(state.cart[id]||0)+1;saveCart();openCart()}
function changeQty(id,d){state.cart[id]=(state.cart[id]||0)+d;if(state.cart[id]<=0)delete state.cart[id];saveCart()}
function renderCart(){
  const entries=Object.entries(state.cart); const count=entries.reduce((s,[,q])=>s+q,0); $('#cartCount').textContent=count; let total=0;
  $('#cartItems').innerHTML=entries.length?entries.map(([id,q])=>{const p=products.find(x=>x.id==id);total+=p.price*q;return `<div class="cart-item"><img src="${p.image}" alt="${p.name}" onerror="imgFallback(event)"><div><h4>${p.name}</h4><small>${money(p.price)}</small><div class="qty"><button onclick="changeQty(${p.id},-1)">−</button><span>${q}</span><button onclick="changeQty(${p.id},1)">+</button></div></div><button class="remove" onclick="changeQty(${p.id},-${q})" aria-label="Remove ${p.name}">×</button></div>`}).join(''):'<div class="empty-cart">Your bag is empty.<br><small>Add a few favorites from the collection.</small></div>';
  $('#cartSubtotal').textContent=money(total);
}
function openCart(){$('#cartDrawer').classList.add('open');$('#cartDrawer').setAttribute('aria-hidden','false');$('#overlay').classList.add('show')}
function closeCart(){$('#cartDrawer').classList.remove('open');$('#cartDrawer').setAttribute('aria-hidden','true');$('#overlay').classList.remove('show')}
function openProduct(id){
  const p=products.find(x=>x.id===id);
  $('#modalContent').innerHTML=`<div class="modal-layout"><img src="${p.image}" alt="${p.name}" onerror="imgFallback(event)"><div class="modal-copy"><span class="eyebrow">${p.brand} · ${p.category}</span><h2>${p.name}</h2><div class="modal-price">${priceHTML(p)}</div><p>${p.desc}</p><p><small>Price reference checked ${PRICE_CHECKED}. Retail prices and availability can change.</small></p><button class="btn primary" onclick="addToCart(${p.id});document.getElementById('productModal').close()">Add to bag</button><a class="source modal-source" href="${p.source}" target="_blank" rel="noopener">Verify price & product at retailer ↗</a></div></div>`;
  $('#productModal').showModal();
}

$$('.filter').forEach(b=>b.onclick=()=>{state.filter=b.dataset.filter;$$('.filter').forEach(x=>x.classList.toggle('active',x===b));renderProducts()});
$$('[data-filter-link]').forEach(a=>a.onclick=()=>{const f=a.dataset.filterLink;state.filter=f;$$('.filter').forEach(x=>x.classList.toggle('active',x.dataset.filter===f));renderProducts()});
$('#sortSelect').onchange=e=>{state.sort=e.target.value;renderProducts()};
$('#searchToggle').onclick=()=>{$('#searchBar').classList.toggle('hidden');if(!$('#searchBar').classList.contains('hidden'))$('#searchInput').focus()};
$('#searchInput').oninput=e=>{state.query=e.target.value;renderProducts()};
$('#cartButton').onclick=openCart; $('#closeCart').onclick=closeCart; $('#overlay').onclick=closeCart; $('#modalClose').onclick=()=>$('#productModal').close();
$('#checkoutBtn').onclick=()=>alert('Demo checkout only. Connect a payment provider before accepting real orders.');
renderProducts(); renderCart();
