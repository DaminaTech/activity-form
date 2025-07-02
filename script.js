// Structura de date principala
const data = {
    contracts: {
        'industrial': {
            name: 'Industrial',
            locations: {
                'glina': {
                    name: 'Glina',
                    buildings: [
                        { name: '1.0 Conexiune la caseta linia 2', faza: 'Faza 1' },
                        { name: '1.1 Statie gratare rare linia 1', faza: 'Faza 1' },
                        { name: '1.2 Statie gratare rare linia 2', faza: 'Faza 2' },
                        { name: '2.1 Statie pompare de admisie linia 1', faza: 'Faza 1' },
                        { name: '2.2 Statie pompare de admisie linia 2', faza: 'Faza 2' },
                        { name: '3.1 Statie gratare dese linia 1', faza: 'Faza 1' },
                        { name: '3.2 Statie gratare dese linia 2', faza: 'Faza 2' },
                        { name: '4.1 Deznisipatoare/Statie de suflante/Distributie debit linia 1', faza: 'Faza 1' },
                        { name: '4.2 Deznisipatoare/Statie de suflante/Distributie debit linia 2', faza: 'Faza 2' },
                        { name: '4.3 Camin spuma de la deznisipatoare si separator de pitris linia 1', faza: 'Faza 2' },
                        { name: '4.4 Conexiune intre pretratarile noi si existente', faza: 'Faza 1' },
                        { name: '5 Camera distributie bazine de decantare primare', faza: 'Faza 1' },
                        { name: '6 Bazine de decantare primare', faza: 'Faza 1' },
                        { name: '6.1 Camera supernatant (pentru aria 6)', faza: 'Faza 2' },
                        { name: '7 Statie de pompare namol primar', faza: 'Faza 1' },
                        { name: '8 By-pass de urgenta', faza: 'Faza 1' },
                        { name: '9.1/2 Canal de distributie bazine de aerare linia 1&2', faza: 'Faza 2' },
                        { name: '9.3 Canal de distributie bazine de aerare linia 3', faza: 'Faza 1' },
                        { name: '10.1 Bazine de aerare linia 1', faza: 'Faza 2' },
                        { name: '10.2 Bazine de aerare linia 2', faza: 'Faza 2' },
                        { name: '10.3 Bazine de aerare linia 3', faza: 'Faza 1' },
                        { name: '11.1/2 Cladire suflante linia 1/2', faza: 'Faza 2' },
                        { name: '11.3 Cladire suflante linia 3', faza: 'Faza 1' },
                        { name: '12.1 Bazine de decantare secundare linia 1', faza: 'Faza 2' },
                        { name: '12.2 Bazine de decantare secundare linia 2', faza: 'Faza 1' },
                        { name: '12.3 Bazine de decantare secundare linia 3', faza: 'Faza 1' },
                        { name: '13.1 Statie de pompare N.A.R. si N.A.E. linia 1', faza: 'Faza 2' },
                        { name: '13.2 Statie de pompare N.A.R. si N.A.E. linia 2', faza: 'Faza 1' },
                        { name: '13.3 Statie de pompare N.A.R. si N.A.E. linia 3', faza: 'Faza 1' },
                        { name: '13.4 Camin debitmetru N.A.R./R.A.S', faza: 'Faza 1' },
                        { name: '14 Canal de descarcare si sistem de masurare debit', faza: 'Faza 1' },
                        { name: '15 Unitate recuperare energie (Turbine)', faza: 'Faza 1' },
                        { name: '16 Statie de pompare si tratare apa industriala', faza: 'Faza 1' },
                        { name: '16.1 Grup pentru presiune apa industriala', faza: 'Faza 1' },
                        { name: '17 Castel de apa/Statie de pompare', faza: 'Faza 1' },
                        { name: '18 Ingrosatoare namol primar', faza: 'Faza 1' },
                        { name: '19 Statie de pompare namol primar ingrosat', faza: 'Faza 1' },
                        { name: '20 Bazine tampon N.A.E.', faza: 'Faza 1' },
                        { name: '20.1 Statie de separare fibroase din namolul activin exces', faza: 'Faza 1' },
                        { name: '21 Statie de pompare N.A.E. (integrat in aria 22)', faza: 'Faza 1' },
                        { name: '22 Statie ingrosare N.A.E./ deshidratare namol fermentat', faza: 'Faza 1' },
                        { name: '22/1 Statie deshidratare avansata (centrifuge)', faza: 'Faza 1' },
                        { name: '23 Depozit namol deshidratat', faza: 'Faza 2' },
                        { name: '24 Bazine de amestec tampon namol primar si N.A.E. ingrosate', faza: 'Faza 1' },
                        { name: '24.1 Statie de separare fibroase din namolul primar ingrosat', faza: 'Faza 1' },
                        { name: '25 Digestoare/Turn de acces digestoare', faza: 'Faza 1' },
                        { name: '26 Statie incalzire si pompare/repompare namol in digestoare', faza: 'Faza 1' },
                        { name: '27 Statie de cogenerare', faza: 'Faza 1' },
                        { name: '28 Bazine tampon namol fermentat/ de urgenta', faza: 'Faza 1' },
                        { name: '29.1 Statie de pompare supernatant linia 1', faza: 'Faza 2' },
                        { name: '29.2/3 Statie de pompare supernatant linia 2/3', faza: 'Faza 2' },
                        { name: '30 Gazometre/Statie de desulfurizare/Facle', faza: 'Faza 1' },
                        { name: '31 Statie gratare apa pluviala', faza: 'Faza 1' },
                        { name: '33 Bazine de decantare apa pluviala', faza: 'Faza 1' },
                        { name: '34 Canal de descarcare apa pluviala decantata', faza: 'Faza 1' },
                        { name: '35 Statie de pompare namol primar din apa pluviala', faza: 'Faza 1' },
                        { name: '36 Camera de racord nr. 2 cu sistem de gratare rare', faza: 'Faza 1' },
                        { name: '37 Camera de racord nr. 3 cu sistem de gratare rare', faza: 'Faza 1' },
                        { name: '38/1 Statie de pompare apa uzata menajera din incinta', faza: 'Faza 1' },
                        { name: '38/2 Statie de pompare apa pluviala drenata din incinta', faza: 'Faza 1' },
                        { name: '39 Statie de pompare apa uzata (nefinalizata)', faza: 'Faza 1' },
                        { name: '40 Post transformare TRAFO', faza: 'Faza 1' },
                        { name: '40.1 Substatie electrica', faza: 'Faza 2' },
                        { name: '42 Bazin namol activ in exces (fostul BIO-P2)', faza: 'Faza 1' },
                        { name: '43 Statie chimicale', faza: 'Faza 1' },
                        { name: '44 Statie suflante pentru aria 28', faza: 'Faza 1' },
                        { name: '45 Deshidratare namol zona 1 (aria 22.1)', faza: 'Faza 1' },
                        { name: '46 Deshidratare namol zona 2', faza: 'Faza 2' },
                        { name: '48 Metanol', faza: 'Faza 2' },
                        { name: '49.1 Tratare miros de la pretratare', faza: 'Faza 2' },
                        { name: '49.2 Tratare miros namol', faza: 'Faza 2' },
                        { name: '49.3 Tratare miros aria 42', faza: 'Faza 1' },

                        { name: '56 Statie alimentare carburant', faza: 'Faza 1' },
                        { name: '57 Rezervor carburant', faza: 'Faza 1' },
                        { name: '58 Statie de preluare vidanje', faza: 'Faza 2' },
                        { name: '70 Amplasament incinerator de namol', faza: 'Faza 1' }

                    ]


                }
            },

            inspectionTypes: {
                "acoperisuri_terase": {
                    name: "Acoperisuri/terase",
                    checks: [
                        "Inspectie vizuala hidroizolatii",
                        "Mici reparatii si interventii remediere hidroizolatie",
                        "Inspectie parfuranzare si curatare jgheaburi si burlane",
                        "Verificare sistem fixare suporti existenti pe acoperisuri",
                        "Curatat manual si/sau mecanizat terase",
                        "Verificare fixare atice si lucrari de fixare locala si etanseitate",
                        "Inlaturare gheata si/sau zapada de pe acoperis in zone cu risc de prabusire si risc infiltratie (pe perioada rece cand exista pericol de accidentare)"
                    ],
                    frequency: "martie, septembrie"
                },
                "fatade": {
                    name: "Fatade",
                    checks: [
                        "Inspectie vizuala fatade (integral)",
                        "Lucrari de reparatie fisuri",
                        "Lucrari de vopsitorie fatade",
                        "Lucrari de igienizare fatade si inlaturare efecte coroziune",
                        "Verificare sisteme de fixare fatade (integral)",
                        "Hidro + termo izolate fatade"
                    ],
                    frequency: "aprilie, iunie, august, octombrie"
                },
                "socluri_si_trotuare_de_garda": {
                    name: "Socluri si trotuare de garda",
                    checks: [
                        "Inspectie vizuala trotuare de garda (integral)",
                        "Reparatii trotuare de garda",
                        "Lucrari de refacere etanseitate si reparatii fisuri locale"
                    ],
                    frequency: "aprilie, iunie, august, octombrie"
                },
                "usi_ferestre": {
                    name: "Usi si ferestre",
                    checks: [
                        "Verificari si reparatii sisteme inchidere usi (balamale, cremone, silduri, broasca, butuc, manere)",
                        "Verificari si reparatii feronerie ferestre PVC (sticla, feronerie, garnituri, manere)",
                        "Usi duble acces aluminiu",
                        "Usi metalice",
                        "Usi PVC",
                        "Usi Pal/MDF",
                        "Usi HPL-GS",
                        "Manere usi acces",
                        "Jaluzele (sistem sina, lamele, inchideri)",
                        "Reglaje, verificari si reparatii amortizoare de usa",
                        "Verificari si reparatii garnituri de usa"
                    ],
                    frequency: "februarie, mai, august, noiembrie"
                },
                "iluminat": {
                    name: "Iluminat",
                    checks: [
                        "Verificare corp de iluminat cu tub",
                        "Verificare corp de iluminat LED",
                        "Verificare corp emergenta",
                        "Verificare functionare corpuri de iluminat si inlocuire corpuri defecte",
                        "Verificare iluminat de siguranta"
                    ],
                    frequency: "lunar"
                },
                "pardoseli": {
                    name: "Pardoseli",
                    checks: [
                        "Intretinere si reparare gresie la GS",
                        "Intretinere si reparare mozaic holuri",
                        "Intretinere si reparare pardoseli rasina epoxidica",
                        "Intretinere si reparare pardoseli PVC",
                        "Intretinere si reparare plinta perimetrala"
                    ],
                    frequency: "ianuarie, martie, iulie, octombire"
                },
                "pereti_interiori_si_tavane": {
                    name: "Pereti interiori si tavane",
                    checks: [
                        "Remedieri infiltratii locale",
                        "Ghene si mascari coloane",
                        "Guri de vizitare",
                        "Plinte, paturi si canal cablu metalice si PVC",
                        "Intretinere si vopsitorii accesorii hidranti, panouri, balustrade",
                        "Reparatii tencuieli si glet",
                        "Zugraveala (amorsa si  lavabila)"
                    ],
                    frequency: "lunar"
                }
            },
        },


        'administrativ': {
            name: 'Administrativ',
            locations: {
                'glina': {
                    name: 'Glina',
                    buildings: [
                        { name: '41 Sediu paza/Remiza P.S.I./Remiza auto', faza: '' },
                        { name: '50 Cladire administrativa', faza: '' },
                        { name: '51 Cladire poarta', faza: '' },
                        { name: '52 Cladire vestiare', faza: '' },
                        { name: '54 Ateliere intretinere si reparatii', faza: '' },
                        { name: '55 Serviciu Mentenanta / Depozit Glina', faza: '' }
                    ]
                }
            },
            inspectionTypes: {
                "acoperisuri_terase": {
                    name: "Acoperisuri si terase",
                    checks: [
                        "Inspectie vizuala hidroizolatii",
                        "Mici reparatii si interventii remediere hidroizolatie",
                        "Inspectie parafrunzare si curatare jgheaburi si burlane",
                        "Verificare sistem fixare suporti existenti pe acoperisuri",
                        "Curatat manual si/sau mecanizat terase",
                        "Verificare fixare atice si lucrari de fixare locala si etanseitate",
                        "Inlaturare gheata si/sau zapada de pe acoperis in zone cu risc de prabusire si risc infiltratie (pe perioada rece cand exista pericol de accidentare)"
                    ],
                    frequency: "martie, septembrie"
                },
                "fatade": {
                    name: "Fatade",
                    checks: [
                        "Inspectie vizuala fatade (integral)",
                        "Lucrari de reparatie fisuri",
                        "Lucrari de vopsitorie fatade",
                        "Lucrari de igienizare fatade si inlaturare efecte coroziune",
                        "Verificare sisteme de fixare fatade (integral)",
                        "Hidro + termo izolatie fatade"
                    ],
                    frequency: "aprilie, iunie, august, octombrie"
                },
                "socluri_trotuare": {
                    name: "Socluri si trotuare de garda",
                    checks: [
                        "Inspectie vizuala trotuare de garda (integral)",
                        "Reparatii trotuare de garda",
                        "Lucrari de reface etanseitate si reparatii fisuri locale"
                    ],
                    frequency: "aprilie, iunie, august, octombrie"
                },
                "usi_ferestre": {
                    name: "Usi si ferestre",
                    checks: [
                        "Verificari si reparatii sisteme inchidere usi (balamale, cremoane, silduri, broasca, butuc, manere)",
                        "Verificari si reparatii feronerie ferestre PVC (sticla, feronerie, garnituri, manere)",
                        "Usi duble acces aluminiu",
                        "Usi metalice",
                        "Usi PVC",
                        "Usi Pal/MDF",
                        "Usi HPL-GS",
                        "Manere usi acces",
                        "Jaluzele (sistem sina, lamele, inchideri)",
                        "Reglaje, verificari si reparatii amortizoare de usa",
                        "Verificari si reparatii garnituri de usa"
                    ],
                    frequency: "februarie, mai, august, noiembrie"
                },
                "instalatii_sanitare": {
                    name: "Instalatii sanitare si accesorii",
                    checks: [
                        "Verificare elemente de inchidere si comanda instalatii sanitare (baterii, robineti)",
                        "Verificari instalatii canal",
                        "Mentenanta ventiloconvectoare si instalatii aferente",
                        "Verificare instalatie alimentare apa rece / calda (GS, chicineta, laborator)",
                        "Verificare accesorii (dispensere, oglinzi, suporti, perii)",
                        "Verificare spalator inox",
                        "Verificare pisoare",
                        "Verificare baterii actionare mecanica/fotocelula",
                        "Verificare vase WC standard / Back To Wall",
                        "Verificare bazine ingropate / semi inaltime",
                        "Verificare ansamblu ventilatie laboratoare",
                        "Verificare Sifoane pardoseli",
                        "Verificare baterii dusuri",
                        "Inspectii video si desfundare cu jet de apa",
                        "Verificari robineti lavoare"
                    ],
                    frequency: "lunar"
                },
                "instalatii_electrice": {
                    name: "Instalatii electrice interioare",
                    checks: [
                        "Verificare impamantare tablouri electrice interioare",
                        "Verificare Intrerupatoare bipolare",
                        "Verificare tablou electric metalic",
                        "Verificare tablou electric fibra/plastic",
                        "Verificare priza termocupla 380V",
                        "Verificare intrerupator automat cu diferential",
                        "Verificare intrerupator automat simplu",
                        "Verificare Intrerupator simplu iluminat",
                        "Verificare intrerupator dublu iluminat",
                        "Verificare prize simple",
                        "Verificare prize duble",
                        "Verificare corp de iluminat cu tub",
                        "Verificare corp de iluminat cu LED",
                        "Verificare corp emergenta",
                        "Verificare priza dubla internet",
                        "Verificare Rack IT",
                        "Verificare tablou AAR",
                        "Verificare instalatii de iluminat de evacuare",
                        "Verificare functionare corpuri de iluminat si inlocuire corpuri defecte",
                        "Verificare functionare prize si inlocuire prize defecte"
                    ],
                    frequency: "lunar"
                },
                "pardoseli": {
                    name: "Pardoseli",
                    checks: [
                        "Intretinere si reparare gresie la GS",
                        "Intretinere si reparare mozaic holuri",
                        "Intretinere si reparare pardoseli rasina epoxidica",
                        "Intretinere si reparare pardoseli PVC",
                        "Intretinere si reparare plinta perimetrala"
                    ],
                    frequency: "ianuarie, martie, iulie, octombrie"
                },
                "pereti_tavane": {
                    name: "Pereti interiori si tavane",
                    checks: [
                        "Tavan casetat",
                        "Remedieri infiltratii locale",
                        "Ghene si mascari coloane",
                        "Guri de vizitare",
                        "Faianta",
                        "Plinte, paturi si canal cablu metalice si PVC",
                        "Intretinere si vopsitorii accesorii hidranti, panouri, balustrade",
                        "Reparatii tencuieli si glet",
                        "Zugraveala (amorsa si lavabila)"
                    ],
                    frequency: "lunar"
                }
            },
        },
        'caseta': {
            name: 'Caseta',
            locations: {
                'glina': {
                    name: 'Glina',
                    buildings: [
                        {
                            name: 'Camera de racord 1',
                            inspections: {
                                'constructii_din_beton-pasarela_de_trecere_elementele_de_beton_aferente_golurilor_tehnologice_de_la_Camera_de_Racord_1': {
                                    name: 'Constructii din beton - pasarela de trecere, elementele de beton aferente golurilor tehnologice de la Camera de Racord 1',
                                    checks: [
                                        {name: 'Inspectie vizuala a elementelor constructive', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Servicii de reparatii fisuri locale de suprafata', frequency: 'apr, oct'},
                                        {name: 'Servicii de refacere etanseitate rosturi de suprafata, respectiv tratare si sigilare rosturi de dilatare pentru marirea durabilitatii in timp', frequency: 'apr, oct'},
                                        {name: 'Reparatii tencuieli', frequency: 'apr, oct'},
                                        {name: 'Aplicare strat bitum pentru refacere hidroizolatie', frequency: 'aug'},
                                    ]
                                },
                                'elemente_metalice_zona_Camera_de_Racord_1': {
                                    name: 'Elemente metalice - zona Camera de Racord 1',
                                    checks: [
                                        {name: 'Inspectie vizuala a elementelor metalice', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Verificare suduri', frequency: 'aug'},
                                        {name: 'Curătare, grunduire si vopsire Inspectie vizuala a elementelor constructive', frequency: 'sept'},
                                    ]
                                }
                            }
                        },
                        {
                            name: 'Camera de racord 2',
                            inspections: {
                                'constructii_din_beton_pasarela_de_trecere_elementele_de_beton_aferente_golurilor_tehnologice_elementele_de_sustinere_zona_laterala_de_descarcare_amenajata_spre_raul_Dambovita_de_la_Camera_de_Racord_2': {
                                    name: 'Constructii din beton - pasarela de trecere, elementele de beton aferente golurilor tehnologice, elemente de sustinere, zona laterala de descarcare amenajata spre raul Dambovita de la Camera de Racord 2',
                                    checks: [
                                        {name: 'Inspectie vizuala a elementelor constructive', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Servicii de reparatii fisuri locale de suprafata', frequency: 'apr, oct'},
                                        {name: 'Servicii de refacere etanseitate rosturi de suprafata, respectiv tratare si sigilare rosturi de dilatare pentru marirea durabilitatii in timp', frequency: 'apr, oct'},
                                        {name: 'Reparatii tencuieli', frequency: 'apr, oct'},
                                        {name: 'Aplicare strat bitum pentru refacere hidroizolatie', frequency: 'aug'},
                                    ]
                                },
                                'elemente_metalice_zona_Camera_de_Racord_2': {
                                    name: 'Elemente metalice - zona Camera de Racord 2',
                                    checks: [
                                        {name: 'Inspectie vizuala a elementelor metalice', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Verificare suduri', frequency: 'aug'},
                                        {name: 'Curătare, grunduire si vopsire Inspectie vizuala a elementelor constructive', frequency: 'sept'},
                                    ]
                                },
                                'echipamnete_hidromecanice_cu_manevrare_locala_sau_la_distanta_zona_Camera_de_Racord_2': {
                                    name: 'Echipamnete hidromecanice - cu manevrare locala sau la distanta  - zona Camera de Racord 2',
                                    checks: [
                                        {name: 'Inspectie vizuala', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Verificare echipamente culisante pe calea de rulare existenta', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Gresarea elementelor de contact', frequency: 'apr, oct'},
                                        {name: 'Degivrarea elementelor de contact', frequency: 'ian, feb, mar, nov, dec'},
                                    ]
                                },
                                'constructii_din_beton_casetele_de_legatura_intre_CR2_si_CR3': {
                                    name: 'Constructii din beton - casetele de legatura intre CR2 si CR3',
                                    checks: [
                                        {name: 'Inspectie vizuala a elementelor constructive', frequency: 'ian, dec'},
                                        {name: 'Servicii de reparatii fisuri locale de suprafata', frequency: 'mar'},
                                        {name: 'Servicii de refacere etanseitate rosturi de suprafata, respectiv tratare si sigilare rosturi de dilatare pentru marirea durabilitatii in timp', frequency: 'mar'},
                                        {name: 'Reparatii tencuieli', frequency: 'mar'},
                                        {name: 'Aplicare strat bitum pentru refacere hidroizolatie', frequency: 'mar'},
                                    ]
                                }
                            }
                        },
                        {
                            name: 'Camera de racord 3',
                            inspections: {
                                'constructii_din_beton_casetele_de_legatura_intre_CR2_si_CR3': {
                                    name: 'Constructii din beton - casetele de legatura intre CR2 si CR3',
                                    checks: [
                                        {name: 'Inspectie vizuala a elementelor constructive', frequency: 'ian, dec'},
                                        {name: 'Servicii de reparatii fisuri locale de suprafata', frequency: 'mar'},
                                        {name: 'Servicii de refacere etanseitate rosturi de suprafata, respectiv tratare si sigilare rosturi de dilatare pentru marirea durabilitatii in timp', frequency: 'mar'},
                                        {name: 'Reparatii tencuieli', frequency: 'mar'},
                                        {name: 'Aplicare strat bitum pentru refacere hidroizolatie', frequency: 'mar'},
                                    ]
                                },
                                'constructii_din_beton_pasarela_de_trecere_elementele_de_sustinere_zona_laterala_de_descarcare_amenajata_spre_raul_Dambovita_de_la_Camera_de_Racord_2': {
                                    name: 'Constructii din beton - pasarela de trecere, elementele de sustinere - Camera de Racord 3',
                                    checks: [
                                        {name: 'Inspectie vizuala a elementelor constructive', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Servicii de reparatii fisuri locale de suprafata', frequency: 'apr, oct'},
                                        {name: 'Servicii de refacere etanseitate rosturi de suprafata, respectiv tratare si sigilare rosturi de dilatare pentru marirea durabilitatii in timp', frequency: 'apr, oct'},
                                        {name: 'Reparatii tencuieli', frequency: 'apr, oct'},
                                        {name: 'Aplicare strat bitum pentru refacere hidroizolatie', frequency: 'aug'},
                                    ]
                                },
                                'constructii_din_beton_elementele_de_beton_aferente_golurilor_tehnologice_zona_laterala_de_descarcare_amenajata_spre_raul_Dambovita_de_la_Camera_de_Racord_3': {
                                    name: 'Constructii din beton -  elementele de beton aferente golurilor tehnologice - zona laterala de descarcare amenajata spre raul Dambovita de la Camera de Racord 3',
                                    checks: [
                                        {name: 'Inspectie vizuala a elementelor constructive', frequency: 'ian, mar, dec'},
                                        {name: 'Servicii de reparatii fisuri locale de suprafata', frequency: 'mar'},
                                        {name: 'Servicii de refacere etanseitate rosturi de suprafata, respectiv tratare si sigilare rosturi de dilatare pentru marirea durabilitatii in timp', frequency: 'mar'},
                                        {name: 'Reparatii tencuieli', frequency: 'mar'},
                                        {name: 'Aplicare strat bitum pentru refacere hidroizolatie', frequency: 'mar'},
                                    ]
                                },
                                'elemente_metalice_zona_Camera_de_Racord_3': {
                                    name: 'Elemente metalice - zona Camera de Racord 3',
                                    checks: [
                                        {name: 'Inspectie vizuala a elementelor metalice', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Verificare suduri', frequency: 'aug'},
                                        {name: 'Curătare, grunduire si vopsire Inspectie vizuala a elementelor constructive', frequency: 'sept'},
                                    ]
                                },
                                'echipamnete_hidromecanice_cu_manevrare_locala_sau_la_distanta_zona_Camera_de_Racord_3': {
                                    name: 'Echipamnete hidromecanice - cu manevrare locala sau la distanta  - zona Camera de Racord 3',
                                    checks: [
                                        {name: 'Inspectie vizuala', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Verificare echipamente culisante pe calea de rulare existenta', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Gresarea elementelor de contact', frequency: 'apr, oct'},
                                        {name: 'Degivrarea elementelor de contact', frequency: 'ian, feb, mar, nov, dec'},
                                    ]
                                }
                            }
                        },
                        {
                            name: 'Camera de racord A4',
                            inspections: {
                                'Elemente metalice - zona Descarcator Camera A4': {
                                    name: 'Elemente metalice - zona Descarcator Camera A4',
                                    checks: [
                                        {name: 'Inspectie vizuala a elementelor metalice', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Verificare suduri', frequency: 'aug'},
                                        {name: 'Curătare, grunduire si vopsire Inspectie vizuala a elementelor constructive', frequency: 'sept'},
                                    ]
                                },
                                'echipamnete_hidromecanice_cu_manevrare_locala_sau_la_distanta_zona_Descarcator_Camera_A4': {
                                    name: 'Echipamnete hidromecanice - cu manevrare locala sau la distanta - zona Descarcator Camera A4',
                                    checks: [
                                        {name: 'Inspectie vizuala', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Verificare echipamente culisante pe calea de rulare existenta', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Gresarea elementelor de contact', frequency: 'apr, oct'},
                                        {name: 'Degivrarea elementelor de contact', frequency: 'ian, feb, mar, nov, dec'},
                                    ]
                                }
                            }
                        },
                        {
                            name: 'Capcana de pietris',
                            inspections: {
                                'constructii_din_beton_camin_de_receptie_si_elementele_de_beton_aferente_golurilor_tehnologice_de_la_Capcana_de_Pietris': {
                                    name: 'Constructii din beton - camin de receptie si elementele de beton aferente golurilor tehnologice de la Capcana de Pietris',
                                    checks: [
                                        {name: 'Inspectie vizuala a elementelor constructive', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Servicii de reparatii fisuri locale de suprafata', frequency: 'apr, oct'},
                                        {name: 'Servicii de refacere etanseitate rosturi de suprafata, respectiv tratare si sigilare rosturi de dilatare pentru marirea durabilitatii in timp', frequency: 'apr, oct'},
                                        {name: 'Reparatii tencuieli', frequency: 'apr, oct'},
                                        {name: 'Aplicare strat bitum pentru refacere hidroizolatie', frequency: 'aug'},
                                    ]
                                },
                                'elemente_metalice_zona_Capcana_de_Pietris': {
                                    name: 'Elemente metalice - zona Capcana de Pietris',
                                    checks: [
                                        {name: 'Inspectie vizuala a elementelor metalice', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Verificare suduri', frequency: 'aug'},
                                        {name: 'Curătare, grunduire si vopsire Inspectie vizuala a elementelor constructive', frequency: 'sept'},
                                    ]
                                },
                                'echipamnete_hidromecanice_cu_manevrare_locala_sau_la_distanta_zona_Capcana_de_Pietris': {
                                    name: 'Echipamnete hidromecanice - cu manevrare locala sau la distanta - zona Capcana de Pietris',
                                    checks: [
                                        {name: 'Inspectie vizuala', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Verificare echipamente culisante pe calea de rulare existenta', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Gresarea elementelor de contact', frequency: 'apr, oct'},
                                        {name: 'Degivrarea elementelor de contact', frequency: 'ian, feb, mar, nov, dec'},
                                    ]
                                }
                            }
                        },
                        {

                            name: 'Canal de legatura',
                            inspections: {
                                'constructii_din_beton_pasarele_de_trecere_trepte_elementele_de_beton_aferente_golurilor_tehnologice_tronsoanele_de_descarcare_amenajate_spre_raul_Dambovita_aferente_Canalului_de_legatura': {
                                    name: 'Constructii din beton - pasarele de trecere, trepte, elementele de beton aferente golurilor tehnologice, tronsoanele de descarcare amenajate spre raul Dambovita aferente Canalului de legatura',
                                    checks: [
                                        {name: 'Inspectie vizuala a elementelor constructive', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Servicii de reparatii fisuri locale de suprafata', frequency: 'apr, oct'},
                                        {name: 'Servicii de refacere etanseitate rosturi de suprafata, respectiv tratare si sigilare rosturi de dilatare pentru marirea durabilitatii in timp', frequency: 'apr, oct'},
                                        {name: 'Reparatii tencuieli', frequency: 'apr, oct'},
                                        {name: 'Aplicare strat bitum pentru refacere hidroizolatie', frequency: 'aug'},
                                    ]
                                },
                                'elemente_metalice_zona_Canal_de_legatura': {
                                    name: 'Elemente metalice - zona Canal de legatura',
                                    checks: [
                                        {name: 'Inspectie vizuala a elementelor metalice', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Verificare suduri', frequency: 'aug'},
                                        {name: 'Curătare, grunduire si vopsire Inspectie vizuala a elementelor constructive', frequency: 'sept'},
                                    ]
                                },
                                'echipamnete_hidromecanice_cu_manevrare_locala_sau_la_distanta_zona_Canal_de_legatura': {
                                    name: 'Echipamnete hidromecanice - cu manevrare locala sau la distanta - zona Canal de legatura',
                                    checks: [
                                        {name: 'Inspectie vizuala', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Verificare echipamente culisante pe calea de rulare existenta', frequency: 'mar, iun, sept, dec'},
                                        {name: 'Gresarea elementelor de contact', frequency: 'apr, oct'},
                                        {name: 'Degivrarea elementelor de contact', frequency: 'ian, feb, mar, nov, dec'},
                                    ]
                                }
                            }
                        }
                    ]
                }
            }
        }
    }
};

// Configurare n8n Webhook
const N8N_WEBHOOK_URL = 'https://daminatech.app.n8n.cloud/webhook/aaa83a86-bf6f-4383-b686-20b7b82b381f'; // Înlocuiește cu URL-ul webhook de la n8n

// Funcție pentru trimiterea datelor către n8n webhook
async function submitToN8N(formData) {
    try {
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            body: formData // Browser will set Content-Type to multipart/form-data
        });

        if (!response.ok) {
            throw new Error(`Eroare la trimiterea datelor: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('Date trimise cu succes:', result);
        return result;
    } catch (error) {
        console.error('Eroare la trimiterea datelor:', error);
        throw error;
    }
}

// Funcție pentru obținerea verificărilor selectate
function getSelectedChecks() {
    const checks = [];
    document.querySelectorAll('.form-check-input:checked').forEach(checkbox => {
        checks.push(checkbox.nextElementSibling.textContent.trim());
    });
    return checks.join(', ');
}

// Functie pentru afisarea verificarilor specifice unui tip de inspectie
function showInspectionChecks(contractId, inspectionTypeId) {
    const checksContainer = document.querySelector('#generalChecksSection .checks-container');
    if (!checksContainer) return;

    checksContainer.innerHTML = '';

    const contract = data.contracts[contractId];
    if (!contract || !contract.inspectionTypes) {
        document.getElementById('generalChecksSection').style.display = 'none';
        return;
    }

    const inspectionType = contract.inspectionTypes[inspectionTypeId];
    if (!inspectionType) {
        document.getElementById('generalChecksSection').style.display = 'none';
        return;
    }

    // Adaugam verificarile
    inspectionType.checks.forEach(check => {
        const checkDiv = document.createElement('div');
        checkDiv.className = 'form-check';
        checkDiv.innerHTML = `
            <input class="form-check-input" type="checkbox" name="generalChecks" id="check_${check.replace(/\s+/g, '_')}" value="${check}">
            <label class="form-check-label" for="check_${check.replace(/\s+/g, '_')}">
                ${check}
            </label>
        `;
        checksContainer.appendChild(checkDiv);
    });

    document.getElementById('generalChecksSection').style.display = 'block';
}

function initForm() {
    const form = document.getElementById('constructionForm');
    if (!form) {
        console.error('Formularul principal nu a fost găsit.');
        return;
    }

    // --- Get all form elements ---
    const contractSelect = document.getElementById('contractSelect');
    const locationSection = document.getElementById('locationSection');
    const locationSelect = document.getElementById('locationSelect');
    const buildingSection = document.getElementById('buildingSection');
    const buildingSelect = document.getElementById('buildingSelect');
    const zoneInputSection = document.getElementById('zoneInputSection');
    const zoneInput = document.getElementById('zoneInput');
    const activityRadios = document.querySelectorAll('input[name="tipActivitate"]');
    const inspectionDetailsSection = document.getElementById('inspectionDetailsSection');
    const interventionDetailsSection = document.getElementById('interventionDetailsSection');
    const inspectionTypeSection = document.getElementById('inspectionTypeSection');
    const inspectionTypeSelect = document.getElementById('inspectionTypeSelect');
    const generalChecksSection = document.getElementById('generalChecksSection');
    const checksContainer = document.getElementById('checksContainer');
    const inspectionProblemsSection = document.getElementById('inspectionProblemsSection');
    const problemRadios = document.querySelectorAll('input[name="probleme"]');
    const problemsDetails = document.getElementById('problemsDetails');
    const problemDescription = document.getElementById('problemDescription');
    const technicalSolution = document.getElementById('technicalSolution');
    const problemMaterials = document.getElementById('problemMaterials');
    const workCompletedRadios = document.querySelectorAll('input[name="lucrareFinalizata"]');
    const photoDropZone = document.getElementById('photo-drop-zone');
    const photoUpload = document.getElementById('photoUpload');
    const photoPreview = document.getElementById('photo-preview');
    const submitButton = document.getElementById('submitBtn');

    // --- Helper functions for resetting sections ---
    const resetSection = (section, ...fields) => {
        if (section) section.style.display = 'none';
        fields.forEach(field => {
            if (field) {
                if (field.tagName === 'SELECT') field.innerHTML = '<option value="" selected disabled>Alegeți...</option>';
                if (field.tagName === 'INPUT' || field.tagName === 'TEXTAREA') field.value = '';
                if (field.id === 'checksContainer') field.innerHTML = '';
            }
        });
    };

    // --- Event Listeners ---

    // 1. Contract Change
    contractSelect.addEventListener('change', () => {
        resetSection(buildingSection, buildingSelect);
        resetSection(zoneInputSection, zoneInput);

        const contractId = contractSelect.value;
        const contract = data.contracts[contractId];
        locationSelect.innerHTML = '<option value="" selected disabled>Alegeți...</option>'; // Reset locations

        if (contract && contract.locations) {
            Object.entries(contract.locations).forEach(([id, loc]) => {
                locationSelect.innerHTML += `<option value="${id}">${loc.name}</option>`;
            });
            locationSection.style.display = 'block';
        } else {
            locationSection.style.display = 'none';
        }
    });

    // 2. Location Change
    locationSelect.addEventListener('change', () => {
        resetSection(zoneInputSection, zoneInput);
        const contractId = contractSelect.value;
        const locationId = locationSelect.value;
        const contract = data.contracts[contractId];
        buildingSelect.innerHTML = '<option value="" selected disabled>Alegeți...</option>'; // Reset buildings

        if (contract && contract.locations[locationId] && contract.locations[locationId].buildings) {
            contract.locations[locationId].buildings.forEach(building => {
                buildingSelect.innerHTML += `<option value="${building.name}">${building.name}</option>`;
            });
            buildingSection.style.display = 'block';
        } else {
            buildingSection.style.display = 'none';
        }
    });

    // 3. Building Change
    buildingSelect.addEventListener('change', () => {
        const contractId = contractSelect.value;
        const locationId = locationSelect.value;
        const buildingName = buildingSelect.value;
        
        if (!buildingName) return;
        
        // Show zone input for non-caseta contracts
        if (contractId !== 'caseta') {
            zoneInputSection.style.display = 'block';
            return;
        }
        
        // For caseta contract, show inspection types specific to the selected building
        const contract = data.contracts[contractId];
        if (!contract || !contract.locations[locationId]) return;
        
        // Find the selected building
        const building = contract.locations[locationId].buildings.find(b => b.name === buildingName);
        if (!building || !building.inspections) return;
        
        // Populate inspection types from the building's inspections
        inspectionTypeSection.style.display = 'block';
        inspectionTypeSelect.innerHTML = '<option value="" selected disabled>Alegeți...</option>';
        
        Object.entries(building.inspections).forEach(([id, inspection]) => {
            inspectionTypeSelect.innerHTML += `<option value="${id}">${inspection.name}</option>`;
        });
        
        // Show inspection details section if not already shown
        inspectionDetailsSection.style.display = 'block';
        inspectionProblemsSection.style.display = 'block';
    });

    // 4. Activity Type Change (Inspection/Intervention)
    activityRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            const activityType = radio.value;
            if (activityType === 'inspectie') {
                inspectionDetailsSection.style.display = 'block';
                inspectionProblemsSection.style.display = 'block';
                interventionDetailsSection.style.display = 'none';
                const contractId = contractSelect.value;
                const contract = data.contracts[contractId];
                if (contract && contract.inspectionTypes) {
                    inspectionTypeSection.style.display = 'block';
                    inspectionTypeSelect.innerHTML = '<option value="" selected disabled>Alegeți...</option>';
                    Object.entries(contract.inspectionTypes).forEach(([id, type]) => {
                        inspectionTypeSelect.innerHTML += `<option value="${id}">${type.name}</option>`;
                    });
                }
            } else if (activityType === 'interventie') {
                inspectionDetailsSection.style.display = 'none';
                inspectionProblemsSection.style.display = 'none';
                interventionDetailsSection.style.display = 'block';
            }
            // Reset sections below
            resetSection(generalChecksSection, checksContainer);
            resetSection(problemsDetails, problemDescription, technicalSolution, problemMaterials);
            problemRadios.forEach(r => r.checked = false);
            workCompletedRadios.forEach(r => r.checked = false);
        });
    });

    // 5. Inspection Type Change
    inspectionTypeSelect.addEventListener('change', () => {
        const contractId = contractSelect.value;
        const locationId = locationSelect.value;
        const buildingName = buildingSelect.value;
        const inspectionTypeId = inspectionTypeSelect.value;
        
        checksContainer.innerHTML = ''; // Reset checks
        generalChecksSection.style.display = 'none';
        
        if (!contractId || !inspectionTypeId) {
            return;
        }
        
        if (contractId === 'caseta') {
            // Handle caseta contract with building-specific inspections
            const contract = data.contracts[contractId];
            if (!contract || !contract.locations[locationId]) return;
            
            // Find the selected building
            const building = contract.locations[locationId].buildings.find(b => b.name === buildingName);
            if (!building || !building.inspections) return;
            
            // Get the selected inspection
            const inspection = building.inspections[inspectionTypeId];
            if (!inspection || !inspection.checks) return;

            // Add checkboxes for each check in the inspection with frequencies
            inspection.checks.forEach((check, index) => {
                const checkObj = typeof check === 'string' ? { name: check, frequency: 'lunar' } : check;
                const checkId = `check_${inspectionTypeId}_${index}`;
                checksContainer.innerHTML += `
                    <div class="form-check mb-2">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <input class="form-check-input" type="checkbox" name="verificari" 
                                       id="${checkId}" value="${checkObj.name.replace(/"/g, '&quot;')}">
                                <label class="form-check-label" for="${checkId}">
                                    ${checkObj.name}
                                </label>
                            </div>
                            <span class="badge bg-secondary">${checkObj.frequency}</span>
                        </div>
                    </div>`;
            });
            generalChecksSection.style.display = 'block';
        } else {
            // Handle regular contracts with global inspection types
            const contract = data.contracts[contractId];
            if (!contract || !contract.inspectionTypes) return;
            
            const inspectionType = contract.inspectionTypes[inspectionTypeId];
            if (!inspectionType || !inspectionType.checks) return;

            // Add checkboxes for each check with frequencies
            inspectionType.checks.forEach((check, index) => {
                const checkObj = typeof check === 'string' ? { name: check, frequency: 'lunar' } : check;
                const checkId = `check_${inspectionTypeId}_${index}`;
                checksContainer.innerHTML += `
                    <div class="form-check mb-2">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <input class="form-check-input" type="checkbox" name="verificari" 
                                       id="${checkId}" value="${checkObj.name.replace(/"/g, '&quot;')}">
                                <label class="form-check-label" for="${checkId}">
                                    ${checkObj.name}
                                </label>
                            </div>
                            <span class="badge bg-secondary">${checkObj.frequency}</span>
                        </div>
                    </div>`;
            });
            generalChecksSection.style.display = 'block';
        }
    });

    // 6. Identified Problems Change (Yes/No)
    problemRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'da' && radio.checked) {
                problemsDetails.style.display = 'block';
                problemDescription.required = true;
                technicalSolution.required = true;
            } else {
                problemsDetails.style.display = 'none';
                problemDescription.required = false;
                technicalSolution.required = false;
            }
        });
    });

    // --- Photo Upload Logic ---
    function handleFiles(files) {
        // Only keep the first 6 files if more are selected
        const filesToProcess = Array.from(files).slice(0, 6);
        
        // Clear existing previews if we're replacing them
        if (filesToProcess.length > 0) {
            photoPreview.innerHTML = '';
        }
        
        filesToProcess.forEach((file, index) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const container = document.createElement('div');
                container.className = 'preview-image-container';
                
                const img = document.createElement('img');
                img.src = e.target.result;
                img.className = 'preview-image';
                img.alt = `Preview ${index + 1}`;
                
                const removeBtn = document.createElement('button');
                removeBtn.className = 'remove-image';
                removeBtn.innerHTML = '×';
                removeBtn.title = 'Remove image';
                removeBtn.onclick = (e) => {
                    e.stopPropagation();
                    container.remove();
                };
                
                const fileInfo = document.createElement('div');
                fileInfo.className = 'file-info';
                fileInfo.textContent = `${file.name} (${formatFileSize(file.size)})`;
                
                container.appendChild(img);
                container.appendChild(removeBtn);
                container.appendChild(fileInfo);
                photoPreview.appendChild(container);
            };
            reader.readAsDataURL(file);
        });
    }

    // Helper function to format file size
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Set up drag and drop
    photoDropZone.addEventListener('dragleave', () => {
        photoDropZone.classList.remove('drag-over');
    });

    photoDropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        photoDropZone.classList.remove('drag-over');
        if (e.dataTransfer.files.length > 0) {
            photoUpload.files = e.dataTransfer.files;
            handleFiles(photoUpload.files);
        }
    });

    // Handle file input change
    photoUpload.addEventListener('change', () => {
        if (photoUpload.files.length > 0) {
            handleFiles(photoUpload.files);
        }
    });

    // --- Form Submission ---
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Se trimite...';

        try {
            const formData = new FormData(form);
            const photoFiles = Array.from(photoUpload.files);
            
            // Ensure lucrareFinalizata is always included in form data
            if (!formData.has('lucrareFinalizata')) {
                formData.append('lucrareFinalizata', '');
            }

            if (photoFiles.length < 3 || photoFiles.length > 6) {
                alert('Trebuie să încărcați între 3 și 6 fotografii.');
                throw new Error('Incorrect number of photos');
            }

            // Clear any existing file entries and append files with the correct field name
            formData.delete('photoUpload'); // Remove any existing entries

            // Append each file with the same field name 'photoUpload'
            photoFiles.forEach(file => {
                formData.append('photoUpload', file);
            });

            // Debug: Log form data keys
            console.log('FormData entries:');
            for (let pair of formData.entries()) {
                console.log(pair[0], pair[1]);
            }
            
            // Add photo URLs to form data for Airtable
            const photoUrls = Array.from(photoFiles).map(file => ({
                url: URL.createObjectURL(file),
                name: file.name,
                type: file.type
            }));
            
            // Add as JSON string to be parsed by n8n
            formData.append('photoInfo', JSON.stringify(photoUrls));

            // Add frequency and phase data
            const contractId = formData.get('contract');
            const locationId = formData.get('locatie');
            const buildingName = formData.get('cladire');
            const inspectionTypeKey = formData.get('tipInspectie');
            const contract = data.contracts[contractId];
            
            let fazaValue = '';  // Default empty value for faza
            
            if (!contract) {
                console.error('Contract not found:', contractId);
                return;
            }

            // Handle inspection type and frequency based on contract type
            if (contractId === 'caseta') {
                // For caseta contract, get inspection details from the building's inspections
                if (locationId && contract.locations[locationId] && buildingName) {
                    const building = contract.locations[locationId].buildings.find(b => b.name === buildingName);
                    if (building && building.inspections && inspectionTypeKey && building.inspections[inspectionTypeKey]) {
                        const inspection = building.inspections[inspectionTypeKey];
                        formData.set('tipInspectie', inspection.name);
                        formData.append('frecventa', inspection.frequency || 'lunar'); // Default to 'lunar' if not specified
                    }
                    
                    if (building && building.faza) {
                        formData.append('faza', building.faza);
                    }
                }
            } else {
                // For other contracts, use the global inspectionTypes
                if (inspectionTypeKey && contract.inspectionTypes && contract.inspectionTypes[inspectionTypeKey]) {
                    const inspectionConfig = contract.inspectionTypes[inspectionTypeKey];
                    formData.set('tipInspectie', inspectionConfig.name);
                    formData.append('frecventa', inspectionConfig.frequency || 'lunar');
                }
                
                // Add phase information for non-caseta contracts if available
                if (locationId && contract.locations[locationId] && buildingName) {
                    const building = contract.locations[locationId].buildings.find(b => b.name === buildingName);
                    if (building && building.faza) {
                        formData.append('faza', building.faza);
                    }
                }
            }

            // Set the final faza value before submission
            formData.set('faza', fazaValue);
            
            await submitToN8N(formData);
            alert('Raport trimis cu succes!');
            form.reset();
            // Manually reset UI state after successful submission
            document.querySelectorAll('.hidden-section').forEach(el => el.style.display = 'none');
            photoPreview.innerHTML = '';

        } catch (error) {
            console.error('Submission failed:', error);
            if (error.message !== 'Incorrect number of photos') {
                alert('Eroare la trimiterea formularului. Verificați consola pentru detalii.');
            }
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });

    // --- Initial State ---
    Object.entries(data.contracts).forEach(([id, contract]) => {
        contractSelect.innerHTML += `<option value="${id}">${contract.name}</option>`;
    });

}

document.addEventListener('DOMContentLoaded', initForm);
