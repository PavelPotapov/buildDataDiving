"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[665],{1665:(e,a,n)=>{n.r(a),n.d(a,{default:()=>I});var r=n(4848),t=n(6540);const l="htNQTjoh";var s=n(4976),i=n(7533),o=n(9606),u=function(e){var a=e.user,n=e.deleteUsersSlot,t=e.editUsersSlot;if(a){var u=(0,i.J)(a.avatar),c=u.img,m=u.loading;return u.error,(0,r.jsxs)("article",{className:"RjhfKDmW",children:[(0,r.jsxs)("div",{className:"AbPImSYY",children:[(0,r.jsx)(s.N_,{to:"/",children:(0,r.jsx)("button",{className:"btn",children:"Назад"})}),t]}),n,(0,r.jsx)("div",{className:"q16FnZY4",children:m?(0,r.jsx)(o.a,{label:"Загрузка фото"}):c&&(0,r.jsx)("img",{src:c.src,alt:"Avatar Image for ".concat(name)})}),(0,r.jsxs)("div",{className:"YW7_UHVn",children:[(0,r.jsx)("p",{className:l,children:a.surname}),(0,r.jsx)("p",{className:l,children:a.name}),(0,r.jsx)("p",{className:l,children:a.middlename}),(0,r.jsx)("p",{className:l,children:a.about}),(0,r.jsxs)("p",{className:l,children:["📧: ",a.email]})]})]})}},c=n(5415),m=n(4198),d=n(5369),h=n(5267);const f="K6thcPeC";var p=n(2845),v=[".jpg",".jpeg",".png",".gif",".svg"],b={errorUpload:"Ошибка загрузки файла",errorFormat:"Неверный формат файла. Доступные форматы: ".concat(v.join(" ")),emptyInput:"Пожалуйста, заполните поле",emptyAvatar:"Выберите себе автар"},j={position:"bottom-left",hideProgressBar:!1,autoClose:3e3,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"light"},x=n(7425),g=n(2664),y=g.Ik().shape({email:g.Yj().email(b.emptyInput).required(b.emptyInput),surname:g.Yj().required(b.emptyInput),name:g.Yj().required(b.emptyInput),middleName:g.Yj(),about:g.Yj()}),N=n(6526),C=n(6684),w=n(3322),S=function(){return S=Object.assign||function(e){for(var a,n=1,r=arguments.length;n<r;n++)for(var t in a=arguments[n])Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e},S.apply(this,arguments)},k=function(e){var a=e.user,n=t.useState(!1),l=n[0],s=n[1],i=t.useState(null),u=i[0],c=i[1],g=t.useState(null),k=g[0],A=g[1],I=t.useState(null),B=(I[0],I[1],t.useRef(null)),O=t.useRef(null),Y=(0,h.H7)(),R=Y[0],U=Y[1],D=U.isLoading,E=(U.isError,U.error,function(){s(!1),c(null),A(null)}),F=(0,x.Wx)({initialValues:{email:a.email,surname:a.surname,name:a.name,middleName:a.middlename?a.middlename:"",avatar:a.avatar,about:a.about?a.about:""},validationSchema:y,validateOnBlur:!0,validateOnChange:!1,onSubmit:function(e,n){var r,t,l,s,i,o;n.setSubmitting(!0),a.id&&u&&(r=a.id,t={name:e.name,surname:e.surname,middlename:e.middleName,email:e.email,avatar:u,about:e.about},l=void 0,s=void 0,o=function(){var e,a,n;return function(e,a){var n,r,t,l,s={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l&&(l=0,i[0]&&(s=0)),s;)try{if(n=1,r&&(t=2&i[0]?r.return:i[0]?r.throw||((t=r.return)&&t.call(r),0):r.next)&&!(t=t.call(r,i[1])).done)return t;switch(r=0,t&&(i=[2&i[0],t.value]),i[0]){case 0:case 1:t=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((t=(t=s.trys).length>0&&t[t.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!t||i[1]>t[0]&&i[1]<t[3])){s.label=i[1];break}if(6===i[0]&&s.label<t[1]){s.label=t[1],t=i;break}if(t&&s.label<t[2]){s.label=t[2],s.ops.push(i);break}t[2]&&s.ops.pop(),s.trys.pop();continue}i=a.call(e,s)}catch(e){i=[6,e],r=0}finally{n=t=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}}(this,(function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),[4,R(S({userId:r},t))];case 1:return(e=l.sent()).data,(a=e.error)?p.oR.error(String(a),j):(p.oR.success("Данные успешно обновлены",j),E()),[3,3];case 2:return n=l.sent(),p.oR.error(n,j),[3,3];case 3:return[2]}}))},new((i=void 0)||(i=Promise))((function(e,a){function n(e){try{t(o.next(e))}catch(e){a(e)}}function r(e){try{t(o.throw(e))}catch(e){a(e)}}function t(a){var t;a.done?e(a.value):(t=a.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,r)}t((o=o.apply(l,s||[])).next())})))}}),P=F.values,q=F.errors,L=F.handleBlur,M=F.handleChange,W=F.touched,_=F.handleSubmit;return t.useEffect((function(){u||c(a.avatar)}),[u]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"BIpliZtQ",children:(0,r.jsx)(d.m,{text:"Изменить данные пользователя",title:"Я заголовок",delay:750,children:(0,r.jsx)("button",{className:"btn",onClick:function(){s(!0)},children:"Редактировать"})})}),(0,r.jsxs)(m.A,{isActive:l,onClose:E,children:[(0,r.jsxs)("form",{ref:O,onSubmit:_,className:"wiC5Q1iE",autoComplete:"off",children:[(0,r.jsx)("input",{ref:B,type:"file",onChange:function(e){if(B.current&&e.target.files&&e.target.files.length>0){var a=e.target.files[0];if(function(e){var a=e.toLowerCase().substring(e.lastIndexOf("."));return v.includes(a)}(a.name)){var n=new FileReader;n.onload=function(){var e=n.result;c(e),A(a.name)},n.onerror=function(e){if(e.target){var a=e.target.error,n=a instanceof DOMException?a.message:String(a);A(n)}else A(b.errorUpload)},n.readAsDataURL(a)}else A(b.errorFormat)}},hidden:!0}),(0,r.jsxs)("div",{className:"q0djGeFP",children:[(0,r.jsx)("img",{src:u||"https://cataas.com/cat",alt:"Default Avatar"}),(0,r.jsx)("button",{className:"bdWhyn2y",onClick:function(e){var a;e.preventDefault(),B.current&&(null===(a=B.current)||void 0===a||a.click())},children:(0,r.jsx)(w.A,{width:"100%",height:"100%",color:"black"})})]}),(0,r.jsx)("span",{className:"o3S3lGlB",children:k}),(0,r.jsx)(N.A,{type:"text",placeholder:"Введите фамилию",label:"Фамилия",name:"surname",customClass:q.surname&&W.surname?f:"",onBlur:L,onChange:M,errorMsg:q.surname&&W.surname?q.surname:"",value:P.surname}),(0,r.jsx)(N.A,{type:"text",placeholder:"Введите имя",label:"Имя",name:"name",customClass:q.name&&W.name?f:"",onBlur:L,onChange:M,errorMsg:q.name&&W.name?q.name:"",value:P.name}),(0,r.jsx)(N.A,{name:"middleName",type:"text",label:"Отчество",placeholder:"Введите отчество",onBlur:L,onChange:M,value:P.middleName}),(0,r.jsx)(N.A,{type:"email",name:"email",label:"Email",placeholder:"Введите email",customClass:q.email&&W.email?f:"",onBlur:L,onChange:M,errorMsg:q.email&&W.email?q.email:"",value:P.email}),(0,r.jsx)(C.f,{name:"about",label:"Расскажите о себе",placeholder:"Расскажите о себе",onBlur:L,onChange:M,value:P.about}),(0,r.jsx)("button",{className:"btn",type:"submit",children:"Обновить 🚀"})]}),D&&(0,r.jsx)(o.a,{label:"Обновление данных..."})]})]})},A=n(7767);(0,r.jsx)("div",{});const I=function(){var e=(0,A.Zp)(),a=(0,A.g)().id;if(a){var n=(0,h.$f)(a),t=n.data,l=n.error,s=n.isLoading;return l&&e("/"),(0,r.jsx)("div",{children:s?(0,r.jsx)(o.a,{label:"Загрузка данных пользователя"}):t&&(0,r.jsx)(u,{user:t,deleteUsersSlot:t&&(0,r.jsx)(c.K,{label:"Вы уверены, что хотите удалить пользователя?",text:"Удалить пользователя",users:[t],usersId:t.id?[t.id]:[],onDelete:function(){e("/")}}),editUsersSlot:t&&(0,r.jsx)(k,{user:t})})})}e("/")}}}]);