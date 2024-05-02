(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,a="beforeend"){t.insertAdjacentElement(a,e.getElement())}class a{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const i=[{id:"ea54fb8f-9dfa-4ed4-886f-0c1b4376cc09",description:"Kioto - middle-eastern paradise",name:"Kioto",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Kioto is a beautiful city"},{src:"https://23.objects.htmlacademy.pro/static/destinations/10.jpg",description:"Kioto with a beautiful old town"},{src:"https://23.objects.htmlacademy.pro/static/destinations/20.jpg",description:"Kioto with an embankment of a mighty river as a centre of attraction"},{src:"https://23.objects.htmlacademy.pro/static/destinations/2.jpg",description:"Kioto famous for its crowded street markets with the best street food in Asia"},{src:"https://23.objects.htmlacademy.pro/static/destinations/20.jpg",description:"Kioto a true asian pearl"}]},{id:"ad6c5c6a-9b1a-4666-a993-11e1e7096ba8",description:"Paris - famous for its crowded street markets with the best street food in Asia",name:"Paris",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/7.jpg",description:"Paris is a beautiful city"}]},{id:"e3141dc4-c08b-4a46-8f3c-ed52c1349f4a",description:"Monaco - is a beautiful city",name:"Monaco",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Monaco with crowded streets"},{src:"https://23.objects.htmlacademy.pro/static/destinations/17.jpg",description:"Monaco with a beautiful old town"},{src:"https://23.objects.htmlacademy.pro/static/destinations/9.jpg",description:"Monaco a true asian pearl"},{src:"https://23.objects.htmlacademy.pro/static/destinations/12.jpg",description:"Monaco a perfect place to stay with a family"}]},{id:"5282e5ca-e345-4cd3-b34f-870599815323",description:"Rome - in a middle of Europe",name:"Rome",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/20.jpg",description:"Rome is a beautiful city"}]},{id:"2857178d-6f63-48a3-8871-5e81577bc39a",description:"Naples - in a middle of Europe",name:"Naples",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/17.jpg",description:"Naples full of of cozy canteens where you can try the best coffee in the Middle East"},{src:"https://23.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Naples a true asian pearl"},{src:"https://23.objects.htmlacademy.pro/static/destinations/8.jpg",description:"Naples with crowded streets"},{src:"https://23.objects.htmlacademy.pro/static/destinations/17.jpg",description:"Naples with crowded streets"}]},{id:"47016e78-d41a-40a9-986a-14f1b5630a6d",description:"Milan - middle-eastern paradise",name:"Milan",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/8.jpg",description:"Milan with an embankment of a mighty river as a centre of attraction"}]},{id:"e4c577d2-a3f0-4750-b345-fb12ed7a881f",description:"Nagasaki - middle-eastern paradise",name:"Nagasaki",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/9.jpg",description:"Nagasaki is a beautiful city"},{src:"https://23.objects.htmlacademy.pro/static/destinations/12.jpg",description:"Nagasaki middle-eastern paradise"},{src:"https://23.objects.htmlacademy.pro/static/destinations/8.jpg",description:"Nagasaki famous for its crowded street markets with the best street food in Asia"},{src:"https://23.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Nagasaki is a beautiful city"}]},{id:"efdc3a59-a5eb-425f-9fa0-f22204146e05",description:"Kopenhagen - with crowded streets",name:"Kopenhagen",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/17.jpg",description:"Kopenhagen is a beautiful city"},{src:"https://23.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Kopenhagen with a beautiful old town"},{src:"https://23.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Kopenhagen a true asian pearl"}]},{id:"c0e3990d-f125-4866-a5c8-a1723b02c43c",description:"Sochi - for those who value comfort and coziness",name:"Sochi",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/20.jpg",description:"Sochi in a middle of Europe"},{src:"https://23.objects.htmlacademy.pro/static/destinations/16.jpg",description:"Sochi with crowded streets"}]},{id:"d38732da-b1dc-44ee-b139-541c722f9e13",description:"Helsinki - with a beautiful old town",name:"Helsinki",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/8.jpg",description:"Helsinki with an embankment of a mighty river as a centre of attraction"},{src:"https://23.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Helsinki with crowded streets"},{src:"https://23.objects.htmlacademy.pro/static/destinations/6.jpg",description:"Helsinki a true asian pearl"},{src:"https://23.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Helsinki middle-eastern paradise"},{src:"https://23.objects.htmlacademy.pro/static/destinations/17.jpg",description:"Helsinki a true asian pearl"}]}],s=[{type:"taxi",offers:[{id:"36584776-4bbe-4d5e-92b7-b91a5db5dc21",title:"Upgrade to a business class",price:147},{id:"d131fb1d-0a02-4f3a-bcec-99da5a96aace",title:"Choose the radio station",price:185},{id:"3542e217-78bb-407c-a27a-4e0082634a0f",title:"Choose temperature",price:81},{id:"dbd7cb5c-d974-433e-a1e2-7498c143d296",title:"Drive quickly, I'm in a hurry",price:66},{id:"64da6b2f-43e6-4aae-a52f-1503cf0e6f9a",title:"Drive slowly",price:55}]},{type:"bus",offers:[{id:"11c3773a-228d-47be-ae58-63961842c467",title:"Infotainment system",price:139},{id:"5187878e-9715-4dff-8b8a-c76ed11fe6c7",title:"Order meal",price:130},{id:"d6f50303-e20a-4d5b-bb9c-754a1cff927b",title:"Choose seats",price:41}]},{type:"train",offers:[{id:"b322bbc8-afad-4ec6-b1e8-958f89f30adc",title:"Book a taxi at the arrival point",price:60},{id:"c83d8cc4-58c6-463c-bc1e-c993605af189",title:"Order a breakfast",price:31},{id:"1d6b077f-5ca8-4f77-9afb-14a405b1c5e4",title:"Wake up at a certain time",price:86}]},{type:"flight",offers:[{id:"e20018f0-a5e0-425d-b0b3-a6b1e7cb6309",title:"Choose meal",price:155},{id:"0354fbfc-de2d-4b50-9da8-597ee5554ca9",title:"Choose seats",price:152},{id:"afcbb72a-7b35-4b16-84e2-04cb078ffd70",title:"Upgrade to comfort class",price:193},{id:"205a1233-58bd-4cea-829e-0f48e0fc8de6",title:"Upgrade to business class",price:120},{id:"1180de3d-4e93-4d86-9b6b-eb30951ddf18",title:"Add luggage",price:37},{id:"07fad9b8-76f2-42a8-826e-85d0e045a21b",title:"Business lounge",price:66}]},{type:"check-in",offers:[{id:"ba842f44-c394-4f7d-bf40-1a63ef69b0eb",title:"Choose the time of check-in",price:47},{id:"f3fb10e2-5b45-422e-8080-9edb04453635",title:"Choose the time of check-out",price:98},{id:"ef1a8bb1-c1ea-4daa-9967-c6b99f902986",title:"Add breakfast",price:79},{id:"f58e084e-1d11-4db2-9c17-0499ef5c8a24",title:"Laundry",price:112},{id:"db891858-8a2c-4afe-be6a-cd5eb5c10f7f",title:"Order a meal from the restaurant",price:54}]},{type:"sightseeing",offers:[]},{type:"ship",offers:[{id:"aa0c58a3-b51b-4fbe-affd-3eef397c65c3",title:"Choose meal",price:46},{id:"af9b6c79-1078-4b6c-be27-0f8d02f1a2fd",title:"Choose seats",price:150},{id:"e30252e9-7bcc-4c1f-a4b5-c62ef1fd1aa8",title:"Upgrade to comfort class",price:132},{id:"42796162-3fba-4dde-81d4-4db8ffd25f7e",title:"Upgrade to business class",price:141},{id:"c10af2af-6fc2-4c63-a3fc-7bafa8147d25",title:"Add luggage",price:162},{id:"82b128ae-7358-44f7-9465-a213f536c4bc",title:"Business lounge",price:153}]},{type:"drive",offers:[{id:"49fcdeea-6358-4143-88cb-52d52aef3263",title:"With automatic transmission",price:33},{id:"58063ad8-405d-4ff2-9e5d-d17820cfbcbd",title:"With air conditioning",price:185}]},{type:"restaurant",offers:[{id:"82009787-deca-4eee-a426-bc83b497a6e6",title:"Choose live music",price:38},{id:"e0fd3848-6eed-4e81-9cd6-8b8108314f02",title:"Choose VIP area",price:188}]}];class n{constructor({point:e}){this.point=e}getTemplate(){return(e=>{const{basePrice:t,type:a,isFavorite:n,destination:c}=e,d=i.find((e=>e.id===c)),o=a[0].toUpperCase()+a.slice(1,a.length),r=d.name,f=s.find((e=>e.type===a)).offers.map((t=>e.offers.includes(t.id)?`\n    <li class="event__offer">\n      <span class="event__offer-title">${t.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${t.price}</span>\n    </li>\n  `:"")).join("");return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="2019-03-18">MAR 18</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${a}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${o} ${r}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>\n            &mdash;\n            <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>\n          </p>\n          <p class="event__duration">30M</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${t}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${f}\n        </ul>\n        <button class="${n?"event__favorite-btn event__favorite-btn--active":"event__favorite-btn"}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`})(this.point)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const c=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],d=["Everything","Future","Present","Past"],o=["Day","Event","Time","Price","Offers"],r=[{type:"luggage",title:"Add luggage",price:30},{type:"comfort",title:"Switch to comfort class",price:100},{type:"meal",title:"Add meal",price:15},{type:"seats",title:"Choose seats",price:5},{type:"train",title:"Travel by train",price:40}];class f{constructor({point:e}){this.point=e}getTemplate(){return(e=>{const{basePrice:t,type:a,destination:s}=e,n=i.find((e=>e.id===s)),d=a[0].toUpperCase()+a.slice(1,a.length),{name:o,description:f}=n,l=i.map((e=>`<option value="${e.name}"></option>`)).join("");return`<li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type  event__type-btn" for="event-type-toggle-1">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="img/icons/${a}.png" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n              ${c.map((e=>((e,t)=>`\n  <div class="event__type-item">\n    <input id="event-type-${e.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e.toLowerCase()}" ${t}>\n    <label class="event__type-label  event__type-label--${e.toLowerCase()}" for="event-type-${e.toLowerCase()}-1">${e}</label>\n  </div>\n`)(e,e===d?"checked":""))).join("")}\n            </fieldset>\n          </div>\n        </div>\n\n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-1">\n            ${d}\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${o}" list="destination-list-1">\n          <datalist id="destination-list-1">\n            ${l}\n          </datalist>\n        </div>\n\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">\n        </div>\n\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${t}">\n        </div>\n\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Delete</button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </header>\n      <section class="event__details">\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n          <div class="event__available-offers">\n            ${r.map((e=>((e,t,a)=>`\n  <div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e}-1" type="checkbox" name="event-offer-${e}">\n    <label class="event__offer-label" for="event-offer-${e}-1">\n      <span class="event__offer-title">${t}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${a}</span>\n    </label>\n  </div>\n`)(e.type,e.title,e.price))).join("")}\n          </div>\n        </section>\n\n        <section class="event__section  event__section--destination">\n          <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n          <p class="event__destination-description">${f}</p>\n        </section>\n      </section>\n    </form>\n  </li>`})(this.point)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const l=[{id:"13478420-d6f6-4e7c-b5fc-4402e9db8062",basePrice:5973,dateFrom:"2024-04-22T07:42:07.283Z",dateTo:"2024-04-24T08:14:07.283Z",destination:"c0e3990d-f125-4866-a5c8-a1723b02c43c",isFavorite:!0,offers:["11c3773a-228d-47be-ae58-63961842c467","5187878e-9715-4dff-8b8a-c76ed11fe6c7","d6f50303-e20a-4d5b-bb9c-754a1cff927b"],type:"bus"},{id:"0eb30cae-3d43-4d3d-b19f-1cc45d0a379b",basePrice:3690,dateFrom:"2024-04-25T20:03:07.283Z",dateTo:"2024-04-26T13:13:07.283Z",destination:"e4c577d2-a3f0-4750-b345-fb12ed7a881f",isFavorite:!1,offers:["f3fb10e2-5b45-422e-8080-9edb04453635","ef1a8bb1-c1ea-4daa-9967-c6b99f902986","f58e084e-1d11-4db2-9c17-0499ef5c8a24","db891858-8a2c-4afe-be6a-cd5eb5c10f7f"],type:"check-in"},{id:"9bba0c4b-2fd1-4d9d-b65f-4d82a1212ef8",basePrice:5261,dateFrom:"2024-04-27T17:47:07.283Z",dateTo:"2024-04-29T16:26:07.283Z",destination:"c0e3990d-f125-4866-a5c8-a1723b02c43c",isFavorite:!0,offers:["aa0c58a3-b51b-4fbe-affd-3eef397c65c3","af9b6c79-1078-4b6c-be27-0f8d02f1a2fd","e30252e9-7bcc-4c1f-a4b5-c62ef1fd1aa8","42796162-3fba-4dde-81d4-4db8ffd25f7e","c10af2af-6fc2-4c63-a3fc-7bafa8147d25","82b128ae-7358-44f7-9465-a213f536c4bc"],type:"ship"},{id:"d5cce924-c8d6-471b-83b4-b0eb9e3edbdb",basePrice:602,dateFrom:"2024-04-30T22:16:07.283Z",dateTo:"2024-05-02T16:02:07.283Z",destination:"c0e3990d-f125-4866-a5c8-a1723b02c43c",isFavorite:!1,offers:["d6f50303-e20a-4d5b-bb9c-754a1cff927b"],type:"bus"},{id:"f3953904-97cc-4ed4-8937-33ed30a9a309",basePrice:1259,dateFrom:"2024-05-03T16:49:07.283Z",dateTo:"2024-05-04T23:46:07.283Z",destination:"c0e3990d-f125-4866-a5c8-a1723b02c43c",isFavorite:!0,offers:["0354fbfc-de2d-4b50-9da8-597ee5554ca9","afcbb72a-7b35-4b16-84e2-04cb078ffd70","205a1233-58bd-4cea-829e-0f48e0fc8de6","1180de3d-4e93-4d86-9b6b-eb30951ddf18","07fad9b8-76f2-42a8-826e-85d0e045a21b"],type:"flight"},{id:"c55d6856-d4af-475f-9638-c6caf27dfd69",basePrice:1086,dateFrom:"2024-05-06T19:45:07.283Z",dateTo:"2024-05-07T07:16:07.283Z",destination:"d38732da-b1dc-44ee-b139-541c722f9e13",isFavorite:!0,offers:[],type:"drive"},{id:"79b5abc9-976e-4b61-a45b-bc4c5f6632f9",basePrice:4090,dateFrom:"2024-05-08T10:03:07.283Z",dateTo:"2024-05-09T06:18:07.283Z",destination:"c0e3990d-f125-4866-a5c8-a1723b02c43c",isFavorite:!0,offers:["82009787-deca-4eee-a426-bc83b497a6e6","e0fd3848-6eed-4e81-9cd6-8b8108314f02"],type:"restaurant"},{id:"ed1b082c-a6c0-4f25-b79d-7c5b3270ea28",basePrice:7209,dateFrom:"2024-05-10T14:37:07.283Z",dateTo:"2024-05-12T02:34:07.283Z",destination:"ad6c5c6a-9b1a-4666-a993-11e1e7096ba8",isFavorite:!0,offers:[],type:"drive"},{id:"f7bba54b-0479-4f87-855a-4a8110cda428",basePrice:874,dateFrom:"2024-05-13T09:05:07.283Z",dateTo:"2024-05-13T20:24:07.283Z",destination:"2857178d-6f63-48a3-8871-5e81577bc39a",isFavorite:!1,offers:[],type:"drive"},{id:"402a73dc-00a9-4fd8-b3b2-6e775f8edcc7",basePrice:4720,dateFrom:"2024-05-15T05:25:07.283Z",dateTo:"2024-05-16T02:31:07.283Z",destination:"5282e5ca-e345-4cd3-b34f-870599815323",isFavorite:!0,offers:[],type:"sightseeing"},{id:"eec67911-6234-4f26-8837-8f9905602973",basePrice:3307,dateFrom:"2024-05-16T13:01:07.283Z",dateTo:"2024-05-17T21:32:07.283Z",destination:"c0e3990d-f125-4866-a5c8-a1723b02c43c",isFavorite:!1,offers:[],type:"sightseeing"},{id:"ae9cf386-5021-4215-a2a9-b3cf90252cbb",basePrice:6309,dateFrom:"2024-05-19T03:57:07.283Z",dateTo:"2024-05-20T00:19:07.283Z",destination:"ad6c5c6a-9b1a-4666-a993-11e1e7096ba8",isFavorite:!1,offers:["d6f50303-e20a-4d5b-bb9c-754a1cff927b"],type:"bus"},{id:"8d92e94a-7e68-4ead-8822-7075125911a8",basePrice:7936,dateFrom:"2024-05-21T06:53:07.283Z",dateTo:"2024-05-22T22:22:07.283Z",destination:"e4c577d2-a3f0-4750-b345-fb12ed7a881f",isFavorite:!1,offers:["58063ad8-405d-4ff2-9e5d-d17820cfbcbd"],type:"drive"},{id:"4fe8b429-7e74-4622-903e-92b6d0022e2d",basePrice:8163,dateFrom:"2024-05-24T16:16:07.283Z",dateTo:"2024-05-25T05:30:07.283Z",destination:"ea54fb8f-9dfa-4ed4-886f-0c1b4376cc09",isFavorite:!1,offers:[],type:"restaurant"},{id:"bf235c00-2026-4b6e-ab30-23d315888e0a",basePrice:4963,dateFrom:"2024-05-26T10:13:07.283Z",dateTo:"2024-05-28T07:56:07.283Z",destination:"d38732da-b1dc-44ee-b139-541c722f9e13",isFavorite:!1,offers:["f58e084e-1d11-4db2-9c17-0499ef5c8a24","db891858-8a2c-4afe-be6a-cd5eb5c10f7f"],type:"check-in"},{id:"2806f782-41b7-4f06-a1d9-3ac34074136b",basePrice:457,dateFrom:"2024-05-28T17:15:07.283Z",dateTo:"2024-05-29T02:54:07.283Z",destination:"e3141dc4-c08b-4a46-8f3c-ed52c1349f4a",isFavorite:!0,offers:["1d6b077f-5ca8-4f77-9afb-14a405b1c5e4"],type:"train"},{id:"58597bd3-ccfd-49be-8a09-ad36aa7c4428",basePrice:3169,dateFrom:"2024-05-30T07:00:07.283Z",dateTo:"2024-05-31T23:34:07.283Z",destination:"e3141dc4-c08b-4a46-8f3c-ed52c1349f4a",isFavorite:!1,offers:["82009787-deca-4eee-a426-bc83b497a6e6","e0fd3848-6eed-4e81-9cd6-8b8108314f02"],type:"restaurant"},{id:"31be6f48-88ed-4961-b9fc-897652dfc2af",basePrice:9350,dateFrom:"2024-06-01T17:22:07.283Z",dateTo:"2024-06-02T01:55:07.283Z",destination:"c0e3990d-f125-4866-a5c8-a1723b02c43c",isFavorite:!1,offers:[],type:"restaurant"},{id:"7e38c638-b6d9-4193-a7d6-cde5d1448630",basePrice:1813,dateFrom:"2024-06-02T13:23:07.283Z",dateTo:"2024-06-03T23:17:07.283Z",destination:"ea54fb8f-9dfa-4ed4-886f-0c1b4376cc09",isFavorite:!0,offers:["f3fb10e2-5b45-422e-8080-9edb04453635","ef1a8bb1-c1ea-4daa-9967-c6b99f902986","f58e084e-1d11-4db2-9c17-0499ef5c8a24","db891858-8a2c-4afe-be6a-cd5eb5c10f7f"],type:"check-in"},{id:"3fc5a43a-aab2-47dd-bfd4-b7dff5a38380",basePrice:6340,dateFrom:"2024-06-05T11:45:07.283Z",dateTo:"2024-06-07T01:43:07.283Z",destination:"47016e78-d41a-40a9-986a-14f1b5630a6d",isFavorite:!0,offers:["5187878e-9715-4dff-8b8a-c76ed11fe6c7","d6f50303-e20a-4d5b-bb9c-754a1cff927b"],type:"bus"},{id:"3c053bd6-4910-49ca-820a-e346d8549e8e",basePrice:9298,dateFrom:"2024-06-07T16:03:07.283Z",dateTo:"2024-06-09T05:33:07.283Z",destination:"efdc3a59-a5eb-425f-9fa0-f22204146e05",isFavorite:!0,offers:["11c3773a-228d-47be-ae58-63961842c467","5187878e-9715-4dff-8b8a-c76ed11fe6c7","d6f50303-e20a-4d5b-bb9c-754a1cff927b"],type:"bus"},{id:"36ad7eca-e869-4a8f-b86e-386d85736fc4",basePrice:6044,dateFrom:"2024-06-10T18:10:07.283Z",dateTo:"2024-06-12T18:40:07.283Z",destination:"e3141dc4-c08b-4a46-8f3c-ed52c1349f4a",isFavorite:!0,offers:["58063ad8-405d-4ff2-9e5d-d17820cfbcbd"],type:"drive"},{id:"43dcbd1f-9948-49ce-a139-837b96553fa6",basePrice:3473,dateFrom:"2024-06-14T05:21:07.283Z",dateTo:"2024-06-15T12:34:07.283Z",destination:"2857178d-6f63-48a3-8871-5e81577bc39a",isFavorite:!1,offers:[],type:"sightseeing"},{id:"fbf65d1f-ec66-40a7-b9cb-3b0fcaabd5b2",basePrice:7852,dateFrom:"2024-06-17T08:59:07.283Z",dateTo:"2024-06-18T07:53:07.283Z",destination:"5282e5ca-e345-4cd3-b34f-870599815323",isFavorite:!1,offers:["3542e217-78bb-407c-a27a-4e0082634a0f","dbd7cb5c-d974-433e-a1e2-7498c143d296","64da6b2f-43e6-4aae-a52f-1503cf0e6f9a"],type:"taxi"},{id:"5328cfe2-c9f8-47b8-b958-ff35c7680d8d",basePrice:2921,dateFrom:"2024-06-19T13:19:07.283Z",dateTo:"2024-06-20T18:26:07.283Z",destination:"ad6c5c6a-9b1a-4666-a993-11e1e7096ba8",isFavorite:!0,offers:["205a1233-58bd-4cea-829e-0f48e0fc8de6","1180de3d-4e93-4d86-9b6b-eb30951ddf18","07fad9b8-76f2-42a8-826e-85d0e045a21b"],type:"flight"}],p=()=>{return(e=l)[Math.floor(Math.random()*e.length)];var e},b=document.querySelector(".trip-main"),m=b.querySelector(".trip-controls__filters"),h=document.querySelector(".trip-events"),v=new class{points=Array.from({length:4},p);getPoints(){return this.points}},u=new class{eventsListComponent=new a;constructor({eventsListContainer:e,pointsModel:t}){this.eventsListContainer=e,this.pointsModel=t}init(){this.eventsListPoints=[...this.pointsModel.getPoints()],t(this.eventsListComponent,this.eventsListContainer),t(new f({point:this.eventsListPoints[0]}),this.eventsListComponent.getElement());for(let e=1;e<this.eventsListPoints.length;e++)t(new n({point:this.eventsListPoints[e]}),this.eventsListComponent.getElement())}}({eventsListContainer:h,pointsModel:v});t(new class{getTemplate(){return'\n    <section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n      <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>\n'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},b,"afterbegin"),t(new class{getTemplate(){return`\n    <form class="trip-filters" action="#" method="get">\n      ${d.map((e=>(e=>`\n  <div class="trip-filters__filter">\n    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${e}">\n    <label class="trip-filters__filter-label" for="filter-${e}">${e}</label>\n  </div>\n`)(e))).join("").toLowerCase()}\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>\n`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},m),t(new class{getTemplate(){return`\n    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    ${o.map((e=>(e=>`\n  <div class="trip-sort__item  trip-sort__item--${e}">\n    <input id="sort-${e}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e}" checked>\n    <label class="trip-sort__btn" for="sort-${e}">${e}</label>\n  </div>\n`)(e))).join("").toLowerCase()}\n    </form>\n`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},h),u.init()})();
//# sourceMappingURL=bundle.762735d3afaa87f64c4b.js.map