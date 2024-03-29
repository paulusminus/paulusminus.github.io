---
title: "Lipl"
---

# Lipl

## Inleiding

Melodieën kan ik makkelijker herinneren dan teksten.

Bij het organiseren van meezing-sessies met dementerenden vond ik het handing om liedteksten te projecteren op een scherm. Dus schreef ik een aantal toepassingen waarmee ik liedteksten kon bewaren, een liedtekst kon selecteren en projecteren op het scherm. Dit systeem heb ik Lipl genoem. Het is een soort afkorting van **L**yr**i**c **Pl**ay.

Lipl kent 3 componenten

1. Een service voor het bewaren van liedteksten en afspeellijsten, Lipl Opslag genoemd.
2. Een toepassing voor het tonen van een liedtekst op een scherm, Lipl Scherm genoemd.
3. Een toepassing voor het onderhouden van de verzameling liedteksten en afspeellijsten, Lipl Afstandsbediening genoemd.

De eerste component is geschreven in rust. Het draait op een eigen server die via het Internet toegangelijk is.

Ook de twee component is geschreven in rust. Het draait op een raspberry pi. 
Bluez heeft een dbus interface die wordt gebruikt om een Gatt Peripheral te starten.

De derde component is geschreven in Dart en maakt gebruik van Flutter. Het draait op een Android smartfoon. 
Een web versie van dit component wordt door mij gebruikt om de liedteksten en afspeellijsten te onderhouden.

### Meezingen

Als ik naar een meezing-sessie ga, neem ik met mij mee
- Mijn smartphone met lipl-control geïnstalleerd en de gegevens die zijn gesynchroniseerd met lipl-storage
- Een raspberry pi met lipl-display geïnstalleerd

De rapberry pi wordt via de HDMI connector verbonden met een scherm. Na het opstarten van de pi wordt automatisch een Gatt service geadverteerd.

Lipl afstandsbediening luistert naar advertenties en wordt verbonden met de Pi. Als ik afspelen kies wordt de tekst naar een Gatt Charateristic op de pi geschreven. Lipl afstandsbediening kan ook naar een characteristic schrijven die de lettergrootte bepaald of de het thema.


## Lipl Opslag

Met deze toepassing die tegenwoordig backend wordt genoemd worden alle verzoeken tot wijzigingen van liedteksten en afspeellijsten afgehandeld. De opslag kan gedaan worden in het bestandssysteem, postgres database, redis of intern geheugen. Dit laatste wordt alleen gebruikt bij het testen van onderdelen.

[De broncode van Lipl opslag](https://www.github.com/paulusminus/lipl-storage) is beschikbaar op Github.


## Lipl Scherm

Het gatt peripheral onderdeel definieert een gatt service met drie characeristics die geschreven kunnen worden , namelijk text, status en control.

Text wordt gebruikt om het tekstgedeelte dat moet worden getoond te versturen.

Status wordt gebruikt om de title die moet worden getoond te versturen.

Control wordt gebruikt om een thema te selecteren, zwarte letters op een wit scherm of andersom, of om de grootte van het lettertype aan te passen.

De broncode van de [flutter] en de [slint] versie is beschikbaar op Github. Ik heb een voorkeur voor de slint versie omdat je dan alleen Raspbian Lite nodig hebt.


## Lipl Afstandsbediening

De toepassing kan de gegevens syncroniseren met Lipl Storage. Dit is belangrijk omdat Internet niet altijd beschikbaar is op elke plek.

Op een android toestel kan de toepassing verbinding maken met Lipl Scherm.
Eenmaal verbonden worden de geselecteerde liedjes automatisch getoon op Lipl Scherm.

De broncode voor [lipl afstandsbediening] is beschikbaar via Github.


[lipl afstandsbediening]: https://www.github.com/paulusminus/lipl-control
[flutter]: https://www.github.com/paulusminus/lipl-display-flutter
[slint]: https://www.github.com/paulusminus/lipl-display
