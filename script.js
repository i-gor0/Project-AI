// Função para alternar entre os modos claro e escuro
function changeMode(mode) {
  if (mode === "dark") {
    document.body.classList.add("dark-mode")
    document.body.classList.remove("light-mode")
  } else {
    document.body.classList.add("light-mode")
    document.body.classList.remove("dark-mode")
  }
}

// Verifica o modo preferido do usuário, se disponível
document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("theme-mode")
  if (savedMode) {
    changeMode(savedMode)
    document.getElementById(
      `radio${savedMode === "dark" ? "1" : "2"}`
    ).checked = true
  } else {
    // Define o modo escuro como padrão
    changeMode("dark")
  }
})

// Salva a preferência do modo em localStorage
function saveModePreference(mode) {
  localStorage.setItem("theme-mode", mode)
  changeMode(mode)
}

// Exemplo de como a função saveModePreference pode ser usada
document.querySelectorAll('input[name="radio-group"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    const mode =
      document.querySelector('input[name="radio-group"]:checked').id ===
      "radio1"
        ? "dark"
        : "light"
    saveModePreference(mode)
  })
})
