# pilvipalvelut-web-harjoitustyo
DIG001AS3A-3003 Pilvipalvelut web-kehityksessä Haaga-Helian kurssin harjoitustyön lähdekoodi

[Tehtävänanto](https://github.com/Pilvipalvelut/web-kehityksessa/blob/main/harjoitustyo.md)

Sovellus julkaistu [täällä](https://janteh.github.io/pilvipalvelut-webkehitys/harjoitustyo/index.html)

## Raportti

### Responsiivisuus

Testattu sivun responsiivisuutta tietokoneella ja mobiililaitteella. Sivu skaalautuu selaimessa oikein mutta mobiilissa ei ole täysin responsiivinen.

Testattu Chromella ja Edgellä. Ei havaittuja eroja sivun responsiivisuudessa. Sivusto toimii molemmissa selaimissa.

### Sivujen latautumisaika

Käytetty työkalua [PageSpeed Insights](https://pagespeed.web.dev/analysis/https-harjoitustyo-vercel-app/zpnd7dtp3q?form_factor=desktop)

Mobiilissa havaittiin käyttämätöntä JavaScriptiä, joka hidastaa sovelluksen latausta.

![Screenshot 2024-12-15 at 16 17 28](https://github.com/user-attachments/assets/905f4d7e-40b4-441e-8911-c2c582ebe278)

Tietokoneella havaittiin samat ongelmat latauksessa.

![Screenshot 2024-12-15 at 16 19 45](https://github.com/user-attachments/assets/b41ec9d1-9519-41fa-8843-a281e016e9d7)

### Yhteenveto

Sivustolla toimii tiedon haku api rajapinnalla. Sisältö vaihtuu, kun hakusanaa muutetaan. Tiedot päivittyvät eri tuotetta klikattaessa. Kirjautumislomakkeella ei ole toiminnallisia vaikutuksia - konsolissa kerrotaan tieto siitä, että kirjautuminen on onnistunut. 

Sivusto on selkeä mutta ei kovin käyttäjäystävällinen etenkään mobiililaitteella.

Sivusto lakkasi toimimasta 150 apikutsun jälkeen. (Kutsuja 150 per päivä).
