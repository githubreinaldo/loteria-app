#!/bin/bash

# Paso 1: Generar la clave SSH
echo "Generando clave SSH..."
ssh-keygen -t ed25519 -C "reinaldobermudezcr@gmail.com" -f ~/.ssh/id_ed25519 -N ""

# Paso 2: Iniciar el agente SSH
echo "Iniciando el agente SSH..."
eval "$(ssh-agent -s)"

# Paso 3: Agregar la clave SSH al agente
echo "Agregando la clave SSH al agente..."
ssh-add ~/.ssh/id_ed25519

# Paso 4: Mostrar la clave pública para copiarla y añadirla a GitHub
echo "Aquí está tu clave SSH pública. Cópiala y agrégala a GitHub:"
cat ~/.ssh/id_ed25519.pub

echo "Una vez copiada, agrega esta clave SSH en GitHub en: https://github.com/settings/keys"
