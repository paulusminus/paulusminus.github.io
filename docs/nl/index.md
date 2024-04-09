---
title: "In rust we trust"
---

# Rust

## In rust we trust

Linus Torvalds, de man die ooit begon met de ontwikkeling van de Linux kernel, gebruikt regelmatig het woord vertrouwen. Rond zijn persoon is een groot team actief dat vertrouwd wordt door velen die gebruik maken van de Linux kernel, waaronder vele commerciële bedrijven.

De [broncode] voor de programmeertaal [rust] is openbaar, net als bij de Linux kernel. Ook hier zijn commerciële bedrijven actief betrokken bij de ontwikkeling van de taal, de compiler en hulpmiddelen voor de ontwikkelaar.

## Wat maken we met rust?

De rust compiler kan uitvoerbare programma's en bibliotheken produceren voor verschillende combinaties van besturingssystemen en processorarchitecturen. De compiler kan ook [webassembly] code genereren die vooral uitgevoerd wordt door browsers.

## Hergebruik code

Broncode wordt gebundeld in een crate. Crates kunnen gepubliceerd worden op [crates.io]. Ontwikkelaars van crates bepalen zelf welke code aangeroepen kan worden en welke code alleen voor intern gebruik is.
Een crate kan ook alleen lokaal beschikbaar zijn of gepubliceerd zijn op een systeem dat niet voor iedereen toegankelijk is. Een crate wordt gespecificeerd met een unieke naam en een versie.

## Bouwen

Een crate kan omgezet worden in uitvoerbare code door te compileren. Meestal wordt hiervoor cargo gebruikt.
Een crate kan afhankelijk zijn van andere crates. Deze worden gedownload en meegecompileerd.
Het einddresultaat is een bibliotheek of programma dat tijdens de uitvoering weer afhankelijk kan zijn
van andere bibliotheken.


[webassembly]: https://webassembly.org/
[broncode]: https://github.com/rust-lang
[rust]: https://www.rust-lang.org/
[iterator]: https://doc.rust-lang.org/std/iter/trait.Iterator.html
[stream]: https://docs.rs/futures/0.3.30/futures/prelude/trait.Stream.html
[crates.io]: https://www.crates.io
