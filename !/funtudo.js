
function initLoginChart() {
  const loginsPorDia = JSON.parse(localStorage.getItem("loginsPorDia")) || [0, 0, 0, 0, 0, 0, 0]; 


  const ctx = document.getElementById("loginChart").getContext("2d");
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'], 
      datasets: [{
        label: 'Número de Logins',
        data: loginsPorDia,
        backgroundColor: 'rgba(54, 162, 235, 0.2)', 
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}


function registrarLoginPorDia() {
  const today = new Date();
  const dayOfWeek = today.getDay(); 

  
  let loginsPorDia = JSON.parse(localStorage.getItem("loginsPorDia")) || [0, 0, 0, 0, 0, 0, 0];

  
  loginsPorDia[dayOfWeek]++;

  localStorage.setItem("loginsPorDia", JSON.stringify(loginsPorDia));


  initLoginChart();
}


function incrementarLogins() {
  let logins = JSON.parse(localStorage.getItem("logins")) || 0;
  logins++;
  localStorage.setItem("logins", JSON.stringify(logins));
}


document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (usuario) {
    alert("Login bem-sucedido! Redirecionando...");
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

    incrementarLogins();

  
    registrarLoginPorDia();

    if (usuario.email === "admin@exemplo.com") {
      window.location.href = "analise.html";
    } else {
      window.location.href = "teste.html";
    }

  } else {
    alert("Email ou senha incorretos.");
  }
});

function registrarLoginPorDia() {
  const hoje = new Date().getDay(); 
  let loginsPorDia = JSON.parse(localStorage.getItem("loginsPorDia")) || [0, 0, 0, 0, 0, 0, 0];
  loginsPorDia[hoje]++;
  localStorage.setItem("loginsPorDia", JSON.stringify(loginsPorDia));
}


function incrementarLoginsTotais() {
  let logins = JSON.parse(localStorage.getItem("logins")) || 0;
  logins++;
  localStorage.setItem("logins", JSON.stringify(logins));
}


document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (usuario) {
    alert("Login bem-sucedido! Redirecionando...");
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

    
    registrarLoginPorDia();
    incrementarLoginsTotais();

   
    if (usuario.email === "admin@exemplo.com") {
      window.location.href = "analise.html";
    } else {
      window.location.href = "teste.html";
    }

  } else {
    alert("Email ou senha incorretos.");
  }
});
