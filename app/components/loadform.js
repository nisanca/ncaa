const handleSubmit = (e) => {
  e.preventDefault();
  const newLoan = { nama, judul, tanggal };

  // Ambil data lama dari localStorage
  const existingLoans = JSON.parse(localStorage.getItem("loanData")) || [];
  existingLoans.push(newLoan);

  // Simpan kembali ke localStorage
  localStorage.setItem("loanData", JSON.stringify(existingLoans));

  // Reset form
  setNama("");
  setJudul("");
  setTanggal("");
};
