const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/registration", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.post("/registration", express.json(), (req, res) => {
  const { email, type, name, document, date, phone, password } = req.body;

  if (!email || !type || !name || !document || !date || !phone || !password) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "E-mail inválido" });
  }

  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

  if (type === "PF" && !cpfRegex.test(document)) {
    return res
      .status(400)
      .json({ error: "CPF inválido (Formato esperado: 000.000.000-00)" });
  } else if (type === "PJ" && !cnpjRegex.test(document)) {
    return res
      .status(400)
      .json({ error: "CNPJ inválido (Formato esperado: 00.000.000/0000-00)" });
  }

  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  if (!dateRegex.test(date)) {
    return res
      .status(400)
      .json({ error: "Data inválida (Formato esperado: DD/MM/AAAA)" });
  }

  const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({
      error: "Telefone inválido (Formato esperado: (XX) XXXXX-XXXX)",
    });
  }

  console.log("Dados recebidos:", req.body);
  res.json({ message: "Cadastro recebido com sucesso!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
