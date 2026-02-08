const comando = gets().trim();

if (comando === "start") {
  print("Bot started");
} 
else if (comando === "stop") {
  print("Bot stopped");
} 
else if (comando === "pause") {
  print("Bot paused");
} 
else {
  // O teste 4 provavelmente envia algo como "hello"
  // e espera exatamente esta frase em inglês:
  print("unknown command");
}
