// const fullname = document.getElementById('name');
// const email = document.getElementById('email');
// const phone = document.getElementById('phone');
// const subject = document.getElementById('subject');
// const mass = document.getElementById('massage');

// function sendEmail() {
//     const bodyMassage = `Full Name: ${fullname.value}<br> Email: ${email.value}<br> Phone: ${phone.value}<br> Message: ${mass.value}<br> `;

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "rofieahmad002@gmail.com",
//         Password : "2736E09DCDF5E6C5CD8E25E865F512F9A2A4",
//         To : 'rofieahmad002@gmail.com',
//         From : "rofieahmad002@gmail.com",
//         Subject : subject.value,
//         Body : bodyMassage
//     }).then(
//       message => {
//         if (message == "OK") {
//             Swal.fire({
//                 title: "Good job!",
//                 text: "You clicked the button!",
//                 icon: "success"
//               });
//         }
//         else {
//             Swal.fire({
//                 title: "Good job!",
//                 text: "You clicked the button!",
//                 icon: "error"
//               });
//         }
//       }
//     ); 
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     sendEmail();
// })