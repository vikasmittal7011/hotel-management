"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[548],{4110:(e,s,t)=>{t.d(s,{Z:()=>l});var a=t(184);const l=e=>{let{name:s,placeholder:t,id:l,onClick:n,type:c="text",required:i=!0,value:o,mt:r="8",text:m="xl"}=e;return(0,a.jsxs)("div",{className:"mt-".concat(r," "),children:[(0,a.jsx)("label",{htmlFor:s,className:"block text-".concat(m," font-medium leading-6 text-gray-900 pb-1"),children:s}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)("input",{type:c,placeholder:t,name:s,id:l,autoComplete:"given-name",className:"block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 placeholder:mx-5",onChange:e=>{n(l,e.target.value)},required:i,value:o})})]})}},7548:(e,s,t)=>{t.r(s),t.d(s,{default:()=>h});var a=t(2791),l=t(7689),n=t(4110),c=t(184);const i=e=>{let{id:s,onChange:t,title:a,children:l}=e;return(0,c.jsxs)("div",{className:"flex items-center gap-x-3 p-1",children:[(0,c.jsx)("input",{onChange:e=>{t(s,e.target.value)},id:s,name:s,type:"radio",className:"cursor-pointer h-4 w-4 border-gray-800 text-indigo-600 focus:ring-indigo-600",value:a}),(0,c.jsx)("label",{htmlFor:s,className:"block text-sm font-medium leading-6 text-gray-900",children:l})]})};var o=t(2073);const r=e=>{let{handlePaymentInfo:s,text:t="xl",mt:a="8"}=e;return(0,c.jsxs)("fieldset",{className:"mt-".concat(a),children:[(0,c.jsx)("legend",{className:"block text-".concat(t," font-medium leading-6 text-gray-900 pb-1"),children:"Payment Methods"}),(0,c.jsx)("div",{className:"mt-2 space-y-2",children:null===o.z4||void 0===o.z4?void 0:o.z4.map(((e,t)=>(0,c.jsx)(i,{id:"paymentMethod",onChange:s,title:e.name,children:e.name},t)))})]})};var m=t(2132),d=t(9690);const h=()=>{const e=(0,l.s0)(),{user:s}=(0,a.useContext)(d.S),{apiCall:t}=(0,m.Z)(),i=JSON.parse(localStorage.getItem("hotel")),[h,u]=(0,a.useState)(JSON.parse(localStorage.getItem("bookingInfo"))),x=(e,s)=>{"guest"===e&&+s>i.maxGuest&&u({...h,[e]:i.maxGuest}),u({...h,[e]:s})},g=async e=>{e.preventDefault();try{const e=await t("/booking","POST",{...h,hotel:i.id});e.success?console.log(e):alert.error(e.message||"Something is wrong, plase try again later!!")}catch(s){alert.error(s.message)}},v=()=>{localStorage.removeItem("hotel"),localStorage.removeItem("bookingInfo"),e("/")};return(0,a.useEffect)((()=>{h&&(0,o.Ck)(i,h,u)}),[null===h||void 0===h?void 0:h.guest]),(0,c.jsx)("div",{children:i&&h?(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{children:(0,c.jsx)("h1",{className:"text-center my-5 font-bold text-xl md:text-3xl",children:"Plase Confirm Your Details Before Book"})}),(0,c.jsxs)("div",{className:"flex flex-col md:flex-row justify-around items-center gap-5",children:[(0,c.jsxs)("div",{className:"bg-gray-200 rounded-2xl p-8 lg:p-20 w-full md:w-1/2",children:[(0,c.jsxs)("div",{className:"mt-10",children:[(0,c.jsx)("h1",{className:"text-xl md:text-2xl font-bold",children:"Name of Hotel"}),(0,c.jsx)("p",{className:"my-3 text-gray-600 text-justify",children:null===i||void 0===i?void 0:i.title})]}),(0,c.jsxs)("div",{className:"mt-10",children:[(0,c.jsx)("h1",{className:"text-xl md:text-2xl font-bold",children:"Book By"}),(0,c.jsxs)("p",{className:"my-3 text-gray-600 text-justify",children:[null===s||void 0===s?void 0:s.name," ",(0,c.jsx)("br",{})," ",null===s||void 0===s?void 0:s.email]}),(0,c.jsxs)("div",{className:"md:block hidden",children:[(0,c.jsx)("button",{onClick:g,className:"bg-primary text-white w-full rounded-md py-1 md:py-3",children:"Confirm Booking"}),(0,c.jsx)("p",{onClick:v,className:"text-blue-600 underline text-center my-2 cursor-pointer",children:"Cancel Booking"})]})]})]}),(0,c.jsxs)("div",{className:"w-full md:w-1/2",children:[(0,c.jsxs)("h1",{className:"text-lg md:text-xl mb-5 font-semibold",children:["\u20b9 ",null===h||void 0===h?void 0:h.totalAmount," Total Charge"]}),(0,c.jsxs)("form",{children:[(0,c.jsxs)("div",{className:"flex flex-col lg:flex-row gap-1",children:[(0,c.jsx)(n.Z,{name:"CheckIn",id:"checkIn",text:"base -mt-7 -mb-2",type:"datetime-local",onClick:x,value:null===h||void 0===h?void 0:h.checkIn}),(0,c.jsx)(n.Z,{name:"CheckOut",id:"checkOut",text:"base -mt-7 -mb-2",type:"datetime-local",onClick:x,value:null===h||void 0===h?void 0:h.checkOut})]}),(0,c.jsx)("div",{className:"-mt-6 -mb-1",children:(0,c.jsx)(n.Z,{name:"Number Of Guest",text:"base",id:"guest",type:"number",onClick:x,value:null===h||void 0===h?void 0:h.guest})}),(0,c.jsx)("div",{className:"-mt-6 -mb-1",children:(0,c.jsx)(n.Z,{name:"Contact Number",text:"base",id:"contact",type:"tel",onClick:x,value:null===h||void 0===h?void 0:h.contact})}),(0,c.jsx)("div",{className:"-mt-6 -mb-1",children:(0,c.jsx)(r,{text:"base",handlePaymentInfo:x})}),(0,c.jsxs)("div",{className:"block md:hidden",children:[(0,c.jsx)("button",{onClick:g,className:"my-5 bg-primary text-white w-full rounded-md py-1 md:py-3",children:"Confirm Booking"}),(0,c.jsx)("p",{onClick:v,className:"text-blue-600 underline text-center my-2 cursor-pointer",children:"Cancel Booking"})]})]})]})]})]}):(0,c.jsx)(l.Fg,{to:"/"})})}},2073:(e,s,t)=>{t.d(s,{Ck:()=>i,Ic:()=>n,u:()=>l,z4:()=>c});var a=t(184);const l=[{value:"Wifi",message:"",svg:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"})})},{value:"Free Parking",message:"",svg:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"})})},{value:"TV",message:"",svg:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"})})},{value:"Radio",message:"",svg:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m3.75 7.5 16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0 0 12 6.75Zm-1.683 6.443-.005.005-.006-.005.006-.005.005.005Zm-.005 2.127-.005-.006.005-.005.005.005-.005.005Zm-2.116-.006-.005.006-.006-.006.005-.005.006.005Zm-.005-2.116-.006-.005.006-.005.005.005-.005.005ZM9.255 10.5v.008h-.008V10.5h.008Zm3.249 1.88-.007.004-.003-.007.006-.003.004.006Zm-1.38 5.126-.003-.006.006-.004.004.007-.006.003Zm.007-6.501-.003.006-.007-.003.004-.007.006.004Zm1.37 5.129-.007-.004.004-.006.006.003-.004.007Zm.504-1.877h-.008v-.007h.008v.007ZM9.255 18v.008h-.008V18h.008Zm-3.246-1.87-.007.004L6 16.127l.006-.003.004.006Zm1.366-5.119-.004-.006.006-.004.004.007-.006.003ZM7.38 17.5l-.003.006-.007-.003.004-.007.006.004Zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007Zm-.5 1.873h-.008v-.007h.008v.007ZM17.25 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0 4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"})})},{value:"Pets",message:"",svg:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"})})},{value:"Private Entrance",message:"",svg:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"})})}],n=(e,s,t)=>""===e.checkIn?{success:!1,message:"Enter valid checkIn time"}:""===e.checkOut?{success:!1,message:"Enter valid checkOut time"}:""===e.city?{success:!1,message:"Enter valid city"}:""===e.country?{success:!1,message:"Enter valid country"}:""===e.discription?{success:!1,message:"Enter valid discription"}:""===e.extraInfo?{success:!1,message:"Enter valid extraInfo"}:""===e.maxGuests?{success:!1,message:"Enter valid maxGuests"}:""===e.pin?{success:!1,message:"Enter pin"}:""===e.price?{success:!1,message:"Enter valid price"}:""===e.state?{success:!1,message:"Enter valid state"}:""===e.street?{success:!1,message:"Enter valid street"}:""===e.title?{success:!1,message:"Enter valid title"}:0===s.length?{success:!1,message:"Select aleast 1 perk"}:t.length<5?{success:!1,message:"Select aleast 5 images"}:{success:!0},c=[{id:1,name:"Cash"},{id:1,name:"Card"}],i=(e,s,t)=>{const a=e.price*s.guest*.18;if(s.checkIn&&s.checkOut){const l=Math.abs(new Date(s.checkIn)-new Date(s.checkOut)),n=Math.ceil(l/864e5),c=(a+e.price*s.guest)*n;t({...s,totalAmount:c,days:n})}else{const l=a+e.price*s.guest;t({...s,totalAmount:l})}}}}]);
//# sourceMappingURL=548.f63f85a7.chunk.js.map