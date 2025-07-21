// Structura de date principala
const data = {
    contracts: {
        industrial: {
            name: "Industrial",
            locations: {
                glina: {
                    name: "Glina",
                    buildings: [
                        { name: "00 - cladire chimizare", faza: "Faza 1" },
                        { name: "00 - platforma chimizare", faza: "Faza 1" },
                        { name: "00 - organizare noua Damina", faza: "Faza 1" },
                        { name: "00 - magazie", faza: "Faza 1" },

                        {
                            name: "1.0 Conexiune la caseta linia 2",
                            faza: "Faza 1",
                        },
                        {
                            name: "1.1 Statie gratare rare linia 1",
                            faza: "Faza 1",
                        },
                        {
                            name: "1.2 Statie gratare rare linia 2",
                            faza: "Faza 2",
                        },
                        {
                            name: "2.1 Statie pompare de admisie linia 1",
                            faza: "Faza 1",
                        },
                        {
                            name: "2.2 Statie pompare de admisie linia 2",
                            faza: "Faza 2",
                        },
                        {
                            name: "3.1 Statie gratare dese linia 1",
                            faza: "Faza 1",
                        },
                        {
                            name: "3.2 Statie gratare dese linia 2",
                            faza: "Faza 2",
                        },
                        {
                            name: "4.1 Deznisipatoare/Statie de suflante/Distributie debit linia 1",
                            faza: "Faza 1",
                        },
                        {
                            name: "4.2 Deznisipatoare/Statie de suflante/Distributie debit linia 2",
                            faza: "Faza 2",
                        },
                        {
                            name: "4.3 Camin spuma de la deznisipatoare si separator de pitris linia 1",
                            faza: "Faza 2",
                        },
                        {
                            name: "4.4 Conexiune intre pretratarile noi si existente",
                            faza: "Faza 1",
                        },
                        {
                            name: "5 Camera distributie bazine de decantare primare",
                            faza: "Faza 1",
                        },
                        {
                            name: "6 Bazine de decantare primare",
                            faza: "Faza 1",
                        },
                        {
                            name: "6.1 Camera supernatant (pentru aria 6)",
                            faza: "Faza 2",
                        },
                        {
                            name: "7 Statie de pompare namol primar",
                            faza: "Faza 1",
                        },
                        { name: "8 By-pass de urgenta", faza: "Faza 1" },
                        {
                            name: "9.1/2 Canal de distributie bazine de aerare linia 1&2",
                            faza: "Faza 2",
                        },
                        {
                            name: "9.3 Canal de distributie bazine de aerare linia 3",
                            faza: "Faza 1",
                        },
                        {
                            name: "10.1 Bazine de aerare linia 1",
                            faza: "Faza 2",
                        },
                        {
                            name: "10.2 Bazine de aerare linia 2",
                            faza: "Faza 2",
                        },
                        {
                            name: "10.3 Bazine de aerare linia 3",
                            faza: "Faza 1",
                        },
                        {
                            name: "11.1/2 Cladire suflante linia 1/2",
                            faza: "Faza 2",
                        },
                        {
                            name: "11.3 Cladire suflante linia 3",
                            faza: "Faza 1",
                        },
                        {
                            name: "12.1 Bazine de decantare secundare linia 1",
                            faza: "Faza 2",
                        },
                        {
                            name: "12.2 Bazine de decantare secundare linia 2",
                            faza: "Faza 1",
                        },
                        {
                            name: "12.3 Bazine de decantare secundare linia 3",
                            faza: "Faza 1",
                        },
                        {
                            name: "13.1 Statie de pompare N.A.R. si N.A.E. linia 1",
                            faza: "Faza 2",
                        },
                        {
                            name: "13.2 Statie de pompare N.A.R. si N.A.E. linia 2",
                            faza: "Faza 1",
                        },
                        {
                            name: "13.3 Statie de pompare N.A.R. si N.A.E. linia 3",
                            faza: "Faza 1",
                        },
                        {
                            name: "13.4 Camin debitmetru N.A.R./R.A.S",
                            faza: "Faza 1",
                        },
                        {
                            name: "14 Canal de descarcare si sistem de masurare debit",
                            faza: "Faza 1",
                        },
                        {
                            name: "15 Unitate recuperare energie (Turbine)",
                            faza: "Faza 1",
                        },
                        {
                            name: "16 Statie de pompare si tratare apa industriala",
                            faza: "Faza 1",
                        },
                        {
                            name: "16.1 Grup pentru presiune apa industriala",
                            faza: "Faza 1",
                        },
                        {
                            name: "17 Castel de apa/Statie de pompare",
                            faza: "Faza 1",
                        },
                        {
                            name: "18 Ingrosatoare namol primar",
                            faza: "Faza 1",
                        },
                        {
                            name: "19 Statie de pompare namol primar ingrosat",
                            faza: "Faza 1",
                        },
                        { name: "20 Bazine tampon N.A.E.", faza: "Faza 1" },
                        {
                            name: "20.1 Statie de separare fibroase din namolul activin exces",
                            faza: "Faza 1",
                        },
                        {
                            name: "21 Statie de pompare N.A.E. (integrat in aria 22)",
                            faza: "Faza 1",
                        },
                        {
                            name: "22 Statie ingrosare N.A.E./ deshidratare namol fermentat",
                            faza: "Faza 1",
                        },
                        {
                            name: "22/1 Statie deshidratare avansata (centrifuge)",
                            faza: "Faza 1",
                        },
                        {
                            name: "23 Depozit namol deshidratat",
                            faza: "Faza 2",
                        },
                        {
                            name: "24 Bazine de amestec tampon namol primar si N.A.E. ingrosate",
                            faza: "Faza 1",
                        },
                        {
                            name: "24.1 Statie de separare fibroase din namolul primar ingrosat",
                            faza: "Faza 1",
                        },
                        {
                            name: "25 Digestoare/Turn de acces digestoare",
                            faza: "Faza 1",
                        },
                        {
                            name: "26 Statie incalzire si pompare/repompare namol in digestoare",
                            faza: "Faza 1",
                        },
                        { name: "27 Statie de cogenerare", faza: "Faza 1" },
                        {
                            name: "28 Bazine tampon namol fermentat/ de urgenta",
                            faza: "Faza 1",
                        },
                        {
                            name: "29.1 Statie de pompare supernatant linia 1",
                            faza: "Faza 2",
                        },
                        {
                            name: "29.2/3 Statie de pompare supernatant linia 2/3",
                            faza: "Faza 2",
                        },
                        {
                            name: "30 Gazometre/Statie de desulfurizare/Facle",
                            faza: "Faza 1",
                        },
                        {
                            name: "31 Statie gratare apa pluviala",
                            faza: "Faza 1",
                        },
                        {
                            name: "33 Bazine de decantare apa pluviala",
                            faza: "Faza 1",
                        },
                        {
                            name: "34 Canal de descarcare apa pluviala decantata",
                            faza: "Faza 1",
                        },
                        {
                            name: "35 Statie de pompare namol primar din apa pluviala",
                            faza: "Faza 1",
                        },
                        {
                            name: "36 Camera de racord nr. 2 cu sistem de gratare rare",
                            faza: "Faza 1",
                        },
                        {
                            name: "37 Camera de racord nr. 3 cu sistem de gratare rare",
                            faza: "Faza 1",
                        },
                        {
                            name: "38/1 Statie de pompare apa uzata menajera din incinta",
                            faza: "Faza 1",
                        },
                        {
                            name: "38/2 Statie de pompare apa pluviala drenata din incinta",
                            faza: "Faza 1",
                        },
                        {
                            name: "39 Statie de pompare apa uzata (nefinalizata)",
                            faza: "Faza 1",
                        },
                        { name: "40 Post transformare TRAFO", faza: "Faza 1" },
                        { name: "40.1 Substatie electrica", faza: "Faza 2" },
                        {
                            name: "42 Bazin namol activ in exces (fostul BIO-P2)",
                            faza: "Faza 1",
                        },
                        { name: "43 Statie chimicale", faza: "Faza 1" },
                        {
                            name: "44 Statie suflante pentru aria 28",
                            faza: "Faza 1",
                        },
                        {
                            name: "45 Deshidratare namol zona 1 (aria 22.1)",
                            faza: "Faza 1",
                        },
                        {
                            name: "46 Deshidratare namol zona 2",
                            faza: "Faza 2",
                        },
                        { name: "48 Metanol", faza: "Faza 2" },
                        {
                            name: "49.1 Tratare miros de la pretratare",
                            faza: "Faza 2",
                        },
                        { name: "49.2 Tratare miros namol", faza: "Faza 2" },
                        { name: "49.3 Tratare miros aria 42", faza: "Faza 1" },

                        {
                            name: "56 Statie alimentare carburant",
                            faza: "Faza 1",
                        },
                        { name: "57 Rezervor carburant", faza: "Faza 1" },
                        {
                            name: "58 Statie de preluare vidanje",
                            faza: "Faza 2",
                        },
                        {
                            name: "70 Amplasament incinerator de namol",
                            faza: "Faza 1",
                        },
                    ],
                },
            },

            inspectionTypes: {
                acoperisuri_terase: {
                    name: "Acoperisuri/terase",
                    checks: [
                        { name: "Inspectie vizuala hidroizolatii" },
                        {
                            name: "Mici reparatii si interventii remediere hidroizolatie",
                        },
                        {
                            name: "Inspectie parfuranzare si curatare jgheaburi si burlane",
                        },
                        {
                            name: "Verificare sistem fixare suporti existenti pe acoperisuri",
                        },
                        { name: "Curatat manual si/sau mecanizat terase" },
                        {
                            name: "Verificare fixare atice si lucrari de fixare locala si etanseitate",
                        },
                        {
                            name: "Inlaturare gheata si/sau zapada de pe acoperis in zone cu risc de prabusire si risc infiltratie (pe perioada rece cand exista pericol de accidentare)",
                        },
                    ],
                    frequency: "martie, septembrie",
                },
                fatade: {
                    name: "Fatade",
                    checks: [
                        { name: "Inspectie vizuala fatade (integral)" },
                        { name: "Lucrari de reparatie fisuri" },
                        { name: "Lucrari de vopsitorie fatade" },
                        {
                            name: "Lucrari de igienizare fatade si inlaturare efecte coroziune",
                        },
                        {
                            name: "Verificare sisteme de fixare fatade (integral)",
                        },
                        { name: "Hidro + termo izolate fatade" },
                    ],
                    frequency: "aprilie, iunie, august, octombrie",
                },
                socluri_si_trotuare_de_garda: {
                    name: "Socluri si trotuare de garda",
                    checks: [
                        {
                            name: "Inspectie vizuala trotuare de garda (integral)",
                        },
                        { name: "Reparatii trotuare de garda" },
                        {
                            name: "Lucrari de refacere etanseitate si reparatii fisuri locale",
                        },
                    ],
                    frequency: "aprilie, iunie, august, octombrie",
                },
                usi_ferestre: {
                    name: "Usi si ferestre",
                    checks: [
                        {
                            name: "Verificari si reparatii sisteme inchidere usi (balamale, cremone, silduri, broasca, butuc, manere)",
                        },
                        {
                            name: "Verificari si reparatii feronerie ferestre PVC (sticla, feronerie, garnituri, manere)",
                        },
                        { name: "Usi duble acces aluminiu" },
                        { name: "Usi metalice" },
                        { name: "Usi PVC" },
                        { name: "Usi Pal/MDF" },
                        { name: "Usi HPL-GS" },
                        { name: "Manere usi acces" },
                        { name: "Jaluzele (sistem sina, lamele, inchideri)" },
                        {
                            name: "Reglaje, verificari si reparatii amortizoare de usa",
                        },
                        { name: "Verificari si reparatii garnituri de usa" },
                    ],
                    frequency: "februarie, mai, august, noiembrie",
                },
                iluminat: {
                    name: "Iluminat",
                    checks: [
                        { name: "Verificare corp de iluminat cu tub" },
                        { name: "Verificare corp de iluminat LED" },
                        { name: "Verificare corp emergenta" },
                        {
                            name: "Verificare functionare corpuri de iluminat si inlocuire corpuri defecte",
                        },
                        { name: "Verificare iluminat de siguranta" },
                    ],
                    frequency: "lunar",
                },
                pardoseli: {
                    name: "Pardoseli",
                    checks: [
                        { name: "Intretinere si reparare gresie la GS" },
                        { name: "Intretinere si reparare mozaic holuri" },
                        {
                            name: "Intretinere si reparare pardoseli rasina epoxidica",
                        },
                        { name: "Intretinere si reparare pardoseli PVC" },
                        { name: "Intretinere si reparare plinta perimetrala" },
                    ],
                    frequency: "ianuarie, martie, iulie, octombrie",
                },
                pereti_interiori_si_tavane: {
                    name: "Pereti interiori si tavane",
                    checks: [
                        { name: "Remedieri infiltratii locale" },
                        { name: "Ghene si mascari coloane" },
                        { name: "Guri de vizitare" },
                        {
                            name: "Plinte, paturi si canal cablu metalice si PVC",
                        },
                        {
                            name: "Intretinere si vopsitorii accesorii hidranti, panouri, balustrade",
                        },
                        { name: "Reparatii tencuieli si glet" },
                        { name: "Zugraveala (amorsa si lavabila)" },
                    ],
                    frequency: "lunar",
                },
                instalatii_sanitare: {
                    name: "Instalatii sanitare si accesorii",
                    checks: [
                        {
                            name: "Verificare elemente de inchidere si comanda instalatii sanitare (baterii, robineti)",
                        },
                        { name: "Verificari instalatii canal" },
                        {
                            name: "Mentenanta ventiloconvectoare si instalatii aferente",
                        },
                        {
                            name: "Verificare instalatie alimentare apa rece / calda (GS, chicineta, laborator)",
                        },
                        {
                            name: "Verificare accesorii (dispensere, oglinzi, suporti, perii)",
                        },
                        { name: "Verificare spalator inox" },
                        { name: "Verificare pisoare" },
                        {
                            name: "Verificare baterii actionare mecanica/fotocelula",
                        },
                        { name: "Verificare vase WC standard / Back To Wall" },
                        { name: "Verificare bazine ingropate / semi inaltime" },
                        { name: "Verificare ansamblu ventilatie laboratoare" },
                        { name: "Verificare Sifoane pardoseli" },
                        { name: "Verificare baterii dusuri" },
                        { name: "Inspectii video si desfundare cu jet de apa" },
                        { name: "Verificari robineti lavoare" },
                    ],
                    frequency: "lunar",
                },
            },
        },

        administrativ: {
            name: "Administrativ",
            locations: {
                glina: {
                    name: "Glina",
                    buildings: [
                        {
                            name: "41 Sediu paza/Remiza P.S.I./Remiza auto",
                            faza: "",
                        },
                        { name: "50 Cladire administrativa", faza: "" },
                        { name: "51 Cladire poarta", faza: "" },
                        { name: "52 Cladire vestiare", faza: "" },
                        {
                            name: "54 Ateliere intretinere si reparatii",
                            faza: "",
                        },
                        {
                            name: "55 Serviciu Mentenanta / Depozit Glina",
                            faza: "",
                        },
                    ],
                },
            },
            inspectionTypes: {
                acoperisuri_terase: {
                    name: "Acoperisuri si terase",
                    checks: [
                        { name: "Inspectie vizuala hidroizolatii" },
                        {
                            name: "Mici reparatii si interventii remediere hidroizolatie",
                        },
                        {
                            name: "Inspectie parafrunzare si curatare jgheaburi si burlane",
                        },
                        {
                            name: "Verificare sistem fixare suporti existenti pe acoperisuri",
                        },
                        { name: "Curatat manual si/sau mecanizat terase" },
                        {
                            name: "Verificare fixare atice si lucrari de fixare locala si etanseitate",
                        },
                        {
                            name: "Inlaturare gheata si/sau zapada de pe acoperis in zone cu risc de prabusire si risc infiltratie (pe perioada rece cand exista pericol de accidentare)",
                        },
                    ],
                    frequency: "martie, septembrie",
                },
                fatade: {
                    name: "Fatade",
                    checks: [
                        { name: "Inspectie vizuala fatade (integral)" },
                        { name: "Lucrari de reparatie fisuri" },
                        { name: "Lucrari de vopsitorie fatade" },
                        {
                            name: "Lucrari de igienizare fatade si inlaturare efecte coroziune",
                        },
                        {
                            name: "Verificare sisteme de fixare fatade (integral)",
                        },
                        { name: "Hidro + termo izolatie fatade" },
                    ],
                    frequency: "aprilie, iunie, august, octombrie",
                },
                socluri_trotuare: {
                    name: "Socluri si trotuare de garda",
                    checks: [
                        {
                            name: "Inspectie vizuala trotuare de garda (integral)",
                        },
                        { name: "Reparatii trotuare de garda" },
                        {
                            name: "Lucrari de reface etanseitate si reparatii fisuri locale",
                        },
                    ],
                    frequency: "aprilie, iunie, august, octombrie",
                },
                usi_ferestre: {
                    name: "Usi si ferestre",
                    checks: [
                        {
                            name: "Verificari si reparatii sisteme inchidere usi (balamale, cremoane, silduri, broasca, butuc, manere)",
                        },
                        {
                            name: "Verificari si reparatii feronerie ferestre PVC (sticla, feronerie, garnituri, manere)",
                        },
                        { name: "Usi duble acces aluminiu" },
                        { name: "Usi metalice" },
                        { name: "Usi PVC" },
                        { name: "Usi HPL-GS" },
                        { name: "Manere usi acces" },
                        { name: "Jaluzele (sistem sina, lamele, inchideri)" },
                        {
                            name: "Reglaje, verificari si reparatii amortizoare de usa",
                        },
                        { name: "Verificari si reparatii garnituri de usa" },
                    ],
                    frequency: "februarie, mai, august, noiembrie",
                },
                instalatii_sanitare: {
                    name: "Instalatii sanitare si accesorii",
                    checks: [
                        {
                            name: "Verificare elemente de inchidere si comanda instalatii sanitare (baterii, robineti)",
                        },
                        { name: "Verificari instalatii canal" },
                        {
                            name: "Mentenanta ventiloconvectoare si instalatii aferente",
                        },
                        {
                            name: "Verificare instalatie alimentare apa rece / calda (GS, chicineta, laborator)",
                        },
                        {
                            name: "Verificare accesorii (dispensere, oglinzi, suporti, perii)",
                        },
                        { name: "Verificare spalator inox" },
                        { name: "Verificare pisoare" },
                        {
                            name: "Verificare baterii actionare mecanica/fotocelula",
                        },
                        { name: "Verificare vase WC standard / Back To Wall" },
                        { name: "Verificare bazine ingropate / semi inaltime" },
                        { name: "Verificare ansamblu ventilatie laboratoare" },
                        { name: "Verificare Sifoane pardoseli" },
                        { name: "Verificare baterii dusuri" },
                        { name: "Inspectii video si desfundare cu jet de apa" },
                        { name: "Verificari robineti lavoare" },
                    ],
                    frequency: "lunar",
                },
                instalatii_electrice: {
                    name: "Instalatii electrice interioare",
                    checks: [
                        {
                            name: "Verificare impamantare tablouri electrice interioare",
                        },
                        { name: "Verificare Intrerupatoare bipolare" },
                        { name: "Verificare tablou electric metalic" },
                        { name: "Verificare tablou electric fibra/plastic" },
                        { name: "Verificare priza termocupla 380V" },
                        {
                            name: "Verificare intrerupator automat cu diferential",
                        },
                        { name: "Verificare intrerupator automat simplu" },
                        { name: "Verificare Intrerupator simplu iluminat" },
                        { name: "Verificare intrerupator dublu iluminat" },
                        { name: "Verificare prize simple" },
                        { name: "Verificare prize duble" },
                        { name: "Verificare corp de iluminat cu tub" },
                        { name: "Verificare corp de iluminat cu LED" },
                        { name: "Verificare corp emergenta" },
                        { name: "Verificare priza dubla internet" },
                        { name: "Verificare Rack IT" },
                        { name: "Verificare tablou AAR" },
                        {
                            name: "Verificare instalatii de iluminat de evacuare",
                        },
                        {
                            name: "Verificare functionare corpuri de iluminat si inlocuire corpuri defecte",
                        },
                        {
                            name: "Verificare functionare prize si inlocuire prize defecte",
                        },
                    ],
                    frequency: "lunar",
                },
                pardoseli: {
                    name: "Pardoseli",
                    checks: [
                        { name: "Intretinere si reparare gresie la GS" },
                        { name: "Intretinere si reparare mozaic holuri" },
                        {
                            name: "Intretinere si reparare pardoseli rasina epoxidica",
                        },
                        { name: "Intretinere si reparare pardoseli PVC" },
                        { name: "Intretinere si reparare plinta perimetrala" },
                    ],
                    frequency: "ianuarie, martie, iulie, octombrie",
                },
                pereti_tavane: {
                    name: "Pereti interiori si tavane",
                    checks: [
                        { name: "Tavan casetat" },
                        { name: "Remedieri infiltratii locale" },
                        { name: "Ghene si mascari coloane" },
                        { name: "Guri de vizitare" },
                        { name: "Faianta" },
                        {
                            name: "Plinte, paturi si canal cablu metalice si PVC",
                        },
                        {
                            name: "Intretinere si vopsitorii accesorii hidranti, panouri, balustrade",
                        },
                        { name: "Reparatii tencuieli si glet" },
                        { name: "Zugraveala (amorsa si lavabila)" },
                    ],
                    frequency: "lunar",
                },
            },
        },
        caseta: {
            name: "Caseta",
            locations: {
                glina: {
                    name: "Glina",
                    buildings: [
                        {
                            name: "Camera de racord 1",
                            inspections: {
                                "constructii_din_beton-pasarela_de_trecere_elementele_de_beton_aferente_golurilor_tehnologice_de_la_Camera_de_Racord_1":
                                    {
                                        name: "Constructii din beton - pasarela de trecere, elementele de beton aferente golurilor tehnologice de la Camera de Racord 1",
                                        checks: [
                                            {
                                                name: "Inspectie vizuala a elementelor constructive",
                                                frequency:
                                                    "mar, iun, sept, dec",
                                            },
                                            {
                                                name: "Servicii de reparatii fisuri locale de suprafata",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Servicii de refacere etanseitate rosturi de suprafata, respectiv tratare si sigilare rosturi de dilatare pentru marirea durabilitatii in timp",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Reparatii tencuieli",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Aplicare strat bitum pentru refacere hidroizolatie",
                                                frequency: "aug",
                                            },
                                        ],
                                    },
                                elemente_metalice_zona_Camera_de_Racord_1: {
                                    name: "Elemente metalice - zona Camera de Racord 1",
                                    checks: [
                                        {
                                            name: "Inspectie vizuala a elementelor metalice",
                                            frequency: "mar, iun, sept, dec",
                                        },
                                        {
                                            name: "Verificare suduri",
                                            frequency: "aug",
                                        },
                                        {
                                            name: "Curătare, grunduire si vopsire Inspectie vizuala a elementelor constructive",
                                            frequency: "sept",
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            name: "Camera de racord 2",
                            inspections: {
                                constructii_din_beton_pasarela_de_trecere_elementele_de_beton_aferente_golurilor_tehnologice_elementele_de_sustinere_zona_laterala_de_descarcare_amenajata_spre_raul_Dambovita_de_la_Camera_de_Racord_2:
                                    {
                                        name: "Constructii din beton - pasarela de trecere, elementele de beton aferente golurilor tehnologice, elemente de sustinere, zona laterala de descarcare amenajata spre raul Dambovita de la Camera de Racord 2",
                                        checks: [
                                            {
                                                name: "Inspectie vizuala a elementelor constructive",
                                                frequency:
                                                    "mar, iun, sept, dec",
                                            },
                                            {
                                                name: "Servicii de reparatii fisuri locale de suprafata",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Servicii de refacere etanseitate rosturi de suprafata, respectiv tratare si sigilare rosturi de dilatare pentru marirea durabilitatii in timp",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Reparatii tencuieli",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Aplicare strat bitum pentru refacere hidroizolatie",
                                                frequency: "aug",
                                            },
                                        ],
                                    },
                                elemente_metalice_zona_Camera_de_Racord_2: {
                                    name: "Elemente metalice - zona Camera de Racord 2",
                                    checks: [
                                        {
                                            name: "Inspectie vizuala a elementelor metalice",
                                            frequency: "mar, iun, sept, dec",
                                        },
                                        {
                                            name: "Verificare suduri",
                                            frequency: "aug",
                                        },
                                        {
                                            name: "Curătare, grunduire si vopsire Inspectie vizuala a elementelor constructive",
                                            frequency: "sept",
                                        },
                                    ],
                                },
                                echipamnete_hidromecanice_cu_manevrare_locala_sau_la_distanta_zona_Camera_de_Racord_2:
                                    {
                                        name: "Echipamnete hidromecanice - cu manevrare locala sau la distanta  - zona Camera de Racord 2",
                                        checks: [
                                            {
                                                name: "Inspectie vizuala",
                                                frequency:
                                                    "mar, iun, sept, dec",
                                            },
                                            {
                                                name: "Verificare echipamente culisante pe calea de rulare existenta",
                                                frequency:
                                                    "mar, iun, sept, dec",
                                            },
                                            {
                                                name: "Gresarea elementelor de contact",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Degivrarea elementelor de contact",
                                                frequency:
                                                    "ian, feb, mar, nov, dec",
                                            },
                                        ],
                                    },
                                constructii_din_beton_casetele_de_legatura_intre_CR2_si_CR3:
                                    {
                                        name: "Constructii din beton - casetele de legatura intre CR2 si CR3",
                                        checks: [
                                            {
                                                name: "Inspectie vizuala a elementelor constructive",
                                                frequency: "ian, dec",
                                            },
                                            {
                                                name: "Servicii de reparatii fisuri locale de suprafata",
                                                frequency: "mar",
                                            },
                                            {
                                                name: "Servicii de refacere etanseitate rosturi de suprafata, respectiv tratare si sigilare rosturi de dilatare pentru marirea durabilitatii in timp",
                                                frequency: "mar",
                                            },
                                            {
                                                name: "Reparatii tencuieli",
                                                frequency: "mar",
                                            },
                                            {
                                                name: "Aplicare strat bitum pentru refacere hidroizolatie",
                                                frequency: "mar",
                                            },
                                        ],
                                    },
                            },
                        },
                        {
                            name: "Camera de racord 3",
                            inspections: {
                                constructii_din_beton_casetele_de_legatura_intre_CR2_si_CR3:
                                    {
                                        name: "Constructii din beton - casetele de legatura intre CR2 si CR3",
                                        checks: [
                                            {
                                                name: "Inspectie vizuala a elementelor constructive",
                                                frequency: "ian, dec",
                                            },
                                            {
                                                name: "Servicii de reparatii fisuri locale de suprafata",
                                                frequency: "mar",
                                            },
                                            {
                                                name: "Servicii de refacere etanseitate rosturi de suprafata, respectiv tratare si sigilare rosturi de dilatare pentru marirea durabilitatii in timp",
                                                frequency: "mar",
                                            },
                                            {
                                                name: "Reparatii tencuieli",
                                                frequency: "mar",
                                            },
                                            {
                                                name: "Aplicare strat bitum pentru refacere hidroizolatie",
                                                frequency: "mar",
                                            },
                                        ],
                                    },
                                constructii_din_beton_pasarela_de_trecere_elementele_de_sustinere_zona_laterala_de_descarcare_amenajata_spre_raul_Dambovita_de_la_Camera_de_Racord_2:
                                    {
                                        name: "Constructii din beton - pasarela de trecere, elementele de sustinere - Camera de Racord 3",
                                        checks: [
                                            {
                                                name: "Inspectie vizuala a elementelor constructive",
                                                frequency:
                                                    "mar, iun, sept, dec",
                                            },
                                            {
                                                name: "Servicii de reparatii fisuri locale de suprafata",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Servicii de refacere etanseitate rosturi de suprafata, respectiv tratare si sigilare rosturi de dilatare pentru marirea durabilitatii in timp",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Reparatii tencuieli",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Aplicare strat bitum pentru refacere hidroizolatie",
                                                frequency: "aug",
                                            },
                                        ],
                                    },
                                constructii_din_beton_elementele_de_beton_aferente_golurilor_tehnologice_zona_laterala_de_descarcare_amenajata_spre_raul_Dambovita_de_la_Camera_de_Racord_3:
                                    {
                                        name: "Constructii din beton -  elementele de beton aferente golurilor tehnologice - zona laterala de descarcare amenajata spre raul Dambovita de la Camera de Racord 3",
                                        checks: [
                                            {
                                                name: "Inspectie vizuala a elementelor constructive",
                                                frequency: "ian, mar, dec",
                                            },
                                            {
                                                name: "Servicii de reparatii fisuri locale de suprafata",
                                                frequency: "mar",
                                            },
                                            {
                                                name: "Servicii de refacere etanseitate rosturi de suprafata, respectiv tratare si sigilare rosturi de dilatare pentru marirea durabilitatii in timp",
                                                frequency: "mar",
                                            },
                                            {
                                                name: "Reparatii tencuieli",
                                                frequency: "mar",
                                            },
                                            {
                                                name: "Aplicare strat bitum pentru refacere hidroizolatie",
                                                frequency: "mar",
                                            },
                                        ],
                                    },
                                elemente_metalice_zona_Camera_de_Racord_3: {
                                    name: "Elemente metalice - zona Camera de Racord 3",
                                    checks: [
                                        {
                                            name: "Inspectie vizuala a elementelor metalice",
                                            frequency: "mar, iun, sept, dec",
                                        },
                                        {
                                            name: "Verificare suduri",
                                            frequency: "aug",
                                        },
                                        {
                                            name: "Curătare, grunduire si vopsire Inspectie vizuala a elementelor constructive",
                                            frequency: "sept",
                                        },
                                    ],
                                },
                                echipamnete_hidromecanice_cu_manevrare_locala_sau_la_distanta_zona_Camera_de_Racord_3:
                                    {
                                        name: "Echipamnete hidromecanice - cu manevrare locala sau la distanta  - zona Camera de Racord 3",
                                        checks: [
                                            {
                                                name: "Inspectie vizuala",
                                                frequency:
                                                    "mar, iun, sept, dec",
                                            },
                                            {
                                                name: "Verificare echipamente culisante pe calea de rulare existenta",
                                                frequency:
                                                    "mar, iun, sept, dec",
                                            },
                                            {
                                                name: "Gresarea elementelor de contact",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Degivrarea elementelor de contact",
                                                frequency:
                                                    "ian, feb, mar, nov, dec",
                                            },
                                        ],
                                    },
                            },
                        },
                        {
                            name: "Camera de racord A4",
                            inspections: {
                                "Elemente metalice - zona Descarcator Camera A4":
                                    {
                                        name: "Elemente metalice - zona Descarcator Camera A4",
                                        checks: [
                                            {
                                                name: "Inspectie vizuala a elementelor metalice",
                                                frequency:
                                                    "mar, iun, sept, dec",
                                            },
                                            {
                                                name: "Verificare suduri",
                                                frequency: "aug",
                                            },
                                            {
                                                name: "Curătare, grunduire si vopsire Inspectie vizuala a elementelor constructive",
                                                frequency: "sept",
                                            },
                                        ],
                                    },
                                echipamnete_hidromecanice_cu_manevrare_locala_sau_la_distanta_zona_Descarcator_Camera_A4:
                                    {
                                        name: "Echipamnete hidromecanice - cu manevrare locala sau la distanta - zona Descarcator Camera A4",
                                        checks: [
                                            {
                                                name: "Inspectie vizuala",
                                                frequency:
                                                    "mar, iun, sept, dec",
                                            },
                                            {
                                                name: "Verificare echipamente culisante pe calea de rulare existenta",
                                                frequency:
                                                    "mar, iun, sept, dec",
                                            },
                                            {
                                                name: "Gresarea elementelor de contact",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Degivrarea elementelor de contact",
                                                frequency:
                                                    "ian, feb, mar, nov, dec",
                                            },
                                        ],
                                    },
                            },
                        },
                        {
                            name: "Capcana de pietris",
                            inspections: {
                                constructii_din_beton_camin_de_receptie_si_elementele_de_beton_aferente_golurilor_tehnologice_de_la_Capcana_de_Pietris:
                                    {
                                        name: "Constructii din beton - camin de receptie si elementele de beton aferente golurilor tehnologice de la Capcana de Pietris",
                                        checks: [
                                            {
                                                name: "Inspectie vizuala a elementelor constructive",
                                                frequency:
                                                    "mar, iun, sept, dec",
                                            },
                                            {
                                                name: "Servicii de reparatii fisuri locale de suprafata",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Servicii de refacere etanseitate rosturi de suprafata, respectiv tratare si sigilare rosturi de dilatare pentru marirea durabilitatii in timp",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Reparatii tencuieli",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Aplicare strat bitum pentru refacere hidroizolatie",
                                                frequency: "aug",
                                            },
                                        ],
                                    },
                                elemente_metalice_zona_Capcana_de_Pietris: {
                                    name: "Elemente metalice - zona Capcana de Pietris",
                                    checks: [
                                        {
                                            name: "Inspectie vizuala a elementelor metalice",
                                            frequency: "mar, iun, sept, dec",
                                        },
                                        {
                                            name: "Verificare suduri",
                                            frequency: "aug",
                                        },
                                        {
                                            name: "Curătare, grunduire si vopsire Inspectie vizuala a elementelor constructive",
                                            frequency: "sept",
                                        },
                                    ],
                                },
                                echipamnete_hidromecanice_cu_manevrare_locala_sau_la_distanta_zona_Capcana_de_Pietris:
                                    {
                                        name: "Echipamnete hidromecanice - cu manevrare locala sau la distanta - zona Capcana de Pietris",
                                        checks: [
                                            {
                                                name: "Inspectie vizuala",
                                                frequency:
                                                    "mar, iun, sept, dec",
                                            },
                                            {
                                                name: "Verificare echipamente culisante pe calea de rulare existenta",
                                                frequency:
                                                    "mar, iun, sept, dec",
                                            },
                                            {
                                                name: "Gresarea elementelor de contact",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Degivrarea elementelor de contact",
                                                frequency:
                                                    "ian, feb, mar, nov, dec",
                                            },
                                        ],
                                    },
                            },
                        },
                        {
                            name: "Canal de legatura",
                            inspections: {
                                constructii_din_beton_pasarele_de_trecere_trepte_elementele_de_beton_aferente_golurilor_tehnologice_tronsoanele_de_descarcare_amenajate_spre_raul_Dambovita_aferente_Canalului_de_legatura:
                                    {
                                        name: "Constructii din beton - pasarele de trecere, trepte, elementele de beton aferente golurilor tehnologice, tronsoanele de descarcare amenajate spre raul Dambovita aferente Canalului de legatura",
                                        checks: [
                                            {
                                                name: "Inspectie vizuala a elementelor constructive",
                                                frequency:
                                                    "mar, iun, sept, dec",
                                            },
                                            {
                                                name: "Servicii de reparatii fisuri locale de suprafata",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Servicii de refacere etanseitate rosturi de suprafata, respectiv tratare si sigilare rosturi de dilatare pentru marirea durabilitatii in timp",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Reparatii tencuieli",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Aplicare strat bitum pentru refacere hidroizolatie",
                                                frequency: "aug",
                                            },
                                        ],
                                    },
                                elemente_metalice_zona_Canal_de_legatura: {
                                    name: "Elemente metalice - zona Canal de legatura",
                                    checks: [
                                        {
                                            name: "Inspectie vizuala a elementelor metalice",
                                            frequency: "mar, iun, sept, dec",
                                        },
                                        {
                                            name: "Verificare suduri",
                                            frequency: "aug",
                                        },
                                        {
                                            name: "Curătare, grunduire si vopsire Inspectie vizuala a elementelor constructive",
                                            frequency: "sept",
                                        },
                                    ],
                                },
                                echipamnete_hidromecanice_cu_manevrare_locala_sau_la_distanta_zona_Canal_de_legatura:
                                    {
                                        name: "Echipamnete hidromecanice - cu manevrare locala sau la distanta - zona Canal de legatura",
                                        checks: [
                                            {
                                                name: "Inspectie vizuala",
                                                frequency:
                                                    "mar, iun, sept, dec",
                                            },
                                            {
                                                name: "Verificare echipamente culisante pe calea de rulare existenta",
                                                frequency:
                                                    "mar, iun, sept, dec",
                                            },
                                            {
                                                name: "Gresarea elementelor de contact",
                                                frequency: "apr, oct",
                                            },
                                            {
                                                name: "Degivrarea elementelor de contact",
                                                frequency:
                                                    "ian, feb, mar, nov, dec",
                                            },
                                        ],
                                    },
                            },
                        },
                    ],
                },
            },
        },
    },
};

// Configurare n8n Webhook
const WEBHOOKS = {
    production:
        "https://daminatech.app.n8n.cloud/webhook/aaa83a86-bf6f-4383-b686-20b7b82b381f",
    test: "https://daminatech.app.n8n.cloud/webhook/4deec761-6c95-4c55-96bb-fc51b85cbdac", // Înlocuiește cu URL-ul webhook de test
};

// Constants for repeated strings
const CSS_CLASSES = {
    INVALID: 'is-invalid',
    INVALID_FEEDBACK: 'invalid-feedback',
    HIDDEN_SECTION: 'hidden-section'
};

// Utility functions for DOM manipulation
const showElement = (element) => { if (element) element.style.display = "block"; };
const hideElement = (element) => { if (element) element.style.display = "none"; };

// Environment management
let isTestMode = false;

// Loading state management
function showLoading() {
    // Update button state
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('submitBtnText');
    const btnLoader = document.getElementById('submitBtnLoader');
    
    if (submitBtn && btnText && btnLoader) {
        submitBtn.disabled = true;
        btnText.classList.add('d-none');
        btnLoader.classList.remove('d-none');
    }
    
    // Create and show overlay
    const overlay = document.createElement('div');
    overlay.id = 'loadingOverlay';
    overlay.className = 'form-loading-overlay';
    
    const loadingContent = document.createElement('div');
    loadingContent.className = 'loading-content';
    
    loadingContent.innerHTML = `
        <div class="spinner-border text-primary loading-spinner" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div class="loading-text">Se trimite raportul...</div>
        <div class="loading-subtext">${isTestMode ? 'Folosind webhook de test' : 'Conectare la server'}</div>
    `;
    
    overlay.appendChild(loadingContent);
    document.body.appendChild(overlay);
    
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
}

function hideLoading() {
    // Reset button state
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('submitBtnText');
    const btnLoader = document.getElementById('submitBtnLoader');
    
    if (submitBtn && btnText && btnLoader) {
        submitBtn.disabled = false;
        btnText.classList.remove('d-none');
        btnLoader.classList.add('d-none');
    }
    
    // Remove overlay
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.remove();
    }
    
    // Restore scrolling
    document.body.style.overflow = '';
}

function getWebhookURL() {
    return isTestMode ? WEBHOOKS.test : WEBHOOKS.production;
}

function toggleTestMode(enabled) {
    isTestMode = enabled;
    const banner = document.getElementById("testModeBanner");
    const toggle = document.getElementById("testModeToggle");

    if (enabled) {
        banner.style.display = "block";
        document.body.style.backgroundColor = "#fff8e1";
        document.body.classList.add("test-mode");
        console.log(
            "🧪 TEST MODE ENABLED - Using test webhook:",
            WEBHOOKS.test
        );

        // Add test data button
        addTestDataButton();
    } else {
        banner.style.display = "none";
        document.body.style.backgroundColor = "";
        document.body.classList.remove("test-mode");
        console.log(
            "✅ PRODUCTION MODE - Using production webhook:",
            WEBHOOKS.production
        );

        // Remove test data button
        removeTestDataButton();
    }

    // Store preference
    localStorage.setItem("testMode", enabled);
}

function addTestDataButton() {
    // Check if button already exists
    if (document.getElementById("fillTestDataBtn")) return;

    const banner = document.getElementById("testModeBanner");
    const button = document.createElement("button");
    button.id = "fillTestDataBtn";
    button.type = "button";
    button.className = "btn btn-outline-warning btn-sm ms-2";
    button.innerHTML = "🧪 Completează cu date de test";
    button.onclick = fillTestData;

    banner.appendChild(button);
}

function removeTestDataButton() {
    const button = document.getElementById("fillTestDataBtn");
    if (button) button.remove();
}

function fillTestData() {
    console.log("🧪 Filling form with test data...");

    // Set team members
    document.getElementById("teamMembers").value = "John Doe, Jane Smith";

    // Set contract
    const contractSelect = document.getElementById("contractSelect");
    contractSelect.value = "industrial";
    contractSelect.dispatchEvent(new Event("change"));

    // Wait a bit for locations to populate, then set location
    setTimeout(() => {
        const locationSelect = document.getElementById("locationSelect");
        locationSelect.value = "glina";
        locationSelect.dispatchEvent(new Event("change"));

        // Wait a bit for buildings to populate, then set building
        setTimeout(() => {
            const buildingSelect = document.getElementById("buildingSelect");
            if (buildingSelect.options.length > 1) {
                buildingSelect.selectedIndex = 1; // Select first building
                buildingSelect.dispatchEvent(new Event("change"));

                // Set activity type after building is selected
                setTimeout(() => {
                    const activityType = document.getElementById("activityInspection");
                    activityType.checked = true;
                    activityType.dispatchEvent(new Event("change"));

                    // Set zone
                    document.getElementById("zoneInput").value = "Zona Test A";

                    // Wait for inspection type to populate, then select one
                    setTimeout(() => {
                        const inspectionTypeSelect = document.getElementById("inspectionTypeSelect");
                        if (inspectionTypeSelect.options.length > 1) {
                            inspectionTypeSelect.selectedIndex = 1; // Select first inspection type
                            inspectionTypeSelect.dispatchEvent(new Event("change"));

                            // Wait for checks to populate, then select some
                            setTimeout(() => {
                                const checkboxes = document.querySelectorAll('#checksContainer input[type="checkbox"]');
                                if (checkboxes.length > 0) {
                                    // Select first 2-3 checkboxes
                                    for (let i = 0; i < Math.min(3, checkboxes.length); i++) {
                                        checkboxes[i].checked = true;
                                    }
                                }

                                // Set problems to "da" and fill problem fields
                                const problemsYes = document.getElementById("problemsYes");
                                if (problemsYes) {
                                    problemsYes.checked = true;
                                    problemsYes.dispatchEvent(new Event("change"));

                                    // Wait for problem fields to show, then fill them
                                    setTimeout(() => {
                                        const problemDescription = document.getElementById("problemDescription");
                                        const technicalSolution = document.getElementById("technicalSolution");
                                        const problemMaterials = document.getElementById("problemMaterials");
                                        const workCompletedYes = document.getElementById("workCompletedYes");

                                        if (problemDescription) {
                                            problemDescription.value = "Fisuri minore observate pe partea de est a structurii. Necesită intervenție preventivă.";
                                        }
                                        if (technicalSolution) {
                                            technicalSolution.value = "Aplicare material sigilant pe fisurile identificate. Monitorizare periodică pentru evitarea extinderii.";
                                        }
                                        if (problemMaterials) {
                                            problemMaterials.value = "Material sigilant flexibil, pensule pentru aplicare, echipament de protecție individuală.";
                                        }
                                        if (workCompletedYes) {
                                            workCompletedYes.checked = true;
                                        }
                                    }, 100);
                                }
                            }, 200);
                        }
                    }, 200);
                }, 100);
            }
        }, 200);
    }, 200);

    console.log("✅ Test data filled successfully");
}

// Funcție pentru trimiterea datelor către n8n webhook
async function submitToN8N(formData) {
    try {
        const webhookURL = getWebhookURL();
        console.log(
            `📤 Submitting to ${isTestMode ? "TEST" : "PRODUCTION"} webhook:`,
            webhookURL
        );

        const response = await fetch(webhookURL, {
            method: "POST",
            body: formData, // Browser will set Content-Type to multipart/form-data
        });

        if (!response.ok) {
            throw new Error(
                `Eroare la trimiterea datelor: ${response.statusText}`
            );
        }

        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

// Funcție pentru obținerea verificărilor selectate
function getSelectedChecks() {
    const checks = [];
    document
        .querySelectorAll(".form-check-input:checked")
        .forEach((checkbox) => {
            checks.push(checkbox.nextElementSibling.textContent.trim());
        });
    return checks.join(", ");
}

// Functie pentru afisarea verificarilor specifice unui tip de inspectie
function showInspectionChecks(contractId, inspectionTypeId) {
    const checksContainer = document.querySelector(
        "#generalChecksSection .checks-container"
    );
    if (!checksContainer) return;

    checksContainer.innerHTML = "";

    const contract = data.contracts[contractId];
    const inspectionType = contract?.inspectionTypes?.[inspectionTypeId];
    if (!inspectionType) {
        document.getElementById("generalChecksSection").style.display = "none";
        return;
    }

    inspectionType.checks.forEach((check) => {
        const checkName = check.name;
        const checkDiv = document.createElement("div");
        checkDiv.className = "form-check";

        checkDiv.innerHTML = `
            <input class="form-check-input" type="checkbox" name="generalChecks" id="check_${checkName.replace(
                /\s+/g,
                "_"
            )}" value="${checkName}">
            <label class="form-check-label" for="check_${checkName.replace(
                /\s+/g,
                "_"
            )}">
                ${checkName}
            </label>
        `;
        checksContainer.appendChild(checkDiv);
    });

    document.getElementById("generalChecksSection").style.display = "block";
}

function initForm() {
    const form = document.getElementById("constructionForm");
    if (!form) {
        console.error("Formularul principal nu a fost găsit.");
        return;
    }

    // --- Populate contract select at the very start ---
    const contractSelect = document.getElementById("contractSelect");
    contractSelect.innerHTML = '<option value="">Alegeți...</option>';
    Object.entries(data.contracts).forEach(([id, contract]) => {
        contractSelect.innerHTML += `<option value="${id}">${contract.name}</option>`;
    });

    // --- Get all form elements ---

    // Activity type radios
    const activityTypeRadios = form.querySelectorAll(
        'input[name="tipActivitate"]'
    );
    if (activityTypeRadios.length) {
        activityTypeRadios.forEach((radio) => {
            radio.addEventListener("change", function () {
                if (this.value === "inspectie") {
                    // Clear intervention fields when switching to inspection
                    if (form.elements["operatiuniIntreprinse"])
                        form.elements["operatiuniIntreprinse"].value = "";
                    if (form.elements["materialeSculeFolosite"])
                        form.elements["materialeSculeFolosite"].value = "";
                }
            });
        });
    }
    const locationSection = document.getElementById("locationSection");
    const locationSelect = document.getElementById("locationSelect");
    const buildingSection = document.getElementById("buildingSection");
    const buildingSelect = document.getElementById("buildingSelect");
    const zoneInputSection = document.getElementById("zoneInputSection");
    const zoneInput = document.getElementById("zoneInput");
    const activityRadios = document.querySelectorAll(
        'input[name="tipActivitate"]'
    );
    const inspectionDetailsSection = document.getElementById(
        "inspectionDetailsSection"
    );
    const interventionDetailsSection = document.getElementById(
        "interventionDetailsSection"
    );
    const inspectionTypeSection = document.getElementById(
        "inspectionTypeSection"
    );
    const inspectionTypeSelect = document.getElementById(
        "inspectionTypeSelect"
    );
    const generalChecksSection = document.getElementById(
        "generalChecksSection"
    );
    const checksContainer = document.getElementById("checksContainer");
    const inspectionProblemsSection = document.getElementById(
        "inspectionProblemsSection"
    );
    const problemRadios = document.querySelectorAll('input[name="probleme"]');
    const problemsDetails = document.getElementById("problemsDetails");
    const problemDescription = document.getElementById("problemDescription");
    const technicalSolution = document.getElementById("technicalSolution");
    const problemMaterials = document.getElementById("problemMaterials");
    const workCompletedRadios = document.querySelectorAll(
        'input[name="lucrareFinalizata"]'
    );
    const photoUpload = document.getElementById("photoUpload");
    const photoPreview = document.getElementById("photo-preview");
    const submitButton = document.getElementById("submitBtn");

    // --- Helper functions for resetting sections ---
    const resetSection = (section, ...fields) => {
        if (section) section.style.display = "none";
        fields.forEach((field) => {
            if (field) {
                if (field.tagName === "SELECT")
                    field.innerHTML =
                        '<option value="" selected disabled>Alegeți...</option>';
                if (field.tagName === "INPUT" || field.tagName === "TEXTAREA")
                    field.value = "";
                if (field.id === "checksContainer") field.innerHTML = "";
            }
        });
    };

    // --- Event Listeners ---

    // Proper form submit handler
    form.addEventListener("submit", async function (e) {
        // If probleme is 'nu', clear problem fields before collecting data
        const problemeValue = form.querySelector(
            'input[name="probleme"]:checked'
        )?.value;
        if (problemeValue === "nu") {
            form.elements["problemeIdentificate"].value = "";
            form.elements["solutieTehnica"].value = "";
            form.elements["problemeMateriale"].value = "";
            // Also clear the 'materiale' field if it exists (sometimes named 'materiale' or 'problemMaterials')
            if (form.elements["materiale"])
                form.elements["materiale"].value = "";
            if (form.elements["problemMaterials"])
                form.elements["problemMaterials"].value = "";
            // Uncheck lucrareFinalizata radios
            form.querySelectorAll('input[name="lucrareFinalizata"]').forEach(
                (radio) => (radio.checked = false)
            );
        }
        e.preventDefault();
        const formData = new FormData(form);
        // Patch pentru timezone date picker/Airtable
        let dateStr = formData.get("dataActivitate");
        if (dateStr && !dateStr.includes("T")) {
            formData.set("dataActivitate", dateStr + "T12:00:00");
        }
        // Remove previous validation state
        form.querySelectorAll(`.${CSS_CLASSES.INVALID}`).forEach((el) =>
            el.classList.remove(CSS_CLASSES.INVALID)
        );
        // Hide all invalid-feedback
        form.querySelectorAll(`.${CSS_CLASSES.INVALID_FEEDBACK}`).forEach(
            (el) => hideElement(el)
        );

        // Find all required and visible fields
        const requiredFields = form.querySelectorAll(
            '[required]:not([type="hidden"])'
        );
        let firstInvalid = null;
        let valid = true;

        // Custom validation for Verificări necesare (checks)
        const checksContainer = document.getElementById("checksContainer");
        const checks = checksContainer
            ? checksContainer.querySelectorAll('input[type="checkbox"]')
            : [];
        const checksInvalidFeedback = document.getElementById(
            "checksInvalidFeedback"
        );
        if (checks.length > 0) {
            const checked = Array.from(checks).some((chk) => chk.checked);
            checksInvalidFeedback.style.display = "none";
            if (!checked) {
                checksInvalidFeedback.style.display = "block";
                checks[0].focus();
                valid = false;
                if (!firstInvalid) firstInvalid = checks[0];
            }
        }

        // Custom validation for photo upload (require at least one photo in preview)
        const photoPreview = document.getElementById("photo-preview");
        const photoUploadInvalidFeedback = document.getElementById(
            "photoUploadInvalidFeedback"
        );
        if (photoPreview) {
            photoUploadInvalidFeedback.style.display = "none";
            if (!photoPreview.children || photoPreview.children.length === 0) {
                photoUploadInvalidFeedback.style.display = "block";
                // Try to focus the upload button for accessibility
                const uploadBtn = document.getElementById("fileUploadButton");
                if (uploadBtn) uploadBtn.focus();
                valid = false;
                if (!firstInvalid) firstInvalid = uploadBtn || photoPreview;
            }
        }

        requiredFields.forEach((field) => {
            // Debug log for each field being validated

            // If the field is not visible, skip it
            if (field.offsetParent === null) return;
            // For checkboxes/radios, check if any in the group is checked
            if (
                (field.type === "radio" || field.type === "checkbox") &&
                field.name
            ) {
                const group = form.querySelectorAll(`[name="${field.name}"]`);
                const checked = Array.from(group).some(
                    (input) => input.checked
                );
                if (!checked) {
                    group.forEach((input) => input.classList.add("is-invalid"));
                    if (!firstInvalid) firstInvalid = field;
                    valid = false;
                }
            } else if (field.tagName === "SELECT") {
                // For selects, check for empty value or disabled default option
                const feedback = field.nextElementSibling;
                if (
                    !field.value ||
                    field.value === "" ||
                    field.options[field.selectedIndex].disabled
                ) {
                    field.classList.add(CSS_CLASSES.INVALID);
                    if (
                        feedback &&
                        feedback.classList.contains(CSS_CLASSES.INVALID_FEEDBACK)
                    ) {
                        showElement(feedback);
                    }
                    if (!firstInvalid) firstInvalid = field;
                    valid = false;
                } else {
                    // If valid, remove error state
                    field.classList.remove(CSS_CLASSES.INVALID);
                    if (
                        feedback &&
                        feedback.classList.contains(CSS_CLASSES.INVALID_FEEDBACK)
                    ) {
                        hideElement(feedback);
                    }
                }
            } else if (!field.value) {
                field.classList.add(CSS_CLASSES.INVALID);
                if (!firstInvalid) firstInvalid = field;
                valid = false;
            }
        });

        if (!valid) {
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        // --- Add 'faza' and 'frecventa' to formData before submission ---
        const contractId = form.elements["contract"]?.value;
        const locationId = form.elements["locatie"]?.value;
        const buildingName = form.elements["cladire"]?.value;
        const inspectionTypeId = form.elements["tipInspectie"]?.value;
        let fazaValue = "";
        let frecventaValue = "";

        if (contractId && data.contracts[contractId]) {
            const contract = data.contracts[contractId];
            if (contractId === "caseta") {
                // Caseta: faza from building, frecventa and verificari from inspection in building
                if (
                    locationId &&
                    contract.locations[locationId] &&
                    buildingName
                ) {
                    const building = contract.locations[
                        locationId
                    ].buildings.find((b) => b.name === buildingName);
                    if (building && building.faza) {
                        fazaValue = building.faza;
                    }
                    if (
                        building &&
                        building.inspections &&
                        inspectionTypeId &&
                        building.inspections[inspectionTypeId]
                    ) {
                        const inspection =
                            building.inspections[inspectionTypeId];
                        frecventaValue = inspection.frequency || "";
                        // Add checks/verificari for caseta
                        if (
                            inspection.checks &&
                            Array.isArray(inspection.checks)
                        ) {
                            formData.set(
                                "verificari",
                                inspection.checks
                                    .map((c) => (c.name ? c.name : c))
                                    .join(", ")
                            );
                        }
                    }
                }
            } else {
                // Regular contracts: faza from building, frecventa from global inspectionTypes
                if (
                    locationId &&
                    contract.locations[locationId] &&
                    buildingName
                ) {
                    const building = contract.locations[
                        locationId
                    ].buildings.find((b) => b.name === buildingName);
                    if (building && building.faza) {
                        fazaValue = building.faza;
                    }
                }
                if (
                    inspectionTypeId &&
                    contract.inspectionTypes &&
                    contract.inspectionTypes[inspectionTypeId]
                ) {
                    const inspectionType =
                        contract.inspectionTypes[inspectionTypeId];
                    frecventaValue = inspectionType.frequency || "";
                }
            }
        }
        if (fazaValue) formData.set("faza", fazaValue);
        if (frecventaValue) formData.set("frecventa", frecventaValue);

        // Always collect only the selected checks for 'verificari'
        const selectedChecks = Array.from(
            document.querySelectorAll(
                '#checksContainer input[type="checkbox"]:checked'
            )
        ).map((cb) => cb.nextElementSibling.textContent.trim());
        if (selectedChecks.length > 0) {
            formData.set("verificari", selectedChecks.join(", "));
        } else {
            formData.delete("verificari"); // Remove if none selected
        }

        // For 'caseta', set frecventa as joined frequencies of selected checks
        if (
            contractId === "caseta" &&
            contractId &&
            data.contracts[contractId]
        ) {
            const contract = data.contracts[contractId];
            if (locationId && contract.locations[locationId] && buildingName) {
                const building = contract.locations[locationId].buildings.find(
                    (b) => b.name === buildingName
                );
                if (
                    building &&
                    building.inspections &&
                    inspectionTypeId &&
                    building.inspections[inspectionTypeId]
                ) {
                    const inspection = building.inspections[inspectionTypeId];
                    // Find frequencies for selected checks
                    const selectedFrequencies = inspection.checks
                        .filter((check) => selectedChecks.includes(check.name))
                        .map((check) => check.frequency)
                        .filter(Boolean);
                    if (selectedFrequencies.length > 0) {
                        formData.set(
                            "frecventa",
                            selectedFrequencies.join("; ")
                        );
                    } else {
                        formData.delete("frecventa");
                    }
                }
            }
        }

        try {
            // Show loading state
            showLoading();
            
            await submitToN8N(formData);
            
            // Hide loading and show success
            hideLoading();
            alert("Felicitari! Raportul a fost trimis cu succes.");
            setTimeout(() => window.location.reload(), 0);
            // form.reset();
            document
                .querySelectorAll(".hidden-section")
                .forEach((el) => (el.style.display = "none"));
            if (typeof photoPreview !== "undefined")
                photoPreview.innerHTML = "";
        } catch (error) {
            // Hide loading and show error
            hideLoading();
            console.error("Submission failed:", error);
            alert(
                "Eroare la trimiterea formularului. Verificați consola pentru detalii."
            );
        }
    });

    // 1. Contract Change
    contractSelect.addEventListener("change", () => {
        resetSection(buildingSection, buildingSelect);
        resetSection(zoneInputSection, zoneInput);

        const contractId = contractSelect.value;
        const contract = data.contracts[contractId];
        locationSelect.innerHTML =
            '<option value="" selected disabled>Alegeți...</option>'; // Reset locations

        if (contract && contract.locations) {
            Object.entries(contract.locations).forEach(([id, loc]) => {
                locationSelect.innerHTML += `<option value="${id}">${loc.name}</option>`;
            });
            locationSection.style.display = "block";
        } else {
            locationSection.style.display = "none";
        }
    });

    // 2. Location Change
    locationSelect.addEventListener("change", () => {
        resetSection(zoneInputSection, zoneInput);
        const contractId = contractSelect.value;
        const locationId = locationSelect.value;
        const contract = data.contracts[contractId];
        buildingSelect.innerHTML =
            '<option value="" selected disabled>Alegeți...</option>'; // Reset buildings

        if (
            contract &&
            contract.locations[locationId] &&
            contract.locations[locationId].buildings
        ) {
            contract.locations[locationId].buildings.forEach((building) => {
                buildingSelect.innerHTML += `<option value="${building.name}">${building.name}</option>`;
            });
            buildingSection.style.display = "block";
        } else {
            buildingSection.style.display = "none";
        }
    });

    // 3. Building Change
    buildingSelect.addEventListener("change", () => {
        const contractId = contractSelect.value;
        const locationId = locationSelect.value;
        const buildingName = buildingSelect.value;

        if (!buildingName) return;

        // Show zone input for non-caseta contracts
        if (contractId !== "caseta") {
            zoneInputSection.style.display = "block";
            return;
        }

        // For caseta contract, show inspection types specific to the selected building
        const contract = data.contracts[contractId];
        if (!contract || !contract.locations[locationId]) return;

        // Find the selected building
        const building = contract.locations[locationId].buildings.find(
            (b) => b.name === buildingName
        );
        if (!building || !building.inspections) return;

        // Populate inspection types from the building's inspections
        inspectionTypeSection.style.display = "block";
        inspectionTypeSelect.innerHTML =
            '<option value="" selected disabled>Alegeți...</option>';

        Object.entries(building.inspections).forEach(([id, inspection]) => {
            inspectionTypeSelect.innerHTML += `<option value="${id}">${inspection.name}</option>`;
        });

        // Show inspection details section if not already shown
        inspectionDetailsSection.style.display = "block";
        inspectionProblemsSection.style.display = "block";
    });

    // 4. Activity Type Change (Inspection/Intervention)
    activityRadios.forEach((radio) => {
        radio.addEventListener("change", () => {
            const activityType = radio.value;
            if (activityType === "inspectie") {
                inspectionDetailsSection.style.display = "block";
                inspectionProblemsSection.style.display = "block";
                interventionDetailsSection.style.display = "none";
                const contractId = contractSelect.value;
                const contract = data.contracts[contractId];
                if (contract && contract.inspectionTypes) {
                    inspectionTypeSection.style.display = "block";
                    inspectionTypeSelect.innerHTML =
                        '<option value="" selected disabled>Alegeți...</option>';
                    Object.entries(contract.inspectionTypes).forEach(
                        ([id, type]) => {
                            inspectionTypeSelect.innerHTML += `<option value="${id}">${type.name}</option>`;
                        }
                    );
                }
                // Always set required on Tip Inspecție select for inspectie
                inspectionTypeSelect.setAttribute("required", "required");
                // Remove required from interventie fields
                document
                    .getElementsByName("operatiuniIntreprinse")[0]
                    ?.removeAttribute("required");
                document
                    .getElementsByName("materialeSculeFolosite")[0]
                    ?.removeAttribute("required");
                // Problems section: only 'probleme' is required by default, others handled by probleme change
                document
                    .querySelectorAll('input[name="probleme"]')
                    .forEach((r) => r.setAttribute("required", "required"));
                document
                    .getElementsByName("problemeIdentificate")[0]
                    ?.removeAttribute("required");
                document
                    .getElementsByName("solutieTehnica")[0]
                    ?.removeAttribute("required");
                document
                    .getElementsByName("problemeMateriale")[0]
                    ?.removeAttribute("required");
                document
                    .querySelectorAll('input[name="lucrareFinalizata"]')
                    .forEach((r) => r.removeAttribute("required"));
            } else if (activityType === "interventie") {
                inspectionDetailsSection.style.display = "none";
                inspectionProblemsSection.style.display = "none";
                interventionDetailsSection.style.display = "block";
                // Remove required from Tip Inspecție select for interventie
                inspectionTypeSelect.removeAttribute("required");
                // Add required to interventie fields
                document
                    .getElementsByName("operatiuniIntreprinse")[0]
                    ?.setAttribute("required", "required");
                document
                    .getElementsByName("materialeSculeFolosite")[0]
                    ?.setAttribute("required", "required");
                // Remove required from all problems section fields
                document
                    .querySelectorAll('input[name="probleme"]')
                    .forEach((r) => r.removeAttribute("required"));
                document
                    .getElementsByName("problemeIdentificate")[0]
                    ?.removeAttribute("required");
                document
                    .getElementsByName("solutieTehnica")[0]
                    ?.removeAttribute("required");
                document
                    .getElementsByName("problemeMateriale")[0]
                    ?.removeAttribute("required");
                document
                    .querySelectorAll('input[name="lucrareFinalizata"]')
                    .forEach((r) => r.removeAttribute("required"));

                // Reset sections below
                resetSection(generalChecksSection, checksContainer);
                resetSection(
                    problemsDetails,
                    problemDescription,
                    technicalSolution,
                    problemMaterials
                );
                problemRadios.forEach((r) => (r.checked = false));
                workCompletedRadios.forEach((r) => (r.checked = false));
            }
        });
    });

    // 5. Inspection Type Change
    inspectionTypeSelect.addEventListener("change", () => {
        const contractId = contractSelect.value;
        const locationId = locationSelect.value;
        const buildingName = buildingSelect.value;
        const inspectionTypeId = inspectionTypeSelect.value;

        checksContainer.innerHTML = ""; // Reset checks
        generalChecksSection.style.display = "none";

        if (!contractId || !inspectionTypeId) {
            return;
        }

        if (contractId === "caseta") {
            // Handle caseta contract with building-specific inspections
            const contract = data.contracts[contractId];
            if (!contract || !contract.locations[locationId]) return;

            // Find the selected building
            const building = contract.locations[locationId].buildings.find(
                (b) => b.name === buildingName
            );
            if (!building || !building.inspections) return;

            // Get the selected inspection
            const inspection = building.inspections[inspectionTypeId];
            if (!inspection || !inspection.checks) return;

            // Add checkboxes for each check in the inspection with frequencies
            inspection.checks.forEach((check, index) => {
                const checkObj =
                    typeof check === "string"
                        ? { name: check, frequency: "lunar" }
                        : check;
                const checkId = `check_${inspectionTypeId}_${index}`;
                checksContainer.innerHTML += `
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" name="verificari" 
                               id="${checkId}" value="${checkObj.name.replace(
                    /"/g,
                    "&quot;"
                )}">
                        <label class="form-check-label" for="${checkId}">
                            ${checkObj.name}
                        </label>
                    </div>`;
            });
            generalChecksSection.style.display = "block";
        } else {
            // Handle regular contracts with global inspection types
            const contract = data.contracts[contractId];
            if (!contract || !contract.inspectionTypes) return;

            const inspectionType = contract.inspectionTypes[inspectionTypeId];
            if (!inspectionType || !inspectionType.checks) return;

            // Add checkboxes for each check with frequencies
            inspectionType.checks.forEach((check, index) => {
                const checkObj =
                    typeof check === "string"
                        ? { name: check, frequency: "lunar" }
                        : check;
                const checkId = `check_${inspectionTypeId}_${index}`;
                checksContainer.innerHTML += `
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" name="verificari" 
                               id="${checkId}" value="${checkObj.name.replace(
                    /"/g,
                    "&quot;"
                )}">
                        <label class="form-check-label" for="${checkId}">
                            ${checkObj.name}
                        </label>
                    </div>`;
            });
            generalChecksSection.style.display = "block";
        }
    });

    // 6. Identified Problems Change (Yes/No)
    problemRadios.forEach((radio) => {
        radio.addEventListener("change", () => {
            if (radio.value === "da" && radio.checked) {
                problemsDetails.style.display = "block";
                // Set required on all fields in the problems section
                document
                    .getElementsByName("problemeIdentificate")[0]
                    ?.setAttribute("required", "required");
                document
                    .getElementsByName("solutieTehnica")[0]
                    ?.setAttribute("required", "required");
                document
                    .getElementsByName("problemeMateriale")[0]
                    ?.setAttribute("required", "required");
                document
                    .querySelectorAll('input[name="lucrareFinalizata"]')
                    .forEach((r) => r.setAttribute("required", "required"));
            } else {
                problemsDetails.style.display = "none";
                // Remove required from all fields in the problems section
                document
                    .getElementsByName("problemeIdentificate")[0]
                    ?.removeAttribute("required");
                document
                    .getElementsByName("solutieTehnica")[0]
                    ?.removeAttribute("required");
                document
                    .getElementsByName("problemeMateriale")[0]
                    ?.removeAttribute("required");
                document
                    .querySelectorAll('input[name="lucrareFinalizata"]')
                    .forEach((r) => r.removeAttribute("required"));
            }
        });
    });

    // --- Photo Upload Logic with Compression ---
    
    // Image compression function
    function compressImage(file, maxWidth = 1920, maxHeight = 1080, quality = 0.8) {
        return new Promise((resolve) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();
            
            img.onload = () => {
                // Calculate new dimensions
                let { width, height } = img;
                
                if (width > height) {
                    if (width > maxWidth) {
                        height = (height * maxWidth) / width;
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width = (width * maxHeight) / height;
                        height = maxHeight;
                    }
                }
                
                canvas.width = width;
                canvas.height = height;
                
                // Draw and compress
                ctx.drawImage(img, 0, 0, width, height);
                
                canvas.toBlob((blob) => {
                    // Create new file with compressed data
                    const compressedFile = new File([blob], file.name, {
                        type: 'image/jpeg',
                        lastModified: Date.now()
                    });
                    resolve(compressedFile);
                }, 'image/jpeg', quality);
            };
            
            img.src = URL.createObjectURL(file);
        });
    }
    
    async function handleFiles(files) {
        // Only keep the first 6 files if more are selected
        const filesToProcess = Array.from(files).slice(0, 6);

        // Clear existing previews if we're replacing them
        if (filesToProcess.length > 0) {
            photoPreview.innerHTML = "";
        }

        // Show compression message if files are large
        const hasLargeFiles = filesToProcess.some(file => file.size > 2 * 1024 * 1024); // 2MB
        if (hasLargeFiles) {
            const compressionMsg = document.createElement('div');
            compressionMsg.className = 'alert alert-info';
            compressionMsg.innerHTML = '<small>📷 Optimizing large images...</small>';
            photoPreview.appendChild(compressionMsg);
        }

        const processedFiles = [];
        
        for (let i = 0; i < filesToProcess.length; i++) {
            const file = filesToProcess[i];
            
            // Validate file type
            if (!file.type.startsWith('image/')) {
                alert(`${file.name} nu este o imagine validă.`);
                continue;
            }
            
            // Check original file size (warn if very large)
            if (file.size > 10 * 1024 * 1024) { // 10MB
                const proceed = confirm(`${file.name} este foarte mare (${formatFileSize(file.size)}). Dorești să continui? Imaginea va fi optimizată automat.`);
                if (!proceed) continue;
            }
            
            try {
                // Compress image if it's large or not already JPEG
                let processedFile = file;
                if (file.size > 1024 * 1024 || !file.type.includes('jpeg')) { // 1MB threshold
                    processedFile = await compressImage(file);
                }
                
                processedFiles.push(processedFile);
                
                // Create preview
                const reader = new FileReader();
                reader.onload = (e) => {
                    const container = document.createElement("div");
                    container.className = "preview-image-container";

                    const img = document.createElement("img");
                    img.src = e.target.result;
                    img.className = "preview-image";
                    img.alt = `Preview ${i + 1}`;

                    const removeBtn = document.createElement("button");
                    removeBtn.className = "remove-image";
                    removeBtn.innerHTML = "×";
                    removeBtn.title = "Remove image";
                    removeBtn.onclick = (e) => {
                        e.stopPropagation();
                        container.remove();
                        // Remove from processed files
                        const index = processedFiles.indexOf(processedFile);
                        if (index > -1) processedFiles.splice(index, 1);
                        updateFileInput(processedFiles);
                    };

                    const fileInfo = document.createElement("div");
                    fileInfo.className = "file-info";
                    
                    // Show compression savings if file was compressed
                    if (processedFile.size < file.size) {
                        const savings = ((file.size - processedFile.size) / file.size * 100).toFixed(1);
                        fileInfo.innerHTML = `${file.name}<br><small>Optimizat: ${formatFileSize(processedFile.size)} (-${savings}%)</small>`;
                    } else {
                        fileInfo.textContent = `${file.name} (${formatFileSize(processedFile.size)})`;
                    }

                    container.appendChild(img);
                    container.appendChild(removeBtn);
                    container.appendChild(fileInfo);
                    
                    // Remove compression message if it exists
                    const compressionMsg = photoPreview.querySelector('.alert-info');
                    if (compressionMsg) compressionMsg.remove();
                    
                    photoPreview.appendChild(container);
                };
                reader.readAsDataURL(processedFile);
                
            } catch (error) {
                console.error('Error processing image:', error);
                alert(`Eroare la procesarea imaginii ${file.name}`);
            }
        }
        
        // Update the file input with processed files
        updateFileInput(processedFiles);
    }
    
    // Helper function to update file input with processed files
    function updateFileInput(files) {
        const dataTransfer = new DataTransfer();
        files.forEach(file => dataTransfer.items.add(file));
        photoUpload.files = dataTransfer.files;
        
        // Update file count
        const fileCount = document.getElementById("file-count");
        if (fileCount) {
            const totalSize = files.reduce((sum, file) => sum + file.size, 0);
            fileCount.innerHTML = files.length > 0 ? 
                `${files.length} fișiere (${formatFileSize(totalSize)} total)` : '';
        }
    }

    // Helper function to format file size
    function formatFileSize(bytes) {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    }

    // Handle file input change
    photoUpload.addEventListener("change", async () => {
        if (photoUpload.files.length > 0) {
            await handleFiles(photoUpload.files);
        }
    });

    // Handle remove image button clicks
    document.addEventListener("click", async (e) => {
        try {
            if (e.target.classList.contains("remove-image")) {
                const container = e.target.closest(".preview-image-container");
                if (container) {
                    container.remove();

                    // Update the file count display
                    const fileCount = document.getElementById("file-count");
                    const remainingImages = document.querySelectorAll(
                        ".preview-image-container"
                    ).length;
                    if (fileCount) {
                        fileCount.textContent =
                            remainingImages > 0
                                ? `${remainingImages} fișiere selectate`
                                : "";
                    }

                    // Update the file input files
                    const dataTransfer = new DataTransfer();
                    document
                        .querySelectorAll(".preview-image-container")
                        .forEach((img) => {
                            const file = img.dataset.file;
                            if (file) {
                                dataTransfer.items.add(file);
                            }
                        });
                }
            } // End image removal logic
        } catch (error) {
            // Only handle errors related to image removal
            console.error("Image removal failed:", error);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Clear all radio buttons on load for cross-browser consistency
    document
        .querySelectorAll("input[type=radio]")
        .forEach((radio) => (radio.checked = false));

    // Initialize test mode
    const testModeToggle = document.getElementById("testModeToggle");
    const savedTestMode = localStorage.getItem("testMode") === "true";

    testModeToggle.checked = savedTestMode;
    toggleTestMode(savedTestMode);

    testModeToggle.addEventListener("change", (e) => {
        toggleTestMode(e.target.checked);
    });

    initForm();
});
